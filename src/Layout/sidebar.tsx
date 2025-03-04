import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const path1 = decodeURIComponent(pathSegments[pathSegments.length - 1]);

  const isActive = (path) => path1 === path;

  return (
    <div className="hidden lg:flex flex-col fixed text-white/80 z-50 top-0 right-0 w-[104px] h-screen bg-background">
      <Link
        unstable_viewTransition
        to="/"
        className={`flex py-5 flex-col gap-2 justify-center items-center  ${
          location.pathname === "/"
            ? "bg-highlight  text-background  shadow-xl"
            : ""
        }`}
      >
        <Icon
          icon="material-symbols:android-google-home"
          className="w-10 text-2xl font-light"
        />
        <span className="font-light text-base">TRANG CHỦ</span>
      </Link>

      <div className="flex flex-col h-[85%]  py-2">
        <div
          className={`flex-1 border-b flex  flex-col gap-2 justify-center items-center border-white/10 ${
            isActive("việc-làm-định-cư")
              ? "bg-highlight  text-background  shadow-xlflex-1"
              : ""
          }`}
        >
          <Link
            unstable_viewTransition
            to="/immigration/việc-làm-định-cư"
            className={` px-5   flex justify-center items-center gap-2 flex-col `}
          >
            <Icon
              icon="mdi:briefcase-outline"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs leading-none w-20">
              CÔNG VIỆC
            </span>
          </Link>
        </div>
        <div
          className={`flex border-b border-white/10  flex-1 flex-col gap-2 justify-center items-center ${
            isActive("du-hoc-dinh-cu") ? "bg-highlight  text-background" : ""
          }`}
        >
          <Link
            unstable_viewTransition
            to="/immigration/du-hoc-dinh-cu"
            className={` px-5  flex justify-center items-center gap-2 flex-col`}
          >
            <Icon
              icon="guidance:study-room"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs w-20 leading-none">DU HỌC</span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10 ${
            isActive("doanh-nghiệp-C11-visa")
              ? "bg-highlight  text-background"
              : ""
          }`}
        >
          <Link
            unstable_viewTransition
            to="/immigration/doanh-nghiệp-C11-visa"
            className={` px-5  flex justify-center items-center gap-2 flex-col`}
          >
            <Icon
              icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs w-20 leading-none">
              VIỆC KINH DOANH
            </span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10  ${
            isActive("tin-tức") ? "bg-highlight  text-background" : ""
          }`}
        >
          <Link
            unstable_viewTransition
            to="/tin-tức"
            className={`flex py-2 flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10 `}
          >
            <Icon
              icon="material-symbols:breaking-news-outline-sharp"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs w-20 leading-none">
              TIN TỨC
            </span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10  ${
            isActive("câu-hỏi-thường-gặp")
              ? "bg-highlight  text-background"
              : ""
          }`}
        >
          <Link
            unstable_viewTransition
            to="/thông-tin-hữu-ích/câu-hỏi-thường-gặp"
            className={`flex py-2 flex-1 flex-col gap-2 justify-center items-center px-5 `}
          >
            <Icon
              icon="mdi:frequently-asked-questions"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs w-20 leading-none">
              CÂU HỎI
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
