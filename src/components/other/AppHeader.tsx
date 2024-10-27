import { FC } from "react";

//components
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { ArrowLeftIcon, LogIn, UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import TypeAnimation from "../type-animation";

interface AppHeaderProps {
  isInApp?: boolean;
}

const AppHeader: FC<AppHeaderProps> = ({ isInApp }) => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex flex-row items-center gap-2">
        {isInApp && (
          <Button size="icon" variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
          </Button>
        )}
        <Link to="/">
          <h1 className="text-2xl font-semibold">MockExpress.</h1>
        </Link>
      </div>
      <div className="flex gap-2">
        {isInApp ? (
          <Button variant="ghost" size="icon">
            <UserIcon />
          </Button>
        ) : (
          <Link to="/log-in">
            <Button variant="default">
              Login <LogIn />
            </Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default AppHeader;
