"use client";

import getCountries from "@/helpers/getCountries";
import { useQuery } from "@tanstack/react-query";
import { CountryCard } from "./CountryCard";
import CountryCardLoader from "./CountryCardLoader";
import { useSearchParams } from "next/navigation";

const CountryList = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const filter = searchParams.get("filter");

  const countries = useQuery({
    queryKey: ["countries", searchQuery],
    queryFn: () => getCountries(searchQuery),
  });

  if (countries.isLoading) return <CountryCardLoader />;

  if (countries.data.status === 404)
    return <p className="text-center">No countries found!</p>;

  return (
    <section className="flex justify-center pb-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {countries.data
          .filter((country: any) => {
            if (filter) {
              return country.region === filter;
            } else {
              return country;
            }
          })
          .map((country: any) => (
            <CountryCard
              key={country.name.common}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </ul>
    </section>
  );
};

export default CountryList;
