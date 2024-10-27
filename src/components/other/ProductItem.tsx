import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { PackagePlusIcon } from "lucide-react";
import { ProductProps } from "../../hooks/getProducts";

interface ProductItemProps {
  product: ProductProps;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Card
      className="bg-background shadow-md rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl"
      style={{ height: "30rem" }}
    >
      <CardContent className="flex flex-col h-full justify-between">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain p-4 rounded-md bg-white mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-sm text-muted-foreground mb-2">
            {product.category}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">${product.price.toFixed(2)}</p>
          <Button size="icon">
            <PackagePlusIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
