import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import SkillCard from "./SkillCard";
import CodeIcon from "@mui/icons-material/Code";
import "./styles/SkillSection.css";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const SkillSection = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Skills" />

      <Box className="skill-section">
        {data.skills?.map((group, index) => (
          <Box key={index} className="skill-category">
            {/* Category Header */}
            <Box className="skill-header">
              <Box className="skill-icon">
                <CodeIcon sx={{ color: "#1E3A8A", fontSize: "1.2rem" }} />
              </Box>

              <Typography className="skill-title" 
                sx={{
                  fontWeight: 700,
                  color: '#0F172A',
                  fontSize: '1rem',
                }}>
                {group.category}
              </Typography>
            </Box>

            {/* Skills Grid */}
            <Box className="skill-grid">
              {group.items.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
});

export default SkillSection;