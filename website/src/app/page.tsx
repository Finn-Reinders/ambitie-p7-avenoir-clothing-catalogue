import Navbar from "../components/Navbar/index";
import Page from "../components/Page/index";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Page>
      <Navbar />
      <div className='w-screen h-screen'>
        <p>Home</p>
      </div>
    </Page>
  );
}
