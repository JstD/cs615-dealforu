import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainGrid from "../components/MainGrid";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const mode = user?.mode || "user";
  useEffect(() => {
    if (mode === "manager") {
      navigate("/manager");
    }
  }, [mode, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header />

      {/* Below header: Sidebar and MainGrid side-by-side */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <MainGrid />
        </main>
      </div>
    </div>
  );
}
