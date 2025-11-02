import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSnackbar({
          open: true,
          severity: "success",
          message: t("msg_sent"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSnackbar({
          open: true,
          severity: "error",
          message: `${t("msg_failed")}: ${data.error}`,
        });
      }
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        severity: "error",
        message: t("msg_failed"),
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, sm: 10 },
        px: { xs: 3, sm: 8 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
          color: "primary.main",
          mb: { xs: 4, sm: 6 },
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {t("contact_title")}
      </Typography>

      <Container
        sx={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "rgba(36, 95, 115, 0.15)",
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          p: { xs: 4, sm: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 3 },
          }}
        >
          <TextField
            label={t("name_label")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label={t("email_label")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label={t("message_label")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={5}
            required
            fullWidth
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              py: 1.5,
              mt: 2,
              alignSelf: "center",
              width: { xs: "100%", sm: "60%" },
            }}
          >
            {t("send_button")}
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}