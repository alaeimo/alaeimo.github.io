import React from 'react';
import { Box, keyframes, Typography } from '@mui/material';

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
  0% { box-shadow: 0 0 0px rgba(30, 58, 138, 0.15); }
  50% { box-shadow: 0 0 18px rgba(30, 58, 138, 0.25); }
  100% { box-shadow: 0 0 0px rgba(30, 58, 138, 0.15); }
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
        backgroundColor: '#F8FAFC',
        gap: 3,
      }}
    >
      <Box sx={{ position: 'relative', width: 130, height: 130 }}>

        {/* OUTER RING */}
        <Box
          sx={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: '3px solid #E2E8F0',
            borderTop: '3px solid #1E3A8A',
            borderRight: '3px solid #3B82F6',
            animation: `${spin} 1.2s linear infinite`,
          }}
        />

        {/* MIDDLE RING */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid #EEF2FF',
            borderBottom: '2px solid #1E3A8A',
            animation: `${spin} 1.6s linear infinite reverse`,
          }}
        />

        {/* INNER GLOW */}
        <Box
          sx={{
            position: 'absolute',
            inset: '18%',
            borderRadius: '50%',
            backgroundColor: '#EEF2FF',
            animation: `${glow} 2s ease-in-out infinite`,
          }}
        />

        {/* PROFILE IMAGE */}
        <Box
          component="img"
          src="/static/img/alaeimo.png"
          alt="Profile"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            border: '2px solid #FFFFFF',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
          }}
        />
      </Box>

      {/* TEXT */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            color: '#0F172A',
            fontWeight: 600,
            letterSpacing: 0.4,
            animation: `${pulse} 1.5s ease-in-out infinite`,
          }}
        >
          Loading
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.8, mt: 1 }}>
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#1E3A8A',
                animation: `${pulse} 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;