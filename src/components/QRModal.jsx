export default function QRModal({ onClose, qrCodeUrl, title }) {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-100 flex items-center justify-center">
      <div className="rounded-lg p-2 shadow-lg text-center max-w-md w-full color bg-gray-50">
        <h2 className="text-xl font-bold mb-2">QR Code: {title}</h2>
        <div>
          {" "}
          <img src={qrCodeUrl} alt="Success" />
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
