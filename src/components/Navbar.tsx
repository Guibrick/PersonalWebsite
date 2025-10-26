import { AppBar, Toolbar, Button, Select, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

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
          <Button color="inherit" component={Link} to="/">{t("home")}</Button>
          <Button color="inherit" component={Link} to="/about">{t("about")}</Button>
          <Button color="inherit" component={Link} to="/experience">{t("experience")}</Button>
          <Button color="inherit" component={Link} to="/contact">{t("contact")}</Button>
        </Box>

        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          sx={{ color: "white", borderColor: "white" }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="es">ES</MenuItem>
          <MenuItem value="sv">SV</MenuItem>
          <MenuItem value="it">IT</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}