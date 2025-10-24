import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I'm a software developer with experience in React, TypeScript, Node.js, and modern web technologies.
      </Typography>
    </Container>
  );
}
