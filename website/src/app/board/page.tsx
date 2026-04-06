import Page from "../../components/Page";
import { motion } from "framer-motion";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Board',
  description: 'Board description'
}

export default function board() {
  return (
    <Page>
      <div className="w-screen h-screen">
      </div>
    </Page>
  );
}
