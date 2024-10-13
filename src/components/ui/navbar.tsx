import { useEffect, useState } from "react";
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
import { relative } from "path";

export default function Navbar({ defaultStyle = false, type = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          "bg-content text-black z-[100000000]",
          isFixed ? "fixed" : "relative"
        )}
      >
        <div className="h-full flex justify-center w-[400px] !bg-content items-center px-8 border-r border-background ">
          <img src="/logo.png" alt="" className="w-[95%]" />
        </div>
        <div className="flex flex-col w-full justify-start items-start h-24">
          <div
            className={cn(
              "w-full flex gap-5 py-2 justify-end items-center border-b border-background/40 px-16"
            )}
          >
            <Link
              unstable_viewTransition
              to={"/ve-icanpr"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                Về Chúng Tôi
              </span>
              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              unstable_viewTransition
              to={"/lmia-map"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                Bản đồ LMIA
              </span>
              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              unstable_viewTransition
              to={"/hot-job"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                Công Việc Nóng
              </span>
              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>

            <Link
              unstable_viewTransition
              to={"/doanh-nghiệp"}
              className="text-xs flex font-light flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                Tư vấn +84 869967809
              </span>

              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              unstable_viewTransition
              to={"mailto:tuvan@icanpr.vn"}
              className="text-xs flex font-light flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                tuvan@icanpr.vn
              </span>
              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>
            <Link
              to={"/immigration/khách-hàng-thành-công"}
              unstable_viewTransition
              className="text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-background font-semibold text-xs"}>
                Bảo đảm
              </span>
              <div className="group-hover:bg-background w-full border border-transparent ease-out duration-150"></div>
            </Link>

            {!isFixed && (
              <>
                <a
                  href="https://api.whatsapp.com/send?phone=84869967809"
                  target="_blank"
                  className="text-xs bg-green-500 text-white px-3 rounded-sm justify-center items-center py-1 flex  gap-2 group w-max -mr-6"
                >
                  <Icon icon={"mdi:whatsapp"} className="text-xl" />
                </a>
                <a
                  href="https://zalo.me/84869967809"
                  target="_blank"
                  className="text-xs bg-blue-500 text-white px-3 rounded-sm justify-center items-center py-1 flex  gap-2 group w-max  ml-2"
                >
                  <Icon icon={"simple-icons:zalo"} className="text-xl" />
                </a>
              </>
            )}
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
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-background focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-highlight data-[state=open]:bg-highlight hover:bg-[#b33d3d] relative group bg-transparent "
                        )}
                      >
                        <Link
                          className={cn(
                            type === "default" &&
                              "text-white  group-hover:text-background"
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
                          "bg-transparent text-xs data-[state=open]:text-background data-[state=open]:border-b-highlight data-[state=open]:border-b-2 py-0  border-r border-white/40  data-[state=open]:bg-transparent focus:border-highlight rounded-none h-[3.15rem] ml-0 font-bold relative"
                        )}
                      >
                        {navItem.path}
                      </NavigationMenuTrigger>
                    )}
                    {navItem.children && (
                      <NavigationMenuContent className="absolute bg-background border-none  rounded-none left-0 px-0 z-[100000000000000000000] h-max max-h-80 overflow-y-scroll overflow-visible">
                        <div className="w-[200px] z-[100000000000000000000] py-2">
                          {renderSubmenus(
                            navItem.children,
                            hoveredPath,
                            setHoveredPath
                          )}
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

const renderSubmenus = (submenus, hoveredPath, setHoveredPath) => {
  return (
    <ul className=" z-[1000000000000000000] overflow-visible">
      {submenus.map((subPage) => (
        <li
          key={subPage.path}
          className="flex text-left w-full  border-highlight border-b last:border-b-0  "
          onMouseEnter={() => setHoveredPath(subPage.path)}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {subPage.children ? (
            <div className="w-full z-[10000]  overflow-visible">
              <div
                className={cn(
                  "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full text-white rounded-md py-1 relative"
                )}
              >
                <span className="text-white">{subPage.path}</span>
                <Icon icon={"zondicons:cheveron-right"} />
              </div>
              {hoveredPath === subPage.path && (
                <div
                  className={`absolute top-0 left-[200px] z-[10000] w-[300px] bg-background text-left py-0.5 flex flex-col transition-all duration-300 transform ease-out z-1000000000`}
                >
                  {subPage.children.map((item) => (
                    <Link
                      key={item.path}
                      className="text-left hover:bg-[#b33d3d] text-highlight py-1  text-sm border-b last:border-b-0 px-2 w-full"
                      to={item.path}
                      unstable_viewTransition
                    >
                      <motion.div
                        // whileHover={{
                        //   scale: 1.01,
                        //   backgroundColor: "#b33d3d",
                        //   color: "#fff",
                        // }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="px-3 py-1 "
                      >
                        {item.element}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              className="text-left hover:bg-[#b33d3d] text-highlight py-1  text-sm border-b last:border-b-0 px-2 w-full"
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
    // name: "Home",
    name: "Trang chủ",
    icon: "mdi:home",
    heading: "font-semibold text-green-800",
    pointer: "bg-green-700",
    active: "bg-green-300 border-green-600 text-green-800",
    activeIcon: "text-green-800",
    iconBg: "bg-green-700",
    apis: [
      {
        provider: "internal",
        // name: "Home",
        name: "Trang chủ",

        path: "/",
      },
    ],
  },
  {
    name: "ICANPR",
    icon: "mdi:information-outline",
    heading: "font-semibold text-blue-800",
    pointer: "bg-blue-700",
    active: "bg-blue-300 border-blue-600 text-blue-800",
    activeIcon: "text-blue-800",
    iconBg: "bg-blue-700",
    apis: [
      {
        provider: "internal",
        name: "Về iCanPR",
        path: "/ve-icanpr",
      },
      {
        provider: "internal",
        name: "Đối tác iCanPR",
        path: "/doi-tac-icanpr",
      },
      {
        provider: "internal",
        name: "Liên hệ",
        path: "/lien-he",
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
      {
        provider: "internal",
        name: "CRS Score Calculation",
        path: "/immigration/express-entry/crs-score-calculation",
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
        path: "/dề-cử-tỉnh-bang-pnp/alberta-immigration-aaip",
      },
      {
        provider: "internal",
        name: "British Columbia (BC PNP)",
        path: "/dề-cử-tỉnh-bang-pnp/british-columbia-bcpnp",
      },
      {
        provider: "internal",
        name: "Ontario (OINP)",
        path: "/dề-cử-tỉnh-bang-pnp/ontario-oinp",
      },
      {
        provider: "internal",
        name: "Manitoba (MPNP)",
        path: "/dề-cử-tỉnh-bang-pnp/manitoba-mpnp",
      },
      {
        provider: "internal",
        name: "New Brunswick (NB PNP)",
        path: "/dề-cử-tỉnh-bang-pnp/new-brunswick-nbpnp",
      },
      {
        provider: "internal",
        name: "Nova Scotia (NSNP)",
        path: "/dề-cử-tỉnh-bang-pnp/nova-scotia-nsnp",
      },
      {
        provider: "internal",
        name: "Prince Edward Island (PEI PNP)",
        path: "/dề-cử-tỉnh-bang-pnp/prince-edward-island-peipnp",
      },
      {
        provider: "internal",
        name: "Saskatchewan (SINP)",
        path: "/dề-cử-tỉnh-bang-pnp/saskatchewan-sinp",
      },
      {
        provider: "internal",
        name: "Quebec (PNP)",
        path: "/dề-cử-tỉnh-bang-pnp/quebec",
      },
      {
        provider: "internal",
        name: "Yukon (YNP)",
        path: "/dề-cử-tỉnh-bang-pnp/yukon-ynp",
      },
    ],
  },
  {
    name: "Immigration",
    icon: "mdi:account-question-outline",
    heading: "font-semibold text-red-800",
    pointer: "bg-red-700",
    active: "bg-red-300 border-red-600 text-red-800",
    activeIcon: "text-red-800",
    iconBg: "bg-red-700",
    apis: [
      {
        provider: "internal",
        name: "Việc làm định cư",
        path: "/immigration/việc-làm-định-cư",
      },
      {
        provider: "internal",
        name: "Du học - định cư",
        path: "/immigration/du-hoc-dinh-cu",
      },
      {
        provider: "internal",
        name: "Doanh nghiệp C11 Visa",
        path: "/immigration/doanh-nghiệp-C11-visa",
      },
      {
        provider: "internal",
        name: "Start Up Visa",
        path: "/immigration/start-up-visa",
      },
      {
        provider: "internal",
        name: "Bảo lãnh gia đình",
        path: "/immigration/bảo-lãnh-gia-đình",
      },
      {
        provider: "internal",
        name: "Khách hàng thành công",
        path: "/immigration/khách-hàng-thành-công",
      },
    ],
  },
  {
    name: "Các-tỉnh-bang-canada",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-brown-800",
    pointer: "bg-brown-700",
    active: "bg-brown-300 border-brown-600 text-brown-800",
    activeIcon: "text-brown-800",
    iconBg: "bg-brown-700",
    apis: [
      {
        provider: "internal",
        name: "Alberta Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/albertaP",
      },
      {
        provider: "internal",
        name: "British Colombia (BC PNP)",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/brcolumbiaP",
      },
      {
        provider: "internal",
        name: "Manitoba Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/manitobaP",
      },
      {
        provider: "internal",
        name: "New Brunswick Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/new-brunswickP",
      },
      {
        provider: "internal",
        name: "Newfoundland and Labrador",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/newfoundland-labradorP",
      },
      {
        provider: "internal",
        name: "Northwest Territories Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/northwest-territoriesP",
      },
      {
        provider: "internal",
        name: "Nova Scotia Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nova-scotiaP",
      },
      {
        provider: "internal",
        name: "Nunavut Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nunavutP",
      },
      {
        provider: "internal",
        name: "Ontario Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/ontarioP",
      },
      {
        provider: "internal",
        name: "Prince Edward Island Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/prince-edwardP",
      },
      {
        provider: "internal",
        name: "Saskatchewan Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/ saskatchewanP",
      },
      {
        provider: "internal",
        name: "Yukon Province",
        path: "/cuộc-sống-canada/các-tỉnh-bang-canada/yukonP",
      },
    ],
  },
  {
    name: "Cuộc-sống-canada",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-brown-800",
    pointer: "bg-brown-700",
    active: "bg-brown-300 border-brown-600 text-brown-800",
    activeIcon: "text-brown-800",
    iconBg: "bg-brown-700",
    apis: [
      {
        provider: "internal",
        name: "Môi trường Canada",
        path: "/cuộc-sống-canada/môi-trường-canada",
      },
      {
        provider: "internal",
        name: "Văn hóa & tôn giáo",
        path: "/cuộc-sống-canada/văn-hóa-tôn-giáo",
      },
      {
        provider: "internal",
        name: "Giáo dục Canada",
        path: "/cuộc-sống-canada/giáo-dục-canada",
      },
      {
        provider: "internal",
        name: "Y Tế",
        path: "/cuộc-sống-canada/y-tế",
      },
      {
        provider: "internal",
        name: "Tỷ giá đô Canada",
        path: "/cuộc-sống-canada/tỷ-giá-đô-canada",
      },
      {
        provider: "internal",
        name: "Chính sách thuế",
        path: "/cuộc-sống-canada/chính-sách-thuế",
      },
    ],
  },
  {
    name: "Thông-tin-hữu-ích",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-teal-800",
    pointer: "bg-teal-700",
    active: "bg-teal-300 border-teal-600 text-teal-800",
    activeIcon: "text-teal-800",
    iconBg: "bg-teal-700",
    apis: [
      {
        provider: "internal",
        name: "Câu hỏi thường gặp",
        path: "/thông-tin-hữu-ích/câu-hỏi-thường-gặp",
      },
      {
        provider: "internal",
        name: "Trang web hữu ích",
        path: "/thông-tin-hữu-ích/trang-web-hữu-ích",
      },
      {
        provider: "internal",
        name: "Thuật ngữ trong di trú",
        path: "/thông-tin-hữu-ích/thuật-ngữ-trong-di-trú",
      },
      {
        provider: "internal",
        name: "CLB là gì?",
        path: "/thông-tin-hữu-ích/CLB-là-gì",
      },
    ],
  },
  {
    name: "Tuyển-dụng",
    icon: "mdi:briefcase-check-outline",
    heading: "font-semibold text-orange-800",
    pointer: "bg-orange-700",
    active: "bg-orange-300 border-orange-600 text-orange-800",
    activeIcon: "text-orange-800",
    iconBg: "bg-orange-700",
    apis: [
      {
        provider: "internal",
        name: "Làm việc cho iCanPR",
        path: "/tuyển-dụng/làm-việc-cho-icanpr",
      },
      {
        provider: "internal",
        name: "Tổng hợp việc làm Canada",
        path: "/tuyển-dụng/tổng-hợp-việc-làm-canada",
      },
      {
        provider: "internal",
        name: "Công nhân trại gà",
        path: "/tuyển-dụng/công-nhân-trại-gà",
      },
      {
        provider: "internal",
        name: "Đầu bếp Món Âu",
        path: "/tuyển-dụng/dầu-bếp-món-au",
      },
    ],
  },

  {
    name: "Công Việc",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Công Việc",
        path: "/hot-job",
      },
    ],
  },

  {
    name: "Việc kinh doanh",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Việc kinh doanh",
        path: "/doanh-nghiệp",
      },
    ],
  },
  {
    name: "Bảo Lãnh",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Bảo Lãnh",
        path: "/bảo-lãnh",
      },
    ],
  },
  {
    name: "Du-học",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Du Học",
        path: "/du-học",
      },
    ],
  },
  {
    name: "Cau Hoi",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Cau Hoi",
        path: "/thông-tin-hữu-ích/câu-hỏi-thường-gặp",
      },
    ],
  },
  {
    name: "Tin Tức",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Tin Tức",
        path: "/tin-tức",
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
    path: "Nhập cư Canada",
    // path: "Định cư Canada",

    children: [
      {
        path: "Express Entry",
        element: `Express Entry`,
        children: [
          {
            path: "/immigration/express-entry/federal-skilled-worker",
            element: "Fedral Skilled Worker (FSW)",
          },
          {
            path: "/immigration/express-entry/federal-skilled-trade",
            element: "Fedral Skilled Trade (FST)",
          },
          {
            path: "/immigration/express-entry/canadian-experience-class",
            element: "Canadian Experience Class (CEC)",
          },
          {
            path: "/immigration/express-entry/crs-score-calculation",
            element: "CRS Score Calculation",
          },
        ],
      },

      {
        path: "/immigration/việc-làm-định-cư",
        element: "Việc làm định cư",
        // element: "Immigration work",
      },
      {
        path: "/immigration/du-hoc-dinh-cu",
        element: "Du học – định cư",
        // element: "Study abroad - settlement",
      },
      {
        path: "/immigration/doanh-nghiệp-C11-visa",
        element: "Doanh nghiệp C11 Visa",
        // element: "C11 Visa Business",
      },
      {
        path: "/immigration/start-up-visa",
        element: "Visa khởi nghiệp",
      },
      {
        path: "/immigration/bảo-lãnh-gia-đình",
        element: "Bảo lãnh gia đình",
        // element: "Family sponsorship",
      },
      {
        path: "/immigration/khách-hàng-thành-công",
        element: "Khách hàng thành công",
        // element: "Customer Success",
      },
    ],
  },
  {
    path: "Chương trình đề cử cấp tỉnh",
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
        path: "/dề-cử-tỉnh-bang-pnp/ontario-oinp",
        element: "Ontario (OINP)",
      },

      {
        path: "/dề-cử-tỉnh-bang-pnp/manitoba-mpnp",
        element: "Manitoba (MPNP)",
      },
      {
        path: "/dề-cử-tỉnh-bang-pnp/new-brunswick-nbpnp",
        element: "New Brunswick (NBPNP)",
      },
      // {
      //   path: "/dề-cử-tỉnh-bang-pnp/newfoundland-and-labrador",
      //   element: "Newfoundland and Labrador",
      // },

      // {
      //   path: "/dề-cử-tỉnh-bang-pnp/northwest-territories",
      //   element: "Northwest Territories",
      // },
      {
        path: "/dề-cử-tỉnh-bang-pnp/nova-scotia-nsnp",
        element: "Nova Scotia (NSNP)",
      },
      // {
      //   path: "/dề-cử-tỉnh-bang-pnp/nanuvut",
      //   element: "Nanuvut",
      // },

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
    path: "Cuộc sống Canada",
    // path: "Cuộc sống Canada",
    children: [
      {
        path: "Canadian Provinces",
        // path: "Các tỉnh bang Canada",
        children: [
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/albertaP",
            element: "Alberta (AAIP)",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/brcolumbiaP",
            element: "British Colombia (BC PNP)",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/manitobaP",
            element: "Manitoba (MPNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/new-brunswickP",
            element: "New Brunswick (NBPNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/newfoundland-labradorP",
            element: "Newfoundland and Labrador",
          },

          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/northwest-territoriesP",
            element: "Northwest Territories",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nova-scotiaP",
            element: "Nova Scotia (NSNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/nunavutP",
            element: "Nunavut",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/ontarioP",
            element: "Ontario (OINP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/prince-edwardP",
            element: "Prince Edward Island (PEI PNP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/quebecP",
            element: "Quebec",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/saskatchewanP",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/cuộc-sống-canada/các-tỉnh-bang-canada/yukonP",
            element: "Yukon (YNP)",
          },
        ],
      },
      {
        path: "/cuộc-sống-canada/môi-trường-canada",
        // element: "Environment Canada",
        element: "Môi Trường Canada",
      },
      {
        path: "/cuộc-sống-canada/văn-hóa-tôn-giáo",
        // element: "Culture & Education",
        element: "Văn hóa & tôn giáo",
      },
      {
        path: "/cuộc-sống-canada/y-tế",
        // element: "Medical",
        element: "Y Tế",
      },
      {
        path: "/cuộc-sống-canada/giáo-dục-canada",
        // element: "Canadian Education",
        element: "Giáo dục Canada",
      },
      {
        path: "/cuộc-sống-canada/tỷ-giá-đô-canada",
        // element: "Canadian Dollar Exchange Rate",
        element: " Tỷ giá đô Canada",
      },

      {
        path: "/cuộc-sống-canada/chính-sách-thuế",
        element: "Tax Policy",
        // element: "Chính sách thuế",
      },
    ],
  },

  {
    path: "Thông tin hữu ích",
    // path: "Thông tin hữu ích",
    children: [
      {
        path: "/thông-tin-hữu-ích/câu-hỏi-thường-gặp",
        element: "Câu hỏi thường gặp",
        // element: "FAQ",
      },

      {
        path: "/thông-tin-hữu-ích/trang-web-hữu-ích",
        element: "Trang web hữu ích",
        // element: "Useful Website",
      },

      {
        path: "/thông-tin-hữu-ích/thuật-ngữ-trong-di-trú",
        element: "Thuật ngữ trong di trú",
        // element: "Immigration terminology",
      },

      {
        path: "/thông-tin-hữu-ích/CLB-là-gì",
        element: "CLB là gì? Cách quy đổi điểm đương đương?",
        // element: "What is CLB? How to convert equivalent points?",
      },
    ],
  },
  {
    path: "tuyển dụng",
    // path:"Tuyển dụng",
    children: [
      {
        path: "/tuyển-dụng/làm-việc-cho-icanpr",
        element: "Làm việc cho iCanPR",
        // element: "Work for ICanPR",
      },
      {
        path: "/tuyển-dụng/tổng-hợp-việc-làm-canada",
        element: "Tổng hợp việc làm Canada",
        // element: "Canada Jobs Summary",
      },
      {
        path: "/tuyển-dụng/công-nhân-trại-gà",
        element: "Công nhân trại gà",
        // element: "Chicken farm Worker",
      },
      {
        path: "/tuyển-dụng/dầu-bếp-món-au",
        element: "Đầu bếp Món Âu",
        // element: "European Chef",
      },
    ],
  },
];
