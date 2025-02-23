import { LuLoaderCircle } from "react-icons/lu";
const CountryCardLoader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <LuLoaderCircle className="animate-spin w-8 h-8 sm:w-16 sm:h-16 text-primary" />
    </div>
  );
};

export default CountryCardLoader;
