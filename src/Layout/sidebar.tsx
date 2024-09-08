import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed text-white/80  z-50 top-0 right-0 w-[104px] h-screen bg-background ">
      <Link
        unstable_viewTransition
        to="/"
        className="flex py-5   bg-highlight flex-col gap-2 justify-center items-center shadow-xl"
      >
        <Icon
          icon="material-symbols:android-google-home"
          className="w-10 text-2xl font-light "
        />
        <span className="font-light text-base"> HOME </span>
      </Link>

      <div className="flex flex-col h-[85%] gap-6 py-5">
        <Link
          unstable_viewTransition
          to="/immigration/việc-làm-định-cư"
          className="flex py-2  flex-col gap-2 justify-center items-center px-5 flex-1 border-b border-white/10"
        >
          <Icon
            icon="mdi:briefcase-outline"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xs"> JOBS </span>
        </Link>
        <Link
          unstable_viewTransition
          to="/immigration/du-hoc-dinh-cu"
          className="flex py-2 flex-1  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="guidance:study-room"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xs leading-none">
            {" "}
            STUDY ABROAD{" "}
          </span>
        </Link>
        <Link
          unstable_viewTransition
          to="/immigration/doanh-nghiệp-C11-visa"
          className="flex py-2 flex-1  flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xs leading-none"> BUSINESS </span>
        </Link>
        <Link
          unstable_viewTransition
          to=""
          className="flex py-2  flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10"
        >
          <Icon
            icon="material-symbols:breaking-news-outline-sharp"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xs leading-none"> NEWS </span>
        </Link>
        <Link
          unstable_viewTransition
          to="/thông-tin-hữu-ích/câu-hỏi-thường-gặp"
          className="flex py-2 flex-1  flex-col gap-2 justify-center items-center px-5"
        >
          <Icon
            icon="mdi:frequently-asked-questions"
            className="w-10 text-xl font-light "
          />
          <span className="font-light text-xs leading-none"> QUESTIONS </span>
        </Link>
      </div>
    </div>
  );
}
