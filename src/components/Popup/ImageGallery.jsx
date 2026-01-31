import React from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function ImageGallery() {
  return (
    <div>
      {/* MAIN IMAGE */}
      <img
        src={img1}
        alt="Main"
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* THUMBNAILS */}
      <div className="flex gap-2 mt-3">
        {[img2, img3, img4].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className="w-16 h-16 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
