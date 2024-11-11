import { Stack } from "@mui/material";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import FloatingMenu from "./components/FloatingMenu";

function App() {
  return (
    <Stack
      width={"100vw"}
      minHeight={"100vh"}
    >
      <NavigationBar />
      <FloatingMenu />
      <LandingPage />
    </Stack>
  );
}

export default App;
