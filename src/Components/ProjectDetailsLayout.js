import React from "react";
import { Box, Button, CardMedia, Typography, Paper,
  Stack
 } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import Menu from "../Pages/Menu.js";

const panelSx = {
  p: { xs: 2, sm: 2.5 },
  border: "1px solid rgb(226, 232, 240)",
  borderRadius: "14px",
  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
};



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
  const overviewParagraphs = Array.isArray(overview) ? overview : [overview];


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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mt: 2.5,
            }}
          >
            <Typography
              component="h1"
              sx={{
                flex: "1 1 280px",
                color: "rgb(15, 23, 42)",
                fontSize: { xs: 28, sm: 34, md: 40 },
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {liveDemoUrl && (
              <Button
                component="a"
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                startIcon={<OpenInNewIcon />}
                sx={{ textTransform: "none", fontWeight: 700 }}
              >
                Live Demo
              </Button>
            )}
            {sourceCodeUrl && (
              <Button
                component="a"
                href={sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  bgcolor: "rgb(15, 23, 42)",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "rgb(30, 41, 59)" },
                }}
              >
                Source Code
              </Button>
            )}
          </Box>
        </Box>
        {(dateRange || duration || achievement) && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              mt: 1,
              color: "rgb(71, 85, 105)",
              fontSize: 13,
            }}
          >
            {dateRange && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarMonthOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 16 }} />
                {dateRange}
              </Box>
            )}
            {duration && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <ScheduleOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 16 }} />
                {duration}
              </Box>
            )}
            {achievement && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <EmojiEventsOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 16 }} />
                {achievement}
              </Box>
            )}
          </Box>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 2fr) minmax(240px, 1fr)",
            },
            alignItems: "start",
            gap: 2,
            mt: 3,
          }}
        >
          <Stack spacing={2} sx={{ minWidth: 0 }}>
            {overviewParagraphs.filter(Boolean).length > 0 && (
              <Paper component="section" elevation={0} sx={panelSx}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <ArticleOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 19 }} />
                  <Typography component="h2" sx={{ fontSize: 18, fontWeight: 800 }}>
                    Project Overview
                  </Typography>
                </Box>
                <Stack spacing={1.5}>
                  {overviewParagraphs.filter(Boolean).map((paragraph, index) => (
                    <Typography
                      key={`${index}-${paragraph.slice(0, 24)}`}
                      sx={{
                        color: "rgb(71, 85, 105)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            )}

           
          </Stack>

          {technologies.length > 0 && (
            <Paper component="section" elevation={0} sx={panelSx}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                <CodeOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 19 }} />
                <Typography component="h2" sx={{ fontSize: 16, fontWeight: 800 }}>
                  Technologies Used
                </Typography>
              </Box>
              <Stack spacing={0.75}>
                {technologies.map((technology) => (
                  <Box
                    key={technology.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      border: "1px solid rgb(226, 232, 240)",
                      borderRadius: "9px",
                    }}
                  >
                    <CodeOutlinedIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 20 }} />
                    <Box>
                      <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                        {technology.name}
                      </Typography>
                      {technology.category && (
                        <Typography sx={{ color: "rgb(100, 116, 139)", fontSize: 10 }}>
                          {technology.category}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>
          )}
        </Box>

    </Box>
  </Box>);
}

export default ProjectDetailsLayout;
