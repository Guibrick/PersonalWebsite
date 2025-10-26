import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { initGA, logPageView } from "./analytics";
import { LanguageProvider } from "./contexts/LanguageContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import backgroundImage from "./assets/geometric_background.jpg";

function GAListener({ consent }: { consent: boolean }) {
  const location = useLocation();

  useEffect(() => {
    if (consent) {
      logPageView(location.pathname + location.search);
    }
  }, [location, consent]);

  return null;
}

function AppInner() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    if (cookiesAccepted) {
      initGA();
    }
  }, [cookiesAccepted]);

  const theme = createTheme({
    typography: { fontFamily: "Montserrat, Arial, sans-serif" },
    palette: { primary: { main: "#6A89A7" }, secondary: { main: "#384959" } },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <Router>
          <GAListener consent={!!cookiesAccepted} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
        <CookieBanner onConsentChange={setCookiesAccepted} />
      </Box>
    </ThemeProvider>
  );
}

export default function AppContent() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}