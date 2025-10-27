import React from 'react';
import { Typography, Box } from '@mui/material';

const AnimatedUnderlineTitle = ({ title }) => {
  return (
    <Box sx={{ display: 'inline-block', position: 'relative', mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          textAlign: 'left',
          display: 'inline-block',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '3px',
          width: '100%',
          background: 'linear-gradient(90deg, #5D91C3, #B1C7DE, #5D91C3)',
          backgroundSize: '200% 100%',
          animation: 'scrollLine 2s linear infinite',
          '@keyframes scrollLine': {
            '0%': { backgroundPosition: '200% 0' },
            '100%': { backgroundPosition: '-200% 0' },
          },
        }}
      />
    </Box>
  );
};

export default AnimatedUnderlineTitle;
