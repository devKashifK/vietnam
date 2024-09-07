import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MobileNavbar from "./mobile-navbar";

export default function Navbar({ defaultStyle = false, type = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden flex py-2 z-50 relative bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 rounded-t-2xl px-8">
        <MobileNavbar
          config={mobileConfig}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div
        className={cn(
          "hidden md:flex shadow-lg h-24 justify-start items-center",
          "bg-background text-white"
        )}
      >
        <div className="h-full flex justify-center w-[400px] items-center px-8 border-r border-white/10">
          <img src="/logo-white.png" alt="" className="" />
        </div>
        <div className="flex flex-col w-full justify-start items-start h-24">
          <div className="w-full flex gap-10 py-2 justify-end items-center border-b border-white/10 px-16">
            <Link
              to={""}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white"}>
                About Us
                {/* Việc Làm */}
              </span>
              <div className="group-hover:bg-highlight w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              to={"/du-học"}
              className="text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white"}>
                Contact Us
                {/* Du Học */}
              </span>
              <div className="group-hover:bg-highlight w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              to={"/doanh-nghiệp"}
              className="text-xs flex font-light flex-col gap-0.5 group"
            >
              <span className={"text-white"}>
                Free phone consultation +84 869967809
                {/* Doanh Nghiệp */}
              </span>
              <div className="group-hover:bg-highlight w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              to={""}
              className="text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white"}>
                Guarantee
                {/* Bảo lãnh */}
              </span>
              <div className="group-hover:bg-highlight w-full border border-transparent ease-out duration-150"></div>
            </Link>

            <a
              href="https://api.whatsapp.com/send?phone=16476197975"
              target="_blank"
              className="text-xs bg-green-500 text-white px-3 rounded-sm justify-center items-center py-1 flex  gap-2 group w-max -mr-6"
            >
              <Icon icon={"mdi:whatsapp"} className="text-xl" />
              {/* </span> */}
            </a>
          </div>

          <div className="flex justify-start gap-4 items-center px-0 w-full h-20">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-0 py-0">
                {router.map((navItem) => (
                  <NavigationMenuItem
                    key={navItem.path}
                    className="relative min-w-12 !px-0"
                  >
                    {navItem.element ? (
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-highlight data-[state=open]:bg-highlight hover:bg-[#b33d3d] relative group bg-transparent "
                        )}
                      >
                        <Link
                          className={cn(
                            type === "default" &&
                              "text-white  group-hover:text-white"
                          )}
                          to={navItem.path}
                          unstable_viewTransition
                        >
                          {navItem.element}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent text-xs font-light data-[state=open]:text-white data-[state=open]:border-b-highlight data-[state=open]:border-b-2 py-0  border-r border-white/10  data-[state=open]:bg-transparent focus:border-highlight rounded-none h-[3.15rem] ml-0 "
                        )}
                      >
                        {navItem.path}
                      </NavigationMenuTrigger>
                    )}
                    {navItem.children && (
                      <NavigationMenuContent className="absolute bg-background border-none  rounded-none  left-0 px-0 z-[10000000] h-56 overflow-y-scroll pretty-scroll">
                        <div className="w-[200px] py-2">
                          {renderSubmenus(navItem.children)}
                        </div>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="w-[110px]"></div>
      </div>
    </>
  );
}

