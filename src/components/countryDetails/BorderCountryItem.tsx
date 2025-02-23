import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import getBorders from "@/helpers/getCCA3";

const BorderCountryItem = ({ border }: { border: string }) => {
  const query = useQuery({
    queryKey: ["cca3"],
    queryFn: () => getBorders(),
  });

  if (query.isLoading) return <p>Loading...</p>;

  const borderFullName = query.data.filter(
    (country: any) => country.cca3 === border
  )[0];

  return (
    <Link
      key={borderFullName.name.common}
      href={`${borderFullName.name.common}`}
      className="drop-shadow-component bg-white dark:bg-dark-component-bg rounded-sm min-w-24 py-1 px-4 text-center hover:bg-primary hover:text-white dark:hover:bg-dark-bg text-nowrap"
    >
      {borderFullName.name.common}
    </Link>
  );
};

export default BorderCountryItem;
