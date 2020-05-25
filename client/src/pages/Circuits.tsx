import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { DataTable, SortDirections } from "../components/datatable/DataTable";

import { useStyles } from "./styles";

const ALL_CIRCUITS = gql`
  query AllCircuits($offset: Int, $limit: Int, $sortBy: [SortCircuitsBy!]) {
    allCircuits(skip: $offset, first: $limit, sortBy: $sortBy) {
      name
      url
      circuitId
      location
      country
    }
  }
`;

const ALL_CIRCUITS_META = gql`
  {
    _allCircuitsMeta {
      count
    }
  }
`;

const Circuits: React.FC = () => {
  const meta = useQuery(ALL_CIRCUITS_META);
  const [pageSize, setPageSize] = useState(40);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState("circuitId");
  const [sortDir, setSortDir] = useState("ASC");

  const { loading, error, data, fetchMore } = useQuery(ALL_CIRCUITS, {
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
          allCircuits: [...fetchMoreResult.allCircuits],
        });
      },
    });
  };

  const handleDataOffsetChange = (page: number) => {
    setOffset(page * pageSize);

    fetchMore({
      variables: {
        offset: page * pageSize,
        limit: pageSize,
        sortBy: `${sort}_${sortDir}`,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allCircuits: [...fetchMoreResult.allCircuits],
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
        limit: pageSize,
        sortBy: `${sortId}_${sortOrder.toUpperCase()}`,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allCircuits: [...fetchMoreResult.allCircuits],
        });
      },
    });
  };

  const getData = () => {
    if (data && data.allCircuits) {
      return data;
    }

    return {
      allCircuits: [],
    };
  };

  const getMeta = () => {
    if (meta && meta.data) {
      return meta.data._allCircuitsMeta;
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
            rows={getData().allCircuits}
            headers={[
              { label: "Name", match: "name" },
              { label: "Location", match: "location" },
              { label: "Country", match: "country" },
            ]}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Circuits;
