import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, colors } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { Create } from "./pages/CreatePage";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

export default function App() { 
  return ( 
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <MuiBottomNavigation />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
