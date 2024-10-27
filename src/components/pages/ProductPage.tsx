import React from "react";
import { useParams } from "react-router-dom";
import TypeAnimation from "../type-animation";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col h-full px-4 max-w-screen-xl mx-auto mt-16 gap-4">
      <h1 className="text-2xl font-semibold">
        <TypeAnimation text={`Product ${id}`} />
      </h1>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductPage;
