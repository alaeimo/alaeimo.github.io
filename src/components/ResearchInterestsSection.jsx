import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import './styles/ResearchInterestsSection.css'; // reuse shared card styles
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ResearchInterestsSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();
  const description = data?.research_interests?.description;
  const title = data?.research_interests?.title || "Research Interests";

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Research Interests" />
      <Box
        className="research-interests-card"
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
        <Typography
          variant="h6"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: 700,
            color: theme.palette.text.primary,
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
              fontFamily: theme.typography.fontFamily,
              fontSize: '1rem',
              color: theme.palette.text.primary,
              '& strong': { fontWeight: 600, color: theme.palette.text.primary },
              '& em': { fontStyle: 'italic', color: theme.palette.text.secondary },
              '& p': { mb: 1.5 },
            }}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </Box>
        ) : (
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.disabled,
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
