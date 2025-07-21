import React from "react";
import { Contribution } from "../types";
import LinkIcon from "../assets/svg/link.svg?react";

const ContributionCard: React.FC<{ contribution: Contribution }> = ({
  contribution,
}) => (
  <div className="py-4 border-b border-gray-300 last:border-b-0">
    <div className="flex flex-col items-start gap-y-1">
      <h5 className="text-xs font-semibold">{contribution?.year}</h5>
      <div className="flex flex-row items-center gap-x-1">
        <h4 className="text-base font-bold"><a target="_blank" rel="noopener noreferrer" href={contribution?.liveUrl}>{contribution?.title}</a></h4>
        {contribution?.liveUrl && (
          <a target="_blank" rel="noopener noreferrer" href={contribution.liveUrl}>
            <LinkIcon className="h-7 w-7 hover:text-gray-100 hover:bg-gray-900 border p-1 rounded-full" />
          </a>
        )}
      </div>
      <p className="py-1 text-sm font-normal">{contribution?.summary}</p>
    </div>
  </div>
);

export default ContributionCard;
