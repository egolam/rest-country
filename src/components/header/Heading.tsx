import Link from "next/link";

const Heading = () => {
  return (
    <Link href="/">
      <h1 className="text-sm sm:text-2xl font-extrabold">Where in the world?</h1>
    </Link>
  );
};

export default Heading;
