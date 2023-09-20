import React from "react";
import { LandingSection, SectionHeader } from "../../shared/components";
import { REASONS } from "./constants/REASONS";
import { Reason } from "./components";

export default function Reasons() {
  return (
    <LandingSection theme="dark">
      <div className="py-10">
        <SectionHeader text="Razones para perdonarlo" theme="dark" />

        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 flex-wrap w-full">
          {REASONS.map((r, index) => (
            <Reason
              key={index}
              alt={r.image.alt}
              description={r.description}
              image={r.image.image}
              title={r.title}
            />
          ))}
        </div>
      </div>
    </LandingSection>
  );
}
