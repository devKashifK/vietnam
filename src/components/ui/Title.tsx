import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Title({
  title,
  subtitle,
  description,
  to,
  cta,
  subtitleClass,
  titleClass,
  descriptionClass,
  className,
}: {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  to?: string;
  cta?: string;
  className?: string;
  subtitleClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}) {
  return (
    <div className="flex w-full justify-between ">
      <div
        className={cn(
          "flex flex-col w-full gap-1 justify-center items-center",
          className
        )}
      >
        <h4 className={cn("text-background text-2xl", subtitleClass)}>
          {subtitle}
        </h4>
        <div className="flex flex-col gap-3 w-full">
          {typeof title === "string" ? (
            <div
              className={cn(
                "relative flex flex-col justify-center items-center gap-1",
                titleClass
              )}
            >
              <h2
                className={cn(
                  "text-2xl text-center md:text-4xl tracking-wider text-black/50",
                  titleClass
                )}
              >
                {title}
                <span className="block h-0.5 bg-background mt-2"></span>
              </h2>
            </div>
          ) : (
            title
          )}
        </div>
        <span className="block h-0.5 bg-highlight w-max"></span>

        {description &&
          (typeof description === "string" ? (
            <p
              className={cn(
                "text-center text-black/50 w-[70%]",
                descriptionClass
              )}
            >
              {description}
            </p>
          ) : (
            description
          ))}
      </div>
      {/* {cta && (
        <div className="flex group justify-center flex-col text-black/50 border-b-highlight items-center  transition-all duration-150 cursor-pointer">
          <Link
            to={to}
            className="flex gap-3 justify-center items-center font-primary tracking-widest"
          >
            {cta}
            <Icon icon={"material-symbols:arrow-right-alt"} />
          </Link>
          <div className="h-0.5 w-28 group-hover:visible invisible bg-highlight"></div>
        </div>
      )} */}
    </div>
  );
}
