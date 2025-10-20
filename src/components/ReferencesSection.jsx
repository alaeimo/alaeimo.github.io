import React, { forwardRef } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const ReferencesSection = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <Box sx={{ py: 2, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
          }}
        >
          References
        </Typography>

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
                    flexGrow: 1, // allows the card to fill available height
                    background:
                      "linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)",
                    borderRadius: "10px",
                    border: "1px solid rgba(33, 150, 243, 0.15)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 4px 12px rgba(33,150,243,0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      color: "#0f172a",
                      mb: 0.5,
                    }}
                  >
                    {refItem.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontStyle: "italic",
                      color: "#475569",
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
                      <Typography variant="body2" sx={{ color: "#334155" }}>
                        {refItem.phone}
                      </Typography>
                    </Box>
                  )}

                  {/* Mobile */}
                  {refItem.mobile && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SmartphoneIcon sx={{ fontSize: 16, mr: 1, color: "#6A1B9A" }} />
                      <Typography variant="body2" sx={{ color: "#334155" }}>
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
