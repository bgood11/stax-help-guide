import type { ReactNode } from 'react';

interface DataTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
  stickyFirstColumn?: boolean;
  className?: string;
}

export default function DataTable({ headers, rows, stickyFirstColumn = false, className = '' }: DataTableProps) {
  return (
    <div className={`overflow-x-auto rounded-lg shadow-sm ${className}`}>
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} scope="col" className={stickyFirstColumn && i === 0 ? 'sticky left-0 z-20 bg-[#477085]' : ''}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={stickyFirstColumn && cellIdx === 0 ? 'sticky left-0 z-10 bg-white font-medium' : ''}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
