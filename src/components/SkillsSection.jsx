import React, { forwardRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SkillCard from './SkillCard';
import CodeIcon from '@mui/icons-material/Code';
import "./styles/SkillSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const SkillSection = forwardRef(({ data }, ref) => {
  const theme = useTheme();

  return (
    <div ref={ref}>
      <AnimatedUnderlineTitle title="Skills" />
      <Box className="skill-section" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {data.skills?.map((group, index) => (
          <Box
            key={index}
            className="skill-category"
            sx={{
              width: '100%',
              borderRadius: 3,
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              p: { xs: 2, sm: 3 },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #5D91C3, #2196f3, #5D91C3)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease',
              },
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&::before': {
                  transform: 'scaleX(1)',
                },
              },
            }}
          >
            {/* Category Header with Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  borderRadius: 2.5,
                  background: 'linear-gradient(135deg, #5D91C3 0%, #2196f3 100%)',
                  boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(5deg) scale(1.05)',
                    boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                  },
                }}
              >
                <CodeIcon sx={{ color: '#ffffff', fontSize: '1.3rem' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 700,
                  color: '#ffffff',
                  fontSize: '1.1rem',
                }}
              >
                {group.category}
              </Typography>
            </Box>

            {/* Skills Grid */}
            <Box className="skill-grid" sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
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