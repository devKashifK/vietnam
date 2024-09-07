import { cn } from "@/lib/utils";
import React from "react";

export default function TitleWithBottomBorder({
  title,
  borderClass,
  titleClass,
}: {
  title: string;
  borderClass?: string;
  titleClass?: string;
}) {
  return (
    <div className="relative flex flex-col justify-center items-center gap-1">
      <h2
        className={cn(
          "text-2xl md:text-4xl tracking-wider text-black/50",
          titleClass
        )}
      >
        {title}
        <span
          className={cn("block h-0.5 bg-highlight mt-2", borderClass)}
        ></span>
      </h2>
    </div>
  );
}
