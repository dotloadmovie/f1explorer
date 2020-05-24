import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { HeaderType } from "./DataTable";

interface TableRowProps {
  row: any;
  headers: HeaderType[];
}

export const DataTableRow: React.FC<TableRowProps> = ({ row, headers }) => {
  return (
    <TableRow>
      {headers.map((header, i) => {
        return (
          <TableCell key={`data-table-cell-${i}`}>
            {row[header.match] || "-"}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
