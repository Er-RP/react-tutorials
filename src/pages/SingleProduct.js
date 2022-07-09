import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className="section">
      <h2>Viewing Product : {productId} </h2>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </section>
  );
};

export default SingleProduct;
