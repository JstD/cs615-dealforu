import promo1 from "../assets/promo1.png"; // Replace with actual image paths
import promo2 from "../assets/promo2.png";

export default function Sidebar() {
  return (
    <aside className="w-80 p-4 bg-white shadow-md flex flex-col gap-20">
      <img src={promo1} alt="Promo 1" className="rounded-md" />
      <img src={promo2} alt="Promo 2" className="rounded-md" />
    </aside>
  );
}
