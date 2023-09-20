import React from "react";

export default function ExternalLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  );
}
