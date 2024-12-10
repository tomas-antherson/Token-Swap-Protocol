const Testimonials = () => {
  return (
    <div className="w-[471px] border-[1px] border-[#3A3B3F] p-[24px] ">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-row gap-[12px]">
          <img
            src="/images/Ellipse 328.png"
            alt=""
            className="w-[56px] h-[56px]"
          />
          <div className="flex flex-col gap-[4px]">
            <div className="text-[16px] leading-[24px] tracking-[-2%] text-white font-bold ">
              Steve Smith
            </div>
            <div className="text-[14px] leading-[19.6px] tracking-[-2%] text-[#A1A1A1] text-left">
              Director
            </div>
          </div>
        </div>
        <div className="text-[16px] leading-[24px]  text-[#A1A1A1] text-left">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </div>
        <div className="flex flex-row gap-[4px]">
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
          <img src="/images/star.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
