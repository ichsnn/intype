import React, { useMemo, useReducer } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import cn from 'classnames';

interface LeaderboardsData {
  rank: number;
  uid: string;
  username: string;
  education: string;
  score: number;
  correct: number;
  wrong: number;
}

export default function Table({
  data,
  columns,
}: {
  data: LeaderboardsData[];
  columns: any[];
}) {
  const tableData = useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        profile: {
          username: item.username,
          education: item.education,
        },
      };
    });
  }, [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="w-full border-collapse border-spacing-2 border border-sky-100">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
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
              <tr key={row.id} className={cn('hover:bg-sky-100')}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-2">
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
    </div>
  );
}
