import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

type CountryCard = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};

export const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCard) => {
  return (
    <li className="w-66 h-84 rounded-sm drop-shadow-component bg-white dark:bg-dark-component-bg flex overflow-hidden text-primary dark:text-white hover:scale-105 transition-transform">
      <Link href={`/${name.toLowerCase().trim()}`} className="flex-1">
        <ImageWithFallback name={name} src={flag} />
        <div className="px-6 pt-6 flex flex-col gap-4">
          <h2 className="text-lg font-extrabold leading-none">{name}</h2>
          <div className="text-sm font-semibold flex flex-col gap-2">
            <p>
              Population:{" "}
              <span className="font-light">{population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span className="font-light">{region}</span>
            </p>
            <p>
              Capital:{" "}
              <span className="font-light">
                {capital.map((item: string, index: number) =>
                  index + 1 !== capital.length ? item + ", " : item
                )}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
