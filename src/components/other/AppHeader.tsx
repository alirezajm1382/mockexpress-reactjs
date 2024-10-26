import { FC } from "react";

//components
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import TypeAnimation from "../type-animation";

const AppHeader: FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link to="/">
        <h1 className="text-2xl font-semibold">
          <TypeAnimation text="MockExpress" />
        </h1>
      </Link>
      <div className="flex gap-2">
        <Link to="/log-in">
          <Button variant="default">
            Login <LogIn />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default AppHeader;
