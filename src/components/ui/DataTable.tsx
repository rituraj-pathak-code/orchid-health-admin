import { CircularProgress, Pagination, TablePagination } from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";

const DataTable = ({
  columns,
  data: DATA,
  pagination,
  totalPages,
  onPageChange,
  loading,
}) => {
  const [data, setData] = useState(DATA);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data,
    columns,
    state: {
      rowSelection,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    onRowSelectionChange: setRowSelection,
    pageCount: totalPages,
    manualPagination: true,
  });

  useEffect(() => {
    setData(DATA);
  }, [DATA]);

  return (
    <div className="bg-white rounded text-textPrimary">
      <table className="w-full text-left" width={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b">
            {headerGroup?.headers.map((header) => (
              <th
                key={header.id}
                className="font-semibold py-[13px] px-4 text-[13px] border-r relative text-gray-900"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                <div
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                ></div>
              </th>
            ))}
          </tr>
        ))}
        {data.length > 0
          ? table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`${
                  row.getIsSelected() ? "bg-blue-50" : ""
                } hover:bg-blue-50 transition-all`}
              >
                {row?.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    width={cell.column.getSize()}
                    className="px-4 text-xs py-[14px] border-b-2 border-[#F1F7F9]"
                  >
                    {loading ? (
                      <Skeleton className={`w-[${cell.column.getSize()}] h-[16.2px] rounded-full bg-gray-200`} />
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))
          : loading ? <div className="m-4"><CircularProgress/></div> : <div className="m-4 text-center">Empty List</div>}
      </table>
      <div className="flex items-center justify-end mt-4 pb-4 px-4">
        <Pagination
          color="primary"
          variant="outlined"
          shape="rounded"
          count={totalPages}
          page={pagination.pageIndex}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default DataTable;
