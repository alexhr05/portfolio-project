import React from "react";
import { Box, Button,CardMedia } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import Menu from "../Pages/Menu.js";


function ProjectDetailsLayout({
  title,
  heroImage,
  overview,
  technologies = [],
  features = [],
  screenshots = [],
  dateRange,
  duration,
  achievement,
  liveDemoUrl,
  sourceCodeUrl,
  backTo = "/projects",
}) {
  return ( 
  <Box sx={{ minHeight: "100vh", bgcolor: "rgb(248, 250, 252)" }}>
    <Menu />
    <Box component="main"
            sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },
        }}
        >
          <Button
            component={RouterLink}
            to={backTo}
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 1.5,
              px: 0,
              color: "rgb(71, 85, 105)",
              textTransform: "none",
              fontSize: 13,
              "&:hover": { bgcolor: "transparent", color: "rgb(37, 99, 235)" },
            }}
          >
            Back to Projects
          </Button>
          <CardMedia
            component="img"
            image={heroImage}
            alt={`${title} preview`}
            sx={{
              width: "100%",
              height: { xs: 210, sm: 280, md: 360 },
              objectFit: "cover",
              borderRadius: "12px",
              bgcolor: "rgb(226, 232, 240)",
            }}
          />

    </Box>
  </Box>);
}

export default ProjectDetailsLayout;
