import React, { forwardRef } from 'react';
import { Box, Typography, useTheme, Chip } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ScienceIcon from '@mui/icons-material/Science';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './styles/ResearchInterestsSection.css';
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ResearchInterestsSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();
  const description = data?.research_interests?.description;
  const title = data?.research_interests?.title || "Research Interests";
  const keywords = data?.research_interests?.keywords || [];

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Research Interests" />
      <Box
        className="research-interests-card"
        sx={{
          width: '100%',
          borderRadius: 3,
          boxShadow: 'none',
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          p: { xs: 2, sm: 3 },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #5D91C3, #2196f3, #5D91C3)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            '&::before': {
              transform: 'scaleX(1)',
            },
          },
        }}
      >
        {/* Title with Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 2.5,
              background: 'linear-gradient(135deg, #5D91C3 0%, #2196f3 100%)',
              boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(5deg) scale(1.05)',
                boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
              },
            }}
          >
            <ScienceIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              color: '#ffffff',
              fontSize: '1.2rem',
              letterSpacing: '0.3px',
            }}
          >
            {title}
          </Typography>
        </Box>

        {description ? (
          <>
            <Box
              sx={{
                textAlign: 'left',
                lineHeight: 1.8,
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.95rem',
                color: '#E0E8F0',
                mb: keywords.length > 0 ? 2.5 : 0,
                '& strong': { 
                  fontWeight: 700, 
                  color: '#ffffff',
                },
                '& em': { 
                  fontStyle: 'italic', 
                  color: '#B1C7DE',
                },
                '& p': { 
                  mb: 1.5,
                  '&:last-child': { mb: 0 },
                },
                '& a': {
                  color: '#5D91C3',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(93, 145, 195, 0.3)',
                  '&:hover': {
                    borderBottomColor: '#5D91C3',
                  },
                },
              }}
            >
              <ReactMarkdown>{description}</ReactMarkdown>
            </Box>

            {/* Keywords / Research Areas */}
            {keywords.length > 0 && (
              <Box sx={{ mt: 2.5, pt: 1.5, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <LightbulbIcon sx={{ color: '#5D91C3', fontSize: '1rem' }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: '#B1C7DE',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      fontSize: '0.7rem',
                    }}
                  >
                    Key Research Areas
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {keywords.map((keyword, index) => (
                    <Chip
                      key={index}
                      label={keyword}
                      size="small"
                      icon={<AutoAwesomeIcon sx={{ fontSize: '0.7rem' }} />}
                      sx={{
                        backgroundColor: 'rgba(93, 145, 195, 0.12)',
                        color: '#5D91C3',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        borderRadius: 2,
                        border: '1px solid rgba(93, 145, 195, 0.25)',
                        '&:hover': {
                          backgroundColor: 'rgba(93, 145, 195, 0.2)',
                          transform: 'translateY(-1px)',
                          borderColor: 'rgba(93, 145, 195, 0.5)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </>
        ) : (
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: '#B1C7DE',
              textAlign: 'center',
              py: 4,
              fontStyle: 'italic',
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