import { Container, Typography, List, ListItem } from '@mui/material';

export default function Experience() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>Company A — Frontend Developer</ListItem>
        <ListItem>Company B — Fullstack Developer</ListItem>
      </List>
    </Container>
  );
}
