import clsx from "clsx";
import React from "react";

export default function SectionHeader({
  text,
  theme,
}: {
  text: string;
  theme: "light" | "dark";
}) {
  const CLASS = clsx("mb-8 flex esm:text-center", {
    "text-white": theme === "dark",
    "text-black": theme === "light",
  });

  const TEXT_CLASS = clsx(
    "text-4xl font-fontBold border-b-2 pr-10 esm:pr-0 pb-3 w-max esm:text-3xl whitespace-normal flex",
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
