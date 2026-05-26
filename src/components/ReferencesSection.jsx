import React, { forwardRef } from "react";
import { Box, Typography, Grid, Link, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ReferencesSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();
  
  return (
    <div ref={ref}>
      <Box sx={{ py: 2, px: 2 }}>
        <AnimatedUnderlineTitle title="References" />
        <Grid container spacing={3} justifyContent="center">
          {data.references?.map((refItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "100%",
                    borderRadius: 3,
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    p: { xs: 2, sm: 3 },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
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
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },
                  }}
                >
                  {/* Header with Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
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
                      <PersonIcon sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Link
                        href={refItem.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#5D91C3',
                          },
                        }}
                      >
                        {refItem.name}
                      </Link>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                        <WorkIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#B1C7DE',
                            fontStyle: "italic",
                          }}
                        >
                          {refItem.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Contact Information */}
                  <Box sx={{ mt: 1, pl: 1 }}>
                    {/* Emails */}
                    {Array.isArray(refItem.email)
                      ? refItem.email.map((email, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 28,
                                height: 28,
                                borderRadius: 1.5,
                                backgroundColor: 'rgba(93, 145, 195, 0.15)',
                                mr: 1.5,
                              }}
                            >
                              <EmailIcon sx={{ fontSize: 14, color: '#5D91C3' }} />
                            </Box>
                            <Link
                              href={`mailto:${email}`}
                              underline="hover"
                              sx={{
                                color: '#E0E8F0',
                                fontSize: '0.8rem',
                                textDecoration: 'none',
                                '&:hover': {
                                  color: '#5D91C3',
                                },
                              }}
                            >
                              {email}
                            </Link>
                          </Box>
                        ))
                      : refItem.email && (
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 28,
                                height: 28,
                                borderRadius: 1.5,
                                backgroundColor: 'rgba(93, 145, 195, 0.15)',
                                mr: 1.5,
                              }}
                            >
                              <EmailIcon sx={{ fontSize: 14, color: '#5D91C3' }} />
                            </Box>
                            <Link
                              href={`mailto:${refItem.email}`}
                              underline="hover"
                              sx={{
                                color: '#E0E8F0',
                                fontSize: '0.8rem',
                                textDecoration: 'none',
                                '&:hover': {
                                  color: '#5D91C3',
                                },
                              }}
                            >
                              {refItem.email}
                            </Link>
                          </Box>
                        )}

                    {/* Phone */}
                    {refItem.phone && (
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 28,
                            height: 28,
                            borderRadius: 1.5,
                            backgroundColor: 'rgba(93, 145, 195, 0.15)',
                            mr: 1.5,
                          }}
                        >
                          <PhoneIcon sx={{ fontSize: 14, color: '#5D91C3' }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#E0E8F0',
                            fontSize: '0.8rem',
                          }}
                        >
                          {refItem.phone}
                        </Typography>
                      </Box>
                    )}

                    {/* Mobile */}
                    {refItem.mobile && (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 28,
                            height: 28,
                            borderRadius: 1.5,
                            backgroundColor: 'rgba(93, 145, 195, 0.15)',
                            mr: 1.5,
                          }}
                        >
                          <SmartphoneIcon sx={{ fontSize: 14, color: '#5D91C3' }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: '#E0E8F0',
                            fontSize: '0.8rem',
                          }}
                        >
                          {refItem.mobile}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Website Link */}
                  {refItem.website && (
                    <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LanguageIcon sx={{ color: '#5D91C3', fontSize: '0.8rem' }} />
                        <Link
                          href={refItem.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                          sx={{
                            color: '#5D91C3',
                            fontSize: '0.75rem',
                            textDecoration: 'none',
                            '&:hover': {
                              color: '#2196f3',
                            },
                          }}
                        >
                          {refItem.website.replace(/^https?:\/\//, '')}
                        </Link>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
});

export default ReferencesSection;