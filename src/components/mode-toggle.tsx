import { useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        exit={{ rotate: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {TogglerIcon}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
