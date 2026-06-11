import Navbar from "../components/Navbar/index";
import Page from "../components/Page/index";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { loadGarments } from "@/modules/garmentsData";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const garments = await loadGarments();

  return (
    <Page>
      <div className='w-screen'>
        <h1 className="text-white text-7xl p-8">Welcome {session.user.name}</h1>
  <h2 className="text-4xl text-white/70">explore your todays top picks</h2>
<div className="grid grid-cols-3 gap-4 w-[50%] p-8">
  {garments.map((garment) => (
    <div key={garment._id} className="aspect-square">
      <img
        className="w-full h-full object-cover rounded-md"
        src={garment.image.src}
        alt={garment.image.alt}
      />
    </div>
  ))}
</div>
      </div>
    </Page>
  );
}
