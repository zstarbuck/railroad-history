import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Decades from "./Decades";
import Locomotive from "./Locomotive";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home title="Understanding Locomotives By Decade" />}
        />
        <Route path="/:decade" element={<Decades />} />
        <Route path="/locomotive/:locomotiveID" element={<Locomotive />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
