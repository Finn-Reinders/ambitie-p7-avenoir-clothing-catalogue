"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Profile({ profile }) {
  return (
    <Link
      href={`/profile/${profile._id}`}
      className="flex bg-lime-500 w-fit"
      key={profile._id}
    >
      <h3>{profile.name}</h3>
      <div className="h-20">
        <motion.img
        layoutId={profile._id}
          className="w-full h-full aspect-square"
          src={profile.image}
          alt=""
        />
      </div>
    </Link>
  );
}
