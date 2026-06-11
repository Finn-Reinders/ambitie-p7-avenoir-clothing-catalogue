"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile({ profile }) {
  const router = useRouter();
  return (
    <Link
      href={`/profile/${profile._id}`}
      className="flex w-30 h-30 flex-col  justify-center items-center rounded-md"
      onClick={() => {
        router.push(`/profile/${profile._id}`);
      }}
      key={profile._id}
    >
      <div className="h-20 w-20">
        <motion.img
        layoutId={profile._id}
          className="w-full h-full aspect-square object-cover rounded-lg"
          src={profile.image}
          alt=""
        />
      </div>
      <h3 className="text-white whitespace-norwrap">{profile.name}</h3>
    </Link>
  );
}
