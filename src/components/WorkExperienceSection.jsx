import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import './styles/AcademicExperienceSection.css'; // reuse same CSS for timeline & card
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
                  borderRadius: theme.shape.borderRadius,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                  border: `1px solid ${theme.palette.primary.light}33`,
                  boxShadow: theme.shadows[2],
                  backdropFilter: "blur(6px)",
                  overflow: "hidden",
                  p: { xs: theme.spacing(2), sm: theme.spacing(3) },
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
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
                      {item.company}
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

                {/* Technologies */}
                {item.technologies?.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: theme.spacing(1) }}>
                    {item.technologies.map((tech, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 1.5,
                          py: 0.3,
                          bgcolor: theme.palette.primary.main + '1A', 
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          fontFamily: theme.typography.fontFamily,
                          borderRadius: 1,
                          border: `1px solid ${theme.palette.primary.main}`,
                          boxShadow: `0 0 4px ${theme.palette.primary.main}`,
                          "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: `
                            0 0 6px ${theme.palette.primary.main},
                          `,
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
              color: theme.palette.text.disabled,
              textAlign: 'center',
              py: theme.spacing(2),
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
