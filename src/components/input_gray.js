export default function InputGray() {
  return (
    <div className="w-[385px] px-[1.6rem] py-[1.2rem] text-[1.2rem] text-white bg-transparent border-[2px] border-solid border-[#323232] flex gap-2 focus-within:border-blue-500">
      <img src="/gmail.svg" alt="" />
      <input
        className="bg-transparent border-none focus:outline-none focus:border-none grow"
        type="text"
        placeholder="Email Address"
      ></input>
      <img src="/arrow-right-rectangle.svg" alt="" />
    </div>
  );
}
