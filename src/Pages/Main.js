import React from "react";
import logo from "../logo.svg";
import {
  Box,
  Typography,
  alpha,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import IntroductionImage from "../Images/programmingLanguages.jpg";
import TreasureHunterImage from "../Images/treasureHunters.png";
import SafeEntrance from "../Images/SafeEntranceHomePage.png";
import FamousBulgarianPeople from "../Images/FamousBulgarianPeople.png";
import InteractiveElectronics from "../Images/InteractiveElectronics.png";
import BlindHelper from "../Images/blindHelperScreenShot.jpg";
import Me from "../Images/aboutMe.png";

import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import Menu from "./Menu.js";

function Main() {
  const icons = [
    {
      iconBut: <InstagramIcon sx={{ fontSize: { lg: 30, xl: 40 } }} />,
      url: "https://www.instagram.com/a.hristov_05/",
    },
    {
      iconBut: <FacebookIcon sx={{ fontSize: { lg: 30, xl: 40 } }} />,
      url: "https://www.facebook.com/profile.php?id=100023840763475",
    },
    {
      iconBut: <LinkedInIcon sx={{ fontSize: { lg: 30, xl: 40 } }} />,
      url: "https://www.linkedin.com/in/alex-hristov-14b00a277/",
    },
  ];
  const skillCategories = [];
  const today = new Date();
  const journeyEntries = [
    {
      date: "February - June 2026",
      title: "Freelance Software Developer",
      organization: "Edit Creation",
      description: [
        "Customized an investor portal on a ready-made platform using HTML, CSS and JavaScript. Designed layouts, tables, media embeds and other interface features.",
        "Worked directly with the client to turn requests into functional software solutions.",
      ],
      isCurrent: true,
    },
     {
      date: "November 2025 - March 2026",
      title: "Mentorship program",
      organization: "SAP",
      description: [
        "Learn more and exercise my skills in Java for android development.",
        "Practiced the skill of project management skills by documenting my work step by step in GitHub.Gained experience in working with a mentor and receiving feedback on my work",    
        "Gained experience in presenting project to an audience of 50-60 people and answering questions about the project.",
      ],
      isCurrent: false,
    },
    {
      date: "July - September 2023",
      title: "Software Development Intern",
      organization: "Accedia",
      description: [
        "Learn C# and a little .NET framework.",
        "Worked in a small team, but close-knit team",    
        "Gained practical experience by contributing to software development tasks during an internship.",
      ],
      isCurrent: false,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgb(255, 255, 255)",
        height: window.innerHeight,
      }}
    >
      <Menu />

      <Box
        sx={{
          ml: { xs: "13%", sm: "13%", md: "15%", lg: "18%", xl: "20%" },
          mr: { xs: "13%", sm: "13%", md: "15%", lg: "18%", xl: "20%" },
          mt: { xs: "8%", sm: "8%", md: "7%" },
          borderRadius: "30px",
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "rgb(230, 230, 230)",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            height: { md: "10%", lg: "15%", xl: "20%" },
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 6, sm: 7, md: 10, lg: 8, xl: 16 },
          }}
        >
          <Card
            sx={{
              border: "solid 1px",
              borderRadius: "30px",
              height: {
                xs: window.innerHeight * 0.25,
                sm: window.innerHeight * 0.23,
                md: window.innerHeight * 0.35,
                lg: window.innerHeight * 0.35,
                xl: window.innerHeight * 0.36,
              },
              width: {
                xs: window.innerWidth * 0.14,
                sm: window.innerWidth * 0.12,
                md: window.innerWidth * 0.16,
                lg: window.innerWidth * 0.13,
                xl: window.innerWidth * 0.14,
              },
            }}
          >
            <CardMedia
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "fill", // Ensures the image fills the area without distortion
              }}
              image={Me}
              alt="Me"
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: 20, md: 35, lg: 48, xl: 56 },
                fontWeight: "bold",
              }}
            >
              Alex Hristov
            </Typography>
            <Typography
              sx={{ fontSize: { sm: 12, md: 20, lg: 23, xl: 26 }, mt: 3 }}
            >
              Software Developer
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "80%",
                justifyContent: "space-between",
                mt: 5,
              }}
            >
              {icons.map((icon) => (
                <IconButton
                  sx={{
                    bgcolor: "rgb(255, 255, 255)",
                    color: "rgb(25, 118, 210)",
                    borderRadius: 100,
                  }}
                  onClick={() => window.open(icon.url)}
                >
                  {icon.iconBut}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "rgb(255, 255, 255)",
            boxShadow: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 20, md: 22, lg: 25, xl: 28 },
                fontWeight: "bold",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <PersonOutlineIcon sx={{ color: "rgb(37, 99, 235)", fontSize: 22 }} />
                <span>Who I Am</span>
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
              }}
            >
              Hello! I'm Alex Hristov, a software developer and computer science
              student at Sofia University. I enjoy turning ideas into practical
              applications and building software that is clear, useful and reliable.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
                lineHeight: 1.75,
                color: "rgb(71, 85, 105)",
              }}
            >
              I graduated from NPMG in Sofia with a specialization in Software and
              Hardware Sciences. My experience includes web development, mobile
              applications, desktop applications and game development.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
                lineHeight: 1.75,
                color: "rgb(71, 85, 105)",
              }}
            >
              I am responsible, adaptable and comfortable working in a team. I pay
              attention to detail, communicate openly and aim to deliver projects
              on time while continuing to learn and improve.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: "46%" },
              p: 3,
            }}
          >
            <Card sx={{ borderRadius: "18px", boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)" }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <BoltOutlinedIcon sx={{ color: "rgb(37, 99, 235)" }} />
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Quick Facts</Typography>
                </Box>
                <Typography sx={{ color: "rgb(71, 85, 105)", fontSize: 14, mb: 1 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: "rgb(30, 41, 59)", mr: 1 }}>Age</Box>
                  {today.getFullYear() - 2005}
                </Typography>
                <Typography sx={{ color: "rgb(71, 85, 105)", fontSize: 14, mb: 1 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: "rgb(30, 41, 59)", mr: 1 }}>Location</Box>
                  Bulgaria
                </Typography>
                <Typography sx={{ color: "rgb(71, 85, 105)", fontSize: 14, mb: 1, wordBreak: "break-word" }}>
                  <Box component="span" sx={{ fontWeight: 700, color: "rgb(30, 41, 59)", mr: 1 }}>Email</Box>
                  alexhr05@gmail.com
                </Typography>
                <Typography sx={{ color: "rgb(71, 85, 105)", fontSize: 14 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: "rgb(30, 41, 59)", mr: 1 }}>Languages</Box>
                  Bulgarian, English
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ borderRadius: "18px", boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2 }}>Interests</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {["UI/UX Design", "Cloud Computing", "Web Accessibility", "Photography", "Hiking"].map((interest) => (
                    <Box
                      key={interest}
                      sx={{
                        px: 1.25,
                        py: 0.75,
                        borderRadius: "999px",
                        bgcolor: "rgb(239, 246, 255)",
                        color: "rgb(37, 99, 235)",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {interest}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "rgb(255, 255, 255)",
            boxShadow: 1,
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "10px",
                bgcolor: "rgb(239, 246, 255)",
              }}
            >
              <WorkOutlineIcon sx={{ color: "rgb(37, 99, 235)" }} />
            </Box>
            <Typography sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, fontWeight: 700 }}>
              My Journey
            </Typography>
          </Box>
          <Box sx={{ mt: 3, ml: 1.5, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: "6px",
                top: 8,
                bottom: 20,
                width: "1px",
                bgcolor: "rgb(226, 232, 240)",
              }}
            />
            {journeyEntries.map((entry) => (
              <Box key={entry.title} sx={{ display: "flex", gap: 2, position: "relative", mb: 3 }}>
                <Box
                  sx={{
                    width: 13,
                    height: 13,
                    flexShrink: 0,
 
                    borderRadius: "50%",
                    bgcolor: entry.isCurrent
                      ? "rgb(37, 99, 235)"
                      : "rgb(203, 213, 225)",
                    border: "2px solid white",
                    zIndex: 1,
                  }}
                />
                <Box sx={{ pb: 1 }}>
                  <Typography sx={{ color: "rgb(37, 99, 235)", fontSize: 14, fontWeight: 700 }}>
                    {entry.date}
                  </Typography>
                  <Typography sx={{ mt: 0.75, fontSize: 18, fontWeight: 700 }}>
                    {entry.title}
                  </Typography>
                  {entry.organization && (
                    <Typography sx={{ mt: 0.5, color: "rgb(100, 116, 139)", fontSize: 14 }}>
                      {entry.organization}
                    </Typography>
                  )}
                  {Array.isArray(entry.description) ? (
                    <Box
                      component="ul"
                      sx={{
                        mt: 1,
                        mb: 0,
                        pl: 3,
                        color: "rgb(71, 85, 105)",
                        lineHeight: 1.7,
                        fontSize: 14,
                      }}
                    >
                      {entry.description.map((item) => (
                        <Box component="li" key={item} sx={{ mb: 0.5 }}>
                          {item}
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Typography sx={{ mt: 1, color: "rgb(71, 85, 105)", lineHeight: 1.7, fontSize: 14 }}>
                      {entry.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "rgb(255, 255, 255)",
            boxShadow: 1,
            border: "1px solid rgb(226, 232, 240)",
            borderRadius: "18px",
            p: { xs: 2.5, md: 3.5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                bgcolor: "rgb(239, 246, 255)",
              }}
            >
              <InsightsOutlinedIcon sx={{ color: "rgb(37, 99, 235)" }} />
            </Box>
            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, fontWeight: 700 }}>
              Skills &amp; Expertise
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "repeat(2, minmax(0, 1fr))",
              },
              columnGap: 4,
              rowGap: 3,
            }}
          >
            {skillCategories.map((category) => (
              <Box key={category.title}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  {category.icon}
                  <Typography sx={{ fontWeight: 700 }}>{category.title}</Typography>
                </Box>
                {category.skills.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.75,
                        fontSize: 12,
                      }}
                    >
                      <Typography sx={{ fontSize: "inherit" }}>{skill.name}</Typography>
                      <Typography sx={{ color: "rgb(37, 99, 235)", fontSize: "inherit" }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: 6,
                        borderRadius: 999,
                        bgcolor: "rgb(241, 243, 246)",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${skill.level}%`,
                          height: "100%",
                          borderRadius: "inherit",
                          bgcolor: "rgb(37, 99, 235)",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "80px",
          border: "solid 1 px",
          display: "flex",
          color: "black",
          justifyContent: "center",
          backgroundColor: "rgb(230, 230, 230)",
          mt: 30,
          pb: 3,
        }}
      >
        <Typography fontSize={20}>
          © Alex Hristov. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Main;
