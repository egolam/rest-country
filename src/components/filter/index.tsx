"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { useRef, useState, useCallback } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const filters: Array<{ id: number; name: string }> = [
  { id: 0, name: "All" },
  { id: 1, name: "Africa" },
  { id: 2, name: "Americas" },
  { id: 3, name: "Antarctic" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
];

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "All") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="w-[12.5rem] relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 py-3 rounded-sm drop-shadow-component bg-white dark:bg-dark-component-bg w-full cursor-pointer"
      >
        {!searchParams.get("filter")
          ? "Filter by Region"
          : searchParams.get("filter")}
        <FaChevronDown size={10} className={cn(isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="flex flex-col p-4 gap-1 w-full bg-white dark:bg-dark-component-bg drop-shadow-component rounded-sm absolute mt-1 z-10"
        >
          {filters.map((item) => (
            <label
              htmlFor={item.name}
              key={item.id}
              className={cn(
                "rounded-xs px-2 py-1 hover:bg-primary hover:text-white dark:hover:bg-dark-bg cursor-pointer",
                searchParams.get("filter") === item.name &&
                  "bg-primary text-white dark:bg-dark-bg "
              )}
              onChange={() => {
                router.push(
                  pathname + "?" + createQueryString("filter", item.name)
                );
                setIsOpen(false);
              }}
            >
              <span className="capitalize">{item.name}</span>
              <input
                type="radio"
                name="filter"
                id={item.name}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
