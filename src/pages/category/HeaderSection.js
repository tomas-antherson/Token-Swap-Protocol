const HeaderSection = () => {
  return (
    <div className="w-full h-[395px] bg-[url(assets/images/bg-category.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="content absolute w-full top-40 flex justify-center">
        <div className="flex flex-col gap-[8px]  items-center">
          <div className="text-[40px] md:text-[48px] font-semibold tracking-tight leading-10 md:leading-[60.48px] text-[#FFFFFF]">
            Car Rental
          </div>
          <div className="flex flex-row gap-[6px]">
            <div>Home</div>
            <div>&gt;</div>
            <div>Category</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
