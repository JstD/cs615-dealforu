export default function DealCardSmall({
  title,
  discount,
  imageSrc,
  restaurant,
  dealIcon,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between py-2 mb-4 hover:bg-gray-50 cursor-pointer">
      <div>
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-s text-gray-600">{discount}</p>
        <p className="text-xs text-blue-700 underline">At {restaurant}</p>
      </div>
      <img src={dealIcon} alt="deal" className="w-25 ml-2" />
    </div>
  );
}
