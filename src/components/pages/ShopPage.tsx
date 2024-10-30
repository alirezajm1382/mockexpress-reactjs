import { FC } from "react";
import TypeAnimation from "../type-animation";
import ShopComponent from "../other/ShopComponent";

const ShopPage: FC = () => {
  return (
    <div className="flex flex-col h-full px-4 max-w-screen-xl mx-auto mt-16 gap-4 pb-10">
      <h1 className="text-2xl font-semibold">
        <TypeAnimation text="Shop Page" />
      </h1>
      <ShopComponent />
    </div>
  );
};

export default ShopPage;
