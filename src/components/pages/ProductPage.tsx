import React from "react";
import { useParams } from "react-router-dom";
import TypeAnimation from "../type-animation";
import getSingleProduct from "@/hooks/getSingleProduct";
import { Skeleton } from "../ui/skeleton";
import { useTheme } from "../theme-provider";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = getSingleProduct(id || "");
  const { theme } = useTheme();

  if (loading) {
    return (
      <div className="flex flex-col h-full px-4 max-w-screen-xl mx-auto mt-16 gap-4 py-4">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Skeleton
              className={`h-96 w-full rounded-lg border-2 border-${
                theme === "dark" ? "white" : "black"
              }`}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-24 w-full" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-4 max-w-screen-xl mx-auto mt-16 gap-4">
      <h1 className="text-2xl font-semibold">
        <TypeAnimation text={`Product ${id}`} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={`Product ${id}`}
            className={`rounded-lg shadow-lg h-96 w-full object-contain bg-white p-2 border-2 border-${
              theme === "dark" ? "white" : "black"
            }`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{product?.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {product?.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${product?.price}</span>
            <span className="text-sm text-gray-500">{product?.category}</span>
          </div>
          <div className="flex gap-4">
            <select className="border rounded-md p-2">
              <option>Select Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="border rounded-md p-2">
              <option>Select Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
