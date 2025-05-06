import Home from "./pages/Home";
import Searching from "./pages/Searching";
import ClaimedDeals from "./pages/ClaimedDeals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Manager from "./pages/Manager";
import ManagerCreateDealPage from "./pages/ManagerCreateDealPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Searching />} />
        <Route path="/claimed-deals" element={<ClaimedDeals />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/new-deal" element={<ManagerCreateDealPage />} />
      </Routes>
    </Router>
  );
}
