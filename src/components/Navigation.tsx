import React from "react";

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <div className="flex gap-8 mb-8">
    {["Experience", "Projects", "Contributions"].map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`text-lg font-medium ${
          activeTab === tab
            ? "text-black border-b-2 border-black pb-1"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Navigation;
