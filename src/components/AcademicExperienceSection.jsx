import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import './styles/AcademicExperienceSection.css';

const AcademicExperienceSection = forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <Box className="academic-timeline">
      {data.academic_experiences?.length > 0 ? (
        data.academic_experiences.map((item, index) => (
          <Box key={index} className="timeline-item">
            {/* Timeline line and node */}
            <Box className="timeline-line" />
            <Box className="timeline-node" />

            {/* Card */}
            <Box
              className="academic-card"
              sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
                border: '1px solid rgba(33, 150, 243, 0.15)',
                backdropFilter: 'blur(6px)',
                overflow: 'hidden',
                p: { xs: 2, sm: 3 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.12)',
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
                  gap: 1,
                  mb: 1.2,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    {item.position}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      color: '#334155',
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
                  {item.employment_type && (
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: '"Inter", sans-serif', color: '#64748b' }}
                    >
                      {item.employment_type}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#475569' }}
                  >
                    {item.start_date} – {item.end_date}
                  </Typography>
                </Box>
              </Box>

              {/* Responsibilities */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.6, mt: 1 }}>
                {item.responsibilities.map((resp, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <Typography sx={{ color: '#1976d2', fontWeight: 700 }}>•</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        color: '#1e293b',
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
            fontFamily: '"Inter", sans-serif',
            color: '#94a3b8',
            textAlign: 'center',
            py: 2,
          }}
        >
          No academic experiences provided.
        </Typography>
      )}
    </Box>
  </div>
));

export default AcademicExperienceSection;
