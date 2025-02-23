import BorderCountryItem from "./BorderCountryItem";

const BorderCountries = ({ borders }: { borders: string[] }) => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <p>Border Countries: </p>
      <div className="flex flex-wrap gap-2 font-light">
        {borders.length === 0
          ? "No bordering country!"
          : borders.map((border) => (
              <BorderCountryItem key={border} border={border} />
            ))}
      </div>
    </div>
  );
};

export default BorderCountries;
