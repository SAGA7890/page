import { Mail, Phone, MapPin } from "lucide-react";

function CentreDetails() {
  return (
    <div className="border rounded-xl p-4 bg-white space-y-4 w-full">


      {/* TITLE */}
      <h3
        className="
          font-noto
          font-medium
          text-[20px]
          leading-[20px]
          tracking-[0]
          text-black
          w-[140px]
          h-[24px]
        "
      >
        Centre Details
      </h3>

      {/* NAME BOX */}
      <div className="flex flex-col gap-[10px] bg-[#EA580C]/10 p-4 rounded-lg">
        <span className="text-[12px] font-semibold text-black">
          Name
        </span>

        <a
          href="https://auroglobal.org/centres/sri-matriniketan-ashram-sri-aurobindo-centre-ramachandrapur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#333333] underline underline-offset-2 hover:text-[#EA580C] transition break-words"
        >
          Sri Matriniketan Ashram Sri Aurobindo Centre, Ramachandrapur
        </a>
      </div>

      {/* EMAIL */}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EA580C]/10 text-[#EA580C] shrink-0">
          <Mail size={16} />
        </div>
        <div className="leading-tight">
          <p className="font-mont font-semibold text-[12px] text-[#333333]">
            Email
          </p>
          <p className="text-[12px] text-gray-600 break-words">
            samaakrishnal@gmail.com
          </p>
        </div>
      </div>

      {/* PHONE */}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EA580C]/10 text-[#EA580C] shrink-0">
          <Phone size={16} />
        </div>
        <div className="leading-tight">
          <p className="font-mont font-semibold text-[12px] text-[#333333]">
            Phone
          </p>
          <p className="text-[12px] text-gray-600">
            +91-94371 66688
          </p>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EA580C]/10 text-[#EA580C] shrink-0">
          <MapPin size={16} />
        </div>
        <div className="leading-tight">
          <p className="font-mont font-semibold text-[12px] text-[#333333]">
            Address
          </p>
          <p className="text-[12px] text-gray-600 leading-5 break-words">
            Ramachandrapur, Kukudakhandi,  
            Ganjam, Odisha – 761100
          </p>
        </div>
      </div>

    </div>
  );
}

export default CentreDetails;
