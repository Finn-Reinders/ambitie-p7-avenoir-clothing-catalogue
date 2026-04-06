"use client";
import { signIn } from "next-auth/react";
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Login() {
  const container = useRef(null);
  return (
          <div className="w-screen h-screen flex">
            <div className=' h-screen w-[40vw] py-4 px-5 bg-linear-to-br from-[#4E535A] to-[#222427]'>
            <h1 className='text-white text-5xl'>Login</h1>
            <form action="" className="flex flex-col w-60">
              <input required type="email" className='text-white border border-white' />
              <input required size={5} type="password" className='text-white border border-white' />
              <input type="submit" onSubmit={() => {signIn(), {callbackUrl: '/profile'}}} />
            </form>
            <button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
              Sign in with GitHub
            </button>
            <button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
              Sign in with Google
            </button>
            </div>
            <div className='w-[60vw] h-screen' ref={container}>
              <motion.img src='/images/pink-buttonup.webp' className='w-70' alt='alt' dragElastic={true} dragTransition={{bounceDamping: 10, bounceStiffness: 100}} drag dragConstraints={container} />
            </div>
          </div>
  )
}
