"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { ChangeEvent } from "react";

const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.length <= 0) {
        params.delete("search");
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const newUrl = createQueryString("search", e.target.value);
    router.push(pathname + "?" + newUrl);
  }

  const debounced = useDebounceCallback(handleSearch, 500);

  return (
    <label className="drop-shadow-component sm:w-120 py-4 px-8 rounded-sm flex items-center gap-6 bg-white dark:bg-dark-component-bg">
      <FaMagnifyingGlass className="text-gray-400 dark:text-white" />
      <input
        defaultValue={searchParams.get("search")?.toString()}
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country…"
        className="outline-none placeholder:text-placeholder dark:placeholder:text-white text-primary dark:text-white flex-1"
        autoComplete="off"
        onChange={(e) => debounced(e)}
      />
    </label>
  );
};

export default SearchBox;
