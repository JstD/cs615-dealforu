// src/components/ClaimedDealCard.jsx
import React, { useState } from "react";
import qrcodeImg from "../assets/qrcode.png"; // Placeholder for QR code image
import QRModal from "./QRModal";
const ClaimedDealCard = ({ title, discount, location, timeLeft, id }) => {
  const handleOnClick = (id) => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/list?deal=${id}`);
    }
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
      {/* Deal Info */}
      <div className="flex-1" onClick={() => handleOnClick(id)}>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-m text-muted">{discount}</p>
        <p className="text-m font-medium text-gray-600">{location}</p>
      </div>

      {/* Badge */}
      <div className="mx-4"></div>

      {/* QR Code Placeholder */}
      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded">
        <img
          src={qrcodeImg}
          alt="QR Code"
          className="w-12 h-12 object-cover"
          onClick={() => setShowModal(true)} // Open modal on click
        />
        {/* <span className="text-xs text-gray-500">QR Code</span> */}
      </div>
      {showModal && (
        <QRModal
          onClose={() => setShowModal(false)}
          qrCodeUrl={qrcodeImg}
          title={title}
        />
      )}

      {/* Checkmark and Timer */}
      <div className="flex flex-col items-center ml-4">
        <svg
          className="w-6 h-6 text-green-500 mb-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ClaimedDealCard;
