import React, { useMemo, useReducer } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import cn from 'classnames';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function Table({
  data,
  columns,
}: {
  data: any[];
  columns: any[];
}) {
  const tableData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    // debugTable: true,
  });

  return (
    <div>
      <table className="w-full border-collapse border-spacing-2 border border-sky-100">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={'bg-sky-200'}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={'py-2'}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className={cn('hover:bg-sky-100', {
                  'bg-sky-50': (row.index + 1) % 2 === 0,
                })}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="flex items-center gap-2 mt-4">
        <button
          type="button"
          className="border rounded p-1 disabled:opacity-30"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
        <button
          className="border rounded p-1 disabled:opacity-30"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          className="border rounded p-1 disabled:opacity-30"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
        <button
          className="border rounded p-1 disabled:opacity-30"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronDoubleRightIcon className="w-5 h-5" />
        </button>
        <span className="flex items-center gap-1">
          <div>Halaman</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} dari{' '}
            {table.getPageCount()}
          </strong>
        </span>
      </div>
    </div>
  );
}
