import React from "react";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Title from "./Title";
import Container from "./container";
import Glass from "@/lib/helpers";
import TitleWithBottomBorder from "./title-with-bottom-border";

export default function CTA() {
  return (
    <>
      <Container
        effect="slide-left"
        className="hidden md:flex relative z-[10000]"
      >
        {/* <Title
          title={
            <p className="text-5xl text-black/50 w-full text-left">ancl;</p>
          }
          to={""}
          subtitle={"WHAT ARE YOU LOOKING FOR?"}
          cta={"All Solutions"}
        /> */}
        <div className="flex gap-4 min-h-screen  mx-auto">
          <div className="flex-1 items-center justify-center grid grid-cols-2 gap-10 -mt-24 relative z-50">
            {CtaDetails.map((item, index) => (
              <CtaCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
      <Container effect="slide-left" className="flex md:hidden">
        <Title
          title={
            <p className="text-2xl md:text-5xl  text-black/50 w-full text-left">
              Comprehensive solutions for <br /> all your needs!
            </p>
          }
          to={""}
          subtitle={"WHAT ARE YOU LOOKING FOR?"}
          cta={"All Solutions"}
        />
        <div className="flex gap-4 min-h-screen h-max w-[90%] mx-auto pt-96 md:py-0">
          <div className="w-full items-center justify-center flex flex-col space-y-96">
            {CtaDetails.slice(0, CtaDetails.length - 1).map((item, index) => (
              <CtaCard2 item={item} key={item.id} flip={true} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export const CtaCard = ({ item }) => {
  return (
    <div className="flex hover:bg-background group flex-col  bg-[#E1E2E5] px-4 py-4 border-gray-100 shadow-2xl w-[420px] h-[517px] justify-start items-center transition-all duration-100 ease-in-out">
      <div className="">
        <img src={item.image} alt="" className="" />
      </div>
      <div className="px-8 flex flex-col gap-2 py-5">
        <div className="flex flex-col gap-0">
          <h5 className="text-4xl text-left text-highlight">{item.title}</h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>
        <p className="text-xs text-left text-black/80 group-hover:text-white">
          {truncateText(item.description)}...{" "}
          <span className="text-black group-hover:text-white">Read More</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            to={item.href}
            className="bg-highlight text-white  py-1 shadow-xl px-4  text-sm w-max"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CtaCard2 = ({ item, flip }) => {
  return (
    <div
      className={cn(
        "w-full md:w-[520px] h-[220px] flex md:flex-row flex-col items-center relative ",
        flip ? "justify-end" : "justify-start"
      )}
    >
      <div className="w-full md:w-[45%] rounded-l-2xl">
        <img
          src={item.image}
          alt=""
          className={cn(
            "h-[330px] w-full rounded-t-2xl md:h-[220px] bg-cover z-10 relative",
            flip ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
          )}
        />
      </div>
      <div
        className={cn(
          "px-8 w-full md:w-[330px] h-[330px] md:h-[236px] relative md:absolute rounded-b-2xl md:rounded-2xl -ml-6 shadow-2xl  z-20 border-gray-100 backdrop-blur-3xl bg-opacity-10 bg-clip-padding backdrop-filter bg-gray-100 flex flex-col gap-2 py-5",
          flip ? "left-2" : "-right-[40%] md:-right-6"
        )}
      >
        <div className="flex flex-col justify-center r gap-0">
          <h5 className="text-4xl text-left text-highlight">{item.title}</h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>

        <p className="text-xs text-left text-black/80">
          {truncateText(item.description)}...{" "}
          <span className="text-black">Read More</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            to={item.href}
            className="bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export function truncateText(text) {
  const words = text.split(" ");
  return words.slice(0, 35).join(" ");
}
export function truncateTextHeading(text) {
  const words = text.split(" ");
  return words.slice(0, 9).join(" ");
}

const CtaDetails = [
  {
    id: 1,
    image: "/immigrate.jpg",
    title: "Immigrate",
    subtitle:
      "Exploring Canada for immigration is an exciting and life-altering choice.",
    labels: ["Express Entry Program", "Family Sponsorship"],
    description:
      "With immigration to Canada at an all-time high, now is the perfect time to start your immigration journey. There are numerous pathways to immigrate to Canada and attain permanent residency. While immigration to Canada requires significant financial and emotional investment, the ultimate results are well worth it. Canada consistently ranks among the top countries for quality of life and is known for its positive attitude toward immigration.",
    href: "/immigration/express-entry/federal-skilled-worker",
  },
  {
    id: 2,
    image: "/work.jpg",
    title: "Work",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world.",
    labels: ["Express Entry", "PR eligibility"],
    description:
      "Canada with strong economy, quality of life, and inclusive society make it an appealing destination for those seeking career growth and a high standard of living for their family. However, navigating the immigration process and meeting language requirements are essential aspects.",
    href: "work-and-jobs/work-permit",
  },
  {
    id: 3,
    title: "Business",
    image: "/business.jpg",
    subtitle:
      "Invest and build your business while ensuring Canadian permanent residency for your family. ",
    labels: ["Quebec Investor", "Start Up Visa"],
    description:
      "The business immigration visa programs in Canada are designed for individuals who wish to immigrate to Canada to start, invest in, or manage a business. These programs aim to promote economic growth and job creation in Canada.",
    href: "business/federal-programs/self-employed-person",
  },
  {
    id: 4,
    title: "Study",
    image: "/study.jpg",
    subtitle:
      "Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth.",
    labels: ["High Quality Education", "Diverse Campuses and Programs"],
    description:
      "Canada is known for its top-notch educational institutions. Many universities and colleges consistently rank among the best globally. Canadian degrees and diplomas are recognized and respected worldwide..",
    href: "study/study-in-canada",
  },

  {
    id: 5,
    title: "Family Sponsor",
    image: "/family.jpg",
    subtitle:
      "The program allows eligible individuals to sponsor their close family members for permanent residency in Canada.",
    labels: ["Sponsoring a spouse or partner", "Sponsoring dependent children"],
    description:
      "Other than the regular visa application programs, people can also apply for a visa or even permanent residence under certain sponsorship programs which allow eligible individuals to sponsor their close family members for permanent residency in Canada.",
    href: "/family-sponsorship",
  },

  {
    id: 6,
    image: "/doubt.jpg",
    title: "Not Sure",
    subtitle:
      "Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!",
    labels: ["Why GTR Immigration?", "Reasonable cost guaranteed quality"],
    description:
      "Saskatchewan stands out as a province in Canada with open immigration schemes that are suitable for many individuals seeking to establish themselves in the country.",
    href: "/about",
  },
];

export const CTADefault = ({
  title,
  subtitle,
  image,
  description,
}: {
  title?: string;
  subtitle?: string | React.ReactNode;
  image?: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <Container>
      <Glass
        className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col gap-8 md:gap-3 relative z-10  bg-clip-padding justify-center items-center py-10 backdrop-filter backdrop-blur-md bg-opacity-20 px-8">
          <h4 className="text-4xl tracking-wider text-center text-white">
            {title}
          </h4>
          {typeof subtitle === "string" ? (
            <p className="text-4xl text-white/90">{subtitle}</p>
          ) : (
            subtitle
          )}
          {typeof description === "string" ? (
            <p className="text-sm">{description}</p>
          ) : (
            description
          )}
          <Button
            className="py-3 w-[190px]"
            icon={
              <div className="flex gap-2 text-[10px] justify-center items-center">
                <Icon icon={"mdi:phone"} />
                <span>+1855 477 9797</span>
              </div>
            }
          >
            <span className="text-[10px] relative flex gap-1 justify-start items-center">
              <Icon
                icon={"teenyicons:appointments-outline"}
                className="-mt-0.5"
              />
              BOOK AN APPOINTMENT
            </span>
          </Button>
        </div>
      </Glass>
    </Container>
  );
};

export const CTAWithImage = ({
  subtitle,
  title,
  description,
  ctaAction,
  image,
  flip,
}: {
  subtitle: string | React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  ctaAction: string | React.ReactNode;
  image: string;
  flip?: boolean;
}) => {
  return (
    <Container
      className={cn(
        "flex bg-content py-0 shadow-2xl  ",
        flip ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className="flex-1 relative h-[590px]"
        // style={{
        //   backgroundImage: `url(/hero-3.jpg)`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="bg-background/60 absolute top-0 left-0 z-10 w-full bg-opacity-80 h-[590px]"></div>
        <img
          src={image}
          className="relative w-full object-cover h-full"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col gap-6 py-10 px-8">
        <TitleWithBottomBorder titleClass="">{subtitle}</TitleWithBottomBorder>
        <h2 className="text-4xl text-left">{title}</h2>

        {typeof description === "string" ? (
          <p className="text-left">{description}</p>
        ) : (
          <div className="h-56 overflow-y-auto pretty-scroll">
            {description}
          </div>
        )}

        <button className="flex gap-2 bg-highlight text-white w-max justify-center items-center rounded-none">
          {ctaAction}
          <Icon icon={"simple-icons:aircanada"} className="" />
        </button>
      </div>
    </Container>
  );
};
