import React from "react";
import PaperAirplaneIcon from "../assets/svg/paperAirplane.svg?react";
import { useContactModal } from "../store/useStore";

const Header: React.FC = () => {
  const { isContactOpen, setIsContactOpen } = useContactModal();
  return (
    <>
      <header className="mx-12 bg-gray-100 pt-4 pb-2 flex justify-between items-center border-b border-black ">
        <div>
          <h1 className="text-lg font-bold leading-5">IDRIS<br/>YAKUB</h1>
        </div>
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className="px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-gray-100 font-medium flex items-center gap-2"
        >
          <PaperAirplaneIcon className="w-6 h-6 text-black [&>path]:stroke-gray-100 stroke-[24]" />
          CONTACT
        </button>
      </header>
    </>
  );
};

export default Header;
