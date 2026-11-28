import React from "react";

import BankSAASShowLoanPage from "../Images/BankSAASShowLoanPage.PNG";
import BankSAASShowReportPage from "../Images/BankSAASShowReportPage.PNG";
import BankSAASLoginLogo from "../Images/BankSAASLoginPage.PNG";



import Menu from "./Menu.js";


function BankSAASPage() {
  return (
      <ProjectDetailsLayout
      title="Awesome Car Game"
      heroImage={AwesomeCarGameImage}
      heroImageOrientation="portrait"
      sourceCodeUrl="https://gitlab.com/Alexhr/awesome-car-game"
      overview={[
        "Awesome Car Game is a single-player racing game created as a school project. The player drives along a road and tries to survive as long as possible while avoiding other cars and obstacles.",
        "The game displays the player's score and remaining health during play. Collisions put the player's health at risk, so the goal is to keep driving and achieve a higher score.",
      ]}
      technologies={[
        { name: "Java", category: "Programming language" },
        { name: "2D graphics", category: "Game visuals" },
        { name: "Collision handling", category: "Game mechanics" },
        { name: "Score and health tracking", category: "Gameplay system" },
      ]}
      features={[
        {
          title: "Single-player driving",
          description: "Control one car and try to survive for as long as possible.",
        },
        {
          title: "Avoid traffic and obstacles",
          description: "Dodge other cars and objects on the road to avoid collisions.",
        },
        {
          title: "Track score and health",
          description: "View your current score and remaining health while playing.",
        },
      ]}
      screenshots={[
        {
          image: AwesomeCarGamePlay,
          caption: "Gameplay showing the score, health, and traffic",
          orientation: "portrait",
        },
      ]}
      dateRange="May 2023 - June 2023"
      duration="Less than one month"
    />
  );
}

export default BankSAASPage;
