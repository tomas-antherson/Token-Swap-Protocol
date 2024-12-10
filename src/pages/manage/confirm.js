const Confirm = ({ setConfirmModal, handleConfirm }) => {
  return (
    <>
      <div className="fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 text-white z-[999] px-4 md:px-0">
        <div
          onClick={() => setConfirmModal("")}
          className="fixed left-0 right-0 bottom-0 top-0 bg-black opacity-60"
        ></div>

        <div className="m-auto p-10 max-w-[400px] max-h-[280px] sm:max-h-[230px] w-full h-full z-10 bg-[#151515] rounded-md">
          <div className=" text-lg font-bold">Prompt!</div>
          <div className="mt-4">
            Are you sure you want to delete selected item?
          </div>
          <div className="flex-col sm:flex-row flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => setConfirmModal("")}
              className="bg-[#E82127] h-[40px] w-full rounded-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleConfirm();
                setConfirmModal("");
              }}
              className="bg-[#A5FF2B] h-[40px] w-full rounded-sm text-black"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
