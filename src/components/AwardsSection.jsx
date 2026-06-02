import React, { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./styles/AwardsSection.css";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const AwardsSection = forwardRef(({ data }, ref) => {

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Awards & Honors" />

      <Box className="awards-timeline">
        {data.awards?.length > 0 ? (
          data.awards.map((item, index) => (
            <Box key={index} className="timeline-item">
              <Box className="timeline-line" />
              <Box className="timeline-node" />

              <Box className="award-card">

                <Box className="award-header">

                  {/* LEFT */}
                  <Box className="award-left">

                    <Box className="award-icon-wrapper">
                      <EmojiEventsIcon className="award-icon" />
                    </Box>

                    <Box className="award-content">
                      <Typography className="award-title">
                        {item.title}
                      </Typography>

                      <Typography className="award-org">
                        {item.organization}
                      </Typography>

                      {item.description && (
                        <Typography className="award-desc">
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* RIGHT */}
                  <Box className="award-right">

                    <Box className="award-date">
                      <CalendarTodayIcon className="award-date-icon" />
                      <Typography className="award-date-text">
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
                        startIcon={<PictureAsPdfIcon />}
                        className="award-pdf-btn"
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
            No awards provided.
          </Typography>
        )}
      </Box>
    </div>
  );
});

export default AwardsSection;