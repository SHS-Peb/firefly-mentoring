import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import Thankyou from "./pages/Thankyou";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
        <Navbar />

        {/* Main page content grows to fill space */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout/:tierId" element={<CheckoutPage />} />
            <Route path="/thank-you" element={<Thankyou />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
