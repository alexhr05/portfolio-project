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
        "The site combines lessons with practical activities. After learning the basics, students can work through interactive circuit exercises and check their understanding.",
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
