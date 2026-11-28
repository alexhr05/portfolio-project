import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Pagination,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TreasureHunterImage from "../Images/treasureHunters.png";
import SafeEntrance from "../Images/SafeEntranceMain.PNG";
import InteractiveElectronics from "../Images/InteractiveElectronics.png";
import BlindHelper from "../Images/blindHelperScreenShot.jpg";
import AIModelMaker from "../Images/AIModelMaker_2.PNG";
import PersonalInformationAppPic from "../Images/PersonalInformationAppPic.png";
import PlaneShooterGame from "../Images/planeShooterGameMiddlePart.png";
import MultiplayerCarGame from "../Images/multiplayerCarGame.PNG";
import AwesomeCarGame from "../Images/AwesomeCarGame.PNG";
import BankSAAS from "../Images/BankSAASLoginPage.PNG";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function Projects() {
  const items = [
    {
      imagePath: AIModelMaker,
      title: "AI Model Maker",
      text: "The app aims to provide an innovative and efficient tool for data processing and automated AI model creation. By using advanced data-processing algorithms and machine learning, it aims to make creating and training AI models easier.",
      url: "aimodelmaker",
      tags: ["AI", "Data processing", "React", "Python"]
    },
    {
      imagePath: PersonalInformationAppPic,
      title: "Personal Information App",
      text: "Users can save the login credentials for websites they use in the app. They can edit the details at any time, but must enter the information into the app themselves.",
      url: "personalinformationapp",
      tags: ["Credentials", "Mobile app", "Java"],
    },
    {
      imagePath: BlindHelper,
      title: "Blind Helper",
      text: "I developed this project with a friend for NOIT. We reached the national round and placed in the top four. It is a mobile app for people with visual impairments that tells them what is in front of them.",
      url: "blindhelper",
      tags: ["Accessibility", "Mobile app", "Java"],
    },
    {
      imagePath: BankSAAS,
      title: "Bank SAAS",
      text: "This application is similar to a simplified banking system. It stores user information, such as names and account balances.",
      url: "banksaas",
      tags: ["Java", "SAAS"],
    },
    {
      imagePath: AwesomeCarGame,
      title: "Awesome Car Game",
      text: "This project was made for the end of the first semester of Grade 11. One player controls a car and tries to survive as long as possible without crashing into objects falling from above.",
      url: "awesomecargame",
      tags: ["Java", "Racing game"],
    },
    {
      imagePath: MultiplayerCarGame,
      title: "Multiplayer Car Game",
      text: "This project was made at the end of Grade 10. Two players each control a car and compete to survive as long as possible without crashing into objects falling from above.",
      url: "multiplayercargame",
      tags: ["Python", "Pygame",]
    },
    {
      imagePath: PlaneShooterGame,
      title: "Plane Shooter Game",
      text: "I made Plane Shooter Game in Grade 10 as an evolution of my previous project. It uses more advanced techniques, and the graphics are designed around aiming at targets.",
      url: "planeshootergame",
      tags: ["Python", "PyGame"],
    },
    {
      imagePath: InteractiveElectronics,
      title: "Interacitve Electronics",
      text: "I developed this project for NOIT, reached the national round, and placed in the top six. It is a self-learning website where users can develop their electronics skills.",
      url: "interactiveelectronics",
      tags: ["Javascript", "PHP", "HTML", "CSS", "Electronics"],
    },
    {
      imagePath: SafeEntrance,
      title: "Safe Entrance",
      text: "Safe Entrance is a software application designed to provide easy, controlled access to different rooms and properties, including homes, offices, and businesses.",
      url: "safeentrance",
      tags: ["Access control", "PHP", "MySQL", "HTML", "CSS"],
    },
    {
      imagePath: TreasureHunterImage,
      title: "Treasure Hunter",
      text: "Treasure Hunters is a game similar to Super Mario. Players can practice their orientation, focus, and observation skills while playing. It is suitable for children aged 7-11, as well as older players.",
      url: "treasurehunters",
      tags: ["JavaScript", "HTML", "CSS", "Platform game"],
    },
    {
      imagePath: "RestaurantManagementSystem",
      title: "Restaurant Management System",
      text: "This restaurant management system is designed to be effective and easy to use. Depending on their role, users can manage inventory, the menu, orders, and revenue.",
      url: "restaurantmanagementsystem",
      tags: ["C++"],
    },
    {
      imagePath: "CinemaManagementSystem",
      title: "Cinema Management System",
      text: "This cinema management system handles theaters, films, and tickets, and supports different user types with different privileges.",
      url: "cinemamanagementsystem",
      tags: ["C++", "OOP"],
    },
        {
      imagePath: "UniCourses-management-system",
      title: "University Courses Management System",
      text: "This university course management system manages courses, students, and instructors. It supports multiple roles and allows students and instructors to be added.",
      url: "unicoursesmanagementsystem",
      tags: ["C++", "OOP"],
    },
  ];

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentItems = items.slice(startIndex, endIndex);
  const projectPath = (url) => `/projects/${url}`;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menu />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f5f6f8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: 36, mt: 6, fontWeight: "bold" }}>
          Portfolio
        </Typography>
        <Typography sx={{ fontSize: 20, mt: 3, mb: 8, px: 2 }}>
            Welcome to my online portfolio. Here you'll see all of my projects
            over the years.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mx: { xs: 2, sm: 4, md: 8 }, my: 5 }}>
        <Grid container spacing={3} alignItems="stretch">
          {currentItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.url} sx={{ display: "flex" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  minHeight: 390,
                  borderRadius: 3,
                  boxShadow: "0 1px 4px rgba(20, 35, 55, 0.12)",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 20px rgba(20, 35, 55, 0.14)",
                  },
                }}
              >
                <Link
                  to={projectPath(item.url)}
                  aria-label={`View ${item.title} details`}
                  style={{ display: "block", lineHeight: 0 }}
                >
                  <CardMedia
                    component="img"
                    image={item.imagePath}
                    alt={item.title}
                    sx={{ height: 200, objectFit: "stretch" }}
                  />
                </Link>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexGrow: 1,
                    p: 2.5,
                    "&:last-child": { pb: 2 },
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{ fontSize: 20, fontWeight: 700, color: "#172033" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#566174",
                      fontSize: 14,
                      lineHeight: 1.5,
                      mt: 0.75,
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      overflow: "hidden",
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto", pt: 2 }}>
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          height: 24,
                          borderRadius: 1.5,
                          backgroundColor: "#eef3ff",
                          color: "#2457c5",
                          fontSize: 11,
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    component={Link}
                    to={projectPath(item.url)}
                    startIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 1.5,
                      p: 0,
                      color: "#1457e8",
                      textTransform: "none",
                      fontSize: 14,
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "transparent", color: "#0c3fb3" },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            variant="outlined"
            count={totalPages}
            page={currentPage}
            onChange={(_, newPage) => setCurrentPage(newPage)}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
