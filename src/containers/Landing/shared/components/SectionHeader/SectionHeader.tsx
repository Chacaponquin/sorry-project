import clsx from "clsx";
import React from "react";

export default function SectionHeader({
  text,
  theme,
}: {
  text: string;
  theme: "light" | "dark";
}) {
  const CLASS = clsx("mb-8", {
    "text-white": theme === "dark",
    "text-black": theme === "light",
  });

  const TEXT_CLASS = clsx(
    "text-4xl font-fontBold border-b-2 pr-10 pb-3 w-max esm:text-3xl whitespace-normal",
    {
      "border-grayExtraLight": theme === "dark",
      "border-grayLight": theme == "light",
    }
  );

  return (
    <div className={CLASS}>
      <h1 className={TEXT_CLASS}>{text}</h1>
    </div>
  );
}
