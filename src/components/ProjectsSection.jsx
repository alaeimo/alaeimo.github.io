import React, { forwardRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Grid,
  Chip, 
  useTheme
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "./styles/ProjectsSection.css";
import AnimatedUnderlineTitle from './AnimatedUnderlineTitle';

const ProjectsSection = forwardRef(({ data }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useTheme();
  // Extract unique categories
  const categories = ["All", ...new Set(data.projects.map((p) => p.category))];
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [hoverTimer, setHoverTimer] = useState(null);

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? data.projects
      : data.projects.filter((p) => p.category === selectedCategory);

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
          pointerEvents: "none", // allow mouse events to pass through
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
            backgroundSize: "200%", // zoom level
            backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            cursor: "zoom-out",
          }}
          onClick={() => setZoomImage(null)} // click overlay to close
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
                fontSize: "0.9rem",
                border: selectedCategory === cat
                  ? `2px solid ${theme.palette.primary.main}`
                  : `1.5px solid ${theme.palette.primary.main}99`,
                color: selectedCategory === cat
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
                backgroundColor: selectedCategory === cat
                  ? theme.palette.primary.main
                  : theme.palette.primary.main + "1A", // 10% opacity background
                boxShadow: selectedCategory === cat
                  ? `0 0 6px ${theme.palette.primary.main}55`
                  : `0 0 4px ${theme.palette.primary.main}22`,
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: selectedCategory === cat
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main + "33", // 20% opacity
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 0 6px ${theme.palette.primary.main}55`,
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Project Grid */}
        <Grid container spacing={2}>
          {filteredProjects.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: theme.shape.borderRadius,
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                    border: `1px solid ${theme.palette.primary.main}`,
                    boxShadow: `
                      0 0 4px ${theme.palette.primary.main},
                      0 0 8px ${theme.palette.primary.main}33
                    `,
                    backdropFilter: "blur(6px)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: `
                        0 0 6px ${theme.palette.primary.main},
                        0 0 12px ${theme.palette.primary.main}55
                      `,
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
                  }}
                  onMouseEnter={(e) => {
                    const timer = setTimeout(() => {
                      setZoomImage(item.image); // show magnifier after 1s
                    }, 1000);
                    setHoverTimer(timer);
                  }}
                  onMouseLeave={() => {
                    clearTimeout(hoverTimer); // cancel hover timer
                    setZoomImage(null);        // hide magnifier
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setZoomPos({ x, y });
                  }}
                  onClick={() => setZoomImage(item.image)} // click shows magnifier immediately
                />

                {/* Content */}
                <Box sx={{ p: 2, textAlign: "center" }}>
                    <Typography 
                      variant="subtitle1"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',       // centers horizontally
                        alignItems: 'center',           // centers vertically
                        flexWrap: 'wrap',
                        gap: theme.spacing(1),
                        mb: theme.spacing(1.5),
                        textAlign: 'center',            // ensures inner text aligns nicely when stacked
                      }}
                    >
                    {item.title}
                    </Typography>
                    <Typography 
                      component="span" 
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                      }}
                      >
                    ({item.start_date === item.end_date ? item.start_date : `${item.start_date} – ${item.end_date}`})
                    </Typography>
                    <Typography     
                      variant="body2"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                        mt: 0.1,
                      }}>
                    {item.subtitle}
                    </Typography>

                    {/* Responsibilities */}
                    <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "85%" }}>
                    {item.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                    ))}
                    </ul>

                  {/* Technologies */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: 0.6,
                      mt: 1.5,
                    }}
                  >
                    {item.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          px: 1.5,
                          py: 0.3,
                          bgcolor: theme.palette.primary.main + '1A', 
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          fontFamily: theme.typography.fontFamily,
                          borderRadius: 1,
                          border: `1px solid ${theme.palette.primary.main}`,
                          boxShadow: `0 0 4px ${theme.palette.primary.main}`,
                          "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: `
                            0 0 6px ${theme.palette.primary.main},
                          `,
                          },
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
                      mt: 2,
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
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.text.primary,
                        minWidth: 36,
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                          borderColor: theme.palette.text.primary,
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
                        startIcon={<PictureAsPdfIcon sx={{ fontSize: 18 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "#f57c00",
                          borderColor: "#f57c00",
                          "&:hover": {
                            backgroundColor: "rgba(245,124,0,0.1)",
                          },
                        }}
                      >
                        Report
                      </Button>
                    )}
                  </Box>
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
