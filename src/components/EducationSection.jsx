import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GradeIcon from '@mui/icons-material/Grade';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './styles/EducationSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const EducationSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Education" />
      <Box className="education-timeline">
        {data.educations?.length > 0 ? (
          data.educations.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />
              <Box
                className="education-card"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  boxShadow: 'none',
                  background: 'transparent',
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
                  className="edu-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
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
                      <SchoolIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                        }}
                      >
                        {item.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                          fontStyle: 'italic',
                          mt: 0.1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <MenuBookIcon sx={{ fontSize: '0.8rem', color: '#5D91C3' }} />
                        {item.field}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    className="edu-dates"
                    sx={{
                      textAlign: 'right',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: 0.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOnIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                        }}
                      >
                        {item.university}, {item.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                        }}
                      >
                        {item.start_date} – {item.end_date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Details */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                    mt: 1.5,
                    pl: { xs: 0, sm: 7.5 },
                  }}
                >
                  {item.gpa && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GradeIcon sx={{ color: '#5D91C3', fontSize: '0.9rem' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                        }}
                      >
                        <strong style={{ color: '#ffffff' }}>GPA:</strong> {item.gpa}
                      </Typography>
                    </Box>
                  )}
                  {item.thesis && (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <AssignmentIcon sx={{ color: '#5D91C3', fontSize: '0.9rem', mt: 0.2 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                        }}
                      >
                        <strong style={{ color: '#ffffff' }}>Thesis:</strong> <em style={{ color: '#B1C7DE' }}>{item.thesis}</em>
                      </Typography>
                    </Box>
                  )}
                  {item.final_project && (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <AssignmentIcon sx={{ color: '#5D91C3', fontSize: '0.9rem', mt: 0.2 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                        }}
                      >
                        <strong style={{ color: '#ffffff' }}>Final Project:</strong> <em style={{ color: '#B1C7DE' }}>{item.final_project}</em>
                      </Typography>
                    </Box>
                  )}
                  {item.supervisor && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PsychologyIcon sx={{ color: '#5D91C3', fontSize: '0.9rem' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#E0E8F0',
                        }}
                      >
                        <strong style={{ color: '#ffffff' }}>Supervisor:</strong> {item.supervisor}
                      </Typography>
                    </Box>
                  )}
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
              py: 4,
            }}
          >
            No education details provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default EducationSection;