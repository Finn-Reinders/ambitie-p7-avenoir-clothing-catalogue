"use client";
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function Navbar() {
  const routes = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/login",
      name: "Login",
    },
    {
      url: "/garment",
      name: "Garments",
    },
  ];

  const router = useTransitionRouter();
  return (
    <nav className="">
      <ul className="flex gap-4">
        {routes.map((route, i) => {
          return (
            <li key={`route${i}`}>
              <Link
                href={route.url}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(route.url, {
                    onTransitionReady: pageAnimation,
                  });
                }}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
