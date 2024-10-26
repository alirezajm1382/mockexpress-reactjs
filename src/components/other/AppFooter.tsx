import { MessageCircleQuestionIcon, ShoppingCartIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

const AppFooter: FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 fixed bottom-0 w-full">
      <ShoppingCartIcon />
      <Button variant="ghost" className="hover:bg-primary/10">
        Support <MessageCircleQuestionIcon />
      </Button>
    </footer>
  );
};

export default AppFooter;
