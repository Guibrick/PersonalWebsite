import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

import brazil from "../assets/brazil.jpg";
import greece from "../assets/greece.jpg";
import iceland from "../assets/iceland.jpg";
import indonesia from "../assets/indonesia.jpg";
import israel from "../assets/israel.jpg";
import italy from "../assets/italy.jpg";

const photos = [brazil, greece, iceland, indonesia, israel, italy];

export default function AboutMe() {
  const isSmall = useMediaQuery("(max-width:900px)");
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        color: "#245F73",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, md: 0 },
        gap: { xs: 6, md: 10 },
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isSmall ? 2 : 3,
          maxWidth: { xs: "100%", md: "40%" },
        }}
      >
        {[0, 2, 4].map((i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: isSmall ? 2 : 3,
              flexWrap: "wrap",
            }}
          >
            <motion.img
              src={photos[i]}
              alt={`photo-${i + 1}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: isSmall ? "160px" : "200px",
                height: isSmall ? "160px" : "200px",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              }}
            />
            <motion.img
              src={photos[i + 1]}
              alt={`photo-${i + 2}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: isSmall ? "160px" : "200px",
                height: isSmall ? "160px" : "200px",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "55%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
              color: "primary.main",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t("about_title")}
          </Typography>

          {[1, 2, 3, 4, 5].map((p) => (
            <Typography
              key={p}
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.8,
                textAlign: "justify",
                color: "secondary.main",
                mb: p < 6 ? 3 : 0,
                px: { xs: 1, md: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: t(`about_p${p}`) }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}