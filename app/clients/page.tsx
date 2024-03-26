import { Suspense } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Table from "../components/Table";
import { getClients } from "../../actions";

const Clients = async ({ searchParams }: { searchParams: any }) => {
  const queryClient = new QueryClient();
  const pageQuery = searchParams["page"] ?? "1";

  await queryClient.prefetchQuery({
    queryKey: ["clients", { page: pageQuery }],
    queryFn: () => getClients(pageQuery),
    networkMode: "always",
  });

  return (
    <main className="flex flex-col items-center justify-between px-5 xl:px-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={null}>
          <Table key={pageQuery} page={pageQuery} />
        </Suspense>
      </HydrationBoundary>
    </main>
  );
};

export default Clients;
