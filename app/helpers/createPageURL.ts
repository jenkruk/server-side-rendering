import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { URLSearchParams } from "url";
import { useCallback } from "react";

export const CreateParameters = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
};

export const createPageURL = (
  pageNumber: number,
  searchParams: ReadonlyURLSearchParams,
  pathname: string,
) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(pageNumber));
  return `${pathname}?${params.toString()}`;
};
