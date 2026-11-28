import React from "react";

import InteractiveElectronicsHomePage from "../Images/InteractiveelectronicsHomePage.png";
import InteractiveElectronicsExercisePage from "../Images/InteractiveElectronicsExercisePage.PNG";
import InteractiveElectronicsLogo from "../Images/logoInteractiveElectronics.png";

import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function InteractiveElectronicsPage() {
  return (
    <ProjectDetailsLayout
      title="Interactive Electronics"
      heroImage={InteractiveElectronicsLogo}
      achievement="НОИТ sixth place - 2022"
      sourceCodeUrl="https://github.com/alexhr05/interactive-electronics"
      overview={[
        "Interactive Electronics is an educational website designed to teach students about electronic components, how they work, and how they are used in circuits.",
        "With this project, I advanced to the national round of the NOIT competition in 10th grade and became a 2022 laureate with a high score at the competition. With the widespread adoption of technology in our lives, the widespread use of microcomputers, miniaturization, advances in telecommunications, as well as the use of personal computers and phones by each of us has led to the development of many complex devices. But all of this would be unthinkable without a single science—Electronics.",
        "On the website, users can open the site and either start playing a game right away or read the instructional materials. I have created a separate file containing detailed instructions on how to use the website. The program is designed so that users can log in, and user data is stored on the server. Any user can browse the site or play the game as a GUEST. If they wish, they can register and gain access to additional game features.",
        "If a user wants to play as a guest, they will only have access to the first level. This is sort of like a demo version, allowing them to explore and get a feel for the game. Once they register, they will be able to play all levels.",
        "The program supports full userLogin functionality. The following are supported: registration/login/logout/password change/forgotten password/automatic logout after a specified period of inactivity. User settings are saved in the session and retained until the EXIT button is clicked or the browser is closed",
      ]}
      technologies={[
        { name: "JavaScript", category: "Interactive behavior" },
        { name: "PHP", category: "Server-side functionality" },
        { name: "HTML", category: "Page structure" },
        { name: "CSS", category: "Styling" },
        { name: "Electronics", category: "Learning subject" },
      ]}
      features={[
        {
          title: "Learn about electronic components",
          description:
            "Study what components do and how they work in electronic circuits.",
        },
        {
          title: "Interactive circuit exercises",
          description:
            "Practice identifying and placing electronic elements in circuit diagrams.",
        },
        {
          title: "Check exercise answers",
          description:
            "Review answers to see whether a completed exercise is correct.",
        },
        {
          title: "Lessons and practice in one place",
          description:
            "Move from learning electronics concepts to practicing them with interactive activities.",
        },
      ]}
      screenshots={[
        {
          image: InteractiveElectronicsHomePage,
          caption: "Interactive Electronics homepage",
        },
        {
          image: InteractiveElectronicsExercisePage,
          caption: "Interactive circuit exercise",
        },
      ]}
      dateRange="October 2021 - April 2022"
      duration="6 months"
    />
  );
}

export default InteractiveElectronicsPage;
