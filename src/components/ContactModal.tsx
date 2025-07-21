import React from "react";
import EnvelopeIcon from "../assets/svg/envelope.svg?react";
import HandWaveIcon from "../assets/svg/handWave.svg?react";
import CloseIcon from "../assets/svg/close.svg?react";
import DoubleArrowDownIcon from "../assets/svg/doubleArrowDown.svg?react";
import Footer from "../layouts/Footer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      <div className="mx-12 py-4  flex justify-end">
        <button
          onClick={onClose}
          className=" border rounded-full hover:bg-black hover:text-white font-black"
          aria-label="Close"
        >
          <CloseIcon className="h-8 w-8" />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="pt-4 pb-8 flex flex-row items-center space-x-2">
          <h1 className="text-2xl font-bold">HELLO</h1>
          <HandWaveIcon className="h-10 w-10" />
        </div>
        <div className="relative overflow-hidden py-4 border-t border-b border-black w-full">
          <div className="whitespace-nowrap animate-marquee">
            <h1 className="inline-block font-extrabold text-8xl">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;LET'S TALK! &nbsp;Let's
              COLLABORATE &nbsp; LET'S TALK! &nbsp;Let's COLLABORATE &nbsp;
              LET'S TALK! &nbsp;Let's COLLABORATE
            </h1>
          </div>
        </div>

        <div className="pt-8 pb-4">
          <p className="font-mono text-center text-xl text-gray-600">
            Got a question, proposal or project or want
            <br />
            to work together on something? Feel free
            <br />
            to reach out.
          </p>
        </div>
        <div className="py-0.5">
          <DoubleArrowDownIcon className="h-6 w-6 animate-bounce text-gray-700" />
        </div>
        <div className="pt-2 pb-14">
          <a
            href="mailto:olayinkayakub01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center space-x-1 border border-black px-1 py-0.5 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            <EnvelopeIcon className="h-10 w-10" />
            <h1 className="inline-block text-nowrap">Send A Message</h1>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactModal;
