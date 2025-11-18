import React, { forwardRef } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language'; // URL
import GitHubIcon from '@mui/icons-material/GitHub';      // Code
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // PDF
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
              {/* Header */}
              <Box
                className="manuscript-header"
                     sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: theme.spacing(1),
                    mb: theme.spacing(1.5),
                  }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      color: theme.palette.text.secondary,
                      fontStyle: 'italic',
                      mt: 0.1,
                    }}
                  >
                    {item.authors.join(", ")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      mt: 0.3 
                    }}
                  >
                    {item.journal}, {item.year}
                  </Typography>
                </Box>

                {/* Links as small rectangular buttons */}
                <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                  {item.url && (
                    <Button
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LanguageIcon sx={{ fontSize: 16 }} />}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#6a0dad',        // purple for URL
                        borderColor: '#6a0dad',
                        minWidth: 36,
                        '&:hover': { backgroundColor: 'rgba(106,13,173,0.1)', borderColor: '#6a0dad' },
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
                      startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.text.primary,
                        minWidth: 36,
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                          borderColor: theme.palette.text.primary,
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
                      startIcon={<PictureAsPdfIcon sx={{ fontSize: 16 }} />}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#f57c00',        // orange for PDF
                        borderColor: '#f57c00',
                        minWidth: 36,
                        '&:hover': { backgroundColor: 'rgba(245,124,0,0.1)', borderColor: '#f57c00' },
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
          sx={{ fontFamily: '"Inter", sans-serif', color: '#94a3b8', textAlign: 'center', py: 2 }}
        >
          No publications provided.
        </Typography>
      )}
    </Box>
  </div>
  );
});

export default PublicationsSection;
