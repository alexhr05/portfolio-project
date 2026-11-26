import React from "react";
import AIModelMaker from "../Images/AIModelMaker.PNG";
import AIModelMakerModelCharacteristics from "../Images/AIModelMakerModelCharacteristics.PNG";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";


function AIModelMakerPage() {
  return (
    <ProjectDetailsLayout
      title="AI Model Maker"
      heroImage={AIModelMaker}
      achievement="НОИТ participation - 2024"
      sourceCodeUrl="https://github.com/MihailDimitrov1235/ai-model-maker"
      overview={[
        "Today, we are witnessing a boom in information technology, data processing, and the use of artificial intelligence (AI), which are becoming key elements in improving a wide variety of processes. Driven by the unlimited potential of technology, the idea of applications that not only process data but also automate the creation of AI models is an important and innovative element in the development of the software industry.",
        "The application can quickly and efficiently analyze large volumes of data. A neural network can then be trained to predict a result or a specific value based on the input information provided. The application is designed to be user-friendly, allowing users to easily navigate through the different functionalities and features. It provides a seamless experience for users to upload datasets, train models, and evaluate predictions.",
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
        "November 2023 - March 2024",
      ]}
      duration={["5 months"]}

    />
  );
}

export default AIModelMakerPage;
