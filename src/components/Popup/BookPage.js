import React from "react";
import ImageGallery from "./ImageGallery";
import CentreDetails from "./CentreDetails";

function BookPage() {
  return (
    /* OVERLAY */
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">

      {/* POPUP */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* CLOSE */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* LEFT CONTENT ONLY */}
        <div className="flex flex-col gap-6">
          <ImageGallery />
          <CentreDetails />
        </div>

      </div>
    </div>
  );
}

export default BookPage;
