//router
import { Route, Routes } from "react-router-dom";

//theme provider
import { ThemeProvider } from "./components/theme-provider";

//components
import AppHeader from "./components/other/AppHeader";
import HomePage from "./components/pages/HomePage";
import LogInPage from "./components/pages/LogInPage";
import AppFooter from "./components/other/AppFooter";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-in" element={<LogInPage />} />
      </Routes>
      <AppFooter />
    </ThemeProvider>
  );
};

export default App;
