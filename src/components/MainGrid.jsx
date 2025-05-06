import DealCard from "./DealCard";
import { deals } from "../constants";

export default function MainGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {deals.map((deal, idx) => (
        <DealCard key={idx} {...deal} id={idx} />
      ))}
    </div>
  );
}
