import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import SkillCard from './SkillCard';
import "./styles/SkillSection.css";

const SkillSection = forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <Box className="skill-section">
      {data.skills?.map((group, index) => (
      <Box
          key={index}
          className="skill-category"
          sx={{
            position: "relative",
            borderRadius: "10px",
            padding: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
            border: "1px solid rgba(33,150,243,0.15)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(33,150,243,0.12)",
            },
          }}
        >
          <Typography variant="h6" className="category-title">
            {group.category}
          </Typography>

          <Box className="skill-grid">
            {group.items.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </div>
));

export default SkillSection;
