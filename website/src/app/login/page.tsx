import React from "react";
import Navbar from "../../components/Navbar/index";
import Page from "../../components/Page/index";
import Link from 'next/link';

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <Page>
      <Navbar />
      <div className="w-screen h-screen">Login Page</div>
    </Page>
  );
}
