import DarkModeToggler from "./DarkModeToggler";
import Heading from "./Heading";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 w-full flex items-center justify-between px-4 sm:px-20 py-8 sm:py-6 shadow-lg text-primary dark:text-white bg-white dark:bg-dark-component-bg">
      <Heading />
      <DarkModeToggler />
    </header>
  );
};

export default Header;
