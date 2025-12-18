import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import { techStack } from "#constants";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <p>Window Controls</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@sushmitha % </span>{" "}
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className="flex items-start gap-2"
            >
              <Check className="check" size={20} />

              <div>
                <h3 className="font-semibold">{category}</h3>
                <p>
                  {items.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i < items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p className="flex items-center gap-1">
            <Check size={20} />
            3 of 3 stacks loaded successfully (100%)
          </p>

          <p className="text-black flex items-center gap-1">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
