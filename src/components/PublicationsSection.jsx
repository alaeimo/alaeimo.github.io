import React, { forwardRef } from "react";
import { Box, Typography, Button, useTheme, Chip } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import "./styles/PublicationsSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const PublicationsSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Manuscripts & Preprints" />
      <Box className="manuscript-timeline">
        {data.publications?.length > 0 ? (
          data.publications.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              <Box 
                className="manuscript-card" 
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  boxShadow: 'none',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
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
                {/* Header with Icon */}
                <Box
                  className="manuscript-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    {/* Animated Icon Box */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 55,
                        height: 55,
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
                      <ArticleIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
                    </Box>
                    
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1.05rem',
                          mb: 0.75,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                          fontStyle: 'italic',
                          display: 'block',
                          mb: 0.5,
                        }}
                      >
                        {item.authors.join(", ")}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <DescriptionIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#5D91C3',
                            fontWeight: 600,
                          }}
                        >
                          {item.journal}
                        </Typography>
                        <Chip
                          label={item.year}
                          size="small"
                          sx={{
                            height: 20,
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            backgroundColor: 'rgba(93, 145, 195, 0.15)',
                            color: '#5D91C3',
                            border: '1px solid rgba(93, 145, 195, 0.3)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Animated Buttons */}
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    {item.url && (
                      <Button
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LanguageIcon sx={{ fontSize: 18 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: '#5D91C3',
                          borderColor: 'rgba(93, 145, 195, 0.5)',
                          backgroundColor: 'transparent',
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.5,
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': { 
                            backgroundColor: 'rgba(93, 145, 195, 0.15)', 
                            borderColor: '#5D91C3',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(93, 145, 195, 0.2)',
                          },
                        }}
                      >
                        URL
                      </Button>
                    )}
                    {item.code && (
                      <Button
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: '#B1C7DE',
                          borderColor: 'rgba(177, 199, 222, 0.5)',
                          backgroundColor: 'transparent',
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.5,
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': { 
                            backgroundColor: 'rgba(177, 199, 222, 0.15)', 
                            borderColor: '#B1C7DE',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(177, 199, 222, 0.2)',
                          },
                        }}
                      >
                        Code
                      </Button>
                    )}
                    {item.pdf && (
                      <Button
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<PictureAsPdfIcon sx={{ fontSize: 18 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: '#f57c00',
                          borderColor: 'rgba(245, 124, 0, 0.5)',
                          backgroundColor: 'transparent',
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.5,
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': { 
                            backgroundColor: 'rgba(245, 124, 0, 0.15)', 
                            borderColor: '#f57c00',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(245, 124, 0, 0.2)',
                          },
                        }}
                      >
                        PDF
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            variant="body2"
            sx={{ 
              fontFamily: theme.typography.fontFamily, 
              color: '#B1C7DE', 
              textAlign: 'center', 
              py: 6,
              fontStyle: 'italic',
            }}
          >
            No publications provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default PublicationsSection;