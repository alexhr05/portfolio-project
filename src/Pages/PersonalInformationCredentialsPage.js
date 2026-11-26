import React from "react";
import PersonalInformationCredentials from "../Images/PersonalInformationCredentialsLogoHomePage.jpg";
import PersonalInformationCredentialsLogoEditingPage from "../Images/PersonalInformationCredentialsLogoEditingPage.jpg";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function PersonalInformationCredentialsPage() {
  return (
    <ProjectDetailsLayout
      title="Personal Information App"
      heroImage={PersonalInformationCredentials}
      heroImageOrientation="portrait"
      sourceCodeUrl="https://github.com/alexhr05/personalI-information-app"
      overview={[
        "In the mobile app, users can view the location where they registered, their username or email address, and the password for that location. Users can edit the existing information, and the changes will take effect after they are saved. In the Settings section, you can change your PIN, and you can also choose how to log in to the app—with a PIN, a fingerprint, both, or neither of these. Another feature users can use is to delete the entry or information for the location where they registered. The entire data stream is encrypted in a secure location on the phone, and no one has access to it or can decrypt it. Your data is safe, so there’s no need to worry.",
        "The app is designed to protect a person's personal data by storing it directly on their phone. It allows users to record all their login information for various websites or apps in an easy and quick way.",
      ]}
      technologies={[
        { name: "Java", category: "Android app" },
        { name: "Encrypted local storage", category: "Data security" },
      ]}
      features={[
        {
          title: "Save login credentials",
          description:
            "Store a website or app name together with its username or email and password.",
        },
        {
          title: "Edit or delete saved entries",
          description:
            "Update existing account information or remove an entry when it is no longer needed.",
        },
        {
          title: "Choose an app unlock method",
          description:
            "Use a PIN, fingerprint, both, or disable these unlock options.",
        },
        {
          title: "Keep credentials on the device",
          description:
            "The app stores the user's data locally in encrypted storage.",
        },
      ]}
      screenshots={[
        {
          image: PersonalInformationCredentials,
          caption: "Home screen",
          orientation: "portrait",
        },
        {
          image: PersonalInformationCredentialsLogoEditingPage,
          caption: "Credential editing screen",
          orientation: "portrait",
        },
      ]}
      dateRange="May 2023 - August 2023"
      duration="3 months"
    />
  );
}

export default PersonalInformationCredentialsPage;
