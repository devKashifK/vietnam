import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import HeroDefault from "@/components/ui/hero-all";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import { supabase } from "@/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const Layout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const path = decodeURIComponent(pathSegments[pathSegments.length - 1]);

  const { data, error } = useQuery({
    queryKey: ["hero", path],
    queryFn: async () => await getHeroInfo(path),
  });

  console.log(data, "CheckData");
  return (
    <>
      <Sidebar />
      <div
        className="layout relative mx-auto flex justify-center items-center flex-col  w-full bg-cover bg-gray-100
      "
        // bg-gradient-to-r from-neutral-300 to-stone-400
        // bg-gradient-to-r from-rose-100 to-teal-100
        // bg-gradient-to-r from-blue-100 to-cyan-300
        // bg-gradient-to-r
        // from-yellow-200
        // to-orange-300
        // bg-gradient-to-r from-blue-100 to-cyan-300

        // bg-gradient-to-r from-[#7AB1BA] to-[#777474]
      >
        <div className="flex flex-col w-[100%] relative z-10">
          {location.pathname === "/" ? (
            <Hero />
          ) : (
            <HeroDefault
              path={path}
              text={data && data.text}
              img={data && data.image}
            />
          )}
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

const text = {
  "/": "We are a team of professionals who are passionate about helping you achieve",
  about: {
    text: "GreenTech Resources Worldwide <br /> Canada",
    image: "/about.png",
  },
  ["tin-tức"]: {
    text: "Tin tức",
    image: "/news.jpg",
  },
  ["việc-làm"]: {
    text: "Việc làm",
    image: "/hero-2.jpg",
  },
  ["bảo-lãnh"]: {
    text: "Bảo lãnh",
    image: "/about.png",
  },

  ["doanh-nghiệp"]: {
    text: "Doanh Nghiệp",
    image: "/service.jpg",
  },

  ["tư-vấn"]: {
    text: "Tư vấn",
    image: "/service.jpg",
  },
  ["dịch-vụ"]: {
    text: "Dịch vụ",
    image: "/service.jpg",
  },
  ["học-tập"]: {
    text: "Học tập",
    image: "/study.jpg",
  },
  "du-học": {
    text: "Du Học",
    image: "/expressEntry.png",
  },
  ["lao-động"]: {
    text: "Lao động",
    image: "/canada.jpg",
  },
  ["ve-icanpr"]: {
    text: "Về iCanPR",
    image: "/about.png",
  },
  ["doi-tac-icanpr"]: {
    text: "Đối tác iCanPR",
    image: "/service.jpg",
  },
  ["lien-he"]: {
    text: "Liên hệ",
    image: "/successcustomers.png",
  },

  // "our-success-customers": {
  //   text: "Our Success Stories",
  //   image: "/successcustomers.png",
  // },

  // "book-appointment": {
  //   text: "Book an Appointment",
  //   image: "/service.jpg",
  // },
  // "why-choose-us": {
  //   text: "Why Choose Us",
  //   image: "/about.png",
  // },
  // "our-service": {
  //   text: "Our <br /> Services",
  //   image: "/service.jpg",
  // },
  // "certificate-membership": {
  //   text: "Certification and Membership",
  //   image: "/about.png",
  // },
  // "customer-testimonials": {
  //   text: "Please Rate Our Quality",
  //   image: "/testimonial.jpg",
  // },
  "express-entry": {
    text: "Express Entry",
    image: "/expressEntry.png",
  },

  "federal-skilled-trade": {
    text: "Federal Skilled Trades Program",
    image: "/federalSkill.png",
  },
  "federal-skilled-worker": {
    text: "Federal Skilled Worker Program",
    image: "/federalSkill.png",
  },
  "canadian-experience-class": {
    text: "Canadian Experience Class",
    image: "/federalSkill.png",
  },
  "crs-score-calculation": {
    text: "CRS Score Calculation",
    image: "/federalSkill.png",
  },
  ["việc-làm-định-cư"]: {
    text: "Việc làm định cư",
    image: "/federalSkill.png",
  },
  ["du-hoc-dinh-cu"]: {
    text: "Du học - định cư",
    image: "/federalSkill.png",
  },
  ["doanh-nghiệp-C11-visa"]: {
    text: "Doanh nghiệp C11 Visa",
    image: "/federalSkill.png",
  },
  "start-up-visa": {
    text: "Start Up Visa",
    image: "/federalSkill.png",
  },
  ["bảo-lãnh-gia-đình"]: {
    text: "Bảo lãnh gia đình",
    image: "/federalSkill.png",
  },
  ["khách-hàng-thành-công"]: {
    text: "Khách hàng thành công",
    image: "/federalSkill.png",
  },

  "dề-cử-tỉnh-bang-pnp": {
    text: "Provincial Nominee Programs",
    image: "/immigrationProvincial.png",
  },
  "alberta-immigration-aaip": {
    text: "Alberta Immigration (AAIP)",
    image: "/alberta.png",
  },

  "british-columbia-bcpnp": {
    text: "British Columbia (BC PNP)",
    image: "/british.jpg",
  },
  "ontario-oinp": {
    text: "Ontario (OINP)",
    image: "/ontario.png",
  },
  "manitoba-mpnp": {
    text: "Manitoba (MPNP)",
    image: "/manitoba.png",
  },
  "new-brunswick-nbpnp": {
    text: "New Brunswick (NB PNP)",
    image: "/newbrunswick.png",
  },
  // "newfoundland-and-labrador": {
  //   text: "Newfoundland and Labrador",
  //   image: "/newbrunswick.png",
  // },

  // "northwest-territories": {
  //   text: "Northwest Territories",
  //   image: "/northwestterritories.png",
  // },
  "nova-scotia-nsnp": {
    text: "Nova Scotia (NSNP)",
    image: "/novaScotia.jpg",
  },
  "prince-edward-island-peipnp": {
    text: "Prince Edward Island (PEI PNP)",
    image: "/novaScotia.jpg",
  },
  "saskatchewan-sinp": {
    text: "Saskatchewan (SINP)",
    image: "/saskatchewan.jpg",
  },

  quebec: {
    text: "Quebec (PNP)",
    image: "/northwestterritories.png",
  },
  path: "các-tỉnh-bang-canada",

  "yukon-ynp": {
    text: "Yukon (YNP)",
    image: "/yukon.jpg",
  },
  albertaP: {
    text: "Alberta Province",
    image: "/alberta.png",
  },
  brcolumbiaP: {
    text: "British Colombia (BC PNP)",
    image: "/british.jpg",
  },
  manitobaP: {
    text: "Manitoba Province",
    image: "/manitoba.png",
  },
  "new-brunswickP": {
    text: "New Brunswick Province",
    image: "/newbrunswick.png",
  },
  "newfoundland-labradorP": {
    text: "Newfoundland and Labrador",
    image: "/newbrunswick.png",
  },
  "northwest-territoriesP": {
    text: "Northwest Territories Province",
    image: "/northwestterritories.png",
  },
  "nova-scotiaP": {
    text: "Nova Scotia Province",
    image: "/novaScotia.jpg",
  },
  nunavutP: {
    text: "Nunavut Province",
    image: "/novaScotia.jpg",
  },
  ontarioP: {
    text: "Ontario Province",
    image: "/ontario.png",
  },
  "prince-edwardP": {
    text: "Prince Edward Island Province",
    image: "/novaScotia.jpg",
  },
  saskatchewanP: {
    text: "Saskatchewan Province",
    image: "/saskatchewan.jpg",
  },
  yukonP: {
    text: "Yukon Province",
    image: "/yukon.jpg",
  },
  quebecP: {
    text: "Quebec Province",
    image: "/northwestterritories.png",
  },
  ["môi-trường-canada"]: {
    text: "Môi trường Canada",
    image: "/about.png",
  },
  ["văn-hóa-tôn-giáo"]: {
    text: "Văn hóa & tôn giáo",
    image: "/canada.jpg",
  },
  ["giáo-dục-canada"]: {
    text: "Giáo dục Canada",
    image: "/alberta.png",
  },
  ["y-tế"]: {
    text: "Y Tế",
    image: "/canada.jpg",
  },
  ["tỷ-giá-đô-canada"]: {
    text: "Tỷ giá đô Canada",
    image: "/about.png",
  },
  ["chính-sách-thuế"]: {
    text: "Chính sách thuế",
    image: "/saskatchewan.jpg",
  },
  ["câu-hỏi-thường-gặp"]: {
    text: "Câu hỏi thường gặp",
    image: "/about.png",
  },
  ["trang-web-hữu-ích"]: {
    text: "Trang web hữu ích",
    image: "/about.png",
  },
  ["thuật-ngữ-trong-di-trú"]: {
    image: "/about.png",
    text: "Thuật ngữ trong di trú",
  },
  ["CLB-là-gì"]: {
    text: "CLB là gì? Cách quy đổi điểm đương đương?",
    image: "/canada.jpg",
  },
  ["làm-việc-cho-icanpr"]: {
    text: "Làm việc cho iCanPR",
    image: "/about.png",
  },
  ["tổng-hợp-việc-làm-canada"]: {
    text: "Tổng hợp việc làm Canada",
    image: "/about.png",
  },
  ["công-nhân-trại-gà"]: {
    text: "Công nhân trại gà",
    image: "/about.png",
  },
  ["dầu-bếp-món-au"]: {
    text: "Đầu bếp Món Âu",
    image: "/about.png",
  },
  ["lmia-map"]: {
    text: "LMIA Map",
    image: "/lmia.jpg",
  },
  ["hot-job"]: {
    text: "Hot JOB",
    image: "/work.jpg",
  },
};

const getHeroInfo = async (path) => {
  if (path && text[path]) {
    return text[path];
  } else {
    const { data, error } = await supabase
      .from("pages")
      .select("name,description,image")
      .eq("slug", path)
      .single();
    if (data) {
      return {
        text: data.name,
        image: data.image || "/british.jpg",
      };
    } else {
      throw new Error("Data not found");
    }
  }
};
