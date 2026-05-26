import React, { forwardRef } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./styles/AwardsSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const AwardsSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Awards & Honors" />
      <Box className="awards-timeline">
        {data.awards?.length > 0 ? (
          data.awards.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              <Box
                className="award-card"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: { xs: 2, sm: 3 },
                  boxShadow: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #5D91C3, #2196f3, #5D91C3)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
              >
                <Box
                  className="award-header"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  {/* Left side - Award Info with Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1 }}>
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
                      <EmojiEventsIcon sx={{ color: '#ffffff', fontSize: '1.3rem' }} />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1rem',
                          mb: 0.5,
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
                        {item.organization}
                      </Typography>
                      
                      {item.description && (
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#E0E8F0',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            mt: 1,
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Right side - Date and PDF Button */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: { xs: 'flex-start', lg: 'flex-end' },
                    gap: 1,
                    minWidth: { xs: 'auto', lg: '180px' },
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: '#B1C7DE',
                          fontWeight: 500,
                        }}
                      >
                        {item.start_date === item.end_date
                          ? item.start_date
                          : `${item.start_date} – ${item.end_date}`}
                      </Typography>
                    </Box>
                    
                    {item.pdf && (
                      <Button
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<PictureAsPdfIcon sx={{ fontSize: 16 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "#f57c00",
                          borderColor: "rgba(245, 124, 0, 0.5)",
                          backgroundColor: "transparent",
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.5,
                          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            backgroundColor: "rgba(245, 124, 0, 0.15)",
                            borderColor: "#f57c00",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 12px rgba(245, 124, 0, 0.2)",
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
              color: "#B1C7DE",
              textAlign: "center",
              py: 4,
              fontStyle: "italic",
            }}
          >
            No awards provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default AwardsSection;