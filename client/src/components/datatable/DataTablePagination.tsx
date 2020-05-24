import React, { BaseSyntheticEvent } from "react";
import TablePagination from "@material-ui/core/TablePagination";

interface DataTablePaginationProps {
  page: number;
  size: number;
  rowsPerPage: number;
  colSpan: number;
  handleChangePage: (evt: any, page: number) => void;
  handleChangeRowsPerPage: (evt: BaseSyntheticEvent) => void;
}

export const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  page,
  size,
  rowsPerPage,
  colSpan,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[10, 40, 100]}
      colSpan={colSpan}
      count={size}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};
