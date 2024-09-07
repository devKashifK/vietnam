import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed text-white/80  z-50 top-0 right-0 w-[104px] h-screen bg-background ">
      <Link
        to="/"
        className="flex py-5  bg-highlight flex-col gap-2 justify-center items-center "
      >
        <Icon
          icon="material-symbols:android-google-home"
          className="w-10 text-xl font-light "
        />
        <span className="font-light text-lg"> Home </span>
      </Link>

      <div className="flex flex-col gap-6 py-5">
        <Link
          to=""
          className="flex py-2  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="mdi:briefcase-outline"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xl"> Jobs </span>
        </Link>
        <Link
          to=""
          className="flex py-2  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="guidance:study-room"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-base leading-none">
            {" "}
            Study Abroad{" "}
          </span>
        </Link>
        <Link
          to=""
          className="flex py-2  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-base leading-none"> Business </span>
        </Link>
        <Link
          to=""
          className="flex py-2  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="material-symbols:breaking-news-outline-sharp"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-base leading-none"> News </span>
        </Link>
        <Link
          to=""
          className="flex py-2  flex-col gap-2 justify-center items-center px-5"
        >
          <Icon
            icon="mdi:frequently-asked-questions"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-base leading-none"> Questions </span>
        </Link>
      </div>
    </div>
  );
}
