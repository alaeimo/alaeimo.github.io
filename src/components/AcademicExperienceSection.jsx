import React, { forwardRef } from 'react';
import { Box, Typography, useTheme, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './styles/AcademicExperienceSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const AcademicExperienceSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Academic Experiences" />
      <Box className="academic-timeline">
        {data.academic_experiences?.length > 0 ? (
          data.academic_experiences.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />
              <Box
                className="academic-card"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  boxShadow: 'none',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  backdropFilter: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  p: { xs: 2, sm: 3 },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                  '&:hover': {
                    transform: 'translateY(-4px)',
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
                    mb: 2.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1 }}>
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
                      <HistoryEduIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          mb: 0.75,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.position}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <SchoolIcon sx={{ color: '#5D91C3', fontSize: '0.9rem' }} />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontFamily: theme.typography.fontFamily,
                              color: '#B1C7DE',
                              fontStyle: 'italic',
                            }}
                          >
                            {item.organization}
                          </Typography>
                        </Box>
                        
                        {item.employment_type && (
                          <Chip
                            icon={<WorkOutlineIcon sx={{ fontSize: '0.7rem' }} />}
                            label={item.employment_type}
                            size="small"
                            sx={{
                              height: 22,
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              backgroundColor: 'rgba(93, 145, 195, 0.15)',
                              color: '#5D91C3',
                              border: '1px solid rgba(93, 145, 195, 0.3)',
                              '& .MuiChip-icon': {
                                color: '#5D91C3',
                                fontSize: '0.7rem',
                              },
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>

                  {/* Date Box */}
                  <Box
                    className="academic-dates"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'flex-start', lg: 'flex-end' },
                      gap: 0.75,
                      minWidth: { xs: 'auto', lg: '160px' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <CalendarTodayIcon sx={{ color: '#5D91C3', fontSize: '0.85rem' }} />
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
                  </Box>
                </Box>

                {/* Responsibilities with improved styling */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mt: 1.5,
                    pl: { xs: 0, sm: 1 },
                  }}
                >
                  {item.responsibilities.map((resp, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'flex-start',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#5D91C3',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          lineHeight: 1.5,
                          minWidth: '20px',
                        }}
                      >
                        •
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                          lineHeight: 1.65,
                          fontSize: '0.9rem',
                        }}
                      >
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>
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
              py: 6,
              fontStyle: 'italic',
            }}
          >
            No academic experiences provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default AcademicExperienceSection;