import React, { useState } from "react";

function Table({ title, data, keyList }) {
  const [page, setPage] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const handleNextClick = () => {
    const nextPage = page + 5;
    setPage(nextPage);
    setIsPrevDisabled(false);
    if (nextPage + 7 >= data.length) {
      setIsNextDisabled(true);
    }
  };

  const handlePrevClick = () => {
    const prevPage = page - 5;
    setPage(prevPage);
    setIsNextDisabled(false);
    if (prevPage <= 0) {
      setIsPrevDisabled(true);
    }
  };

  return (
    <div className="my-2 px-[60px] h-max w-full">
      <div className="bg-white h-max w-full rounded-[10px] flex flex-col py-4">
        <div className="w-full overflow-x-scroll  max-h-[400px]">
          <table className="text-left overflow-x-auto whitespace-nowrap">
            <thead className="border-b border-b-[#EEEEEE]  top-0 z-10 bg-[white]">
              <tr>
                {title.map((title, index) => (
                  <th key={index} className="px-4 py-2 font-thin min-w-[150px]">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(page, page + 5).map((event) => (
                <tr className="border-b border-b-[#EEEEEE] hover:bg-[#76abae5e] " key={event.id}>
                  {keyList.map((key, index) => (
                    <td key={index} className="px-4 py-4">
                      {event[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          disabled={isPrevDisabled}
          onClick={handlePrevClick}
          className={
            isPrevDisabled
              ? "px-4 py-2 mx-3 text-[#76abae65] rounded"
              : "px-4 py-2 mx-3 text-[#76ABAE] rounded hover:scale-[1.05] hover:bg-[#76ABAE] hover:text-[#EEEEEE] transition-all duration-200"
          }
        >
          Previous
        </button>
        <button
          disabled={isNextDisabled || data.length<6}
          onClick={handleNextClick}
          className={
            isNextDisabled
              ? "px-4 py-2 mx-3 text-[#76abae65] rounded"
              : "px-4 py-2 mx-3 text-[#76ABAE] rounded hover:scale-[1.05] hover:bg-[#76ABAE] hover:text-[#EEEEEE] transition-all duration-200"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;