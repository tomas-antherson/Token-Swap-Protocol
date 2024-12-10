const HeaderSection = () => {
  return (
    <div className="w-full md:h-screen bg-[url(assets/images/bg-earnwithus.png)] h-[852px] bg-center  bg-cover bg-no-repeat">
      <div className="content items-center absolute w-full top-72 flex justify-center">
        <div className="flex flex-col gap-[16px]  items-center">
          <div className="text-[40px] md:text-[48px] font-semibold tracking-tight leading-10 md:leading-[60.48px] text-[#FFFFFF]">
            Earn With Us
          </div>
          <div className="p-16">
            BIG<span className="text-[#A5FF2B]">TIME</span>RIDEZ is offering a
            fully managed car rental experience for our <br /> clients. Bring
            your vehicle to us and let us rent your vehicle for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
