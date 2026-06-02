import React, { forwardRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './styles/AcademicExperienceSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const AcademicExperienceSection = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Academic Experiences" />

      <Box className="academic-timeline">
        {data.academic_experiences?.length > 0 ? (
          data.academic_experiences.map((item, index) => (
            <Box key={index} className="timeline-item">

              <Box className="timeline-line" />
              <Box className="timeline-node" />

              {/* CARD */}
              <Box className="academic-card">

                {/* HEADER */}
                <Box className="academic-header">

                  {/* LEFT */}
                  <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                    <Box className="academic-icon">
                      <HistoryEduIcon />
                    </Box>

                    <Box>
                      <Typography className="academic-title" sx={{
                          fontWeight: 700,
                          color: '#0F172A',
                          fontSize: '1rem',
                        }}>
                        {item.position}
                      </Typography>

                      <Box className="academic-sub">
                        <SchoolIcon sx={{ fontSize: 14, color: '#1E3A8A' }} />
                        <span>{item.organization}</span>

                        {item.employment_type && (
                          <Chip
                            icon={<WorkOutlineIcon sx={{ fontSize: 14 }} />}
                            label={item.employment_type}
                            size="small"
                            className="academic-chip"
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>

                  {/* RIGHT */}
                  <Box className="academic-dates">
                    <CalendarTodayIcon sx={{ fontSize: 14, color: '#1E3A8A' }} />
                    <span>{item.start_date} – {item.end_date}</span>
                  </Box>

                </Box>

                {/* RESPONSIBILITIES */}
                <Box className="academic-body">
                  {item.responsibilities.map((resp, idx) => (
                    <Box key={idx} className="academic-item">
                      <span className="bullet">•</span>
                      <Typography>{resp}</Typography>
                    </Box>
                  ))}
                </Box>

              </Box>
            </Box>
          ))
        ) : (
          <Typography className="academic-empty">
            No academic experiences provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default AcademicExperienceSection;