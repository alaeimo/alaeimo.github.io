import React, { forwardRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ScienceIcon from '@mui/icons-material/Science';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ResearchInterestsSection = forwardRef(({ data }, ref) => {
  const description = data?.research_interests?.description;
  const title = data?.research_interests?.title || "Research Interests";
  const keywords = data?.research_interests?.keywords || [];

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title={title} />

      <Box
        className="research-interests-card"
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
            borderColor: '#CBD5E1',
            boxShadow: '0 6px 18px rgba(15, 23, 42, 0.08)',
          },
        }}
      >

        {/* HEADER */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>

          {/* ICON */}
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: 2,
              backgroundColor: '#EEF2FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ScienceIcon sx={{ color: '#1E3A8A', fontSize: '1.4rem' }} />
          </Box>

          {/* TITLE */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '0.2px',
            }}
          >
            {title}
          </Typography>

        </Box>

        {/* DESCRIPTION */}
        {description ? (
          <Box
            sx={{
              textAlign: 'left',
              lineHeight: 1.75,
              fontSize: '0.95rem',
              color: '#475569',
              mb: keywords.length ? 2.5 : 0,

              '& strong': {
                color: '#0F172A',
                fontWeight: 600,
              },

              '& em': {
                color: '#334155',
              },

              '& p': {
                mb: 1.5,
                '&:last-child': { mb: 0 },
              },

              '& a': {
                color: '#1E3A8A',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(30, 58, 138, 0.25)',
                '&:hover': {
                  borderBottomColor: '#1E3A8A',
                },
              },
            }}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </Box>
        ) : (
          <Typography
            sx={{
              color: '#64748B',
              textAlign: 'center',
              py: 4,
              fontStyle: 'italic',
            }}
          >
            No research interests provided.
          </Typography>
        )}

        {/* KEYWORDS */}
        {keywords.length > 0 && (
          <Box
            sx={{
              mt: 2.5,
              pt: 2,
              borderTop: '1px solid #E2E8F0',
            }}
          >

            {/* LABEL */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <LightbulbIcon sx={{ color: '#1E3A8A', fontSize: '1rem' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: '#475569',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Research Areas
              </Typography>
            </Box>

            {/* CHIPS */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
                  size="small"
                  icon={<AutoAwesomeIcon sx={{ fontSize: '0.7rem' }} />}
                  sx={{
                    backgroundColor: '#F1F5F9',
                    color: '#1E3A8A',
                    fontSize: '0.75rem',
                    borderRadius: 2,
                    border: '1px solid #E2E8F0',

                    '&:hover': {
                      backgroundColor: '#E2E8F0',
                      transform: 'translateY(-1px)',
                    },

                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </Box>

          </Box>
        )}

      </Box>
    </div>
  );
});

export default ResearchInterestsSection;