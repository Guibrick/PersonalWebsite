import { Box, Typography } from '@mui/material';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '7%',
        py: 2,
        px: 4,
        background: 'linear-gradient(to top, #384959, rgba(17, 17, 17, 0))',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 2,
        zIndex: 1100,
      }}
    >
      <Typography variant="body2" sx={{ color: '#F2F0EF' }}>
        © {new Date().getFullYear()} Guido Bertaina
      </Typography>
    </Box>
  );
}
