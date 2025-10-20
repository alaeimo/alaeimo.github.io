import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import './styles/EducationSection.css'; // keep your shared card styles

const ResearchInterestsSection = forwardRef(({ data }, ref) => {
  const description = data?.research_interests?.description;
  const title = data?.research_interests?.title || "Research Interests";

  return (
    <div ref={ref}>
      <Box
        className="education-card"
        sx={{
          p: { xs: 2, sm: 3 },
          width: '100%',
          background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            color: '#1e293b',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {description ? (
          <Box
            sx={{
              textAlign: 'left',
              lineHeight: 1.7,
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              color: '#1e293b',
              '& strong': { fontWeight: 600, color: '#111827' },
              '& em': { fontStyle: 'italic', color: '#334155' },
              '& p': { mb: 1.5 },
            }}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </Box>
        ) : (
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              color: '#94a3b8',
              textAlign: 'center',
            }}
          >
            No research interests provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default ResearchInterestsSection;
