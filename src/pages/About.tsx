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
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#245F73",
        px: { xs: 4, sm: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "80vh",
          gap: isSmall ? 2 : 4,
        }}
      >
        {[0, 2, 4].map((i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: i % 4 === 0 ? "flex-start" : "flex-end",
              gap: isSmall ? 2 : 3,
            }}
          >
            <motion.img
              src={photos[i]}
              alt={`photo-${i + 1}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "220px",
                height: "220px",
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
                width: "220px",
                height: "220px",
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
          maxWidth: "60%",
          pl: { md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "80vh",
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
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
              color: "primary.main",
              mb: 4,
              textAlign: "left",
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
                fontSize: "1.1rem",
                lineHeight: 1.8,
                textAlign: "justify",
                color: "secondary.main",
                mb: p < 6 ? 3 : 0,
                pl: 1,
              }}
              dangerouslySetInnerHTML={{ __html: t(`about_p${p}`) }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}