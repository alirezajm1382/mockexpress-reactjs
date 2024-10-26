import { FC } from "react";

//components
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4">
      <h1
        className="text-2xl font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        MockExpress
      </h1>
      <div className="flex gap-2">
        <Button variant="default" onClick={() => navigate("/log-in")}>
          Login <LogIn />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default AppHeader;
