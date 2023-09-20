import React from "react";
import { LandingSection } from "../../shared/components";
import { Github, Twitter } from "@modules/app/modules/icon/components";
import { ExternalLink } from "@modules/app/modules/form/components";
import { LINKS } from "./constants/LINKS";

export default function Footer() {
  return (
    <LandingSection theme="dark">
      <footer className="flex justify-between w-full text-white py-10 items-center gap-5 esm:flex-col">
        <div className="text-xl esm:text-lg">
          <p>Made with ❤️ by Héctor Gómez</p>
        </div>

        <div className="flex gap-x-12 stroke-white">
          <ExternalLink link={LINKS.TWITTER}>
            <Twitter size={30} />
          </ExternalLink>

          <ExternalLink link={LINKS.GITHUB}>
            <Github size={30} />
          </ExternalLink>
        </div>
      </footer>
    </LandingSection>
  );
}
