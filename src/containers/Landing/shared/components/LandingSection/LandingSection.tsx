import clsx from "clsx";
import React from "react";

export default function LandingSection({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: "dark" | "light";
}) {
  const CLASS = clsx("w-full flex justify-center px-20 esm:px-10", {
    "bg-darkStrong": theme === "dark",
    "bg-white": theme === "light",
  });

  return (
    <section className={CLASS}>
      <div className="max-w-[1000px] w-full flex flex-col">{children}</div>
    </section>
  );
}
