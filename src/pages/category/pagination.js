import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const CategoryPagination = ({
  itemsPerPage,
  items,
  setCurrentItems = () => { },
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);



  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    if (event.selected === 0) {
      setDisablePrev(true);
    } else {

      setDisablePrev(false);
    }
    if (event.selected === pageCount - 1) {
      setDisableNext(true);
    } else {

      setDisableNext(false);
    }

    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  const nextLabelComponent = () => {
    return (
      <button
        disabled={disableNext}
        type="button"
        className="border border-solid border-[#424448] min-h-[64px] min-w-[64px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-[18px] rounded-lg text-[#BCBCBC] hover:bg-[#424448] focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed "
        aria-label="Next"
      >
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    );
  };
  const previousLabelComponent = () => {
    return (
      <button
        disabled={disablePrev}
        type="button"
        className="border border-solid border-[#424448] min-h-[64px] min-w-[64px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-[#BCBCBC] hover:bg-[#424448] focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed "
        aria-label="Previous"
      >
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
    );
  };
  return (
    <div className="flex justify-center w-full">
      <nav className="flex items-center text-white w-full">
        <ReactPaginate
          activeClassName="text-green"
          pageClassName="min-h-[64px] min-w-[64px] flex justify-center items-center text-[#BCBCBC] hover:bg-[#424448], py-2 px-3 text-[18px] rounded-lg focus:outline-none focus:bg-[#424448] disabled:opacity-50 "
          breakLabel="..."
          className="flex w-full m-auto justify-center gap-4 text-4xl"
          nextLabel={nextLabelComponent()}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={previousLabelComponent()}
          renderOnZeroPageCount={null}
        />
      </nav>
    </div>
  );
};

export default CategoryPagination;
