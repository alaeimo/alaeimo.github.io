import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import './styles/EducationSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const EducationSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Educations" />
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
                  className="edu-header"
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
                      {item.degree}
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
                      {item.field}
                    </Typography>
                  </Box>

                  <Box
                    className="edu-dates"
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
                      {item.university}, {item.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {item.start_date} – {item.end_date}
                    </Typography>
                  </Box>
                </Box>

                {/* Details */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(0.6),
                    mt: theme.spacing(1),
                  }}
                >
                  {item.gpa && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <strong>GPA:</strong> {item.gpa}
                    </Typography>
                  )}
                  {item.thesis && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <strong>Thesis:</strong> <em>{item.thesis}</em>
                    </Typography>
                  )}
                  {item.final_project && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <strong>Final Project:</strong> <em>{item.final_project}</em>
                    </Typography>
                  )}
                  {item.supervisor && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <strong>Supervisor:</strong> {item.supervisor}
                    </Typography>
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
              color: theme.palette.text.disabled,
              textAlign: 'center',
              py: theme.spacing(2),
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
