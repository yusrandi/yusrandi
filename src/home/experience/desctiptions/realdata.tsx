import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Realdata() {
  const tasks = [
    {
      text: "Create an application mobile using Flutter, React Native and Has published the application on Appstore, and Playstore",
      keywords: ["Appstore", "Playstore", "Flutter", "React Native"],
    },
    {
      text: "Create an application  with Payment Gateway using Flutter",
      keywords: ["Payment Gateway", "Flutter"],
    },
    {
      text: "Integrate applications using a REST API",
      keywords: ["REST API"],
    },
    {
      text: "Slicing the design from Figma for mobile",
      keywords: ["Figma"],
    },
    {
      text: "Developing a web dashboard for monitoring and data management. using Laravel and Next.JS",
      keywords: ["Laravel", "Next.JS"],
    },
    {
      text: "Developing a Chatbot using RASA Framework and integrate on whatsapp API for handling customer service",
      keywords: ["Chatbot", "RASA Framework", "whatsapp API"],
    },
    {
      text: "Developing a text classification model to categorize review and user feedback data. This model uses machine learning techniques to analyze text and generate appropriate categories or labels.",
      keywords: ["text classification", "machine learning"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer & Mobile Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Sept 2022 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.rasbotsynthetic.co", "_blank")}
          >
            http://realdataid.com/
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
