import React, { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "./styles/CertificatesSection.css";

const CertificatesSection = forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <Box className="certificates-timeline">
      {data.certificates?.length > 0 ? (
        data.certificates.map((item, index) => (
          <Box key={index} className="timeline-item">
            {/* Timeline line and node */}
            <Box className="timeline-line" />
            <Box className="timeline-node" />

            {/* Certificate card */}
            <Box
              className="certificate-card"
              sx={{
                width: "100%",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)",
                border: "1px solid rgba(33, 150, 243, 0.15)",
                padding: "1rem 1.3rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                backdropFilter: "blur(6px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(33, 150, 243,0.12)",
                },
              }}
            >
              <Box className="certificate-header" sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 1 }}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, color: "#0f172a" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 350, color: "#334155", mt: 0.2 }}
                  >
                    {item.issuer}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <Typography variant="body2" sx={{ fontFamily: '"Inter", sans-serif', color: "#475569" }}>
                    {item.date}
                  </Typography>
                  {/* PDF Button */}
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
                        mt: 0.5,
                        minWidth: 36,
                        '&:hover': { backgroundColor: 'rgba(245,124,0,0.1)', borderColor: '#f57c00' },
                      }}
                    >
                      PDF
                    </Button>
                  )}
                </Box>
              </Box>

              {item.description && (
                <Typography variant="body2" sx={{ fontFamily: '"Inter", sans-serif', color: "#475569" }}>
                  {item.description}
                </Typography>
              )}
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontFamily: '"Inter", sans-serif', color: "#94a3b8", textAlign: "center", py: 2 }}>
          No certificates provided.
        </Typography>
      )}
    </Box>
  </div>
));

export default CertificatesSection;
