import { FC } from "react";

//components
import HeroComponent from "../other/HeroComponent";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <HeroComponent />
    </div>
  );
};

export default HomePage;
