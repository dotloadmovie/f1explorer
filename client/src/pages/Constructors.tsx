import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { DataTable, SortDirections } from "../components/datatable/DataTable";

import { useStyles } from "./styles";

const ALL_CONSTRUCTORS = gql`
  query AllConstructors(
    $offset: Int
    $limit: Int
    $sortBy: [SortConstructorsBy!]
  ) {
    allConstructors(skip: $offset, first: $limit, sortBy: $sortBy) {
      name
      nationality
      constructorRef
      url
    }
  }
`;

const ALL_CONSTRUCTORS_META = gql`
  {
    _allConstructorsMeta {
      count
    }
  }
`;

const Constructors: React.FC = () => {
  const meta = useQuery(ALL_CONSTRUCTORS_META);
  const [pageSize, setPageSize] = useState(40);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState("constructorId");
  const [sortDir, setSortDir] = useState("ASC");

  const { loading, error, data, fetchMore } = useQuery(ALL_CONSTRUCTORS, {
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
          allConstructors: [...fetchMoreResult.allConstructors],
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
          allConstructors: [...fetchMoreResult.allConstructors],
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
          allConstructors: [...fetchMoreResult.allConstructors],
        });
      },
    });
  };

  const getData = () => {
    if (data && data.allConstructors) {
      return data;
    }

    return {
      allConstructors: [],
    };
  };

  const getMeta = () => {
    if (meta && meta.data) {
      return meta.data._allConstructorsMeta;
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
            rows={getData().allConstructors}
            headers={[
              { label: "Name", match: "name" },
              { label: "Nationality", match: "nationality" },
            ]}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Constructors;
