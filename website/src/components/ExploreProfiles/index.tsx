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

  // Convert MongoDB objects to plain objects for Client Components
  const serializedProfiles = profiles.map(profile => ({
    ...profile,
    _id: profile._id.toString(),
  }));

  return (
    <div className=''>
      {serializedProfiles.map(profile => (
        <Profile key={profile._id} profile={profile} />
      ))}
    </div>
  );
}
