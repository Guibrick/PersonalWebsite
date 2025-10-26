import { Container, Typography, Card, CardContent, Box } from '@mui/material';

export default function Projects() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ flex: { xs: '100%', md: '48%' } }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project 1</Typography>
              <Typography>React portfolio website</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: { xs: '100%', md: '48%' } }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project 2</Typography>
              <Typography>Node.js API for tasks</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
