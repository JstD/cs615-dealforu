import { useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import DealDetails from "../components/DealDetails";
import DealCardSmall from "../components/DealCardSmall";
import { useNavigate } from "react-router-dom";
import { deals } from "../constants";
export default function Searching() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search");
  const dealId = +(params.get("deal") || "0");
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(search || "");

  const user = JSON.parse(localStorage.getItem("user"));
  const mode = user?.mode || "user";
  const handleOnClick = (id) => {
    navigate(`/list?deal=${id}`);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header searchText={searchText} />

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6 m-12">
        {/* Sidebar */}
        <div>
          {deals.map((deal, i) => (
            <div onClick={() => handleOnClick(i)}>
              <DealCardSmall key={i} {...deal} />
            </div>
          ))}
        </div>

        {/* Deal Detail */}
        <div className="flex-1  col-span-2 bg-white rounded-xl shadow p-6 relative">
          <DealDetails {...deals[dealId]} mode={mode} />
        </div>
      </div>
    </div>
  );
}
