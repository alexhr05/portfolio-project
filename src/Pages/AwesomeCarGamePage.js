import React from "react";
import logo from "../logo.svg";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";

import AwesomeCarGamePlay from "../Images/AwesomeCarGamePlay.PNG";
import PlaneShooterGameStartScreen from "../Images/PlaneShooterGameStartScreen.png";
import AwesomeCarGameLogo from "../Images/AwesomeCarGame.PNG";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function AwesomeCarGamePage() {
  return (
     <ProjectDetailsLayout
      title="Awesome Car Game"
      heroImage={AwesomeCarGameLogo}
      sourceCodeUrl="https://gitlab.com/Alexhr/awesome-car-game"
      overview={[
        "Today, we are witnessing a boom in information technology, data processing, and the use of artificial intelligence (AI), which are becoming key elements in improving a wide variety of processes. Driven by the unlimited potential of technology, the idea of applications that not only process data but also automate the creation of AI models is an important and innovative element in the development of the software industry.",
        "The application can quickly and efficiently analyze large volumes of data. A neural network can then be trained to predict a result or a specific value based on the input information provided. The application is designed to be user-friendly, allowing users to easily navigate through the different functionalities and features. It provides a seamless experience for users to upload datasets, train models, and evaluate predictions.",
      ]}
      technologies={[
        { name: "Java", category: "Backend" },
        { name: "net", category: "Frontend" },
      ]}
      features={[
        {
          title: "Analyze datasets",
          description: "Process large volumes of data for model training.",
        },
        {
          title: "Create and train AI models",
          description: "Build and train neural networks using the provided data.",
        },
        {
          title: "Evaluate predictions",
          description: "Use trained models to predict a result or value.",
        },
      ]}
      screenshots={[
        { image: AwesomeCarGamePlay, caption: "Начална страница" },
        {
          image: AIModelMakerModelCharacteristics,
          caption: "Страница с трениран модел",
        },
      ]}
      dateRange={[
        "December 2022 - January 2023",
      ]}
      duration={["less than 1 month"]}

    />
    );
}

export default AwesomeCarGamePage;
