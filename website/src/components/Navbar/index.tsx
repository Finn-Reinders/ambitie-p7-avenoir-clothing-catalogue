"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

interface Route {
  url: string;
  name: string;
  image: string;
}

export default function Navbar() {
  const routes: Route[] = [
    {
      url: "/",
      name: "Home",
      image: "/placeholder-images/blue-hoodie",
    },
    {
      url: "/explore",
      name: "Explore",
      image: "",
    },
    {
      url: "/profile",
      name: "Profile",
      image: "",
    },
    {
      url: "/board",
      name: "My Board",
      image: "",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [routeHovered, setRouteHovered] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [navOpen]);

  const router = useTransitionRouter();
  const pathname = usePathname();

  const variants = {
    initial: { clipPath: "inset(0% 25% 100% 25%)" },
    enter: {
      clipPath: "inset(0%)",
      transition: { duration: 0.8, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
    exit: {
      clipPath: "inset(100% 25% 0% 25%)",
      transition: { duration: 0.8, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
  };
  const [buttonDelay, setButtonDelay] = useState(null);
  return (
    <AnimatePresence>
      <button
        className="fixed w-20 h-20 bg-lime-500 top-0 right-0 z-101"
        onClick={() => {
          if (!buttonDelay) {
            setNavOpen(!navOpen);
            setButtonDelay(true);
            setTimeout(() => {
              setButtonDelay(false);
            }, 700);
          }
        }}
      >
        m
      </button>
      {navOpen && (
        <motion.nav
          key="fullnav"
          className="fixed top-0 left-0 w-screen h-screen bg-gray-300 z-100"
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <ul className="flex flex-col font-['Satoshi-Italic'] justify-center h-full gap-4 text-3xl w-fit mx-auto">
            {routes.map((route, i) => {
              const isActive = pathname === route.url;
              return (
                <motion.li
                  className="w-fit relative"
                  style={
                    isActive
                      ? {
                          marginLeft: (window.innerWidth / routes.length) * i, fontFamily: "Satoshi-MediumItalic", 
                        }
                      : { marginLeft: (window.innerWidth / routes.length) * i, opacity: .7 }
                  }
                  key={`route${i}`}
                >
                  <Link
                    href={route.url}
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                        router.push(route.url, {
                          onTransitionReady: pageAnimation,
                        });
                      }
                    }}
                  >
                    <p>
                      {route.name}
                      <span className="text-xs absolute right-0 top-0 translate-[-50%]">
                        {i + 1}
                      </span>
                    </p>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

const pageAnimation = (): void => {
  let randomNumber: number =
    Math.random() < 0.5 ? Math.random() * -112 : Math.random() * 112;
  let randomString: string = Math.random() < 0.5 ? "x" : "y";
  let locationX = randomString === "x" ? `${randomNumber}vw` : "112vw";
  let locationY = randomString === "y" ? `${randomNumber}vh` : "112vh";
  let locationXNeg = randomString === "x" ? `${-randomNumber}vw` : "-112vw";
  let locationYNeg = randomString === "y" ? `${-randomNumber}vh` : "-112vh";

  console.log(randomString);
  document.documentElement.animate(
    [
      {
        scale: 1,
        offset: 0,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        transform: "translate(0)",
        opacity: 1,
      },
      {
        scale: 0.85,
        transform: "translate(0)",
        offset: 0.5,
        opacity: 1,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      {
        scale: 0.85,
        transform: `translate(${locationX}, ${locationY})`,
        easing: "ease-out",
        opacity: 1,
        offset: 1,
      },
    ],
    {
      duration: 2000,
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    } as unknown as KeyframeAnimationOptions,
  );

  document.documentElement.animate(
    [
      {
        scale: 0.85,
        transform: `translate(${locationXNeg}, ${locationYNeg})`,
        opacity: 1,
        offset: 0,
      },
      {
        scale: 0.85,
        transform: `translate(${locationXNeg}, ${locationYNeg})`,
        opacity: 1,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        offset: 0.33,
      },
      {
        scale: 0.85,
        transform: "translate(0)",
        opacity: 1,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        offset: 0.66,
      },
      {
        scale: 1,
        transform: "translate(0)",
        opacity: 1,
        offset: 1,
      },
    ],
    {
      duration: 3000,
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    } as unknown as KeyframeAnimationOptions,
  );
};
