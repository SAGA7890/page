import { useState } from "react";

function ImageGallery() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-3">
      {/* MAIN IMAGE */}
      <div className="w-[110%] h-[260px] max-w-[360px] rounded-xl overflow-hidden bg-gray-200 -ml-[5%]">
          <img
            src={mainImage}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>


      {/* THUMBNAILS */}
      {/* THUMBNAILS */}
        {/* THUMBNAILS */}
        <div className="max-w-[360px] w-full grid grid-cols-4 gap-3 mt-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setMainImage(img)}
              className="h-16 w-full object-cover rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
            />
          ))}
        </div>

    </div>
  );
}

export default ImageGallery;
