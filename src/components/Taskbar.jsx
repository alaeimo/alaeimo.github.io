import React from 'react';
import { Box, IconButton, CssBaseline } from '@mui/material';
import './styles/Taskbar.css';

const Taskbar = ({ data, activeSection, onSectionChange, sections, sectionIcons }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1200,
        }}
        className="taskbar"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'transparent',
            backdropFilter: 'blur(8px)',
            p: 0.5,
            gap: 0.5,
            borderRadius: '40px',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {sections.map((section) => {
            const { icon: Icon, color } = sectionIcons[section.id] || {
              icon: IconButton,
              color: '#666',
            };
            return (
              <IconButton
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                sx={{
                  color: activeSection === section.id ? color : '#666',
                  bgcolor:
                    activeSection === section.id
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    color,
                  },
                  borderRadius: '50%',
                  width: { xs: 25, sm: 25, md: 32, lg: 32, xl: 32 },
                  height: { xs: 25, sm: 25, md: 32, lg: 32, xl: 32 },
                }}
                title={section.label}
              >
                <Icon sx={{ fontSize: 20 }} />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Taskbar;
