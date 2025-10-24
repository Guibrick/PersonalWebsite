import { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => alert('Message sent!'),
      () => alert('Failed to send message.')
    );
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
        <TextField label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} required />
        <Button type="submit" variant="contained">Send</Button>
      </Box>
    </Container>
  );
}
