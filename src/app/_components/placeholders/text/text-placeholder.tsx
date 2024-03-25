import React from "react";

export const TextPlaceholder: React.FC = () => {
  return (
    <>
      <div role="status" className="space-y-2.5 animate-pulse max-w-full">
        <div className="flex items-center w-full gap-x-2">
          <div className="h-2.5 dark:bg-white/10 rounded-full w-32"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full w-24"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full w-full"></div>
        </div>
        <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-30px)]">
          <div className="h-2.5 dark:bg-white/10 rounded-full w-full"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full w-full"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full w-24"></div>
        </div>
        <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-90px)]">
          <div className="h-2.5 dark:bg-white/20 rounded-full w-full"></div>
          <div className="h-2.5 dark:bg-white/10 rounded-full w-80"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full w-full"></div>
        </div>
        <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-110px)]">
          <div className="h-2.5 dark:bg-white/10 rounded-full  w-full"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-full"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-24"></div>
        </div>
        <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-50px)]">
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-32"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-24"></div>
          <div className="h-2.5 dark:bg-white/10 rounded-full  w-full"></div>
        </div>
        <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-30px)]">
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-full"></div>
          <div className="h-2.5 dark:bg-white/10 rounded-full  w-80"></div>
          <div className="h-2.5 dark:bg-white/20 rounded-full  w-full"></div>
        </div>
      </div>
    </>
  );
};