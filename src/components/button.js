export default function Button({ children }) {
  return (
    <div className="h-[60px] w-auto text-black text-[0.8rem] md:text-[1.2rem] bg-[#a5ff2b] px-[1rem] md:px-[1.4rem] py-[0.6rem] md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out flex gap-2">
      {children}
    </div>
  );
}
