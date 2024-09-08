import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export function UL({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={cn("flex flex-col gap-2", className)}>{children}</ul>;
}

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex justify-start items-start w-full ", className)}>
      <Icon
        icon="simple-icons:aircanada"
        className="text-highlight w-[10%] mt-1"
      />
      <span className="relative w-[90%]">{children}</span>
    </li>
  );
}
