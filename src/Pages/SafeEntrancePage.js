import React from "react";
import SafeEntranceHomePage from "../Images/SafeEntranceHomePage.png";
import SafeEntranceDashboard from "../Images/SafeEntranceLessons.PNG";
import SafeEntranceLogo from "../Images/logoSafeEntrance.png";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function SafeEntrancePage() {
  return (
    <ProjectDetailsLayout
      title="Safe Entrance"
      dateRange="October 2020 - February 2021"
      duration="5 months"
      heroImage={SafeEntranceLogo}
      heroImageOrientation="portrait"
      achievement="Reached the regional round of NOIT 2021"
      liveDemoUrl="http://juniorwebapp.com/safeentrance.biz/"
      sourceCodeUrl="https://github.com/alexhr05/SafeEntrance"
      overview={[
        "Safe Entrance is a software project for managing controlled access to rooms and buildings such as homes, offices, and businesses. It aims to make entry management easier without needing to remember which key opens each door.",
        "The system connects a server, a microprocessor component, users, and administrators. Users control the hardware by sending requests through the server, while administrators manage users through server requests. The components can communicate over a local network or the Internet.",
      ]}
      technologies={[
        { name: "PHP", category: "Server-side functionality" },
        { name: "HTML", category: "Frontend" },
        { name: "CSS", category: "Styling" },
        { name: "JavaScript", category: "Interactive behavior" },
        { name: "MySQL", category: "Database management" },
        { name: "Microprocessor integration", category: "Access-control hardware" },
       
      ]}
      features={[
        {
          title: "Manage connected doors",
          description:
            "View individual entrances and their current lock status from the access-management interface.",
        },
        {
          title: "Control lock status",
          description:
            "Use the interface to lock or unlock a connected entrance and refresh its status.",
        },
        {
          title: "Manage authorized chips",
          description:
            "View the registered access chips and their assigned access levels.",
        },
        {
          title: "Separate user and administrator access",
          description:
            "Users submit hardware-control requests through the server, while administrators manage user access.",
        },
      ]}
      screenshots={[
        {
          image: SafeEntranceHomePage,
          caption: "Safe Entrance public homepage",
        },
        {
          image: SafeEntranceDashboard,
          caption: "Dashboard for doors and authorized access chips",
        },
      ]}
    />
  );
}

export default SafeEntrancePage;
