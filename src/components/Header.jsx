import logoImg from "../assets/dealforu.png";
import shareYourDealImg from "../assets/shareyourdeal.png";
import yourOwnDealImg from "../assets/yod.png";
import { useNavigate } from "react-router-dom";

import { Search } from "lucide-react";

export default function Header({ isClaimedDealsPage, searchText }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const mode = user?.mode || "user";
  const handleClaimedDealsClick = () => {
    navigate("/claimed-deals");
  };
  const handleHomeClick = () => {
    if (mode === "manager") {
      navigate("/manager");
    } else {
      navigate("/");
    }
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements[0].value;
    if (query) {
      navigate(`/list?search=${query}`);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="w-full bg-white">
      {/* Top bar with user info and buttons */}
      <div className="flex justify-end items-center px-6 py-2 bg-white text-m space-x-4">
        {!!user && (
          <span className="text-gray-700">
            Hi <span className="font-semibold"> {user.username}</span>
          </span>
        )}
        {!!user ? (
          <button
            className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-3 py-1 rounded-full bg-primary hover:bg-primary-300"
            onClick={handleLogIn}
          >
            Login
          </button>
        )}
      </div>

      {/* Main header */}
      <header className="flex items-center justify-between px-20 py-2 bg-white shadow-md cursor-pointer">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3" onClick={handleHomeClick}>
          <img
            src={mode === "manager" ? shareYourDealImg : logoImg}
            alt="DealForU Logo"
            className="h-10"
          />
        </div>
        {mode === "manager" ? (
          <img
            className="flex items-center max-w-md  rounded-full px-4 py-2 mx-6"
            src={yourOwnDealImg}
            alt="Share Your Deal"
          />
        ) : (
          <form
            className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 mx-6"
            onSubmit={handleSearchSubmit}
          >
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for deals!"
              className="ml-2 w-full bg-transparent outline-none text-m"
              value={searchText}
            />
          </form>
        )}

        {!isClaimedDealsPage ? (
          mode === "manager" ? (
            <button
              className="px-4 py-1 rounded-full bg-[#b2ebf2] hover:bg-[#81d4fa] font-semibold cursor-pointer"
              onClick={() => navigate("/new-deal")}
            >
              Create New Deal
            </button>
          ) : (
            <button
              className="px-4 py-1 rounded-full bg-[#b2ebf2] hover:bg-[#81d4fa] font-semibold cursor-pointer"
              onClick={handleClaimedDealsClick}
            >
              My claimed deals
            </button>
          )
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}
