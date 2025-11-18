import React, { forwardRef } from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "./styles/CertificatesSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const CertificatesSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  // Sort certificates by date descending
  const sortedCertificates = [...(data.certificates || [])].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Certificates" />
      <Box className="certificates-timeline">
        {sortedCertificates.length > 0 ? (
          sortedCertificates.map((item, index) => (
            <Box key={index} className="timeline-item">
              {/* Timeline line and node */}
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              {/* Certificate card */}
              <Box
                className="certificate-card"
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
                <Grid container spacing={2}>
                  {/* Left side: title, issuer, description */}
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: theme.spacing(1),
                        mb: theme.spacing(1.5),
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                        mt: 0.1,
                      }}
                    >
                      {item.issuer}
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
                      {item.date}
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
                          color: '#f57c00',
                          borderColor: '#f57c00',
                          mt: 0.5,
                          minWidth: 36,
                          '&:hover': {
                            backgroundColor: 'rgba(245,124,0,0.1)',
                            borderColor: '#f57c00',
                          },
                        }}
                      >
                        PDF
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              color: "#94a3b8",
              textAlign: "center",
              py: 2
            }}
          >
            No certificates provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default CertificatesSection;
