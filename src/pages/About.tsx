import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const photos = [
  "src/assets/brazil.jpg",
  "src/assets/greece.jpg",
  "src/assets/iceland.jpg",
  "src/assets/indonesia.jpg",
  "src/assets/israel.jpg",
  "src/assets/italy.jpg",
];

export default function AboutMe() {
  const isSmall = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #50899cff 20%, #c99073ff 80%)",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: isSmall ? 2 : 3,
          }}
        >
          <motion.img
            src={photos[0]}
            alt="photo-1"
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
            src={photos[1]}
            alt="photo-2"
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: isSmall ? 2 : 3,
          }}
        >
          <motion.img
            src={photos[2]}
            alt="photo-3"
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
            src={photos[3]}
            alt="photo-4"
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: isSmall ? 2 : 3,
          }}
        >
          <motion.img
            src={photos[4]}
            alt="photo-5"
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
            src={photos[5]}
            alt="photo-6"
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
              color: "#245F73",
              textShadow: `
          -1px -1px 0 #87a6b1ff,
          1px -1px 0 #87a6b1ff,
          -1px 1px 0 #87a6b1ff,
          1px 1px 0 #87a6b1ff
        `,
              mb: 4,
              textAlign: "left",
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
              mb: 3,
            }}
          >
            My name is <strong>Guido Bertaina</strong>, I am 36 years old and originally from Argentina. Growing up,
            I cultivated a love for learning and diverse experiences, which led me to pursue a <strong>Law degree</strong>
            after high school, while also dedicating time to passions such as <em>rugby, playing the cello</em>, and exploring cultural activities.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
              mb: 3,
            }}
          >
            <strong>Traveling</strong> has always been a major part of my life. I’ve visited over <strong>65 countries</strong> so 
            far and had the chance to live in several of them. In 2016, I took a <strong>sabbatical</strong> from my role in
            the Judiciary of Buenos Aires Province to spend a year in Dublin, Ireland—improving my English while working in an Irish bar.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
              mb: 3,
            }}
          >
            Upon returning to Argentina, I completed my <strong>Master’s in Administrative Law</strong>, defending my thesis titled
            <em>“Project of Urgent Health Process in the Province of Buenos Aires”</em>.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
              mb: 3,
            }}
          >
            In 2019, I moved back to Europe, living a year in Stockholm, Sweden, working as a <strong>scooter mechanic for Voi</strong>.
            Early 2020, I volunteered at a hostel in Jerusalem, Israel, before relocating to Copenhagen, Denmark due to the pandemic.
            There, I worked in the restaurant industry until late 2021, and later moved to Turin, Italy to obtain my <strong>Italian citizenship</strong>.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            In 2022, I returned permanently to Stockholm and began my career as a <strong>Software Developer</strong>.
            What started as a hobby has now become my professional path. I remain passionate about technology, continuously learning,
            experimenting with new tools, frameworks, and architectures, and embracing challenges that push me to grow.
          </Typography>
        </motion.div>
      </Box>

    </Box>
  );
}
