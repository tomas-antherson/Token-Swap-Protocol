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
      <button disabled={disableNext} className=" disabled:cursor-not-allowed disabled:opacity-60 mt-2">
        <img
          width={"30px"}
          height={"20px"}
          src="/images/right-arrow.svg"
          alt=""
        />
      </button>
    );
  };
  const previousLabelComponent = () => {
    return (
      <button disabled={disablePrev} className={` disabled:cursor-not-allowed disabled:opacity-60  mt-2`}>
        <img
          width={"30px"}
          height={"20px"}
          className=" rotate-180"
          src="/images/right-arrow.svg"
          alt=""
        />
      </button>
    );
  };
  return (
    <div className="flex justify-center w-full">
      <nav className="flex items-center text-white w-full">
        <ReactPaginate
          activeClassName="text-[#a5ff2b]"
          breakLabel="..."
          className="flex w-full m-auto justify-center gap-8 text-4xl"
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
