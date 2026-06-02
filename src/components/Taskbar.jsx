import React, { useState, useEffect } from 'react';
import { Box, IconButton, CssBaseline, Tooltip, Fade } from '@mui/material';
import './styles/Taskbar.css';

const Taskbar = ({ data, activeSection, onSectionChange, sections, sectionIcons }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide taskbar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '10vh' }}>
      <CssBaseline />
      <Fade in={visible} timeout={300}>
        <Box
          sx={{
            display: 'flex',
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1200,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="taskbar"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(26, 58, 92, 0.85)',
              backdropFilter: 'blur(12px)',
              p: 1,
              gap: 0.75,
              borderRadius: '60px',
              transition: 'all 0.3s ease-in-out',
              border: '1px solid rgba(93, 145, 195, 0.3)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              '&:hover': {
                border: '1px solid rgba(93, 145, 195, 0.6)',
                boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
              },
            }}
          >
            {sections.map((section, index) => {
              const { icon: Icon, color } = sectionIcons[section.id] || {
                icon: IconButton,
                color: '#5D91C3',
              };
              const isActive = activeSection === section.id;
              
              return (
                <Tooltip
                  key={section.id}
                  title={section.label}
                  arrow
                  placement="top"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 200 }}
                >
                  <IconButton
                    onClick={() => onSectionChange(section.id)}
                    sx={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      minHeight: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      color: isActive ? "#ffffff" : "#B1C7DE",
                      background: isActive
                        ? "linear-gradient(135deg, #5D91C3, #2196f3)"
                        : "transparent",

                      borderRadius: "50%",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",

                      "&:hover": {
                        background: "linear-gradient(135deg, #5D91C3, #2196f3)",
                        color: "#ffffff",
                        transform: "translateY(-3px)",
                        boxShadow: "0 4px 12px rgba(93, 145, 195, 0.4)",
                      },

                      "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#5D91C3",
                            boxShadow: "0 0 8px #5D91C3",
                          }
                        : {},
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Taskbar;