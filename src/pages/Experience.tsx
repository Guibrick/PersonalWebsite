import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { RadioButtonCheckedRounded } from "@mui/icons-material";

interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  { year: "2011", title: "Mediator of Employment-Related Cases – Judicial System", description: "I started working in the Judiciary from an entry-level position and progressed to working as a mediator in employment-related cases over an eight-year period." },
  { year: "2013", title: "Law Degree", description: "I earned my Law degree from the National University of La Matanza, Buenos Aires, Argentina." },
  { year: "2015", title: "Master's Degree in Administrative Law", description: "I completed my two-year Master's degree in Administrative Law at Austral University, Buenos Aires, Argentina." },
  { year: "2017", title: "Art Curation Studies", description: "I began my studies in Art Curation at the National University of the Arts, Buenos Aires, Argentina, although the program remains unfinished." },
  { year: "2022", title: "Fullstack .NET Bootcamp", description: "I graduated from the Fullstack .NET Bootcamp during Fall 2022, offered by </Salt> in Stockholm, Sweden." },
  { year: "2023", title: "Software Developer", description: "I started my first job as a software developer at Byggdagboken in Ljusdal, Sweden." },
  { year: "Future", title: "Software Developer & Learner", description: "Continuously learning and experimenting with cutting-edge tools, frameworks, and architectures." }];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState<{ left: number; top: number }[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
  }, []);

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
        background: 'linear-gradient(135deg, #c99073ff 30%, #50899cff 100%, #c99073ff 40%)',
        overflow: "hidden",
        py: 25,
        px: 25,
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
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
            color: '#245F73',
            textShadow: `
      -1px -1px 0 #87a6b1ff,
      1px -1px 0 #87a6b1ff,
      -1px 1px 0 #87a6b1ff,
      1px 1px 0 #87a6b1ff
    `,
            lineHeight: 1.1,
            mb: 3,
          }}
        >
          Experience
        </Typography>

      </motion.div>

      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: 400,
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
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.2 }}
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
                  exit={{ opacity: 0 }}
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
                      color: "#245F73",
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

                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                      }}
                    >
                      {experiences[idx].description}
                    </Typography>
                  </Paper>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </Box>
  );
}