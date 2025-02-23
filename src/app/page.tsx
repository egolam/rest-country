import CountryList from "@/components/countries";
import CountryCardLoader from "@/components/countries/CountryCardLoader";
import Filter from "@/components/filter";
import SearchBox from "@/components/search";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense key="bok" fallback={<CountryCardLoader />}>
      <main className="flex-1 bg-white dark:bg-dark-bg flex flex-col">
        <section className="px-4 text-xs sm:text-sm py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-primary dark:text-white">
          <SearchBox />
          <Filter />
        </section>
        <CountryList />
      </main>
    </Suspense>
  );
}
