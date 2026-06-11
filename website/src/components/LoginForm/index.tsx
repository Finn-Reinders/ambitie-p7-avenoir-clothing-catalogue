"use client";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className=" h-screen w-screen py-4 px-5">
      <h1 className=" text-7xl">Welcome Back</h1>
      <h2 className=" text-xl">Build your online closet or get inspiration</h2>
      <form action="" className="flex flex-col w-60 gap-4 mt-4">
        <input
          required
          type="email"
          className="w-60 border-b-2 border-black/80"
          placeholder="Email"
        />
        <input
          required
          size={5}
          type="password"
          placeholder="Password"
          className="w-60 border-b-2 border-black/80"
        />
        <button
          type="submit"
          className="w-60 h-12 text-white rounded-lg bg-[#610D1C] shadow-md"
          onSubmit={() => {
            (signIn(), { callbackUrl: "/profile" });
          }}
        >
          Continue
        </button>
      </form>
      <span className="w-80 flex justify-center bg-black/80 h-0.5 my-8 items-center text-black/80">
        <span className="bg-white px-2">OR</span>
      </span>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 text-lg bg-linear-60 from-[#FF4E6B] to-[#FF0436] text-white rounded-lg whitespace-nowrap cursor-pointer"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
        >
          Sign in with Apple
        </button>
        <button
          className="px-4 py-2 text-lg bg-[#DDDDDD] text-black rounded-lg whitespace-nowrap cursor-pointer"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
        >
          Sign in with Google
        </button>
        <button
          className="px-4 py-2 text-lg bg-[#333333] text-white rounded-lg whitespace-nowrap cursor-pointer"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
