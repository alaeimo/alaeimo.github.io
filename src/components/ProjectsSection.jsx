import React, { forwardRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Collapse,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FolderIcon from "@mui/icons-material/Folder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const ProjectsSection = forwardRef(({ data }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [zoomImage, setZoomImage] = useState(null);

  const categories = [
    "All",
    ...new Set(
      data.projects.flatMap((p) =>
        p.category.split("/").map((c) => c.trim())
      )
    ),
  ];

  const sortedProjects = [...data.projects].sort((a, b) => {
    const dateA = new Date(a.end_date || a.start_date);
    const dateB = new Date(b.end_date || b.start_date);
    return dateB - dateA;
  });

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

      {/* FULLSCREEN IMAGE */}
      {zoomImage && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(15,23,42,0.88)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >

          {/* CLOSE */}
          <Button
            onClick={() => setZoomImage(null)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              minWidth: "unset",
              width: 42,
              height: 42,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <CloseIcon />
          </Button>

          {/* IMAGE */}
          <Box
            sx={{
              width: "90vw",
              height: "90vh",
              borderRadius: 3,
              backgroundImage: `url(${zoomImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
            }}
          />
        </Box>
      )}

      <AnimatedUnderlineTitle title="Projects" />

      <Box className="projects-container">

        {/* CATEGORY BUTTONS */}
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
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                fontSize: "0.85rem",
                border: "1px solid #CBD5E1",
                color: selectedCategory === cat ? "#FFFFFF" : "#1E3A8A",
                backgroundColor:
                  selectedCategory === cat ? "#1E3A8A" : "#FFFFFF",

                "&:hover": {
                  backgroundColor:
                    selectedCategory === cat
                      ? "#1E3A8A"
                      : "#EEF2FF",
                  borderColor: "#1E3A8A",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* GRID */}
        <Grid container spacing={3}>
          {filteredProjects.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>

              {/* CARD */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
                    borderColor: "#CBD5E1",
                  },
                }}
              >

                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                  }}
                >

                  {/* FULLSCREEN BUTTON */}
                  <Button
                    onClick={() => setZoomImage(item.image)}
                    startIcon={<FullscreenIcon sx={{ fontSize: "0.95rem" }} />}
                    sx={{
                      position: "absolute",
                      left: 12,
                      bottom: 12,
                      minWidth: "unset",
                      px: 1.2,
                      py: 0.45,
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.92)",
                      color: "#0F172A",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textTransform: "none",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(226,232,240,0.9)",

                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                      },
                    }}
                  >
                    Full View
                  </Button>

                </Box>

                {/* CONTENT */}
                <Box sx={{ p: 2.5 }}>

                  {/* TITLE */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      textAlign: "center",
                    }}
                  >
                    <FolderIcon
                      sx={{
                        color: "#1E3A8A",
                        fontSize: "1.2rem",
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* DATE */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      mt: 0.5,
                      textAlign: "center",
                    }}
                  >
                    <CalendarTodayIcon
                      sx={{
                        color: "#1E3A8A",
                        fontSize: "0.9rem",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.start_date} – {item.end_date}
                    </Typography>
                  </Box>

                  {/* SUBTITLE */}
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontStyle: "italic",
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  {/* EXPAND */}
                  <Box sx={{ textAlign: "center", mt: 1 }}>
                    <Button
                      size="small"
                      onClick={() => toggleExpand(index)}
                      sx={{
                        color: "#1E3A8A",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      {expandedProjects[index]
                        ? "Show Less ▲"
                        : "Show More ▼"}
                    </Button>
                  </Box>

                  {/* COLLAPSE */}
                  <Collapse in={expandedProjects[index]}>

                    {/* RESPONSIBILITIES */}
                    <Box sx={{ mt: 1 }}>
                      {item.responsibilities.map((r, i) => (
                        <Typography
                          key={i}
                          sx={{
                            color: "#475569",
                            fontSize: "0.85rem",
                            mb: 0.7,
                          }}
                        >
                          • {r}
                        </Typography>
                      ))}
                    </Box>

                    {/* TECH */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      {item.technologies.map((t, i) => (
                        <Chip
                          key={i}
                          label={t}
                          size="small"
                          sx={{
                            backgroundColor: "#EEF2FF",
                            color: "#1E3A8A",
                            border: "1px solid #CBD5E1",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    {/* BUTTONS */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        mt: 2.5,
                        flexWrap: "wrap",
                      }}
                    >

                      {item.code && (
                        <Button
                          href={item.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          sx={{
                            color: "#1E3A8A",
                            border: "1px solid #CBD5E1",
                            textTransform: "none",
                            fontWeight: 600,

                            "&:hover": {
                              backgroundColor: "#EEF2FF",
                              borderColor: "#1E3A8A",
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
                          startIcon={<PictureAsPdfIcon />}
                          variant="outlined"
                          sx={{
                            color: "#1E3A8A",
                            border: "1px solid #CBD5E1",
                            textTransform: "none",
                            fontWeight: 600,

                            "&:hover": {
                              backgroundColor: "#EEF2FF",
                              borderColor: "#1E3A8A",
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