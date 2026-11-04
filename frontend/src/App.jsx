import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseItems from "./pages/BrowseItems";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
      </Routes>
    </>
  );
}

export default App;