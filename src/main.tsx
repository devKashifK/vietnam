import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/layout.tsx";
import About from "./pages/about/about.tsx";
import OurService from "./pages/about/our-service.tsx";
import CertificateMembership from "./pages/about/certificate-membership.tsx";
import WhyChooseUs from "./pages/about/why-choose-us.tsx";
import CustomerTestimonials from "./pages/about/customer-testimonials.tsx";
import BookAppointment from "./pages/about/book-appointment.tsx";
import FedralSkilledWorker from "./pages/immigration/express-entry/federal-skilled-worker.tsx";
import FedralSkilledTrade from "./pages/immigration/express-entry/federal-skilled-trade.tsx";
import CanadianExperienceClass from "./pages/immigration/express-entry/canadian-express-class.tsx";
import ImmigrationChallenges from "./pages/immigration/immigration-challenges/page.tsx";
import Alberta from "./pages/provincial-nominee-programs/alberta-immigration-aaip.tsx";
import Atlantic from "./pages/provincial-nominee-programs/atlantic-immigration-aipp.tsx";
import BritishColumbia from "./pages/provincial-nominee-programs/british-columbia-bcpnp.tsx";
import Ontario from "./pages/provincial-nominee-programs/ontario-oinp.tsx";
import Manitoba from "./pages/provincial-nominee-programs/manitoba-mpnp.tsx";
import NewBrunswick from "./pages/provincial-nominee-programs/new-brunswick-nbpnp.tsx";
import Saskatchewan from "./pages/provincial-nominee-programs/sasketchewan-sinp.tsx";
import NewFoundlandLabrador from "./pages/provincial-nominee-programs/newfoundland-and-labrador.tsx";
import NorthwestTerritories from "./pages/provincial-nominee-programs/northwest-territories.tsx";
import NovaScotia from "./pages/provincial-nominee-programs/nova-scotia-nsnp.tsx";
import PrinceEdwardIsland from "./pages/provincial-nominee-programs/prince-edward-island-peipnp.tsx";
import RuralNorthern from "./pages/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip.tsx";
import Yukon from "./pages/provincial-nominee-programs/yukon-ynp.tsx";
import { LanguageProvider } from "./context/LanguageProvider.tsx";
import PostGraduateWorkPermit from "./pages/study/post-graduate-work-permit.tsx";
import StudyInCanada from "./pages/study/study-in-canada.tsx";
import PathwayFromStudyToPr from "./pages/study/pathway-from-study-to-pr.tsx";
import DesignatedLearningInstitution from "./pages/study/designated-learning-institution.tsx";
import StudentDirectStream from "./pages/study/student-direct-stream.tsx";
import WorkPermit from "./pages/work-and-jobs/work-permit.tsx";
import InternationalMobilityProgram from "./pages/work-and-jobs/international-mobility-program.tsx";
import InDemandJobs from "./pages/work-and-jobs/in-demand-jobs.tsx";
import SupportForEmployers from "./pages/work-and-jobs/support-for-employers.tsx";
import Lmia from "./pages/work-and-jobs/lmia.tsx";
import CaregiverProgram from "./pages/work-and-jobs/caregiver-program.tsx";
import TeerCategoriesAndNoc from "./pages/work-and-jobs/teer-categories-and-noc.tsx";
import FamilySponsorship from "./pages/family-sponsorship/page.tsx";
import Visitor from "./pages/visitor/page.tsx";
// import SelfEmployed from "./pages/business/quebec/quebec-self-employed.tsx";
import IntraCompanyTransfer from "./pages/business/federal-programs/intra-company-transfer.tsx";
import BenefitToCanada from "./pages/business/federal-programs/benefit-to-canada.tsx";
import OwnerOperator from "./pages/business/federal-programs/owner-operator.tsx";
import SelfEmployedPersons from "./pages/business/federal-programs/self-employed-persons.tsx";
import QuebecEntrepreneur from "./pages/business/quebec/quebec-entrepreneur.tsx";
import QuebecInvestor from "./pages/business/quebec/quebec-investor.tsx";
import WorkAndJobs from "./pages/work-and-jobs/page.tsx";
import OurSuccessCustomers from "./pages/immigration/success-customers.tsx";
import Price from "./pages/price/price.tsx";
import News from "./pages/news/news.tsx";
import Post from "./pages/news/post.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./pages/about/contact.tsx";
import Business from "./pages/business/business.tsx";
import StudyAbraod from "./pages/study-abroad/study-abroad.tsx";
import JobPage from "./pages/job/job.tsx";
import Guarantee from "./pages/guarantee/guarantee.tsx";
import Partners from "./pages/about/partners.tsx";
import CRSScoreCalculation from "./pages/immigration/express-entry/crs-score-calculation.tsx";
import ImmigrationWork from "./pages/immigration/immigration-work.tsx";
import StudyAbroadSettlement from "./pages/immigration/study-abroad-settlement.tsx";
import VisaBusiness from "./pages/immigration/visa-business.tsx";
import SuccessCustomers from "./pages/immigration/success-customers.tsx";
import StartUpVisa from "./pages/immigration/start-up-visa.tsx";
import Quebec from "./pages/provincial-nominee-programs/quebec.tsx";
import AlbertaP from "./pages/canadian-life/canadian-provinces/albertaP.tsx";
import BrcolumbiaP from "./pages/canadian-life/canadian-provinces/brcolumbiaP.tsx";
import ManitobaP from "./pages/canadian-life/canadian-provinces/manitobaP.tsx";
import NewBrunswickP from "./pages/canadian-life/canadian-provinces/new-brunswickP.tsx";
import NewfoundlandLabradorP from "./pages/canadian-life/canadian-provinces/newfoundland-labradorP.tsx";
import NorthwestTerritoriesP from "./pages/canadian-life/canadian-provinces/northwest-territoriesP.tsx";
import NovaScotiaP from "./pages/canadian-life/canadian-provinces/nova-scotiaP.tsx";
import NunavutP from "./pages/canadian-life/canadian-provinces/nunavutP.tsx";
import OntarioP from "./pages/canadian-life/canadian-provinces/ontarioP.tsx";
import PrinceEdwardP from "./pages/canadian-life/canadian-provinces/prince-edwardP.tsx";
import SaskatchewanP from "./pages/canadian-life/canadian-provinces/saskatchewanP.tsx";
import QuebecP from "./pages/canadian-life/canadian-provinces/quebecP.tsx";
import YukonP from "./pages/canadian-life/canadian-provinces/yukonP.tsx";
import EnvCanada from "./pages/canadian-life/env-canada.tsx";
import CultureReligion from "./pages/canadian-life/culture-religion.tsx";
import Medical from "./pages/canadian-life/medical.tsx";
import Education from "./pages/canadian-life/education.tsx";
import ExchangeRate from "./pages/canadian-life/exchange-rate.tsx";
import TaxPolicy from "./pages/canadian-life/tax-policy.tsx";
import FaqUseful from "./pages/useful-info/faqUseful.tsx";
import UsefulWebsite from "./pages/useful-info/useful-website.tsx";
import ImmigrationTerms from "./pages/useful-info/immigration-terms.tsx";
import WhatIsCLB from "./pages/useful-info/what-is-clb.tsx";
import WorkFor from "./pages/recruitment/work-for.tsx";
import JobsSummary from "./pages/recruitment/jobs-summary.tsx";
import ChickenFarmWorker from "./pages/recruitment/chicken-farm-worker.tsx";
import EuropeanChef from "./pages/recruitment/european-chef.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "ve-icanpr",
        element: <About />,
      },
      {
        path: "doi-tac-icanpr",
        element: <Partners />,
      },
      {
        path: "lien-he",
        element: <Contact />,
      },
    ],
  },
  {
    path: "immigration",
    element: <Layout />,
    children: [
      {
        path: "express-entry",
        children: [
          {
            path: "federal-skilled-worker",
            element: <FedralSkilledWorker />,
          },
          {
            path: "federal-skilled-trade",
            element: <FedralSkilledTrade />,
          },
          {
            path: "canadian-experience-class",
            element: <CanadianExperienceClass />,
          },
          {
            path: "crs-score-calculation",
            element: <CRSScoreCalculation />,
          },
        ],
      },
      {
        path: "việc-làm-định-cư",
        element: <ImmigrationWork />,
      },
      {
        path: "du-hoc-dinh-cu",
        element: <StudyAbroadSettlement />,
      },
      {
        path: "doanh-nghiệp-C11-visa",
        element: <VisaBusiness />,
      },
      {
        path: "start-up-visa",
        element: <StartUpVisa />,
      },
      {
        path: "bảo-lãnh-gia-đình",
        element: <FamilySponsorship />,
      },
      {
        path: "khách-hàng-thành-công",
        element: <SuccessCustomers />,
      },
    ],
  },

  {
    path: "dề-cử-tỉnh-bang-pnp",
    element: <Layout />,
    children: [
      {
        path: "alberta-immigration-aaip",
        element: <Alberta />,
      },
      {
        path: "british-columbia-bcpnp",
        element: <BritishColumbia />,
      },
      {
        path: "ontario-oinp",
        element: <Ontario />,
      },
      {
        path: "manitoba-mpnp",
        element: <Manitoba />,
      },
      {
        path: "new-brunswick-nbpnp",
        element: <NewBrunswick />,
      },
      // {
      //   path: "newfoundland-and-labrador",
      //   element: <NewFoundlandLabrador />,
      // },

      // {
      //   path: "northwest-territories",
      //   element: <NorthwestTerritories />,
      // },
      {
        path: "nova-scotia-nsnp",
        element: <NovaScotia />,
      },
      {
        path: "prince-edward-island-peipnp",
        element: <PrinceEdwardIsland />,
      },
      {
        path: "saskatchewan-sinp",
        element: <Saskatchewan />,
      },

      {
        path: "quebec",
        element: <Quebec />,
      },

      {
        path: "yukon-ynp",
        element: <Yukon />,
      },
    ],
  },

  {
    path: "cuộc-sống-canada",
    element: <Layout />,

    children: [
      {
        path: "các-tỉnh-bang-canada",
        children: [
          {
            path: "albertaP",
            element: <AlbertaP />,
          },
          {
            path: "atlantic-immigration-aipp",
            element: <Atlantic />,
          },
          {
            path: "brcolumbiaP",
            element: <BrcolumbiaP />,
          },

          {
            path: "manitobaP",
            element: <ManitobaP />,
          },
          {
            path: "new-brunswickP",
            element: <NewBrunswickP />,
          },
          {
            path: "newfoundland-labradorP",
            element: <NewfoundlandLabradorP />,
          },
          {
            path: "northwest-territoriesP",
            element: <NorthwestTerritoriesP />,
          },
          {
            path: "nova-scotiaP",
            element: <NovaScotiaP />,
          },
          {
            path: "nunavutP",
            element: <NunavutP />,
          },
          {
            path: "ontarioP",
            element: <OntarioP />,
          },
          {
            path: "saskatchewanP",
            element: <SaskatchewanP />,
          },

          {
            path: "prince-edwardP",
            element: <PrinceEdwardP />,
          },
          {
            path: "quebecP",
            element: <QuebecP />,
          },

          {
            path: "yukonP",
            element: <YukonP />,
          },
        ],
      },
      {
        path: "môi-trường-canada",
        element: <EnvCanada />,
      },
      {
        path: "văn-hóa-tôn-giáo",
        element: <CultureReligion />,
      },
      {
        path: "giáo-dục-canada",
        element: <Education />,
      },
      {
        path: "y-tế",
        element: <Medical />,
      },
      {
        path: "tỷ-giá-đô-canada",
        element: <ExchangeRate />,
      },
      {
        path: "chính-sách-thuế",
        element: <TaxPolicy />,
      },
    ],
  },
  {
    path: "thông-tin-hữu-ích",
    element: <Layout />,
    children: [
      {
        path: "câu-hỏi-thường-gặp",
        element: <FaqUseful />,
      },
      {
        path: "trang-web-hữu-ích",
        element: <UsefulWebsite />,
      },
      {
        path: "thuật-ngữ-trong-di-trú",
        element: <ImmigrationTerms />,
      },
      {
        path: "CLB-là-gì",
        element: <WhatIsCLB />,
      },
    ],
  },
  {
    path: "tuyển-dụng",
    element: <Layout />,
    children: [
      {
        path: "làm-việc-cho-icanpr",
        element: <WorkFor />,
      },
      {
        path: "tổng-hợp-việc-làm-canada",
        element: <JobsSummary />,
      },
      {
        path: "công-nhân-trại-gà",
        element: <ChickenFarmWorker />,
      },
      {
        path: "dầu-bếp-món-au",
        element: <EuropeanChef />,
      },
    ],
  },

  {
    path: "doanh-nghiệp",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Business />,
      },
    ],
  },
  {
    path: "việc-làm",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <JobPage />,
      },
    ],
  },

  {
    path: "bảo-lãnh",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Guarantee />,
      },
    ],
  },

  {
    path: "du-học",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StudyAbraod />,
      },
    ],
  },
  {
    path: "/tin-tức",
    element: <Layout />,
    children: [
      {
        path: "/tin-tức",
        element: <News />,
      },
      {
        path: "/tin-tức/:postId",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// Book Appointment
// why choose us fix
// contact
// start reviewing from immigration
