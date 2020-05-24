import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { DataTable, SortDirections } from "../components/datatable/DataTable";

import { useStyles } from "./styles";

const ALL_DRIVERS = gql`
  query AllDrivers($offset: Int, $limit: Int, $sortBy: [SortDriversBy!]) {
    allDrivers(skip: $offset, first: $limit, sortBy: $sortBy) {
      surname
      forename
      url
      driverId
      nationality
      dob
    }
  }
`;

const ALL_DRIVERS_META = gql`
  {
    _allDriversMeta {
      count
    }
  }
`;

const Drivers: React.FC = () => {
  const meta = useQuery(ALL_DRIVERS_META);
  const [pageSize, setPageSize] = useState(40);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState("driverId");
  const [sortDir, setSortDir] = useState("ASC");

  const { loading, error, data, fetchMore } = useQuery(ALL_DRIVERS, {
    variables: {
      offset,
      limit: pageSize,
      sortBy: `${sort}_${sortDir}`,
    },
  });

  const handleDataSizeChange = (size: number) => {
    setOffset(0);
    setPageSize(size);

    fetchMore({
      variables: {
        offset: 0,
        limit: size,
        sortBy: `${sort}_${sortDir}`,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allDrivers: [...prev.allDrivers, ...fetchMoreResult.allDrivers],
        });
      },
    });
  };

  const handleDataOffsetChange = (page: number) => {
    setOffset(page * pageSize);

    fetchMore({
      variables: {
        offset: page * pageSize,
        sortBy: `${sort}_${sortDir}`,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allDrivers: [...prev.allDrivers, ...fetchMoreResult.allDrivers],
        });
      },
    });
  };

  const handleSort = (sortId: string, sortOrder: SortDirections) => {
    setOffset(0);
    setSort(sortId);
    setSortDir(sortOrder.toUpperCase());

    fetchMore({
      variables: {
        offset: 0,
        sortBy: `${sortId}_${sortOrder.toUpperCase()}`,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allDrivers: [...fetchMoreResult.allDrivers],
        });
      },
    });
  };

  const getData = () => {
    if (data && data.allDrivers) {
      return data;
    }

    return {
      allDrivers: [],
    };
  };

  const getMeta = () => {
    if (meta && meta.data) {
      return meta.data._allDriversMeta;
    }

    return {
      count: 0,
    };
  };

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <DataTable
            offset={offset}
            rowsPerPage={pageSize}
            handleDataSizeChange={handleDataSizeChange}
            handleDataOffsetChange={handleDataOffsetChange}
            handleSort={handleSort}
            size={getMeta().count}
            rows={getData().allDrivers}
            headers={[
              { label: "Firstname", match: "forename" },
              { label: "Surname", match: "surname" },
              { label: "DOB", match: "dob" },
              { label: "Nationality", match: "nationality" },
            ]}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Drivers;
