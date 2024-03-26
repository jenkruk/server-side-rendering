import React from "react";
import infoIcon from "@/public/nav/tooltip.svg";
import Image from "next/image";

const Tooltip: React.FC = () => {
  return (
    <div className="trigger cursor-pointer relative ml-1 mb-3 bg-white rounded-full">
      {/* Tooltip Trigger */}
      <Image src={infoIcon} alt="info icon" width={20} height={20} />
    </div>
  );
};

export default Tooltip;
