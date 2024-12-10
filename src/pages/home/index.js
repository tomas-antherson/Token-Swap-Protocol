import { BrandsSection } from "./brands";
import { ClientsSection } from "./clients";
import { HeroSection } from "./hero";
import { HowSection } from "./how";
import { PopularSection } from "./popular";
import { RideSection } from "./ride";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <RideSection />
      <HowSection />
      <PopularSection />
      <ClientsSection />
    </>
  );
};

export default Home;
