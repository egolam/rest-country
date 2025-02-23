"use client";
import { useQuery } from "@tanstack/react-query";
import getCountryDetails from "@/helpers/getCountryDetails";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BorderCountries from "./BorderCountries";
import CountryCardLoader from "../countries/CountryCardLoader";
const CountryDetails = () => {
  const pathname = usePathname();

  const query = useQuery({
    queryKey: ["country", pathname],
    queryFn: () => getCountryDetails(pathname),
  });

  if (query.isLoading) return <CountryCardLoader />;

  const country = query.data[0];

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 xl:gap-30 self-center">
      <section className="relative max-w-140 max-h-140 bg-primary rounded-xl aspect-auto overflow-hidden">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt}
          width={560}
          height={560}
          className="object-cover aspect-auto"
          placeholder="empty"
          priority
        />
      </section>

      <section className="flex flex-col gap-6 max-w-80 lg:max-w-lg">
        <h2 className="font-extrabold text-xl">{country.name.common}</h2>

        <div className="text-sm font-semibold flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p>Native name: </p>
            <div className="font-light flex gap-1">
              {Object.values(country.name.nativeName).map(
                (name: any, index: number) => (
                  <span key={Object.keys(country.name.nativeName)[index]}>
                    {index + 1 !== Object.keys(country.name.nativeName).length
                      ? name.common + ", "
                      : name.common}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              Populatiton:{" "}
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              Region: <span className="font-light">{country.region}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              Sub Region:{" "}
              <span className="font-light">{country.subregion}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              Capital: <span className="font-light">{country.capital}</span>
            </p>
          </div>
        </div>

        <div className="text-sm font-semibold flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p>
              Top Level Domain:{" "}
              <span className="font-light">
                {country.tld.map((item: string, index: number) =>
                  index + 1 !== country.tld.length ? item + " / " : item
                )}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>Currencies: </p>
            <div className="font-light flex gap-1">
              {Object.values(country.currencies).map(
                (currency: any, index: number) => (
                  <span key={Object.keys(currency.name)[index]}>
                    {currency.name}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>Languages: </p>
            <div className="font-light flex gap-1 flex-wrap">
              {Object.values(country.languages).map(
                (language: any, index: number) => (
                  <span key={Object.keys(country.languages)[index]}>
                    {index + 1 !== Object.keys(country.languages).length
                      ? language + ", "
                      : language}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <BorderCountries borders={country.borders} />
      </section>
    </div>
  );
};
export default CountryDetails;
