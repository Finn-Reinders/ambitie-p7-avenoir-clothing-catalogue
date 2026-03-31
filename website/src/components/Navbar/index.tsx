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
        scale: 1,
        offset: 0,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        transform: 'translate(0)',
        opacity: 1,
      },
      {
        scale: 0.8,
        transform: 'translate(0)',
        offset: 0.5,
        opacity: 1,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)"
      },
      {
        scale: 0.8,
        transform : 'translate(100vw, 100vh)',
        easing: 'ease-out',
        opacity: 0,
        offset: 1
      },
    ],
    {
      duration: 2000,
      // easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    } as unknown as KeyframeAnimationOptions,
  );

  document.documentElement.animate(
    [
      {
        scale: 0.8,
        transform: 'translate(-100vw, -100vh)',
        opacity: 0,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        offset: 0,
      },
      {
        scale: 0.8,
        transform: 'translate(0)',
        opacity: 1,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        offset: 0.5,
      },
      {
        scale: 1,
        transform: 'translate(0)',
        opacity: 1,
        offset: 1,
      },
    ],
    {
      duration: 2000,
      // easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    } as unknown as KeyframeAnimationOptions,
  );
};
