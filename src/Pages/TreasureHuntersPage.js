import React from "react";
import TreasureHuntersGame from "../Images/TreasureHuntersGame.png";
import TreasureHuntersHomePage from "../Images/treasureHunters.png";
import TreasureHuntersLogo from "../Images/logoTreasureHunters.png";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function TreasureHuntersPage() {
  return (
    <ProjectDetailsLayout
      title="Treasure Hunters"
      heroImage={TreasureHuntersLogo}
      dateRange="October 2019 - April 2020"
      heroImageOrientation="portrait"
      achievement="Become 7th in the national round of NOIT 2020"
      liveDemoUrl="https://juniorwebapp.com/treasurehunters/"
      sourceCodeUrl="https://github.com/alexhr05/TreasureHunters"
      overview={[
        "Treasure Hunters is a 2D platform game inspired by games like Super Mario. I developed it with a classmate: I worked on the game logic, while my classmate focused on the design. The project reached the national round of NOIT in Sofia in 2020.",
        "Designed for children around 7-11 years old, the game offers a fun way to practice orientation, focus, and observation. Players guide a character through levels, collect diamonds, and try to complete each map.",
      ]}
      technologies={[
        { name: "JavaScript", category: "Game logic and interactions" },
        { name: "HTML", category: "Web page structure" },
        { name: "CSS", category: "Web page styling" },
        { name: "2D platform game", category: "Game genre" },
      ]}
      features={[
        {
          title: "Character movement and jumping",
          description:
            "Move the player character around each map and jump across the level.",
        },
        {
          title: "Collectible diamonds",
          description:
            "Find and collect diamonds while navigating through obstacles.",
        },
        {
          title: "Multiple unique levels",
          description:
            "Progress through levels with their own maps, platforms, barriers, and starting positions.",
        },
        {
          title: "Keyboard controls and game status",
          description:
            "Respond to key presses and keep track of the current level and result during play.",
        },
      ]}
      screenshots={[
          {
          image: TreasureHuntersHomePage,
          caption: "Treasure Hunters homepage",
        },
        {
          image: TreasureHuntersGame,
          caption: "A level in progress, with diamonds and the current level displayed",
        },
      
      ]}
    />
  );
}

export default TreasureHuntersPage;
