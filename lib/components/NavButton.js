import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

function NavButton({ icon, link, text }) {
  const router = useRouter();
  const active = router.pathname === link;
  return (
    <Link href={link}>
      <div className="flex h-full cursor-pointer flex-col items-center justify-end space-y-1 md:justify-center">
        {icon}
        <p className="text-xs hover:text-gray-500 md:text-sm">{text}</p>
        <div
          className={cn("h-1 w-full justify-self-end rounded-t-md md:hidden", {
            "bg-gray-700 ": active,
          })}
        ></div>
      </div>
    </Link>
  );
}

export default NavButton;
