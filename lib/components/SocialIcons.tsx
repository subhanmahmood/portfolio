import React from "react";
import Link from "next/link";
const cn = require("classnames");
import {
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

type Props = {
  containerClasses?: string;
  iconColor?: string;
  hoverIconColor?: string;
};

const SocialIcons: React.FC<Props> = ({
  containerClasses,
  iconColor,
  hoverIconColor,
}) => {
  const iconClasses = cn(
    "h-7 cursor-pointer",
    iconColor,
    `hover:${hoverIconColor}`
  );
  return (
    <div
      className={cn("flex flex-row items-center space-x-12", containerClasses)}
    >
      <Link href="https://twitter.com/subhanmahmoood">
        <FaTwitter className={iconClasses} />
      </Link>
      <Link href="https://instagram.com/subhan.mahmoood">
        <FaInstagram className={iconClasses} />
      </Link>
      <Link href="https://linkedin.com/in/subhanmahmood">
        <FaLinkedinIn className={iconClasses} />
      </Link>
      <Link href="https://www.tiktok.com/@subhan.mahmood?">
        <FaTiktok className={iconClasses} />
      </Link>
      <Link href="https://github.com/subhanmahmood">
        <FaGithub className={iconClasses} />
      </Link>
    </div>
  );
};

export default SocialIcons;
