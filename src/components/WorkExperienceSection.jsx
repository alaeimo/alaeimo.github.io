import React, { forwardRef } from 'react';
import { Box, Typography, useTheme, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './styles/AcademicExperienceSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const WorkExperienceSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Work Experiences" />
      <Box className="academic-timeline">
        {data.work_experiences?.length > 0 ? (
          data.work_experiences.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              {/* Card */}
              <Box
                className="academic-card"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  width: "100%",
                  borderRadius: 3,
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: 'none',
                  overflow: "hidden",
                  p: { xs: 2, sm: 3 },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #5D91C3, #2196f3, #5D91C3)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                {/* Header with Icon */}
                <Box
                  className="academic-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 55,
                        height: 55,
                        borderRadius: 2.5,
                        background: 'linear-gradient(135deg, #5D91C3 0%, #2196f3 100%)',
                        boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(5deg) scale(1.05)',
                          boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                        },
                      }}
                    >
                      <WorkIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          mb: 0.5,
                        }}
                      >
                        {item.position}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BusinessIcon sx={{ color: '#5D91C3', fontSize: '0.9rem' }} />
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#B1C7DE',
                            fontStyle: 'italic',
                          }}
                        >
                          {item.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    className="academic-dates"
                    sx={{
                      textAlign: 'right',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: 0.75,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                          fontWeight: 500,
                        }}
                      >
                        {item.start_date} – {item.end_date}
                      </Typography>
                    </Box>
                    {item.employment_type && (
                      <Chip
                        label={item.employment_type}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          backgroundColor: 'rgba(93, 145, 195, 0.15)',
                          color: '#5D91C3',
                          border: '1px solid rgba(93, 145, 195, 0.3)',
                          borderRadius: 1.5,
                        }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Responsibilities */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                    mt: 1,
                  }}
                >
                  {item.responsibilities.map((resp, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: 'flex-start',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#5D91C3',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          lineHeight: 1.5,
                        }}
                      >
                        •
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                          lineHeight: 1.6,
                        }}
                      >
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Technologies */}
                {item.technologies?.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {item.technologies.map((tech, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 1.5,
                          py: 0.6,
                          background: 'rgba(93, 145, 195, 0.12)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          fontFamily: theme.typography.fontFamily,
                          borderRadius: 2,
                          border: '1px solid rgba(93, 145, 195, 0.3)',
                          color: '#5D91C3',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                          "&:hover": {
                            transform: "translateY(-2px)",
                            borderColor: '#5D91C3',
                            background: 'rgba(93, 145, 195, 0.2)',
                            boxShadow: '0 2px 8px rgba(93, 145, 195, 0.2)',
                          },
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            variant="body2"
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: '#B1C7DE',
              textAlign: 'center',
              py: 4,
            }}
          >
            No work experiences provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default WorkExperienceSection;