import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
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
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[2],
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                  border: `1px solid ${theme.palette.primary.light}33`,
                  backdropFilter: 'blur(6px)',
                  overflow: 'hidden',
                  p: { xs: theme.spacing(2), sm: theme.spacing(3) },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                {/* Header */}
                <Box
                  className="academic-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: theme.spacing(1),
                    mb: theme.spacing(1.5),
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.position}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                        mt: 0.1,
                      }}
                    >
                      {item.organization}
                    </Typography>
                  </Box>

                  <Box
                    className="academic-dates"
                    sx={{
                      textAlign: 'right',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                      }}
                    >
                  {item.start_date} – {item.end_date}
                    </Typography>
                      {item.employment_type && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {item.employment_type}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Responsibilities */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(0.6),
                    mt: theme.spacing(1),
                  }}
                >
                  {item.responsibilities.map((resp, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        gap: theme.spacing(1),
                        alignItems: 'flex-start',
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                        }}
                      >
                        •
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: theme.palette.text.primary,
                          lineHeight: 1.5,
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
              color: theme.palette.text.disabled,
              textAlign: 'center',
              py: theme.spacing(2),
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
