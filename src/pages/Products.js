import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [productId, setProductId] = useState("1001");
  return (
    <section className="section">
      <label htmlFor="productid">Product ID</label>
      <input
        id="productid"
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        style={{ margin: "0 10px" }}
      />
      <Link to={`/products/${productId ? productId : "1000"}`} className="btn">
        View Product
      </Link>
    </section>
  );
};

export default Products;
