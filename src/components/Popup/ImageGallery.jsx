import { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

function ImageGallery() {
  const images = [img1, img2, img3, img4];
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
