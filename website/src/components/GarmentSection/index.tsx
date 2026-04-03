"use client";

import React, { useState, useEffect } from "react";
import Garment from "./Garment/index";
import { Garment as GarmentType } from "../../modules/garmentsData";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import Modal from "./Modal";
import ModalContent from "./Modal/ModalContent";
import Footer from "../Footer";
interface GarmentSectionProps {
  garments?: GarmentType[];
}

export default function GarmentSection({ garments = [] }: GarmentSectionProps) {
  const masonry: boolean = true;
  const [columns, setColumns] = useState<number>(4);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  useEffect(() => {
    const columns = Math.max(1, Math.floor(window.innerWidth / (1080 / 3)));
    setColumns(columns);

    const handleResize = () => {
      const newColumns = Math.max(
        1,
        Math.floor(window.innerWidth / (1080 / 3)),
      );
      setColumns(newColumns);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [modalGarment, setModalGarment] = React.useState<GarmentType | null>(
    null,
  );
  const [modalGarmentIndex, setModalGarmentIndex] = React.useState(null);

  const [garmentHeight, setGarmentHeight] = React.useState(null);
  return (
    <>
      <motion.main
        className="flex justify-center w-full gap-1.5"
        animate={{ x: modalOpened ? "50vw" : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {[...Array(columns)].map((_, columnIndex) => {
          return (
            <div
              key={`column-${columnIndex}`}
              className="flex flex-col w-75 gap-1.5"
            >
              {garments.map((garment, garmentIndex) => {
                return (
                  <AnimatePresence mode="wait" key={garment._id}>
                    {garmentIndex % columns === columnIndex &&
                    modalGarment !== garment ? (
                      <Garment
                        setModalGarmentIndex={setModalGarmentIndex}
                        garmentActive={false}
                        garmentIndex={garmentIndex}
                        setModalGarment={setModalGarment}
                        garment={garment}
                        delay={0}
                        modalGarment={modalGarment}
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        setGarmentHeight={setGarmentHeight}
                      />
                    ) : garmentIndex % columns === columnIndex &&
                      modalGarment === garment ? (
                      <div
                        className="h-100 w-full"
                        style={{ height: `${garmentHeight}px` }}
                      ></div>
                    ) : null}
                  </AnimatePresence>
                );
              })}
            </div>
          );
        })}
      </motion.main>
      <Footer />
      <Modal 
        open={modalOpened} 
        onClose={() => {
          setModalOpened(false);
          setModalGarment(null);
        }}
      >
        <ModalContent
          modalGarmentIndex={modalGarmentIndex}
          openedGarment={modalGarment}
          garments={garments}
        />
      </Modal>
    </>
  );
}
