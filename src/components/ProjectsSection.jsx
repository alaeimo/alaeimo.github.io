import React, { forwardRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Collapse,
  useTheme
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FolderIcon from "@mui/icons-material/Folder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./styles/ProjectsSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ProjectsSection = forwardRef(({ data }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [hoverTimer, setHoverTimer] = useState(null);

  const theme = useTheme();

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(
      data.projects.flatMap((p) =>
        p.category.split("/").map((c) => c.trim())
      )
    ),
  ];

  // SORT DESCENDING BY DATE (Primary: end_date, fallback: start_date)
  const sortedProjects = [...data.projects].sort((a, b) => {
    const dateA = new Date(a.end_date || a.start_date);
    const dateB = new Date(b.end_date || b.start_date);
    return dateB - dateA;
  });

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? sortedProjects
      : sortedProjects.filter((p) =>
          p.category
            .split("/")
            .map((c) => c.trim())
            .includes(selectedCategory)
        );
          
  const toggleExpand = (i) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <div ref={ref}>
      {zoomImage && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: "70vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              backgroundImage: `url(${zoomImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              cursor: "zoom-out",
            }}
            onClick={() => setZoomImage(null)}
          />
        </Box>
      )}

      <AnimatedUnderlineTitle title="Projects" />

      <Box className="projects-container">
        {/* Category Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 4,
          }}
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant={selectedCategory === cat ? "contained" : "outlined"}
              sx={{
                textTransform: "none",
                fontFamily: theme.typography.fontFamily,
                fontWeight: 600,
                borderRadius: "10px",
                px: 2,
                py: 0.5,
                fontSize: "0.85rem",
                border: selectedCategory === cat
                  ? "none"
                  : `1.5px solid rgba(93, 145, 195, 0.5)`,
                color: selectedCategory === cat
                  ? "#ffffff"
                  : "#B1C7DE",
                backgroundColor: selectedCategory === cat
                  ? "linear-gradient(135deg, #5D91C3, #2196f3)"
                  : "transparent",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: selectedCategory === cat
                    ? "linear-gradient(135deg, #4a7aaa, #1a7bc3)"
                    : "rgba(93, 145, 195, 0.15)",
                  borderColor: "#5D91C3",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Project Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                {/* Project Image */}
                <Box
                  sx={{
                    height: 200,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    flexShrink: 0,
                    cursor: "zoom-in",
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    },
                  }}
                  onMouseEnter={() => {
                    const timer = setTimeout(() => {
                      setZoomImage(item.image);
                    }, 3000);
                    setHoverTimer(timer);
                  }}
                  onMouseLeave={() => {
                    clearTimeout(hoverTimer);
                    setZoomImage(null);
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setZoomPos({ x, y });
                  }}
                  onClick={() => setZoomImage(item.image)}
                />

                {/* Content */}
                <Box sx={{ p: 2.5, textAlign: "center" }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <FolderIcon sx={{ color: '#5D91C3', fontSize: '1rem' }} />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 1 }}>
                    <CalendarTodayIcon sx={{ color: '#5D91C3', fontSize: '0.7rem' }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: '#B1C7DE',
                      }}
                    >
                      {item.start_date === item.end_date
                        ? item.start_date
                        : `${item.start_date} – ${item.end_date}`}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      color: '#B1C7DE',
                      fontStyle: "italic",
                      mb: 1.5,
                      fontSize: '0.85rem',
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  {/* Expand / Collapse Button */}
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => toggleExpand(index)}
                    sx={{ 
                      mb: 1.5,
                      color: '#5D91C3',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(93, 145, 195, 0.1)',
                      },
                    }}
                  >
                    {expandedProjects[index] ? "Show Less ▲" : "Show More ▼"}
                  </Button>

                  {/* COLLAPSIBLE SECTION */}
                  <Collapse in={expandedProjects[index]}>
                    {/* Responsibilities */}
                    <Box sx={{ textAlign: "left", mt: 1 }}>
                      {item.responsibilities.map((resp, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1, mb: 0.75 }}>
                          <Typography sx={{ color: '#5D91C3', fontWeight: 700 }}>•</Typography>
                          <Typography variant="body2" sx={{ color: '#E0E8F0', fontSize: '0.8rem' }}>
                            {resp}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Technologies */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 0.8,
                        mt: 2,
                      }}
                    >
                      {item.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(93, 145, 195, 0.12)',
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            fontFamily: theme.typography.fontFamily,
                            borderRadius: 1.5,
                            border: "1px solid rgba(93, 145, 195, 0.3)",
                            color: '#5D91C3',
                            "&:hover": {
                              transform: "translateY(-1px)",
                              borderColor: '#5D91C3',
                              backgroundColor: 'rgba(93, 145, 195, 0.2)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Buttons */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1.5,
                        mt: 2.5,
                      }}
                    >
                      {item.code && (
                        <Button
                          href={item.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                          variant="outlined"
                          size="small"
                          sx={{
                            color: '#B1C7DE',
                            borderColor: 'rgba(177, 199, 222, 0.5)',
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 2,
                            '&:hover': {
                              backgroundColor: 'rgba(177, 199, 222, 0.15)',
                              borderColor: '#B1C7DE',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          Code
                        </Button>
                      )}

                      {item.pdf && (
                        <Button
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<PictureAsPdfIcon sx={{ fontSize: 16 }} />}
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#f57c00",
                            borderColor: "rgba(245, 124, 0, 0.5)",
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(245, 124, 0, 0.15)",
                              borderColor: "#f57c00",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Report
                        </Button>
                      )}
                    </Box>
                  </Collapse>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
});

export default ProjectsSection;