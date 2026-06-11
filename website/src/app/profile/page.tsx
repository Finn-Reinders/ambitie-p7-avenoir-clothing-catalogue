import Page from "../../components/Page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "../../components/Login";
import SignOut from "../../components/SignOut";
import type { Metadata } from 'next'
import ExploreProfiles from "@/components/ExploreProfiles";
 
export const metadata: Metadata = {
  title: 'Avenoir - Profile',
  description: 'Profile description'
}
export default async function page() {
  const session = await getServerSession(authOptions);

  return (
    <Page>
      <div className="w-screen h-screen">
        {!session ? (
          <Login />
        ) : (
          <div className="flex flex-col">
            <div className="flex bg-black gap-4 rounded-lg w-fit px-4 py-4">
            {session.user?.image && <img className="rounded-full border-3 w-20 h-20 border-white" src={session.user.image} alt="Profile" />}
            <div>

            <p className="text-white">Welcome {session.user?.name}</p>
            <SignOut />
            </div>
              </div>
            <ExploreProfiles />
          </div>
        )}
      </div>
    </Page>
  );
}
