import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import ContactUs from "./pages/contact-us";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Cart />} />
        <Route path="/register" element={<Cart />} />
        <Route path="/checkout" element={<Cart />} />

        {/* Add another three routes called cart, login, and register, checkout */}
      </Routes>
    </div>
  );
}
export default App;
