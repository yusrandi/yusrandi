import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Creating Admin Web Dashboard Using the Laravel Framework",
      keywords: ["Laravel"],
    },
    {
      text: "Developing and maintenance RESTfull APIs with Laravel Framework and integrate to mobile app",
      keywords: ["RESTfull APIs", "Laravel"],
    },
    {
      text: "Slicing the design from Figma for mobile",
      keywords: ["Figma"],
    },
    {
      text: "Building Mobile Applications Using the Flutter Framework",
      keywords: ["Mobile Applications", "Flutter Framework"],
    },
    {
      text: "The application has been released on the Play Store.",
      keywords: ["Play Store"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mobile & Web Developer <span className="text-AAsecondary">@freelancer</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2022 - Mar 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://reskysadelmotor.com", "_blank")}
          >
            https://reskysadelmotor.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
