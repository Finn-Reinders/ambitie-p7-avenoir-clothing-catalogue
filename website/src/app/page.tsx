import React from "react";
import Navbar from "../components/Navbar/index";
import Page from "../components/Page/index";

export default function Home() {
  return (
    <Page>
      <Navbar />
      <div className="h-screen w-screen">Home</div>
    </Page>
  );
}
