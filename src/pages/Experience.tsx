import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Box, Typography, Paper, Button, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { RadioButtonCheckedRounded, DownloadRounded } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";

interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

export default function Experience() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState<{ left: number; top: number }[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const experiences: ExperienceItem[] = [
    { year: "2011", title: t("exp_2011_title"), description: t("exp_2011_desc") },
    { year: "2013", title: t("exp_2013_title"), description: t("exp_2013_desc") },
    { year: "2015", title: t("exp_2015_title"), description: t("exp_2015_desc") },
    { year: "2018", title: t("exp_2018_title"), description: t("exp_2018_desc") },
    { year: "2022", title: t("exp_2022_title"), description: t("exp_2022_desc") },
    { year: "2023", title: t("exp_2023_title"), description: t("exp_2023_desc") },
    { year: t("exp_future_year"), title: t("exp_future_title"), description: t("exp_future_desc") },
  ];

  const computePoints = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const newPoints = experiences.map((_, i) => {
      const t = i / (experiences.length - 1);
      const left = t * width;
      const top = height * (0.5 + 0.4 * Math.sin(t * Math.PI * 1.5));
      return { left, top };
    });

    setPoints(newPoints);
  }, [experiences.length]);

  useLayoutEffect(() => {
    computePoints();
    window.addEventListener("resize", computePoints);
    return () => window.removeEventListener("resize", computePoints);
  }, [computePoints]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 12, sm: 20 },
        px: { xs: 3, sm: 6, md: 12 },
        boxSizing: "border-box",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
            color: "primary.main",
            mb: { xs: 4, sm: 6 },
            textAlign: "left",
            ml: { xs: "16px", sm: "0px", md: "40px", lg: "150px" },
          }}
        >
          {t("experience_title")}
        </Typography>
      </motion.div>


      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", sm: "40vh" },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {points.map((p, idx) => {
          const isAbove = idx % 2 === 0;
          const leftPos = isSmall ? -70 : -90;
          const topPos = isAbove ? (isSmall ? -100 : -120) : isSmall ? 20 : 28;
          const widthPx = isSmall ? 180 : 220;

          return (
            <Box
              key={idx}
              sx={{
                position: "absolute",
                left: p.left,
                top: p.top,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.2 }}
                aria-label={experiences[idx].title}
              >
                <RadioButtonCheckedRounded
                  sx={{
                    fontSize: isSmall ? 60 : 90,
                    color: hoveredIndex === idx ? "#733E24" : "#245F73",
                    transition: "color 0.2s",
                  }}
                />
              </motion.div>

              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    left: leftPos,
                    top: topPos,
                    width: widthPx,
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 2,
                      backgroundColor: "#F2F0EF",
                      borderRadius: 2,
                      color: "secondary.main",
                      fontFamily: "Montserrat, sans-serif",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {experiences[idx].year}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                      {experiences[idx].title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {experiences[idx].description}
                    </Typography>
                  </Paper>
                </motion.div>
              )}
            </Box>
          );
        })}
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadRounded />}
        href="/CV - Guido Bertaina.pdf"
        download
        sx={{
          position: "absolute",
          bottom: isSmall ? 80 : 150,
          right: isSmall ? 20 : 100,
          fontWeight: 700,
          borderRadius: 2,
          textTransform: "none",
          px: 4,
          py: 2,
          fontSize: isSmall ? "1rem" : "1.2rem",
          minWidth: 140,
        }}
      >
        {t("download_cv")}
      </Button>
    </Box>
  );
}