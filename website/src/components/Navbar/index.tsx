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
    <nav className="bg-lime-500 fixed top-0">
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
    } as unknown as KeyframeAnimationOptions,
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
    } as unknown as KeyframeAnimationOptions,
  );
};
