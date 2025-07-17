import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}
