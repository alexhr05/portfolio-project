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
      text: "Приложението има за цел да предостави иновативно и ефективно средство за обработка на данни и автоматизирано създаване на AI модели. Чрез използване на напреднали алгоритми за обработка на данни", //и машинно самообучение, приложението цели да улесни процеса на създаване И трениране на AI модели
      url: "aimodelmaker",
      tags: ["AI", "Data processing", "React", "Python"]
    },
    {
      imagePath: PersonalInformationAppPic,
      title: "Personal Information App",
      text: "Тук човек може да запазва всички свои входни данни за сайтовете, в които влиза или LOGIN CREDENTIALS. Може да ги редактира по всяко време, като той трябва да ги вкара сам в приложението. Достъпа до самото приложение може да се контролира от потребителя дали иска парола или нещо по-сигурно.",
      url: "personalinformationapp",
      tags: ["Credentials", "Mobile app", "Java"],
    },
    {
      imagePath: BlindHelper,
      title: "Blind Helper",
      text: "Този проект го разработих с помощта на един приятел за НОИТ, като стигнах до националния кръг и бях в топ 4. Това е приложение за телефон, което предназначено за хора с увредено зрение и да може да им казва какво има пред тях и да търси различни предмети каквито човека му зададе. Приложението може да се контролира само с гласови команди.",
      url: "blindhelper",
      tags: ["Accessibility", "Mobile app", "Java"],
    },
    {
      imagePath: BankSAAS,
      title: "Bank SAAS",
      text: "Това е приложение, което е подобно на опростен банков софтуер, където се съхранява информация за дадения потребител, като имена и колко пари има в банковата сметка. В него може да се пресметне колко пари дължи човек, след като е изтеглил кредит.",
      url: "banksaas",
      tags: ["Java", "SAAS"],
    },
    {
      imagePath: AwesomeCarGame,
      title: "Awesome Car Game",
      text: "Awesome Car Game е проект за края на първи срок на 11 клас, в който един играч управлява една кола и целта е кой да издържи по-дълго без да се блъсне в падащите предмети отгоре.",
      url: "awesomecargame",
      tags: ["Java", "Racing game"],
    },
    {
      imagePath: MultiplayerCarGame,
      title: "Multiplayer Car Game",
      text: "Multiplayer Car Game е проект за края на годината в 10 клас, в който двама играчи заедно могат да управляват по отделно една кола и целта е кой ще издържи по-дълго без да се блъсне в падащите предмети отгоре.",
      url: "multiplayercargame",
      tags: ["Python", "Pygame",]
    },
    {
      imagePath: PlaneShooterGame,
      title: "Plane Shooter Game",
      text: "Играта Plane Shooter Game успях да я направя в 10 клас, като развитие на предния проект, където сега всичко е направено с по-напреднали знания, както и графиките са доста добре съобразени със уцелване на целта.",
      url: "planeshootergame",
      tags: ["Python", "PyGame"],
    },
    {
      imagePath: InteractiveElectronics,
      title: "Interacitve Electronics",
      text: "Този проект го разработих за НОИТ, като стигнах до националния кръг и бях в топ 6. Това е самообучителен сайт, в който човек може да се развие своите умения в Електрониката. В сайта има уроци за различните електронни компоненти как работят и какво представляват и когато натрупа базови познания в сферата може да започне да се упражнява. ",
      url: "interactiveelectronics",
      tags: ["Javascript", "PHP", "HTML", "CSS", "Electronics"],
    },
    {
      imagePath: SafeEntrance,
      title: "Safe Entrance",
      text: "Safe Entrance е софтуерно приложение, чиято основна функционалност е да осигурява лесен и контролиран достъп до различни помещения, домове, офиси, предприятия. Програмата мисли вместо потребителите и те няма да има нужда да помнят, кой ключ за коя врата къде се слага и как се отключва.",
      url: "safeentrance",
      tags: ["Access control", "PHP", "MySQL", "HTML", "CSS"],
    },
    {
      imagePath: TreasureHunterImage,
      title: "Treasure Hunter",
       text: "Това е игра, която разработих НОИТ с помощта на една съученичка. Аз разработвах логиката на играта, а тя беше по дизайна. Но с проетка стигнахме до националия кръг и се класирахме на почетни места на цялата олимпиада. Играта ни е 2D и играчът е едно човече, което може да скача и се движи във всички посоки и целта му е да събере колкото се може повече диаманти и да мине всички нива.",
      text: "Treasure Hunters е игра, подобна на Super Mario, в която играчите могат да разивят своите умения на ориентация, съсредоточеност и наблюдателност. Подходящи е за деца между 7-11 годишна възраст, но и по-големи могат да я пробват.",
      url: "treasurehunters",
      tags: ["JavaScript", "HTML", "CSS", "Platform game"],
    },
    {
      imagePath: "RestaurantManagementSystem",
      title: "Restaurant Management System",
      text: "Това е система за управление на ресторанти. Ефективен и лесен за използване софтуер за ресторант. Тук можете да управлявате склада, менюто, поръчките и оборота - в зависимост от ролята си. Наличните роли са сервитьор и управител.",
      url: "restaurantmanagementsystem",
      tags: ["C++"],
    },
    {
      imagePath: "CinemaManagementSystem",
      title: "Cinema Management System",
      text: "Това е система за управление на киносалони. Включва управление на зали, филми и билети, като системата поддържа различни видове потребители с различни привилегии",
      url: "cinemamanagementsystem",
      tags: ["C++", "OOP"],
    },
        {
      imagePath: "UniCourses-management-system",
      title: "University Courses Management System",
      text: "Това е система за управление на университетски курсове. Включва управление на курсове, студенти и преподаватели. Системата поддържа различни видове роли и може да се добавят различни ученици и преподаватели.",
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
