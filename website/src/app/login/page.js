import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import PageTransition from "@/components/Page";
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
