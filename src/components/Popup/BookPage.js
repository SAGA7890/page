import React, { useRef, useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import CentreDetails from "./CentreDetails";
import BookContent from "./BookContent";

function BookPage() {
  const leftRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(null);

  useEffect(() => {
    if (leftRef.current) {
      setRightHeight(leftRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">

      {/* PAGE CARD */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8">

        {/* ❌ CLOSE BUTTON — TOP RIGHT */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-2xl font-light text-gray-500 hover:text-black leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* LEFT SIDE — HEIGHT REFERENCE */}
          <div ref={leftRef} className="space-y-6">
            <div className="w-[360px]"></div>
            <ImageGallery />
            <CentreDetails />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 max-w-[824px] pl-8 pr-6 flex flex-col">

            {/* STATIC PART */}
            <div className="shrink-0">
              <h1 className="font-noto font-medium text-[22px] leading-[36px] text-black max-w-[520px]">
                THE CENTRAL TRUTH OF INTEGRAL EDUCATION
              </h1>

              <p className="mt-2 text-[16px] font-bold font-noto">
              <span className="text-orange-600">Category:</span>{" "}
              <span className="font-normal text-black">Book</span>
              </p>


              <h3 className="font-mont text-[15px] font-semibold mt-6 mb-2">
                Description
              </h3>
            </div>

            {/* SCROLL ONLY DESCRIPTION */}
            <div
              className="overflow-y-auto"
              style={{
                maxHeight: rightHeight ? `${rightHeight - 140}px` : "auto",
              }}
            >
              <div className="font-mont text-[14px] leading-6 text-gray-700 whitespace-pre-line text-justify">
                <BookContent />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
