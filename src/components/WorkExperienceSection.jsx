import React, { forwardRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';
import './styles/AcademicExperienceSection.css';

const WorkExperienceSection = forwardRef(({ data }, ref) => {

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Work Experiences" />

      <Box className="academic-timeline">
        {data.work_experiences?.length > 0 ? (
          data.work_experiences.map((item, index) => (
            <Box key={index} className="timeline-item">

              {/* TIMELINE LINE */}
              <Box
                className="timeline-line"
                sx={{
                  background: 'linear-gradient(to bottom, #E2E8F0, #1E3A8A, #E2E8F0)',
                  opacity: 0.6,
                }}
              />

              {/* TIMELINE NODE */}
              <Box
                className="timeline-node"
                sx={{
                  backgroundColor: '#1E3A8A',
                  border: '3px solid #F8FAFC',
                  boxShadow: '0 0 0 3px rgba(30, 58, 138, 0.08)',
                }}
              />

              {/* CARD */}
              <Box
                className="academic-card"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
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
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 2,
                  }}
                >

                  {/* LEFT */}
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
                      <WorkIcon sx={{ color: '#1E3A8A', fontSize: '1.4rem' }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#0F172A',
                          fontSize: '1rem',
                        }}
                      >
                        {item.position}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BusinessIcon sx={{ fontSize: '0.85rem', color: '#1E3A8A' }} />
                        <Typography sx={{ color: '#475569', fontSize: '0.9rem' }}>
                          {item.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* RIGHT */}
                  <Box sx={{ textAlign: 'right' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: '0.85rem', color: '#1E3A8A' }} />
                      <Typography sx={{ color: '#64748B', fontSize: '0.85rem' }}>
                        {item.start_date} – {item.end_date}
                      </Typography>
                    </Box>

                    {item.employment_type && (
                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: '0.75rem',
                          color: '#1E3A8A',
                          fontWeight: 600,
                        }}
                      >
                        {item.employment_type}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* RESPONSIBILITIES */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {item.responsibilities?.map((resp, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 1 }}>
                      <Typography sx={{ color: '#1E3A8A', fontWeight: 700 }}>
                        •
                      </Typography>
                      <Typography sx={{ color: '#475569', lineHeight: 1.6 }}>
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* TECHNOLOGIES */}
                {item.technologies?.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {item.technologies.map((tech, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 1.2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          backgroundColor: '#F1F5F9',
                          border: '1px solid #E2E8F0',
                          color: '#1E3A8A',
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
          <Typography sx={{ color: '#64748B', textAlign: 'center', py: 4 }}>
            No work experiences provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default WorkExperienceSection;