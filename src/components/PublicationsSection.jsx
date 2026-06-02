import React, { forwardRef } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";
import "./styles/PublicationsSection.css";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const PublicationsSection = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Manuscripts & Preprints" />

      <Box className="manuscript-timeline">
        {data.publications?.length > 0 ? (
          data.publications.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              {/* CARD */}
              <Box className="manuscript-card">
                {/* HEADER */}
                <Box className="manuscript-header">

                  {/* LEFT */}
                  <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
                    <Box className="manuscript-icon">
                      <ArticleIcon sx={{ color: "#1E3A8A", fontSize: "1.4rem" }} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography className="manuscript-title">
                        {item.title}
                      </Typography>

                      <Typography className="manuscript-authors">
                        {item.authors.join(", ")}
                      </Typography>

                      <Box className="manuscript-meta">
                        <DescriptionIcon sx={{ fontSize: 16, color: "#5D91C3" }} />

                        <Typography className="manuscript-journal">
                          {item.journal}
                        </Typography>

                        <Chip
                          label={item.year}
                          size="small"
                          className="manuscript-chip"
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* BUTTONS */}
                  <Box className="manuscript-actions">
                    {item.url && (
                      <Button
                        href={item.url}
                        target="_blank"
                        startIcon={<LanguageIcon />}
                        className="btn-outline-blue"
                      >
                        URL
                      </Button>
                    )}

                    {item.code && (
                      <Button
                        href={item.code}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        className="btn-outline-gray"
                      >
                        Code
                      </Button>
                    )}

                    {item.pdf && (
                      <Button
                        href={item.pdf}
                        target="_blank"
                        startIcon={<PictureAsPdfIcon />}
                        className="btn-outline-orange"
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
          <Typography className="empty-state">
            No publications provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default PublicationsSection;