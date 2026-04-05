"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Route {
  url: string;
  name: string;
}

export default function Navbar() {
  const routes: Route[] = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/garment",
      name: "Garments",
    },
    {
      url: "/profile",
      name: "Profile",
    },
    {
      url: "/board",
      name: "My Board",
    },
  ];

  const router = useTransitionRouter();
  const pathname = usePathname();
  return (
    <nav className="bg-lime-500 fixed top-0 right-0">
      <ul className="flex gap-4">
        {routes.map((route, i) => {
          const isActive = pathname === route.url;
          return (
            <li key={`route${i}`}>
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
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
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
