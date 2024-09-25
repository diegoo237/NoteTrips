import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Pricing from "./pages/pricing/Pricing";
import Homepage from "./pages/home/Homepage";
import Error from "./pages/errors/Error";
import Login from "./pages/login/Login";
import AppLayout from "./pages/app/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List o cities</p>} />
          <Route path="cities" element={<p>List o cities</p>} />
          <Route path="countries" element={<p>List o contryes</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
