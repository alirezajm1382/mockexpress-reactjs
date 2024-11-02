import { FC } from "react";
import getProducts, { ProductProps } from "../../hooks/getProducts";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductItemSkeleton from "./ProductItemSkeleton";

const ShopComponent: FC = () => {
  const { products, loading, error } = getProducts();

  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => <ProductItemSkeleton key={i} />)
        : // ))
          products.map((product: ProductProps) => (
            <Link to={`/shop/product/${product.id}`}>
              <ProductItem key={product.id} product={product} />
            </Link>
          ))}
    </motion.div>
  );
};

export default ShopComponent;
