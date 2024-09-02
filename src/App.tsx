// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Header from './components/Layout/Headers/Header';
import Footer from './components/Layout/Footer/Footer';
import { Box, Container } from '@mui/material'; // Import MUI components for styling

const App: React.FC = () => {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Set minimum height to fill the viewport
        }}
      >
        <Header />
        <Container
          component="main"
          sx={{
            flex: 1, // Make main content flex
            mt: 2, // Optional: Add some top margin
            mb: 2, // Optional: Add some bottom margin
          }}
        >
          <AppRoutes />
        </Container>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
