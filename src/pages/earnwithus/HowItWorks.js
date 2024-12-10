export default function Component() {
  const steps = [
    {
      icon: "/images/profile.svg",
      title: "Apply",
      description:
        "Complete our quick online application form to get started. We'll review your application and get in touch with you shortly.",
    },
    {
      icon: "/images/verified-check.svg",
      title: "Get Approved & Onboarded",
      description:
        "Once approved, you'll receive an onboarding email with resources and training to set you up for success.",
    },
    {
      icon: "/images/money-bag.svg",
      title: "Start Earning",
      description:
        "Use your unique affiliate link, referral code, or personal sales skills to connect customers to our business. Track your progress and earnings easily through our partner dashboard.",
    },
  ];

  return (
    <section className="px-12 py-12 md:p-32 md:pt-10 text-left">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-[48px] font-semibold text-[white] mb-2">
          How It Works
        </h2>
        <p className="text-[#a1a1a1] text-[14px] md:text-[20px] font-normal mb-12">
          In just 3 simple steps you can earn up to $45,000 in a month
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex flex-col gap-4 lg:w-1/2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 border border-[#424448]  backdrop-blur-sm transition-colors hover:border-[#525458] group"
              >
                <img
                  src={step.icon}
                  alt=""
                  // width={40}
                  // height={40}
                  className="mb-4 md:w-[40px] w-[25px] aspect-square opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="text-base text-[white] md:text-[20px] font-bold  mb-2">
                  {step.title}
                </h3>
                <p className="text-[#a1a1a1] text-[10px] md:text-[16px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2">
            <div className="hidden md:block relative aspect-square w-full">
              <img
                src="/images/image240.jpg"
                alt="Luxury car"
                className=" object-cover"
                sizes=" (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
