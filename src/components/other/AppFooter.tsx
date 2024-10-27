import { MessageCircleQuestionIcon, ShoppingCartIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

const AppFooter: FC = () => {
  return (
    <footer className="grid grid-cols-4 items-center p-4 fixed bottom-0 w-full">
      <ShoppingCartIcon />
      <p className="col-span-2 justify-self-center invisible sm:visible">
        All rights reserved &copy; MockExpress 2024
      </p>
      <Button
        variant="ghost"
        className="hover:bg-primary/10 self-end w-fit justify-self-end"
      >
        Support <MessageCircleQuestionIcon />
      </Button>
    </footer>
  );
};

export default AppFooter;
