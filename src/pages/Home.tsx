import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Hi, I'm Guido
      </Typography>
      <Typography variant="h5" gutterBottom>
        Software Developer
      </Typography>
      <Button variant="contained" href="/projects">
        View Projects
      </Button>
    </Container>
  );
}
