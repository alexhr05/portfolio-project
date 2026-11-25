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
        "В наши дни се отбелязва бум в информационните технологии, обработката на данни и използването на изкуствен интелект (AI), които се превръщат в ключови елементи за подобряване на най-различни процеси. Задвижвана от неограничения потенциал на технологията, идеята за приложения, които не само обработват данни, но и автоматизират създаването на AI модели, е важен и иновативен елемент от развитието на софтуерната индустрия.",
        "В приложението може бързо и ефективно да се анализират големи обеми от данни. След това може да се тренира невронна мрежа, която да предсказва резултат или определена стойност въз основа на подадената информация.",
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
    />
  );
}

export default AIModelMakerPage;
