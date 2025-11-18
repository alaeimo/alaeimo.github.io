import React, { forwardRef } from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
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
                  borderRadius: theme.shape.borderRadius,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                  border: `1px solid ${theme.palette.primary.light}33`,
                  padding: { xs: theme.spacing(2), sm: theme.spacing(3) },
                  boxShadow: theme.shadows[2],
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <Box
                  className="award-header"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: theme.spacing(1),
                    mb: theme.spacing(1),
                  }}
                >
                  <Grid item xs={10}>
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
                      {item.organization}
                    </Typography>
                    
                  {item.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                   </Grid>
                  {/* Right side: date and PDF */}
                  <Grid item xs={12} md={12} lg={2} sx={{ textAlign: { xs: "left", lg: "right" },  }}>
                    <Typography
                    variant="body2"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {item.start_date === item.end_date
                      ? item.start_date
                      : `${item.start_date} – ${item.end_date}`}
                  </Typography>
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
                        borderColor: "#f57c00",
                        mt: 0.5,
                        minWidth: 36,
                        "&:hover": {
                          backgroundColor: "rgba(245,124,0,0.1)",
                          borderColor: "#f57c00",
                        },
                      }}
                    >
                      PDF
                    </Button>
                    )}
                  </Grid>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            variant="body2"
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.disabled,
              textAlign: "center",
              py: 2,
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
