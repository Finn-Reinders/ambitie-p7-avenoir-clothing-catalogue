import GarmentSection from "@/components/GarmentSection";
import PageTransition from "@/components/Transition";
import Head from "next/head";

export default function Home() {
  return (
    <PageTransition>
      <div className='h-screen w-screen'>Test</div>
      {/* <GarmentSection /> */}
    </PageTransition>
  );
}
