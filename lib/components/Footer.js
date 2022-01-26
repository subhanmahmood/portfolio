import React from "react";
import Link from "next/link";
import SocialIcons from "lib/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 py-12 text-white md:py-32">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex w-full flex-col items-end space-y-16">
          <div className="flex w-full flex-row space-x-16">
            <div className="flex flex-col space-y-4">
              <p className="text-xl font-semibold">General</p>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/work">
                <a>My Work</a>
              </Link>
              <Link href="https://prismic-io.s3.amazonaws.com/subhan/b6261e48-67fe-4032-9853-d0f47e422883_Subhan+Mahmood+CV.pdf">
                <a>Resume</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xl font-semibold">Other</p>
              <a>Tools</a>
              <Link href="/links">
                <a>Links</a>
              </Link>
              <Link href="/notion">
                <a>Notion Templates</a>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <p>Made by Subhan Mahmood</p>
            <SocialIcons
              containerClasses="hidden"
              iconColor="text-white"
              hoverIconColor="text-stone-100"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
