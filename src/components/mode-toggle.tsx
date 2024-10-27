import { useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion, useAnimationControls } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const control = useAnimationControls();

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
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
      onMouseEnter={() =>
        control.start({
          scale: 1.2,
          color: theme === "dark" ? "yellow" : "blue",
        })
      }
      onMouseLeave={() =>
        control.start({ scale: 1, color: theme === "dark" ? "white" : "black" })
      }
    >
      <motion.div animate={control}>{TogglerIcon}</motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
