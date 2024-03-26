import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={null}>
        <Link
          href="/clients"
          className="bg-amex text-lightest p-4 mt-60 rounded-lg hover:shadow-hover"
        >
          View Clients
        </Link>
      </Suspense>
    </main>
  );
}
