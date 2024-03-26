"use client";

import React, { useState } from "react";
import { getClients } from "../../actions";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pagination from "./Pagination";

const Table = ({ page }: { page: string }) => {
  const [, setPage] = useState(page);

  const { data, error, isPlaceholderData, isFetching } = useQuery({
    queryKey: ["clients", { page }],
    queryFn: async () => await getClients(page),
    placeholderData: keepPreviousData,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    !isFetching && (
      <div className="mt-16 max-w-full min-w-full min-h-full shadow-sm border-solid border border-line rounded">
        <table className="overflow-x-auto max-w-full min-w-full min-h-full divide-y divide-line">
          <thead>
            <tr className="bg-gray max-w-full">
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ maxWidth: "40%" }}
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ maxWidth: "30%" }}
              >
                Age
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase"
                style={{ maxWidth: "30%" }}
              >
                City
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">{data}</tbody>
        </table>
        <Pagination setPage={setPage} isPlaceholderData={isPlaceholderData} />
      </div>
    )
  );
};

export default Table;
