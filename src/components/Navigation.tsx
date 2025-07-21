import React from "react";
import { navigation } from "../data/misc";

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <div className="flex flex-row gap-x-8 py-2">
    {navigation.tab?.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`text-lg font-medium ${
          activeTab === tab
            ? "text-black border-b-2 border-black pb-1"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab}&#46;
      </button>
    ))}
  </div>
);

export default Navigation;
