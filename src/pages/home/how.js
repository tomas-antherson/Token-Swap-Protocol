import How from "../../components/how";

export const HowSection = () => {
  return (
    <div className="p-12 md:px-32 md:py-16 max-w-[1440px] m-auto">
      <div className="text-white text-2xl md:text-5xl font-semibold font-syne leading-6 md:leading-[60.48px] tracking-tight text-left">
        How It Works
      </div>
      <div className="text-[#A1A1A1] text-sm md:text-xl leading-[21px] md:leading-[30px] tracking-tight font-syne font-normal text-left mt-6">
        It is a long established fact that a reader will be distracted by
        <br />
        the readable content of a page when looking at its layout.
      </div>
      <div className="flex flex-col md:flex-row gap-16 mt-12 md:mt-24">
        <div className="flex flex-col gap-5 flex-1">
          <How
            icon={"car"}
            title={"Discover Your Perfect Car"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus."
            }
          />
          <How
            icon={"calendar"}
            title={"Secure Your Rental Booking"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus."
            }
          />
          <How
            icon={"card"}
            title={"Complete Your Booking Payment"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus."
            }
          />
          <How
            icon={"check"}
            title={"Your Booking Is Confirmed"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus."
            }
          />
        </div>
        <div className="flex-1 bg-[url('assets/images/how-car.jpg')] bg-cover"></div>
      </div>
    </div>
  );
};
