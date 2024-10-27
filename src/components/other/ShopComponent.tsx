import { FC } from "react";
import getProducts, { ProductProps } from "../../hooks/getProducts";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const ShopComponent: FC = () => {
  const { products, loading, error } = getProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: ProductProps) => (
        <Link to={`/product/${product.id}`}>
          <ProductItem key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ShopComponent;
