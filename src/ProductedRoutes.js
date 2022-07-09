import { Navigate } from "react-router-dom";

const ProductedRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProductedRoutes;
