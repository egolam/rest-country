"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const BackBTN = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="w-max flex items-center gap-2 text-sm font-light px-6 py-1 bg-white dark:bg-dark-component-bg dark:hover:bg-dark-bg drop-shadow-component rounded-sm cursor-pointer hover:bg-primary hover:text-white"
    >
      <FaArrowLeft />
      Back
    </button>
  );
};

export default BackBTN;
