import React from 'react'
import clientPromise from "@/lib/mongodb";
import Link from 'next/link';

interface Profile {
  _id: string;
  name: string;
  image: string;
  [key: string]: any;
}

export default async function ExploreProfiles() {
  const client = await clientPromise;
  const db = client.db("avenoir-clothing-catalogue");
  const profiles = await db.collection("users").find({}).toArray() as unknown as Profile[];

  return (
    <div className=''>
      {profiles.map(profile => (
        <Link href={`/profile/${profile._id}`} className='flex bg-lime-500 w-fit' key={profile._id}>
          <h3>{profile.name}</h3>
          <div className='h-20'>
          <img className='w-full h-full aspect-square' src={profile.image} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}
