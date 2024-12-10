import HeaderSection from "./HeaderSection";
import ApplySection from "./ApplySection";
import CarsSection from "./CarsSection";
import HowItWorks from "./HowItWorks";
import HowItWorks1 from "./HowItWorks1";
import HowItWorks2 from "./HowItWorks2";

const EarnWithUsPage = () => {
  return (
    <div className="pb-[160px]">
      <HeaderSection />
      <ApplySection />

      <CarsSection />
      <div className="   m-24 h-px  bg-gradient-to-r from-[#00000000] via-green to-[#00000000]"></div>
      <HowItWorks />
      <HowItWorks1 />
      <HowItWorks2 />
    </div>
  );
};

export default EarnWithUsPage;
