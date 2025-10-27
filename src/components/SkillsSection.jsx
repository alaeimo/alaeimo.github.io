import React, { forwardRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SkillCard from './SkillCard';
import "./styles/SkillSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const SkillSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Skills" />
      <Box className="skill-section">
        {data.skills?.map((group, index) => (
          <Box
            key={index}
            className="skill-category"
            sx={{
              width: '100%',
              borderRadius: theme.shape.borderRadius,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: `
                0 0 4px ${theme.palette.primary.main},
                0 0 8px ${theme.palette.primary.main}33
              `,
              backdropFilter: 'blur(6px)',
              overflow: 'hidden',
              p: { xs: theme.spacing(2), sm: theme.spacing(3) },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              {group.category}
            </Typography>

            <Box className="skill-grid" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
