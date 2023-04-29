import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/shop/Shop";
import { ShopContextProvider } from "./context/ShopContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
