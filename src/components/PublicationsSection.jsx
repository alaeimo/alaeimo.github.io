import React, { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language'; // URL
import GitHubIcon from '@mui/icons-material/GitHub';      // Code
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // PDF
import "./styles/PublicationsSection.css";

const PublicationsSection = forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <Box className="manuscript-timeline">
      {data.publications?.length > 0 ? (
        data.publications.map((item, index) => (
          <Box key={index} className="timeline-item">
            <Box className="timeline-line" />
            <Box className="timeline-node" />

            <Box className="manuscript-card" 
                      sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.08)',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
                overflow: 'hidden',
                p: { xs: 2, sm: 3 },
              }}>
              {/* Header */}
              <Box
                className="manuscript-header"
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                      sx={{ 
                        fontFamily: '"Inter", sans-serif', 
                        fontWeight: 600, 
                        fontStyle: 'italic',   
                        color: '#0f172a' 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#334155', mt: 0.2 }}
                  >
                    {item.authors.join(", ")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: '"Inter", sans-serif', color: '#475569', mt: 0.3 }}
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
                        color: '#181717',        // black for GitHub
                        borderColor: '#181717',
                        minWidth: 36,
                        '&:hover': { backgroundColor: 'rgba(24,23,23,0.1)', borderColor: '#181717' },
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
));

export default PublicationsSection;
