import avtImage from "../assets/avt.png"; // replace with correct image
import StarRating from "./StarRating";
import CommentBox from "./CommentBox";
const DealDetails = ({
  id,
  title,
  discount,
  restaurant,
  location,
  rate,
  timeLeft,
  imageSrc,
  imageSrc2,
  condition,
  dealIcon,
  description,
  mode,
}) => {
  console.log(mode);
  return (
    <>
      <div className="justify-between">
        <span className="font-bold text-5xl"> {title}</span>
        {mode === "customer" && (
          <span className="mt-4  px-10  text-right">
            <button className="bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-full text-xl shadow">
              Claim now
            </button>
          </span>
        )}
        <div className="flex items-center justify-between mt-2">
          <img
            src={imageSrc}
            alt="img"
            className="flex rounded-xl mt-4 mb-4 w-100 h-70 object-cover"
          />
          <img
            src={imageSrc2}
            alt="img"
            className="flex rounded-xl mt-4 mb-4 w-100 h-70 object-cover"
          />
          <img src={dealIcon} alt="deal" className="h-40" />
        </div>
      </div>

      <div style={{ alignContent: "center" }}></div>

      <p className="text-m">
        <span className="underline font-semibold">Location:</span> {restaurant}{" "}
        {location}
      </p>
      <p className="text-m">
        <span className="underline font-semibold">Condition:</span> {condition}
      </p>
      <p className="text-m">
        <span className="underline font-semibold">Description:</span>{" "}
        {description}
      </p>
      <div className="mt-4">
        {/* <span className="gap-1 mt-1 mb-2 text-yellow-400 text-xl">★★★★★</span> */}
        <div className="flex items-start gap-2 text-m bg-gray-50 p-4 rounded-lg max-w-2xl">
          <img
            className="w-9 h-8 rounded-full bg-gray-200"
            src={avtImage}
            alt="avatar"
          />
          <div>
            <p className="text-sm mt-1 font-semibold">Andrew</p>

            <span className="text-yellow-400 mt-1 text-base">★★★★★</span>
          </div>
          <div>
            <p>This is the best deal that I have claimed!</p>
          </div>
        </div>
      </div>
      <div className="content-center">
        <p className="text-blue-600 text-m underline mt-2 cursor-pointer">
          Show more
        </p>
      </div>
      <StarRating />

      <CommentBox> </CommentBox>
    </>
  );
};
export default DealDetails;
