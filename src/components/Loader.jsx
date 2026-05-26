import React from 'react';
import { Box, keyframes, Typography } from '@mui/material';

// Define the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.6; transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0px rgba(45, 85, 125, 0.3); }
  50% { box-shadow: 0 0 20px rgba(45, 85, 125, 0.6); }
  100% { box-shadow: 0 0 0px rgba(45, 85, 125, 0.3); }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f7fa',
        gap: 3,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 140,
          height: 140,
        }}
      >
        {/* Outer animated ring */}
        <Box
          sx={{
            position: 'absolute',
            top: -4,
            left: -4,
            right: -4,
            bottom: -4,
            border: '3px solid #e0e8f0',
            borderTop: '3px solid #1a3a5c',
            borderRight: '3px solid #2c5e8c',
            borderRadius: '50%',
            animation: `${spin} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
          }}
        />

        {/* Middle ring */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '3px solid #e0e8f0',
            borderBottom: '3px solid #2c5e8c',
            borderRadius: '50%',
            animation: `${spin} 1.5s linear infinite reverse`,
          }}
        />

        {/* Inner solid ring */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a3a5c, #2c5e8c)',
            animation: `${glow} 2s ease-in-out infinite`,
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
            border: '2px solid #ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </Box>

      {/* Loading text */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#1a3a5c',
            fontWeight: 500,
            letterSpacing: '0.5px',
            animation: `${pulse} 1.5s ease-in-out infinite`,
          }}
        >
          Loading
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 0.8,
          }}
        >
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#2c5e8c',
                animation: `${pulse} 1.5s ease-in-out infinite`,
                animationDelay: `${dot * 0.2}s`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;