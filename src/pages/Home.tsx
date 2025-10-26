import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import MyPhoto from "../assets/models-LR-4-retouched-IMG_0025.jpg";

export default function Home() {
    const { t } = useLanguage();

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Container
                sx={{
                    width: "100vw",
                    height: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 6,
                    px: 4,
                    boxSizing: "border-box",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1, zIndex: 2 }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 900,
                            fontSize: { xs: "3rem", sm: "4rem", md: "7rem" },
                            color: "primary.main",
                            lineHeight: 1.1,
                            mb: 3,
                        }}
                    >
                        Guido Bertaina
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ color: "secondary.main", mb: 5, pl: 1, lineHeight: 1.5 }}
                    >
                        {t("home_description_line1")} <br />
                        {t("home_description_line2")} <br />
                        {t("home_description_line3")}
                    </Typography>
                </motion.div>

                <motion.div
                    style={{
                        width: "35vw",
                        maxWidth: "500px",
                        position: "relative",
                        top: "0px",
                        left: "100px",
                    }}
                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                >
                    <motion.img
                        src={MyPhoto}
                        alt={t("home_photo_alt")}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
                        }}
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </Container>
        </Box>
    );
}