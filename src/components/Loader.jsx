import React from 'react';
import { Box, keyframes } from '@mui/material';

// Define the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
        backgroundColor: '#0B2536', // matches your theme background
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 120,
          height: 120,
        }}
      >
        {/* Animated ring */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '4px solid #B1C7DE',
            borderTop: '4px solid #5D91C3',
            borderRadius: '50%',
            animation: `${spin} 1.5s linear infinite`,
          }}
        />

        {/* Profile picture */}
        <Box
          component="img"
          src="/static/img/alaeimo.jpg"
          alt="Profile"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 80,
            height: 80,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            border: '2px solid #B1C7DE',
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
