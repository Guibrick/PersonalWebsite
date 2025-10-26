import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
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

    const newPoints: { left: number; top: number }[] = [];
    for (let i = 0; i < experiences.length; i++) {
      const t = i / (experiences.length - 1);
      const left = t * width;
      const top = height * (0.5 + 0.4 * Math.sin(t * Math.PI * 1.5));
      newPoints.push({ left, top });
    }
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        overflow: "hidden",
        py: 25,
        px: 25,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
            color: "primary.main",
            mb: 3,
          }}
        >
          {t("experience_title")}
        </Typography>
      </motion.div>

      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "40vh",
          margin: "0 auto",
        }}
      >
        {points.map((p, idx) => {
          const isAbove = idx % 2 === 0;
          return (
            <div
              key={idx}
              style={{
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
                    fontSize: 90,
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
                    left: -90,
                    top: isAbove ? -120 : 28,
                    width: 220,
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
            </div>
          );
        })}
      </div>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadRounded />}
        href="/CV - Guido Bertaina.pdf"
        download
        sx={{
          position: "absolute",
          bottom: 150,
          right: 100,
          fontWeight: 700,
          borderRadius: 2,
          textTransform: "none",
          px: 4,
          py: 2,
          fontSize: "1.2rem",
          minWidth: 180,
        }}
      >
        {t("download_cv")}
      </Button>
    </Box>
  );
}