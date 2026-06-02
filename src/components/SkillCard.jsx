import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const SkillCard = ({ skill }) => {
  return (
    <Box
      className="skill-card"
      sx={{
        position: "relative",
        borderRadius: "10px",
        padding: "0.9rem 0.7rem",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
        transition: "all 0.25s ease",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "#CBD5E1",
          boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
        },
      }}
    >
      {/* Skill Info + Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.2,
            }}
          >
            {skill.name}
          </Typography>

          <Typography variant="caption" sx={{ color: "#64748B", mt: 0.3 }}>
            {skill.level}
          </Typography>
        </Box>

        {skill.icon && (
          <Box
            component="img"
            src={skill.icon}
            alt={`${skill.name} logo`}
            sx={{ width: 28, height: 28, ml: 1 }}
          />
        )}
      </Box>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={skill.percent}
        sx={{
          height: 5,
          borderRadius: 2,
          backgroundColor: "#E2E8F0",

          "& .MuiLinearProgress-bar": {
            backgroundColor: "#1E3A8A",
          },
        }}
      />
    </Box>
  );
};

export default SkillCard;