import { AppBar, Toolbar, Button, Select, MenuItem, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        height: "10%",
        background: "linear-gradient(to bottom, #384959, rgba(17,17,17,0))",
        boxShadow: "none",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", pt: 2 }}>
        <Box>
          <Button color="inherit" component={Link} to="/">
            {t("home")}
          </Button>
          <Button color="inherit" component={Link} to="/about">
            {t("about")}
          </Button>
          <Button color="inherit" component={Link} to="/experience">
            {t("experience")}
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            {t("contact")}
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton
            aria-label="GitHub"
            component="a"
            href="https://github.com/guibrick"
            target="_blank"
            sx={{ color: "#F2F0EF", p: 0.5 }}
          >
            <GitHubIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <IconButton
            aria-label="LinkedIn"
            component="a"
            href="https://www.linkedin.com/in/guido-bertaina/"
            target="_blank"
            sx={{ color: "#F2F0EF", p: 0.5 }}
          >
            <LinkedInIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={{
              color: "white",
              borderColor: "white",
              "& .MuiSelect-icon": { color: "white" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              height: 40,
              ml: 1,
            }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="es">ES</MenuItem>
            <MenuItem value="sv">SV</MenuItem>
            <MenuItem value="it">IT</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}