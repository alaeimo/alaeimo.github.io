import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import './styles/EducationSection.css';

const EducationSection = forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <Box className="education-timeline">
      {data.educations?.length > 0 ? (
        data.educations.map((item, index) => (
          <Box key={index} className="timeline-item">
            {/* Timeline Edge and Node */}
            <Box className="timeline-line" />
            <Box className="timeline-node" />

            {/* Card */}
            <Box
              className="education-card"
              sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.08)',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
                overflow: 'hidden',
                p: { xs: 2, sm: 3 },
              }}
            >
              {/* Header Row: Degree and Date block */}
              <Box
                className="edu-header"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 1,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    className="edu-degree"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      color: '#1e293b',
                    }}
                  >
                    {item.degree}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="edu-field"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#555' }}
                  >
                    {item.field}
                  </Typography>
                </Box>
                <Box className="edu-right">
                  <Typography
                    variant="body1"
                    className="edu-university"
                    sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600 }}
                  >
                    {item.university}, {item.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="edu-dates"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#666' }}
                  >
                    {item.start_date} – {item.end_date}
                  </Typography>
                </Box>
              </Box>

              {/* Details */}
              <Box className="edu-details" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {item.gpa && (
                  <Typography
                    variant="body2"
                    className="edu-detail"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#444' }}
                  >
                    <span className="detail-label" style={{ fontWeight: 600 }}>GPA:</span> {item.gpa}
                  </Typography>
                )}
                {item.thesis && (
                  <Typography
                    variant="body2"
                    className="edu-detail"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#444' }}
                  >
                    <span className="detail-label" style={{ fontWeight: 600 }}>Thesis:</span>{' '}
                    <em>{item.thesis}</em>
                  </Typography>
                )}
                {item.final_project && (
                  <Typography
                    variant="body2"
                    className="edu-detail"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#444' }}
                  >
                    <span className="detail-label" style={{ fontWeight: 600 }}>Final Project:</span>{' '}
                    <em>{item.final_project}</em>
                  </Typography>
                )}
                {item.supervisor && (
                  <Typography
                    variant="body2"
                    className="edu-detail"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#444' }}
                  >
                    <span className="detail-label" style={{ fontWeight: 600 }}>Supervisor:</span> {item.supervisor}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography
          variant="body1"
          className="no-education"
          sx={{ fontFamily: '"Inter", sans-serif', color: '#666' }}
        >
          No education details provided.
        </Typography>
      )}
    </Box>
  </div>
));

export default EducationSection;
