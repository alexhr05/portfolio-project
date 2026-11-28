import React from "react";
import MultiplayerCarGamePlay from "../Images/MultiplayerCarGamePlay.PNG";
import MultiplayerCarGameResults from "../Images/multiplayerCarGameWinLose.PNG";
import MultiplayerCarGameCover from "../Images/multiplayerCarGame.PNG";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function MultiplayerCarGamePage() {
  return (
    <ProjectDetailsLayout
      title="Multiplayer Car Game"
      heroImage={MultiplayerCarGameCover}
      heroImageOrientation="portrait"
      achievement="School project - end of Grade 10"
      duration="About two weeks"
      sourceCodeUrl="https://github.com/alexhr05/Multiplayer-Car-Game"
      overview={[
        "Multiplayer Car Game is a two-player racing game made in Python with Pygame as a Grade 10 end-of-year project. Each player controls a car and competes to survive longer while avoiding traffic and obstacles.",
        "The game uses Pygame for its visuals and physics. It tracks player positions and scores, handles collisions, and displays the winner when the round ends.",
      ]}
      technologies={[
        { name: "Python", category: "Backend" },
        { name: "Pygame", category: "2D game library" },
        { name: "Collision detection", category: "Game mechanics" },
        { name: "Score and time tracking", category: "Gameplay systems" },
      ]}
      features={[
        {
          title: "Two-player racing",
          description:
            "Two players compete in the same round, with each player's score tracked separately.",
        },
        {
          title: "Avoid traffic and obstacles",
          description:
            "Dodge cars and objects on the road to stay in the game longer.",
        },
        {
          title: "Score and timer display",
          description:
            "Follow both players' scores and the elapsed time during gameplay.",
        },
        {
          title: "Round results screen",
          description:
            "When the round ends, the game shows which player won and which player lost.",
        },
      ]}
      screenshots={[
        {
          image: MultiplayerCarGamePlay,
          caption: "Two-player race in progress",
          orientation: "portrait",
        },
        {
          image: MultiplayerCarGameResults,
          caption: "Winner and loser results screen",
          orientation: "portrait",
        },
      ]}
    />
  );
}

export default MultiplayerCarGamePage;
