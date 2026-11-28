import PlaneShooterGamePlay from "../Images/PlaneShooterGamePlay.png";
import PlaneShooterGameStartScreen from "../Images/PlaneShooterGameStartScreen.png";
import PlaneShooterGameCover from "../Images/planeShooterGameMiddlePart.png";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function PlaneShooterGamePage() {
  return (
    <ProjectDetailsLayout
      title="Plane Shooter Game"
      heroImage={PlaneShooterGameCover}
      heroImageOrientation="portrait"
      achievement="Grade 10 project - evolved from Multiplayer Car Game"
      duration="About one to two weeks"
      sourceCodeUrl="https://github.com/alexhr05/Plane-Shooter-Game"
      overview={[
        "Plane Shooter Game is a Python game made with Pygame as a follow-up to my Multiplayer Car Game project. I rebuilt the game logic using classes and more advanced programming techniques.",
        "The gameplay is centered around aiming at targets. The project was developed over about one to two weeks, with a focus on improving reflexes, observation, and concentration.",
      ]}
      technologies={[
        { name: "Python", category: "Programming language" },
        { name: "Pygame", category: "2D game library" },
        { name: "Object-oriented programming", category: "Class-based game logic" },
        { name: "Game state and HUD", category: "Gameplay systems" },
      ]}
      features={[
        {
          title: "Plane shooter gameplay",
          description:
            "Aim and shoot at targets in an arcade-style game built around a moving road and aircraft.",
        },
        {
          title: "Live gameplay indicators",
          description:
            "The game screen displays the current level, lives, kills, cash, fuel, and elapsed time.",
        },
        {
          title: "Mouse-start screen",
          description:
            "A dedicated opening screen prompts the player to click the mouse to begin.",
        },
        {
          title: "Class-based game logic",
          description:
            "The game builds on the previous project with logic organized around classes.",
        },
      ]}
      screenshots={[
         {
          image: PlaneShooterGameStartScreen,
          caption: "Start screen",
          orientation: "portrait",
        },
        {
          image: PlaneShooterGamePlay,
          caption: "Gameplay with level, lives, kills, and fuel indicators",
          orientation: "portrait",
        },
       
      ]}
    />
  );
}

export default PlaneShooterGamePage;
