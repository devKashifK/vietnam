import React from "react";
import Container from "./container";
import Glass from "@/lib/helpers";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import TitleWithDoubleBorder from "./title-with-double-border";
import TitleWithBottomBorder from "./title-with-bottom-border";

export default function WhyChooseUs() {
  return (
    <Container effect="slide-left">
      <Glass className="flex flex-row gap-10 md:gap-2 h-max px-10 py-10">
        <div className="w-full md:flex-1 flex flex-col gap-2">
          <TitleWithDoubleBorder>Why Choose Us</TitleWithDoubleBorder>
          <div className="flex flex-col justify-start gap-6">
            <TitleWithBottomBorder titleClass="md:text-xl text-left">
              We Always Ready To Make Your Canada Dream Come True
            </TitleWithBottomBorder>
            <p className="text-sm text-black/60 text-left">
              At GreenTech Resource Worldwide Canada, we specialize in easing
              your immigration journey.
            </p>
            <p className="text-sm text-black/60 text-left">
              Our team of experienced professionals is dedicated to your
              success, offering personalized guidance, up-to-date expertise, and
              unwavering support throughout your immigration process. With our
              proven track record, we ensure a smooth, stress-free, and
              successful transition to your new life in Canana
            </p>
          </div>
        </div>
        <div className="w-full  md:flex-1 flex flex-col gap-3 justify-center items-center h-max">
          <ul className="flex gap-6 flex-wrap justify-center cursor-pointer ">
            <li className="text-center flex gap-1 justify-center bg-highlight/80 font-primary tracking-widest px-8 w-full md:w-[200px]  flex-col items-center text-white/90 py-6">
              <Icon icon={"iconamoon:profile-light"} className="text-4xl" />
              Professional consulting team
            </li>
            <li className="text-center flex gap-1 justify-center bg-background/80 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"hugeicons:absolute"} className="text-4xl" />
              Personalized solutions
            </li>
            <li className="text-center flex gap-1 justify-center bg-background/80  font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"solar:hand-money-linear"} className="text-4xl" />
              Affordable cost
            </li>
            <li className="text-center flex gap-1 justify-center bg-highlight/80 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"ph:chalkboard-teacher-bold"} className="text-4xl" />
              10+ years experience
            </li>
          </ul>
        </div>
      </Glass>
    </Container>
  );
}