const renderSubmenus = (submenus) => {
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <ul className="relative z-[10000]">
      {submenus.map((subPage) => (
        <li
          key={subPage.path}
          className="flex text-left w-full px-3 py-1 border-white/10 border-b last:border-b-0 relative "
          onMouseEnter={() => setHoveredPath(subPage.path)}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {subPage.children ? (
            <div className="relative w-full">
              <div
                className={cn(
                  "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full text-white rounded-md py-1"
                )}
              >
                <span className="text-white">{subPage.path}</span>
                <Icon icon={"zondicons:cheveron-right"} />
              </div>
              <div
                className={`absolute top-0 left-[188px] w-[300px] bg-background overflow-visible text-left py-0.5 flex flex-col z-10 
                  transition-all duration-300 transform ease-out ${
                    hoveredPath === subPage.path
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
              >
                {subPage.children.map((item) => (
                  <Link
                    key={item.path}
                    className="group border-white/10 text-left cursor-pointer text-sm border-b py-1 last:border-b-0 px-2 w-full text-white"
                    to={item.path}
                    unstable_viewTransition
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                        backgroundColor: "#b33d3d",
                        color: "#fff",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="px-3 py-1 "
                    >
                      {item.element}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className="text-left hover:bg-[#b33d3d] text-white py-1  text-sm border-b last:border-b-0 px-2 w-full"
              to={subPage.path}
              unstable_viewTransition
            >
              {subPage.element}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export const mobileConfig = [
  {
    name: "Home",
    // name: "Trang chủ",
    icon: "mdi:home",
    heading: "font-semibold text-green-800",
    pointer: "bg-green-700",
    active: "bg-green-300 border-green-600 text-green-800",
    activeIcon: "text-green-800",
    iconBg: "bg-green-700",
    apis: [
      {
        provider: "internal",
        name: "Home",
        // name: "Trang chủ",

        path: "/",
      },
    ],
  },
  {
    name: "About",
    icon: "mdi:information-outline",
    heading: "font-semibold text-blue-800",
    pointer: "bg-blue-700",
    active: "bg-blue-300 border-blue-600 text-blue-800",
    activeIcon: "text-blue-800",
    iconBg: "bg-blue-700",
    apis: [
      {
        provider: "internal",
        name: "About",
        path: "/about",
      },
      {
        provider: "internal",
        name: "Our Service",
        path: "/our-service",
      },
      {
        provider: "internal",
        name: "Certificate Membership",
        path: "/certificate-membership",
      },
      {
        provider: "internal",
        name: "Customer Testimonials",
        path: "/customer-testimonials",
      },
      {
        provider: "internal",
        name: "Book Appointment",
        path: "/book-appointment",
      },
      {
        provider: "internal",
        name: "Why Choose Us",
        path: "/why-choose-us",
      },
    ],
  },
  {
    name: "Express Entry",
    icon: "mdi:airplane-takeoff",
    heading: "font-semibold text-red-800",
    pointer: "bg-red-700",
    active: "bg-red-300 border-red-600 text-red-800",
    activeIcon: "text-red-800",
    iconBg: "bg-red-700",
    apis: [
      {
        provider: "internal",
        name: "Federal Skilled Worker",
        path: "/immigration/express-entry/federal-skilled-worker",
      },
      {
        provider: "internal",
        name: "Federal Skilled Trade",
        path: "/immigration/express-entry/federal-skilled-trade",
      },
      {
        provider: "internal",
        name: "Canadian Experience Class",
        path: "/immigration/express-entry/canadian-experience-class",
      },
    ],
  },
  {
    name: "Provincial Nominee Programs",
    icon: "mdi:map-marker-multiple-outline",
    heading: "font-semibold text-purple-800",
    pointer: "bg-purple-700",
    active: "bg-purple-300 border-purple-600 text-purple-800",
    activeIcon: "text-purple-800",
    iconBg: "bg-purple-700",
    apis: [
      {
        provider: "internal",
        name: "Alberta (AAIP)",
        path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
      },
      {
        provider: "internal",
        name: "Atlantic Immigration (AIPP)",
        path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
      },
      {
        provider: "internal",
        name: "British Columbia (BC PNP)",
        path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",
      },
      {
        provider: "internal",
        name: "Ontario (OINP)",
        path: "/immigration/provincial-nominee-programs/ontario-oinp",
      },
      {
        provider: "internal",
        name: "Manitoba (MPNP)",
        path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
      },
      {
        provider: "internal",
        name: "New Brunswick (NBPNP)",
        path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
      },
      {
        provider: "internal",
        name: "Newfoundland and Labrador",
        path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
      },
      {
        provider: "internal",
        name: "Saskatchewan (SINP)",
        path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
      },
      {
        provider: "internal",
        name: "Northwest Territories",
        path: "/immigration/provincial-nominee-programs/northwest-territories",
      },
      {
        provider: "internal",
        name: "Nova Scotia (NSNP)",
        path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
      },
      {
        provider: "internal",
        name: "Prince Edward Island (PEI PNP)",
        path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
      },
      {
        provider: "internal",
        name: "Rural & Northern Immigration Pilot (RNIP)",
        path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
      },
      {
        provider: "internal",
        name: "Yukon (YNP)",
        path: "/immigration/provincial-nominee-programs/yukon-ynp",
      },
    ],
  },
  {
    name: "Immigration Challenges",
    icon: "mdi:account-question-outline",
    heading: "font-semibold text-red-800",
    pointer: "bg-red-700",
    active: "bg-red-300 border-red-600 text-red-800",
    activeIcon: "text-red-800",
    iconBg: "bg-red-700",
    apis: [
      {
        provider: "internal",
        name: "Immigration Challenges",
        path: "/immigration/immigration-challenges",
      },
    ],
  },
  {
    name: "Business",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-brown-800",
    pointer: "bg-brown-700",
    active: "bg-brown-300 border-brown-600 text-brown-800",
    activeIcon: "text-brown-800",
    iconBg: "bg-brown-700",
    apis: [
      {
        provider: "internal",
        name: "Quebec Investor",
        path: "/business/quebec/quebec-investor",
      },
      {
        provider: "internal",
        name: "Quebec Entrepreneur",
        path: "/business/quebec/quebec-entrepreneur",
      },
      {
        provider: "internal",
        name: "Quebec Self Employed",
        path: "/business/quebec/quebec-self-employed",
      },
    ],
  },
  {
    name: "Federal Programs",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-teal-800",
    pointer: "bg-teal-700",
    active: "bg-teal-300 border-teal-600 text-teal-800",
    activeIcon: "text-teal-800",
    iconBg: "bg-teal-700",
    apis: [
      {
        provider: "internal",
        name: "Start-Up Visa (SUV)",
        path: "/business/federal-programs/start-up-visa",
      },
      {
        provider: "internal",
        name: "Intra-company transfer (ICT)",
        path: "/business/federal-programs/intra-company-transfer",
      },
      {
        provider: "internal",
        name: "Significant Benefit to Canada (C10)",
        path: "/business/federal-programs/benefit-to-canada",
      },
      {
        provider: "internal",
        name: "Owner Operator LMIA",
        path: "/business/federal-programs/owner-operator",
      },
      {
        provider: "internal",
        name: "Self-Employed Persons (C11)",
        path: "/business/federal-programs/self-employed-person",
      },
    ],
  },
  {
    name: "Work And Jobs",
    icon: "mdi:briefcase-check-outline",
    heading: "font-semibold text-orange-800",
    pointer: "bg-orange-700",
    active: "bg-orange-300 border-orange-600 text-orange-800",
    activeIcon: "text-orange-800",
    iconBg: "bg-orange-700",
    apis: [
      {
        provider: "internal",
        name: "Work Permit",
        path: "/work-and-jobs/work-permit",
      },
      {
        provider: "internal",
        name: "International Mobility Program (IMP)",
        path: "/work-and-jobs/international-mobility-program",
      },
      {
        provider: "internal",
        name: "In Demand Jobs",
        path: "/work-and-jobs/in-demand-jobs",
      },
      {
        provider: "internal",
        name: "Support For Employers",
        path: "/work-and-jobs/support-for-employers",
      },
      {
        provider: "internal",
        name: "LMIA",
        path: "/work-and-jobs/lmia",
      },
      {
        provider: "internal",
        name: "TEER Categories & NOC Codes",
        path: "/work-and-jobs/teer-categories-and-noc",
      },
    ],
  },
  {
    name: "Work 2",
    icon: "mdi:briefcase-check-outline",
    heading: "font-semibold text-orange-800",
    pointer: "bg-orange-700",
    active: "bg-orange-300 border-orange-600 text-orange-800",
    activeIcon: "text-orange-800",
    iconBg: "bg-orange-700",
    apis: [
      {
        provider: "internal",
        name: "Work Permit",
        path: "/work-and-jobs/work-permit",
      },
      {
        provider: "internal",
        name: "International Mobility Program (IMP)",
        path: "/work-and-jobs/international-mobility-program",
      },
      {
        provider: "internal",
        name: "In Demand Jobs",
        path: "/work-and-jobs/in-demand-jobs",
      },
      {
        provider: "internal",
        name: "Support For Employers",
        path: "/work-and-jobs/support-for-employers",
      },
      {
        provider: "internal",
        name: "LMIA",
        path: "/work-and-jobs/lmia",
      },
      {
        provider: "internal",
        name: "TEER Categories & NOC Codes",
        path: "/work-and-jobs/teer-categories-and-noc",
      },
    ],
  },
  {
    name: "Study",
    icon: "mdi:school-outline",
    heading: "font-semibold text-yellow-800",
    pointer: "bg-yellow-700",
    active: "bg-yellow-300 border-yellow-600 text-yellow-800",
    activeIcon: "text-yellow-800",
    iconBg: "bg-yellow-700",
    apis: [
      {
        provider: "internal",
        name: "Post Graduate Work Permit (PGWP)",
        path: "/study/post-graduate-work-permit",
      },
      {
        provider: "internal",
        name: "Study In Canada",
        path: "/study/study-in-canada",
      },
    ],
  },
  {
    name: "Sponsorship Programs",
    icon: "mdi:account-heart-outline",
    heading: "font-semibold text-pink-800",
    pointer: "bg-pink-700",
    active: "bg-pink-300 border-pink-600 text-pink-800",
    activeIcon: "text-pink-800",
    iconBg: "bg-pink-700",
    apis: [
      {
        provider: "internal",
        name: "Family Sponsorship",
        path: "/family-sponsorship",
      },
    ],
  },
  // {
  //   name: "Residency And Citizenship",
  //   icon: "mdi:school-outline",
  //   heading: "font-semibold text-indigo-800",
  //   pointer: "bg-indigo-700",
  //   active: "bg-indigo-300 border-indigo-600 text-indigo-800",
  //   activeIcon: "text-indigo-800",
  //   iconBg: "bg-indigo-700",
  //   apis: [
  //     {
  //       provider: "internal",
  //       name: "Citizenship",
  //       path: "/residency-and-citizenship/citizenship",
  //     },
  //     {
  //       provider: "internal",
  //       name: "Permanent Residency",
  //       path: "/residency-and-citizenship/permanent-residency",
  //     },
  //     {
  //       provider: "internal",
  //       name: "Residency Obligations",
  //       path: "/residency-and-citizenship/residency-obligations",
  //     },
  //   ],
  // },
  {
    name: "Price Policy",
    icon: "mdi:shield-lock-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Price Policy",
        path: "/price",
      },
    ],
  },
  {
    name: "News",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "News",
        path: "/news",
      },
    ],
  },
];

const router = [
  {
    path: "ICANPR",
    children: [
      {
        path: "/ve-icanpr",
        element: "Về iCanPR",
        // elemtnt: "About iCanPR",
      },
      {
        path: "/doi-tac-icanpr",
        element: "Đối tác iCanPR",
        // element: "iCanPR Partners",
      },
      {
        path: "/lien-he",
        element: "Liên hệ",
        // element: "Contact",
      },
    ],
  },

  {
    path: "Canada Immigration",
    // path: "Định cư Canada",
    children: [
      {
        path: "Express Entry",
        element: `Express Entry`,
        children: [
          {
            path: "/canada-immigration/express-entry/federal-skilled-worker",
            element: "Fedral Skilled Worker (FSW)",
          },
          {
            path: "/canada-immigration/express-entry/federal-skilled-trade",
            element: "Fedral Skilled Trade (FST)",
          },
          {
            path: "/canada-immigration/express-entry/canadian-experience-class",
            element: "Canadian Experience Class (CEC)",
          },
          {
            path: "/canada-immigration/express-entry/crs-score-calculation",
            element: "CRS Score Calculation",
          },
        ],
      },

      {
        path: "/immigration/việc-làm-định-cư",
        // element: "Việc làm định cư",
        element: "Immigration work",
      },
      {
        path: "/immigration/du-hoc-dinh-cu",
        // element: "Du học – định cư",
        element: "Study abroad - settlement",
      },
      {
        path: "/immigration/doanh-nghiệp-C11-visa",
        // element: "Doanh nghiệp C11 Visa",
        element: "C11 Visa Business",
      },
      {
        path: "/immigration/start-up-visa",
        element: "Start Up Visa",
      },
      {
        path: "/immigration/bảo-lãnh-gia-đình",
        // element: "Bảo lãnh gia đình",
        element: "Family sponsorship",
      },
      {
        path: "/immigration/khách-hàng-thành-công",
        // element: "Khách hàng thành công",
        element: "Customer Success",
      },
    ],
  },
  {
    path: "Provincial Nominee Programs",
    // path: "Đề cử tỉnh bang PNP"
    children: [
      {
        path: "/dề-cử-tỉnh-bang-pnp/alberta-immigration-aaip",
        element: "Alberta (AAIP)",
      },

      {
        path: "/dề-cử-tỉnh-bang-pnp/british-columbia-bcpnp",
        element: "British Colombia (BC PNP)",
      },

      {
        path: "/dề-cử-tỉnh-bang-pnp/manitoba-mpnp",
        element: "Manitoba (MPNP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/new-brunswick-nbpnp",
        element: "New Brunswick (NBPNP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/newfoundland-and-labrador",
        element: "Newfoundland and Labrador",
      },

      {
        path: "/dề-cử-tỉnh-bang-pnp/northwest-territories",
        element: "Northwest Territories",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/nova-scotia-nsnp",
        element: "Nova Scotia (NSNP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/nanuvut",
        element: "Nanuvut",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/ontario-oinp",
        element: "Ontario (OINP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/prince-edward-island-peipnp",
        element: "Prince Edward Island (PEI PNP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/quebec",
        element: "Quebec",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/saskatchewan-sinp",
        element: "Saskatchewan (SINP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/yukon-ynp",
        element: "Yukon (YNP)",
      },
    ],
  },
  {
    path: "Canadian Life",
    // path: "Cuộc sống Canada",
    children: [
      {
        path: "Canadian Provinces",
        // path: "Các tỉnh bang Canada",
        children: [
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/alberta-immigration-aaip",
            element: "Alberta (AAIP)",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/british-columbia-bcpnp",
            element: "British Colombia (BC PNP)",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/manitoba-mpnp",
            element: "Manitoba (MPNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/new-brunswick-nbpnp",
            element: "New Brunswick (NBPNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/newfoundland-and-labrador",
            element: "Newfoundland and Labrador",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/northwest-territories",
            element: "Northwest Territories",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nova-scotia-nsnp",
            element: "Nova Scotia (NSNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nanuvut",
            element: "Nanuvut",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/ontario-oinp",
            element: "Ontario (OINP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/prince-edward-island-peipnp",
            element: "Prince Edward Island (PEI PNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/quebec",
            element: "Quebec",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/saskatchewan-sinp",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/yukon-ynp",
            element: "Yukon (YNP)",
          },
        ],
      },
      {
        path: "/cuộc-sống-canada/môi-trường-canada",
        element: "Environment Canada",
        // element:"Môi Trường Canada",
      },
      {
        path: "/cuộc-sống-canada/văn-hóa-tôn-giáo",
        element: "Culture & Education",
        // element:"Văn hóa & tôn giáo"
      },
      {
        path: "/cuộc-sống-canada/y-tế",
        element: "Medical",
        // element:"Y Tế",
      },
      {
        path: "/cuộc-sống-canada/giáo-dục-canada",
        element: "Canadian Education",
        // element : "Giáo dục Canada",
      },
      {
        path: "/cuộc-sống-canada/tỷ-giá-đô-canada",
        element: "Canadian Dollar Exchange Rate",
        // element: " Tỷ giá đô Canada",
      },

      {
        path: "/cuộc-sống-canada/chính-sách-thuế",
        element: "Tax Policy",
        // element: "Chính sách thuế",
      },
    ],
  },

  {
    path: "Useful Information",
    // path: "Thông tin hữu ích",
    children: [
      {
        path: "/thông-tin-hữu-ích/câu-hỏi-thường-gặp",
        // element:"Câu hỏi thường gặp",
        element: "FAQ",
      },

      {
        path: "/thông-tin-hữu-ích/trang-web-hữu-ích",
        // element: "Trang web hữu ích",
        element: "Useful Website",
      },

      {
        path: "/thông-tin-hữu-ích/thuật-ngữ-trong-di-trú",
        // element: "Thuật ngữ trong di trú",
        element: "Immigration terminology",
      },

      {
        path: "/thông-tin-hữu-ích/CLB-là-gì",
        // element:"CLB là gì? Cách quy đổi điểm đương đương?",
        element: "What is CLB? How to convert equivalent points?",
      },
    ],
  },
  {
    path: "Recriutment",
    // path:"Tuyển dụng",
    children: [
      {
        path: "/tuyển-dụng/làm-việc-cho-icanpr",
        // element: " Làm việc cho iCanPR",
        element: "Work for ICanPR",
      },
      {
        path: "/tuyển-dụng/tổng-hợp-việc-làm-canada",
        // element: "Tổng hợp việc làm Canada",
        element: "Canada Jobs Summary",
      },
      {
        path: "/tuyển-dụng/công-nhân-trại-gà",
        // element: "Công nhân trại gà",
        element: "Chicken farm Worker",
      },
      {
        path: "/tuyển-dụng/dầu-bếp-món-au",
        // element: "Đầu bếp Món Âu",
        element: "European Chef",
      },
    ],
  },
];
