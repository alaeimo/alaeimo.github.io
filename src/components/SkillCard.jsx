import React from "react";
import { Box, Typography, LinearProgress, useTheme } from "@mui/material";

const SkillCard = ({ skill }) => {
  const theme = useTheme();
  return (
    <Box
      className="skill-card"
      sx={{
        position: "relative",
        borderRadius: "10px",
        padding: "0.8rem 0.5rem 0.8rem 0.5rem",
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(6px)",
        transition: "transform 0.3s ease",
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: `
          0 0 4px ${theme.palette.primary.main},
          0 0 8px ${theme.palette.primary.main}33
        `,
        overflow: "hidden",
        "&:hover": { transform: "translateY(-2px)" },
      }}
    >
      {/* Skill Info + Logo */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "#0f172a", lineHeight: 0.7}}
          >
            {skill.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#475569", mt: 0.3 }}>
            {skill.level}
          </Typography>
        </Box>
        {skill.icon && (
          <Box
            component="img"
            src={skill.icon}
            alt={`${skill.name} logo`}
            sx={{ width: 30, height: 30, ml:1 }}
          />
        )}
      </Box>

      {/* Progress Bar (bottom edge) */}
      <LinearProgress
        variant="determinate"
        value={skill.percent}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 6,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: "rgba(128,90,213,0.1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#8b5cf6",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        }}
      />
    </Box>
  );
};

export default SkillCard;
