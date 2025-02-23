import CountryDetails from "@/components/countryDetails";
import BackBTN from "@/components/countryDetails/BackBTN";

const CountyDetails = () => {
  return (
    <main className="flex-1 bg-white dark:bg-dark-bg text-primary dark:text-white py-8 px-4 flex flex-col gap-11">
      <BackBTN />
      <CountryDetails />
    </main>
  );
};

export default CountyDetails;
