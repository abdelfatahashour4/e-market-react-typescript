import { ProductDetails } from "../../utils/types";

export default function ProductCard({ product }: { product: ProductDetails }) {
  return (
    <div className="product_card">
      <div className="wrapper_image">
        <img src={product.image} alt={product.name} loading={"lazy"} />
      </div>
      <div className="wrapper_info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <small>{product.price} EGP </small>
      </div>
    </div>
  );
}
