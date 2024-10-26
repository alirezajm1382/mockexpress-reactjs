import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useMemo } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  //if theme is dark, return Sun Icon, if light, return Moon Icon
  const TogglerIcon: React.ReactNode = useMemo(() => {
    if (theme === "dark") return <Sun />;
    return <Moon />;
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleThemeToggle}>
      {TogglerIcon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
