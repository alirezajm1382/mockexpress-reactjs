import { AnimatePresence } from "framer-motion";

//router
import { Route, Routes, useLocation } from "react-router-dom";

//theme provider
import { ThemeProvider } from "./components/theme-provider";

//components
import AppLayout from "./components/app-layout";
import MainLayout from "./components/main-layout";

//pages
import HomePage from "./components/pages/HomePage";
import LogInPage from "./components/pages/LogInPage";
import ShopPage from "./components/pages/ShopPage";
import ProductPage from "./components/pages/ProductPage";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/shop" element={<MainLayout />}>
            <Route index element={<ShopPage />} />
            <Route path="/shop/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
