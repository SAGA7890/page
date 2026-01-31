import React from "react";
import ImageGallery from "./ImageGallery";
import CentreDetails from "./CentreDetails";
import BookContent from "./BookContent";

function BookPage() {
  return (
    /* OVERLAY */
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 overflow-auto">

      {/* POPUP CARD — AUTO HEIGHT */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8 max-h-[90vh]">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ================= LEFT SIDE (STATIC, FULLY VISIBLE) ================= */}
          <div className="flex flex-col space-y-6">
            <ImageGallery />
            <CentreDetails />
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="md:col-span-2 flex flex-col">

            {/* HEADER (STATIC) */}
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

            {/* ✅ ONLY DESCRIPTION SCROLLS */}
            <div className="overflow-y-auto max-h-[65vh] pr-6">
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
