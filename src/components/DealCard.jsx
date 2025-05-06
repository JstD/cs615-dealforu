import { useState } from "react";
import ClaimModal from "./ClaimModal";
import { useNavigate } from "react-router-dom";
export default function DealCard({
  id,
  imageSrc,
  title,
  discount,
  description,
  location,
  restaurant,
  dealIcon,
}) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rounded-xl shadow-md overflow-hidden w-full max-w-md hover:shadow-lg cursor-pointer">
      {/* Top image */}

      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-24 object-cover" />
      </div>

      {/* Content */}
      <div className="relative p-4">
        {/* Discount badge */}
        <div
          onClick={() => {
            navigate(`/list?deal=${id}`); // Replace with actual deal ID
          }}
        >
          <img
            src={dealIcon}
            alt="discount badge"
            className="w-30 absolute top-0 right-0 transform translate-x -translate-y-1/4"
          />

          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="text-m text-gray-700">{discount}</p>
          <p className="text-m text-gray-800 mt-2">
            At{" "}
            <a href="#" className="underline text-black font-medium">
              {restaurant}
            </a>
          </p>
        </div>
        {/* Claim button */}
        <button
          className="mt-4 px-4 py-1 bg-[#f5e0d7] text-black rounded-full font-medium hover:bg-[#e6cfc2] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Claim now
        </button>
        {showModal && <ClaimModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
