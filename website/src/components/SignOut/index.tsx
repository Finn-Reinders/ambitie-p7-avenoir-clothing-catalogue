"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
    className="bg-red-700 rounded-md p-2 cursor-pointer text-white"
      onClick={() => {
        signOut();
      }}
    >Sign Out</button>
  );
}
