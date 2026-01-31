import React from "react";
import ImageGallery from "./ImageGallery";
import CentreDetails from "./CentreDetails";
import BookContent from "./BookContent";

function BookPage() {
  return (
    // OVERLAY
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">

      {/* POPUP CARD — FIXED HEIGHT */}
      <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-xl overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 z-10 text-2xl font-light text-gray-500 hover:text-black"
          aria-label="Close"
        >
          ×
        </button>

        {/* INNER PADDING WRAPPER */}
        <div className="h-full p-8">

          {/* GRID — HEIGHT LOCKED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">

            {/* LEFT — CAN SCROLL IF NEEDED */}
            <div className="flex flex-col space-y-6 overflow-y-auto">
              <ImageGallery />
              <CentreDetails />
            </div>

            {/* RIGHT */}
            <div className="md:col-span-2 flex flex-col h-full overflow-hidden">

              {/* STATIC HEADER */}
              <div className="shrink-0">
                <h1 className="font-noto font-medium text-[22px] leading-[36px] text-black">
                  THE CENTRAL TRUTH OF INTEGRAL EDUCATION
                </h1>

                <p className="mt-2 text-[16px] font-bold font-noto">
                  <span className="text-orange-600">Category:</span>{" "}
                  <span className="font-normal text-black">Book</span>
                </p>

                <h3 className="font-mont text-[15px] font-semibold mt-6 mb-3">
                  Description
                </h3>
              </div>

              {/* ✅ DESCRIPTION — SCROLLS 100% */}
              <div className="flex-1 overflow-y-auto pr-3">
                <div className="font-mont text-[14px] leading-6 text-gray-700 whitespace-pre-line text-justify">
                  <BookContent />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
