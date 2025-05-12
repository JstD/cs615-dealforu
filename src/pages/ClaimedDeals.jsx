// src/pages/ClaimedDealsPage.jsx
import React, { useEffect } from "react";
import ClaimedDealCard from "../components/ClaimedDealCard";
import Header from "../components/Header";
import { deals } from "../constants"; // Assuming you have a list of claimed deals
import { useNavigate } from "react-router-dom";
const ClaimedDeals = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Header isClaimedDealsPage={true} />
      <div className="container max-w-3xl mx-auto p-4">
        {deals.map((deal, index) => (
          <div key={index}>
            <ClaimedDealCard
              id={index}
              key={index}
              title={deal.title}
              discount={deal.discount}
              location={deal.restaurant}
              timeLeft={deal.timeLeft}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimedDeals;
