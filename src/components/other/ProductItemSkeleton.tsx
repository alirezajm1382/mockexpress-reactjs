import { FC } from "react";
import { Skeleton } from "../ui/skeleton";

const ProductItemSkeleton: FC = () => {
  return (
    <div
      className="bg-background shadow-md rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl"
      style={{ height: "30rem" }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <Skeleton className="w-full h-48 rounded-md mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
