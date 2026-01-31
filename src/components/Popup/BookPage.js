import React from "react";
import ImageGallery from "./ImageGallery";
import CentreDetails from "./CentreDetails";
import BookContent from "./BookContent";

function BookPage() {
  return (
    /* OVERLAY */
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">

      {/* POPUP */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-xl max-h-[90vh] overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black z-10"
        >
          ×
        </button>

        {/* CONTENT */}
        <div className="p-8 h-full">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">

            {/* ================= LEFT (STATIC) ================= */}
            <div className="flex flex-col gap-6">
              {/* ImageGallery should internally show ONLY 3 images */}
              <ImageGallery />

              {/* Centre details fully visible */}
              <CentreDetails />
            </div>

            {/* ================= RIGHT ================= */}
            <div className="md:col-span-2 flex flex-col h-full">

              {/* HEADER */}
              <div className="shrink-0">
                <h1 className="font-noto font-medium text-[22px] leading-[34px]">
                  THE CENTRAL TRUTH OF INTEGRAL EDUCATION
                </h1>

                <p className="mt-2 text-[15px] font-bold">
                  <span className="text-orange-600">Category:</span>{" "}
                  <span className="font-normal">Book</span>
                </p>

                <h3 className="mt-5 mb-3 text-[15px] font-semibold">
                  Description
                </h3>
              </div>

              {/* ✅ ONLY DESCRIPTION SCROLLS */}
              <div className="flex-1 overflow-y-auto pr-4">
                <div className="text-[14px] leading-6 text-gray-700 text-justify whitespace-pre-line">
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
