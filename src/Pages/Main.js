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
import CheckIcon from "@mui/icons-material/Check";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FrontendIcon from "../Images/frontendIcon.png";
import BackendIcon from "../Images/backendIcon.png";
import FrameworkIcon from "../Images/frameworkIcon.png";

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
  const frontendSkills = [
    "Javascript",
    "React",
    "HTML/CSS",
    "Boostrap 4",
    "jQuery",
  ];
  const backendSkills = [
    "Java",
    "Python",
    "MySQL",
    "Kotlin",
    "C#",
    "C++",
    "PHP",
  ];
  const otherSkills = ["PyGame", "Xampp", "Balsamiq"];
  const today = new Date();

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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20, lg: 23, xl: 25 },
                borderLeft: 5,
                borderRight: 5,
                pl: 2,
                pr: 2,
                borderColor: "Blue",
                fontWeight: "bold",
              }}
            >
              Преглед на умения
            </Typography>
            <Box></Box>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 22 },
              }}
            >
              Имам повече от {today.getFullYear() - 2019} години опит в
              изграждането на уеб приложения за олимпиади или за определени
              нужди. По-долу е представена кратка преглед на основните ми
              технически умения и инструментите, които използвам. Искам да да
              научите повече за моя опит? Разгледайте моята онлайн
              автобиография.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              pt: 6,
              position: "relative",
              mb: 5,
            }}
          >
            <Card
              sx={{
                width: "fit-content",
                height: "auto",
                boxShadow: 4,
                background: {
                  sm: "red",
                  md: "blue",
                  lg: "yellow",
                  xl: "green",
                },
                whiteSpace: "normal",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "rgb(25, 118, 210)", // Choose a color
                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: {
                    xs: "translate(5%, -50%)",
                    sm: "translate(30%, -50%)",
                    md: "translate(45%, -50%)",
                    lg: "translate(55%, -50%)",
                    xl: "translate(66%, -50%)",
                  },
                  pt: 1,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: { md: "80%", lg: "88%", xl: "95%" } }}
                  src={FrontendIcon}
                />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: 16, sm: 18, md: 20, lg: 22, xl: 25 },
                    textAlign: "center",
                  }}
                >
                  Frontend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {frontendSkills.map((frontendSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 0.5,
                        pl: { xs: 0, sm: 1, md: 1, lg: 2, xl: 4 },
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography
                        variant="body2"
                        fontSize={{ xs: 11, sm: 13, md: 15, lg: 17, xl: 20 }}
                        sx={{ pl: { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 } }}
                      >
                        {frontendSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "fit-content",
                height: "auto",
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px", // Adjust size as needed
                  height: "100px",
                  // backgroundColor: "blue", // Choose a color
                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translate(66%, -50%)",
                  pt: 1,
                }}
              >
                <img sx={{ pt: 5 }} src={BackendIcon} />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mb: 1.5, fontSize: 25, textAlign: "center" }}>
                  Backend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {backendSkills.map((backendSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 1,
                        pl: 5,
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography variant="body2" fontSize={20} sx={{ pl: 4 }}>
                        {backendSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "fit-content",
                height: "auto",
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px", // Adjust size as needed
                  height: "100px",

                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translate(70%, -50%)",
                }}
              >
                <img sx={{ pt: 5 }} src={FrameworkIcon} />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mb: 1.5, fontSize: 25, textAlign: "center" }}>
                  Others
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {otherSkills.map((otherSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 1,
                        pl: 5,
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography variant="body2" fontSize={20} sx={{ pl: 4 }}>
                        {otherSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
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
