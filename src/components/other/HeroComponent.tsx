import { FC } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";

const HeroComponent: FC = () => {
  return (
    <div className="h-screen fixed w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10 top-1/3 absolute">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-xl mb-8">
          Discover amazing products at great prices
        </p>
        <Button className="px-6 py-2">
          Shop Now <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

export default HeroComponent;
