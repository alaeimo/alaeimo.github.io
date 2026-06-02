import React, { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./styles/CertificatesSection.css";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const CertificatesSection = forwardRef(({ data }, ref) => {

  const sortedCertificates = [...(data.certificates || [])].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Certificates" />

      <Box className="certificates-timeline">
        {sortedCertificates.length > 0 ? (
          sortedCertificates.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              <Box className="certificate-card">

                <Box className="certificate-header">

                  {/* LEFT */}
                  <Box className="certificate-left">

                    <Box className="certificate-icon-wrapper">
                      <VerifiedIcon className="certificate-icon" />
                    </Box>

                    <Box className="certificate-content">
                      <Typography className="certificate-title">
                        {item.name}
                      </Typography>

                      <Box className="certificate-issuer">
                        <SchoolIcon className="certificate-issuer-icon" />
                        <Typography className="certificate-issuer-text">
                          {item.issuer}
                        </Typography>
                      </Box>

                      {item.description && (
                        <Typography className="certificate-desc">
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* RIGHT */}
                  <Box className="certificate-right">

                    <Box className="certificate-date">
                      <CalendarTodayIcon className="certificate-date-icon" />
                      <Typography className="certificate-date-text">
                        {item.date}
                      </Typography>
                    </Box>

                    {item.pdf && (
                      <Button
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<PictureAsPdfIcon />}
                        className="certificate-pdf-btn"
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
          <Typography className="empty-text">
            No certificates provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default CertificatesSection;