import Client from "../../components/client";

export const ClientsSection = () => {
  return (
    <div className="py-16">
      <div className="px-12 md:px-32 text-white text-2xl md:text-5xl font-semibold font-syne leading-6 md:leading-[60.48px] tracking-tight text-left m-auto max-w-[1440px]">
        What’s Our Client’s Says
      </div>
      <div className="px-12 md:px-32 text-[#A1A1A1] text-sm md:text-xl leading-[21px] md:leading-[30px] tracking-tight font-syne font-normal text-left mt-6 m-auto max-w-[1440px]">
        Founded in Southern California, our mission is to offer an unparalleled
        fleet of high-performance and exotic
        <br />
        vehicles that turn heads and ignite passions.
      </div>
      <div className="mt-24 overflow-hidden marquee flex flex-row h-56">
        <div className="marquee-inner grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 absolute top-0 overflow-hidden left-full w-full pl-8 md:pl-0">
          {Array(7)
            .fill(1)
            .map((_, index) => (
              <Client
                key={index}
                name={"Steve Smith"}
                resp={"Director"}
                desc={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                }
                stars={5}
                avatar={"/images/Ellipse 328.png"}
              />
            ))}
        </div>
        <div className="marquee-inner marquee-inner2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 absolute top-0 overflow-hidden left-full w-full pl-8 md:pl-0">
          {Array(7)
            .fill(1)
            .map((_, index) => (
              <Client
                key={index}
                name={"Steve Smith"}
                resp={"Director"}
                desc={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                }
                stars={5}
                avatar={"/images/Ellipse 328.png"}
              />
            ))}
        </div>
      </div>
      <div className="mt-5 overflow-hidden marquee-revert flex flex-row h-56">
        <div className="marquee-revert-inner grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 absolute top-0 overflow-hidden right-full w-full pl-8 md:pl-0">
          {Array(7)
            .fill(1)
            .map((_, index) => (
              <Client
                key={index}
                name={"Steve Smith"}
                resp={"Director"}
                desc={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                }
                stars={5}
                avatar={"/images/Ellipse 328.png"}
              />
            ))}
        </div>
        <div className="marquee-revert-inner marquee-revert-inner2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 absolute top-0 overflow-hidden right-full w-full pl-8 md:pl-0">
          {Array(7)
            .fill(1)
            .map((_, index) => (
              <Client
                key={index}
                name={"Steve Smith"}
                resp={"Director"}
                desc={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                }
                stars={5}
                avatar={"/images/Ellipse 328.png"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
