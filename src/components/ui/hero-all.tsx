import Navbar from "./navbar";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";
export default function HeroDefault({
  img,
  text,
  path,
}: {
  img?: string;
  text?: string;
  path?: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 mx-auto bg-center relative bg-cover w-full h-[85vh]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10">
        <Navbar defaultStyle={true} />
        <div className="flex justify-center items-center w-full h-full mt-10">
          <div
            className=" bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-max px-6 text-6xl py-6 flex justify-center items-center font-primary tracking-widest text-white md:mt-0 mt-40"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
      <div className="absolute bg-background bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full py-1 bottom-0 px-12 z-10 flex justify-start items-center gap-2 cursor-pointer">
        <Link
          to={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          Home
        </Link>
        <Icon
          icon={"zondicons:cheveron-right"}
          className="text-white/60 -mt-1"
        />
        <span className="text-white font-bold uppercase font-primary tracking-widest">
          {path}
        </span>
      </div>
      {/* </div> */}
    </div>
  );
}
