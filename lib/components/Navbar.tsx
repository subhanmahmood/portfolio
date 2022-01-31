import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HomeIcon,
  ExternalLinkIcon,
  MenuIcon,
  BookOpenIcon,
  XIcon,
} from "@heroicons/react/outline";
import NavButton from "./NavButton";
import { useAuth } from "lib/contexts/AuthContext";
import { useRouter } from "next/router";
import SocialIcons from "./SocialIcons";

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const IconClasses = "h-7 md:hidden";

  const logoutAndRedirect = async () => {
    try {
      logout();
      router.push("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  const NavItems = [
    {
      href: "/",
      icon: <HomeIcon className={IconClasses} />,
      text: "Home",
    },
    {
      href: "/work",
      icon: <BookOpenIcon className={IconClasses} />,
      text: "Work",
    },
    {
      href: "/links",
      icon: <ExternalLinkIcon className={IconClasses} />,
      text: "Links",
    },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-40 w-full md:relative md:inset-x-auto md:bottom-auto">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-row items-center justify-between px-4 py-6 md:max-w-screen-xl md:p-0">
          <SocialIcons
            containerClasses="hidden md:flex"
            iconColor="text-stone-700"
            hoverIconColor="text-stone-400"
          />
          <div className="relative flex h-16 w-full flex-row items-center justify-around rounded-lg border border-gray-200 bg-white font-medium text-gray-900 shadow-md md:h-auto md:max-w-max md:justify-items-start md:space-x-12 md:border-none md:bg-transparent md:py-4 md:shadow-none">
            {NavItems.map((button, i) => {
              return (
                <NavButton
                  key={i}
                  icon={button.icon}
                  link={button.href}
                  text={button.text}
                />
              );
            })}
            <div className="hidden md:block">
              {currentUser && (
                <button
                  onClick={() => logoutAndRedirect()}
                  className="rounded border border-stone-200 px-4 py-2"
                >
                  Logout
                </button>
              )}
            </div>

            <div
              className="flex h-full flex-col items-center justify-end space-y-1 md:hidden md:justify-center"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XIcon className={IconClasses} />
              ) : (
                <MenuIcon className={IconClasses} />
              )}
              <a className="text-xs transition-all hover:text-gray-500 md:text-sm">
                {open ? "Close" : "Menu"}
              </a>
              <div className="h-1 w-full justify-self-end rounded-t-md bg-white md:hidden"></div>
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  key="navDrawer"
                  className="absolute mt-64 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition md:hidden"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                >
                  <ul className="ml-0 flex flex-col gap-2">
                    <a
                      href="#work"
                      className="font-display text-base font-medium text-gray-700 transition hover:text-gray-400"
                    >
                      Work
                    </a>
                    <a
                      href="mailto:contact@subhan.io"
                      className="font-display text-base font-medium text-gray-700 transition hover:text-gray-400"
                    >
                      Contact
                    </a>
                    <div className="flex md:hidden">
                      {currentUser && (
                        <button
                          onClick={() => logoutAndRedirect()}
                          className="rounded border border-stone-200 px-4 py-2"
                        >
                          Logout
                        </button>
                      )}
                    </div>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
