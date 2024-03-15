import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import CalenderView from "./pages/calender/CalenderView";
import { useState } from "react";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import { SidebarProvider } from "./context/sidebar";

function App() {
  // states
  const [themeMode, setThemeMode] = useState("light");
  const [expand, setExpand] = useState(false);
  // Function to toggle sidebar expansion
  const toggleSidebar = () => {
    setExpand(!expand);
  };
  // Function to toggle theme mode between light and dark
  const toggleThemeMode = () => {
    let mode = themeMode === "light" ? "dark" : "light";
    setThemeMode(mode);
  };
  // Effect to apply theme mode changes to HTML element
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleThemeMode }}>
      <SidebarProvider value={{ expand, toggleSidebar }}>
        <div className="min-h-screen w-full dark:bg-drkPrimary flex  flex-col">
          {/* Render sidebar if expanded */}
          {expand && <Sidebar />}
          <div className={`relative ${expand ? "ml-16 md:ml-56" : "m-0"}`}>
            <Topbar />
            <div className="relative">
              {/* Define routes for different pages */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/calender" element={<CalenderView />} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
