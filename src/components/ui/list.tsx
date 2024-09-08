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
    <li className={cn("flex gap-2", className)}>
      <Icon icon="simple-icons:aircanada" className="text-highlight" />
      {children}
    </li>
  );
}
