import claimedImg from "../assets/claimed.png"; // Adjust the path as necessary
export default function ClaimModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-100 flex items-center justify-center">
      <div className="rounded-lg p-2 shadow-lg text-center max-w-md w-full color bg-gray-50">
        <h2 className="text-xl font-bold mb-2">CLAIMED!</h2>
        <p className="mb-4">
          Congratulations! You've successfully claimed this deal! 🎉
        </p>
        <div className="flex justify-center mb-4">
          <img src={claimedImg} alt="Success" className="h-10 w-10" />
          {/* Replace with actual check icon or SVG if preferred */}
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
