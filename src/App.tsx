import { Stack } from "@mui/material";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import FloatingMenu from "./components/FloatingMenu";
import { useState } from "react";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Stack
      width={"100vw"}
      minHeight={"100vh"}
    >
      <NavigationBar onMenuClick={toggleMenuOpen} />
      {isMenuOpen && <FloatingMenu />}
      <LandingPage />
    </Stack>
  );
}

export default App;
