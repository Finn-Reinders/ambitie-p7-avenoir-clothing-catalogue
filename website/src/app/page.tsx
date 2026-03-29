import Navbar from "../components/Navbar/index";
import Page from "../components/Page/index";

export default function Home() {
  return (
    <Page>
      <Navbar />
      <div className='w-screen h-screen'>
        <p>Home</p>
      </div>
    </Page>
  );
}
