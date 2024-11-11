import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: `"Kumbh Sans", "serif"`,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primaryCyan: {
      main: "#2ACFCF",
      light: "#2ACFCF",
      dark: "#2ACFCF",
      contrastText: "#FFF",
    },
    primaryDViolet: {
      main: "#3B3054",
      light: "#3B3054",
      dark: "#3B3054",
      contrastText: "#000",
    },
    secondaryRed: {
      main: "#F46262",
      light: "#F46262",
      dark: "#F46262",
      contrastText: "#000",
    },
    neutralGray: {
      main: "#BFBFBF",
      light: "#BFBFBF",
      dark: "#BFBFBF",
      contrastText: "#000",
    },
    neutralGViolet: {
      main: "#eef1f7",
      light: "#eef1f7",
      dark: "#eef1f7",
      contrastText: "#FFF",
    },
    neutralVDBlue: {
      main: "#35323E",
      light: "#35323E",
      dark: "#35323E",
      contrastText: "#FFF",
    },
    neutralVDViolet: {
      main: "#232127",
      light: "#232127",
      dark: "#232127",
      contrastText: "#FFF",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
