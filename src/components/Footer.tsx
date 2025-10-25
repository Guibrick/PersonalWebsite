import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '10%',
        py: 2,
        px: 4,
        background: 'linear-gradient(to top, #30515cff, rgba(17, 17, 17, 0))',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 2,
        zIndex: 1100,
      }}
    >
      <Typography variant="body2" sx={{ color: '#F2F0EF' }}>
        © {new Date().getFullYear()} Guido
      </Typography>
      <IconButton
        aria-label="GitHub"
        component="a"
        href="https://github.com/guibrick"
        target="_blank"
        sx={{ color: '#F2F0EF' }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/tu-usuario"
        target="_blank"
        sx={{ color: '#F2F0EF' }}
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
}
