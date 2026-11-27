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

import AIModelMaker from "../Images/AIModelMaker.PNG";
import AIModelMakerModelCharacteristics from "../Images/AIModelMakerModelCharacteristics.PNG";
import BlindHelperLogo from "../Images/logoBlindHelper.jpg";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function BlindHelperPage() {
  return (
     <ProjectDetailsLayout
      title="Blind Helper"
      heroImage={BlindHelperLogo}
      achievement="НОИТ third place - 2023"
      sourceCodeUrl="https://github.com/alexhr05/blind-helper"
      overview={[
        "The program stops searching for the specified object when the user finds it and tells the search to stop. The user can say “stop” or “stop it,” and the program will stop searching, and the app will begin listening for new commands. When we want to exit the program and have it stop, we must say “exit the program.” The program contains predefined data and parameters for a specific number of objects. This list will be continuously expanded as the server-side program is improved.",
      ]}
      technologies={[
        { name: "React", category: "Frontend" },
        { name: "Python", category: "Backend" },
        { name: "AI / Machine Learning", category: "Model training" },
        { name: "Data processing", category: "Analytics" },
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
        { image: AIModelMaker, caption: "Начална страница" },
        {
          image: AIModelMakerModelCharacteristics,
          caption: "Страница с трениран модел",
        },
      ]}
      dateRange={[
        "November 2022 - April 2023",
      ]}
      duration={["6 months"]}

    />  );
}

export default BlindHelperPage;
