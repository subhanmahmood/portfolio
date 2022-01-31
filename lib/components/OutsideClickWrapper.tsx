import React, { useRef, useEffect } from "react";
const cn = require("classnames");

type Props = {
  children: React.ReactNode;
  onOutsideClick: () => void;
  classNames?: string;
};

const OutsideClickWrapper: React.FC<Props> = ({
  children,
  onOutsideClick,
  classNames,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={cn(classNames)}>
      {children}
    </div>
  );
};

export default OutsideClickWrapper;
