import React, { forwardRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "./styles/ProjectsSection.css";

const ProjectsSection = forwardRef(({ data }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(data.projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? data.projects
      : data.projects.filter((p) => p.category === selectedCategory);

  return (
    <div ref={ref}>
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
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                borderRadius: "10px",
                px: 2,
                py: 0.5,
                fontSize: "0.9rem",
                border: selectedCategory === cat ? "2px solid #6A1B9A" : "1.5px solid #7B1FA2",
                color: selectedCategory === cat ? "#fff" : "#1e293b",
                backgroundColor:
                  selectedCategory === cat ? "#7B1FA2" : "rgba(123,31,162,0.05)",
                boxShadow:
                  selectedCategory === cat
                    ? "0 3px 6px rgba(123,31,162,0.3)"
                    : "0 1px 3px rgba(0,0,0,0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === cat
                      ? "#6A1B9A"
                      : "rgba(123,31,162,0.15)",
                  borderColor: "#6A1B9A",
                  boxShadow: "0 3px 6px rgba(123,31,162,0.25)",
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
                        borderRadius: "10px",
                        overflow: "hidden", // ensures image respects rounded corners
                        border: "1px solid rgba(123,31,162,0.15)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 4px 12px rgba(123,31,162,0.2)",
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
                    }}
                />

                {/* Content */}
                <Box sx={{ p: 2, textAlign: "center" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    {item.title}
                    </Typography>
                    <Typography component="span" sx={{ fontWeight: 400, color: "#475569", fontSize: "0.85rem" }}>
                    ({item.start_date === item.end_date ? item.start_date : `${item.start_date} – ${item.end_date}`})
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#475569", fontStyle: "italic", mb: 1 }}>
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
                          fontSize: "0.75rem",
                          color: "#1e293b",
                          backgroundColor: "#e2e8f0",
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
                        startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "#181717",
                          borderColor: "#181717",
                          "&:hover": {
                            backgroundColor: "rgba(24,23,23,0.08)",
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
