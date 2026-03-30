import React from "react";
import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "../../components/Login";
import SignOut from "../../components/SignOut";

export default async function page() {
  const session = await getServerSession(authOptions);

  return (
    <Page>
      <div className="w-screen h-screen">
        {!session ? (
          <Login />
        ) : (
          <div>
            <p>{session.user?.name}</p>
            {session.user?.image && <img src={session.user.image} alt="Profile" />}
            <SignOut />
          </div>
        )}
        <p>Profile</p>
      </div>
    </Page>
  );
}
