import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GradeIcon from '@mui/icons-material/Grade';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './styles/EducationSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const EducationSection = forwardRef(({ data }, ref) => {

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Education" />
      <Box className="education-timeline">
        {data.educations?.length > 0 ? (
          data.educations.map((item, index) => (
            <Box key={index} className="timeline-item">

              {/* timeline visuals (soft academic) */}
              <Box
                className="timeline-line"
                sx={{
                  background: 'linear-gradient(to bottom, #E2E8F0, #1E3A8A, #E2E8F0)',
                  opacity: 0.7,
                }}
              />
              <Box
                className="timeline-node"
                sx={{
                  backgroundColor: '#1E3A8A',
                  border: '3px solid #F8FAFC',
                  boxShadow: '0 0 0 4px rgba(30, 58, 138, 0.08)',
                }}
              />

              {/* CARD */}
              <Box
                className="education-card"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                  p: { xs: 2, sm: 3 },
                  transition: 'all 0.25s ease',

                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 18px rgba(15, 23, 42, 0.08)',
                    borderColor: '#CBD5E1',
                  },
                }}
              >

                {/* HEADER */}
                <Box
                  className="edu-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 2,
                  }}
                >

                  {/* ICON + TITLE */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: '#EEF2FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <SchoolIcon sx={{ color: '#1E3A8A', fontSize: '1.4rem' }} />
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#0F172A',
                        }}
                      >
                        {item.degree}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <MenuBookIcon sx={{ fontSize: '0.85rem', color: '#1E3A8A' }} />
                        {item.field}
                      </Typography>
                    </Box>
                  </Box>

                  {/* RIGHT META */}
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography sx={{ color: '#475569', fontSize: '0.9rem' }}>
                      {item.university}, {item.location}
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '0.85rem' }}>
                      {item.start_date} – {item.end_date}
                    </Typography>
                  </Box>
                </Box>

                {/* DETAILS */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                  {item.gpa && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GradeIcon sx={{ color: '#1E3A8A', fontSize: '0.9rem' }} />
                      <Typography sx={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A' }}>GPA:</strong> {item.gpa}
                      </Typography>
                    </Box>
                  )}

                  {item.thesis && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <AssignmentIcon sx={{ color: '#1E3A8A', fontSize: '0.9rem', mt: 0.2 }} />
                      <Typography sx={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A' }}>Thesis:</strong>{' '}
                        <span style={{ color: '#334155' }}>{item.thesis}</span>
                      </Typography>
                    </Box>
                  )}

                  {item.final_project && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <AssignmentIcon sx={{ color: '#1E3A8A', fontSize: '0.9rem', mt: 0.2 }} />
                      <Typography sx={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A' }}>Project:</strong>{' '}
                        <span style={{ color: '#334155' }}>{item.final_project}</span>
                      </Typography>
                    </Box>
                  )}

                  {item.supervisor && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PsychologyIcon sx={{ color: '#1E3A8A', fontSize: '0.9rem' }} />
                      <Typography sx={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A' }}>Supervisor:</strong>{' '}
                        {item.supervisor}
                      </Typography>
                    </Box>
                  )}

                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            sx={{
              color: '#64748B',
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