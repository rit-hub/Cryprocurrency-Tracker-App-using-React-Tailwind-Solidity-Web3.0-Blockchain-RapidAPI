import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Welcome,
  Exchange,
  Services,
  Footer,
  Market,
  News,
} from "./components/index";
import NewsCard from "./widgets/NewsCard";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="market" element={<Market />} />
          <Route path="news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
