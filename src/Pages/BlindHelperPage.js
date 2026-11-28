import React from "react";
import BlindHelperLogo from "../Images/logoBlindHelper.jpg";
import BlindHelperScreenshot from "../Images/blindHelperScreenShot.jpg";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function BlindHelperPage() {
  return (
     <ProjectDetailsLayout
      title="Blind Helper"
      heroImage={BlindHelperLogo}
      heroImageOrientation="portrait"
      achievement="НОИТ third place - 2023"
      sourceCodeUrl="https://github.com/alexhr05/blind-helper"
      overview={[
        "My classmate and I worked on this project together, and with it we advanced to the national round of the NOIT in Shumen in 2023, where we also became award winners at the competition. We created an app that uses a combination of voice commands and feedback to guide users to the location of specific objects, such as a car or a chair.",
        "When a person downloads the app and starts using it, there are two options. One, which is activated by saying “navigate me,” is to safely guide you along the route—that is, to tell you what’s ahead—and the other is to help you find a location that the user has requested. When using this feature, the user must mention the name of the location they are looking for.",
        "After confirming the object being searched for, the app takes a photo. The photo is converted into bytes, and a special algorithm recognizes the object in the photo and returns, as a response, the name of the object and its coordinates in the photo. If the searched-for object is among the recognized objects, its coordinates are processed and, together with data from the phone’s accelerometer, a combination of horizontal and vertical orientation data for the location is returned to the app. The app receives this response and, using voice commands, attempts to guide the user to the object. A new photo is then taken, and the process is repeated. The directions are brief and clear: “forward,” “left,” “right,” and others.",
        "The program stops searching for the specified object when the user finds it and tells the search to stop. The user can say “stop” or “stop it,” and the program will stop searching, and the app will begin listening for new commands. When we want to exit the program and have it stop, we must say “exit the program.” The program contains predefined data and parameters for a specific number of objects. This list will be continuously expanded as the server-side program is improved.",
      ]}
      technologies={[
        { name: "Java", category: "Android application" },
        { name: "Object recognition", category: "Computer vision" },
        { name: "Voice commands", category: "Hands-free control" },
        { name: "Accelerometer", category: "Device sensors" },
        { name: "Camera", category: "Image input" },
      ]}
      features={[
        {
          title: "Voice-controlled navigation",
          description:
            "Start navigation and object searches with spoken commands.",
        },
        {
          title: "Find requested objects",
          description:
            "Capture an image and use object recognition to locate the item the user requested.",
        },
        {
          title: "Spoken directional guidance",
          description:
            "Receive short directions such as forward, left, or right based on the object's position and phone sensor data.",
        },
        {
          title: "Control or stop a search by voice",
          description:
            "Stop the current search or exit the program with voice commands.",
        },
      ]}
      screenshots={[
        {
          image: BlindHelperScreenshot,
          caption: "Blind Helper camera view during object detection",
        },
      ]}
      dateRange="November 2022 - April 2023"
      duration="5 months"
    />
  );
}

export default BlindHelperPage;
