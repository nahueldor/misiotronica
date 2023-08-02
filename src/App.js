import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import { HomePage } from "./pages/HomePage";
import { SalesPage } from "./pages/SalesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BuyPage } from "./pages/BuyPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      
      <div style={{ minHeight: "100%" }}>
        <CartProvider>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/sales/buy/:id" element={<BuyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CartProvider>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
