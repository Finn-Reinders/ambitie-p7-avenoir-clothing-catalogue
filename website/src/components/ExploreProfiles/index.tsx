import React from 'react'
import clientPromise from "@/lib/mongodb";
import Link from 'next/link';
import Profile from '../Profile';

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

  const serializedProfiles = profiles.map(profile => ({
    ...profile,
    _id: profile._id.toString(),
  }));

  return (
    <>
    <h2 className='text-white pb-4 mt-8'>Suggested Profiles</h2>
    <div className='flex gap-4'>
      {serializedProfiles.map(profile => (
        <Profile key={profile._id} profile={profile} />
      ))}
    </div>
      </>
  );
}
