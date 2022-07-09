import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";
import SharedProductLayout from "./layouts/SharedProductLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ProductedRoutes from "./ProductedRoutes";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<SharedProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <ProductedRoutes user={user}>
              <Dashboard user={user} />
            </ProductedRoutes>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
