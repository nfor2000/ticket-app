import React from "react";

const getColor = (status: string) => {
     let color = "bg-slate-700";

     switch (status) {
          case "done":
               color = "bg-green-300";
               return color;
          case "started":
               color = "bg-yellow-200";
               return color;
          case "not started":
               color = "bg-red-200";
               return color;
          default:
               return color;
     }
};

const StatusDisplay = ({ status }: { status: string }) => {
     return (
          <div
               className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
                    status
               )}`}
          >
               {status}
          </div>
     );
};

export default StatusDisplay;
