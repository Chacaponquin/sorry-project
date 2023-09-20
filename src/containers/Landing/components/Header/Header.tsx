import React from "react";
import { LandingSection } from "../../shared/components";
import { Message, Title } from "./components";

export default function Header() {
  return (
    <LandingSection theme="light">
      <Title />
      <Message />
    </LandingSection>
  );
}
