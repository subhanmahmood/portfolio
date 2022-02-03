import React, { FC } from "react";
const cn = require("classnames");

type TextSizes = { [key: string]: { q: string; a: string } };

type Quote = {
  q: string;
  a: string;
  i: string;
  c: string;
  h: string;
};

const sizes: TextSizes = {
  sm: { q: "prose", a: "prose-sm" },
  md: { q: "prose-md", a: "prose-sm" },
  lg: { q: "prose-lg", a: "prose-md" },
  xl: { q: "prose-xl", a: "prose-lg" },
  "2xl": { q: "prose-2xl", a: "prose-xl" },
};

interface Props {
  textSize: string;
  fontClass: string;
  quote: Quote;
  showAuthor: boolean;
}

const Quote: FC<Props> = ({ textSize, fontClass, quote, showAuthor }) => {
  return (
    <div>
      <p className={cn(sizes[textSize].q, fontClass)}>{quote!.q}</p>
      {showAuthor && (
        <p className={cn("italic text-stone-400", sizes[textSize].a)}>
          - {quote!.a}
        </p>
      )}
    </div>
  );
};

export default Quote;
