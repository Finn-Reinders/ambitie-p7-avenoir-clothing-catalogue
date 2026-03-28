"use client";
import React from 'react'
import Page from '../Page';
import Navbar from '../Navbar';
import { signIn, signOut } from "next-auth/react";

export default function Login() {
  return (
          <div className="w-screen h-screen">
            <button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
              Sign in with GitHub
            </button>
            <button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
              Sign in with Google
            </button>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
  )
}
