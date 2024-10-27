import { FC } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeAnimation from "../type-animation";

const HeroComponent: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen fixed w-full flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center z-10 top-1/3 absolute">
        <h1 className="text-4xl font-bold mb-4">
          <TypeAnimation text="Welcome to Our Shop" />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-8"
        >
          Discover amazing products at great prices
        </motion.p>
        <Link to="/shop">
          <Button className="px-6 py-2">
            Shop Now <ShoppingCartIcon />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroComponent;
