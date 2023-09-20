import React from "react";
import { Footer, Header, Message, Reasons } from "./components";

export default function Landing() {
  return (
    <main className="w-full flex flex-col gap-y-10">
      <Header />
      <Reasons />
      <Message />
      <Footer />
    </main>
  );
}
