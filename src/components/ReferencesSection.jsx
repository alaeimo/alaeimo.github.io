import React, { forwardRef } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ReferencesSection = forwardRef(({ data }, ref) => {

  return (
    <div ref={ref}>
      <Box sx={{ py: 2, px: 2 }}>
        <AnimatedUnderlineTitle title="References" />

        <Grid container spacing={3} justifyContent="center">
          {data.references?.map((refItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>

              <Box
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
                  p: { xs: 2.5, sm: 3 },
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
                    borderColor: "#CBD5E1",
                  },
                }}
              >

                {/* HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2.5,
                  }}
                >

                  {/* ICON */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: "#EEF2FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon sx={{ color: "#1E3A8A", fontSize: "1.5rem" }} />
                  </Box>

                  {/* NAME + POSITION */}
                  <Box>
                    <Link
                      href={refItem.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        fontWeight: 700,
                        color: "#0F172A",
                        fontSize: "1.05rem",
                        transition: "0.2s ease",

                        "&:hover": {
                          color: "#1E3A8A",
                        },
                      }}
                    >
                      {refItem.name}
                    </Link>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >

                      <Typography
                        sx={{
                          color: "#475569",
                          fontStyle: "italic",
                          fontSize: "0.85rem",
                        }}
                      >
                        {refItem.position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* CONTACT INFO */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>

                  {/* EMAILS */}
                  {Array.isArray(refItem.email)
                    ? refItem.email.map((email, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <EmailIcon
                            sx={{
                              color: "#1E3A8A",
                              fontSize: "1rem",
                            }}
                          />

                          <Link
                            href={`mailto:${email}`}
                            underline="hover"
                            sx={{
                              color: "#475569",
                              fontSize: "0.9rem",

                              "&:hover": {
                                color: "#1E3A8A",
                              },
                            }}
                          >
                            {email}
                          </Link>
                        </Box>
                      ))
                    : refItem.email && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <EmailIcon
                            sx={{
                              color: "#1E3A8A",
                              fontSize: "1rem",
                            }}
                          />

                          <Link
                            href={`mailto:${refItem.email}`}
                            underline="hover"
                            sx={{
                              color: "#475569",
                              fontSize: "0.9rem",

                              "&:hover": {
                                color: "#1E3A8A",
                              },
                            }}
                          >
                            {refItem.email}
                          </Link>
                        </Box>
                      )}

                  {/* PHONE */}
                  {refItem.phone && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <PhoneIcon
                        sx={{
                          color: "#1E3A8A",
                          fontSize: "1rem",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "#475569",
                          fontSize: "0.9rem",
                        }}
                      >
                        {refItem.phone}
                      </Typography>
                    </Box>
                  )}

                  {/* MOBILE */}
                  {refItem.mobile && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <SmartphoneIcon
                        sx={{
                          color: "#1E3A8A",
                          fontSize: "1rem",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "#475569",
                          fontSize: "0.9rem",
                        }}
                      >
                        {refItem.mobile}
                      </Typography>
                    </Box>
                  )}

                </Box>

                {/* WEBSITE */}
                {refItem.website && (
                  <Box
                    sx={{
                      mt: 2.5,
                      pt: 1.5,
                      borderTop: "1px solid #E2E8F0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LanguageIcon
                        sx={{
                          color: "#1E3A8A",
                          fontSize: "1rem",
                        }}
                      />

                      <Link
                        href={refItem.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                          color: "#475569",
                          fontSize: "0.85rem",
                          wordBreak: "break-all",

                          "&:hover": {
                            color: "#1E3A8A",
                          },
                        }}
                      >
                        {refItem.website.replace(/^https?:\/\//, '')}
                      </Link>
                    </Box>
                  </Box>
                )}

              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
});

export default ReferencesSection;