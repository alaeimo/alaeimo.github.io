import React, { forwardRef } from "react";
import { Box, Typography, Grid, Link, useTheme} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
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
                  height: "100%", // ensures Grid item expands
                }}
              >
                <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      width: "100%",
                      borderRadius: theme.shape.borderRadius,
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                      border: `1px solid ${theme.palette.primary.light}33`,
                      boxShadow: `
                      0 0 4px ${theme.palette.primary.main},
                      0 0 8px ${theme.palette.primary.main}33
                      `,
                      backdropFilter: "blur(6px)",
                      overflow: "hidden",
                      p: { xs: theme.spacing(2), sm: theme.spacing(3) },
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                >
                <Link
                  href={refItem.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  variant="h6"
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  }}
                >
                  {refItem.name}
                </Link>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontStyle: "italic",
                      color: theme.palette.text.secondary,
                      mb: 2,
                    }}
                  >
                    {refItem.position}
                  </Typography>

                  {/* Emails */}
                  {Array.isArray(refItem.email)
                    ? refItem.email.map((email, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                          <EmailIcon sx={{ fontSize: 16, mr: 1, color: "#6A1B9A" }} />
                          <Link href={`mailto:${email}`} underline="hover" color="inherit">
                            {email}
                          </Link>
                        </Box>
                      ))
                    : refItem.email && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                          <EmailIcon sx={{ fontSize: 16, mr: 1, color: "#6A1B9A" }} />
                          <Link href={`mailto:${refItem.email}`} underline="hover" color="inherit">
                            {refItem.email}
                          </Link>
                        </Box>
                      )}

                  {/* Phone */}
                  {refItem.phone && (
                    <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                      <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "#6A1B9A" }} />
                      <Typography 
                        variant="body2"       
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: theme.palette.text.secondary,
                        }}
                        >
                        {refItem.phone}
                      </Typography>
                    </Box>
                  )}

                  {/* Mobile */}
                  {refItem.mobile && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SmartphoneIcon sx={{ fontSize: 16, mr: 1, color: "#6A1B9A" }} />
                      <Typography 
                      variant="body2"        
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {refItem.mobile}
                      </Typography>
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
