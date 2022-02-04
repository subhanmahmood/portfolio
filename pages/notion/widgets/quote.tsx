import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
const cn = require("classnames");
import MainLayout from "lib/components/MainLayout";
import Quote from "lib/components/Quote";

const initialValues = {
  q: "",
  a: "",
  i: "",
  c: "",
  h: "",
};

const QuotePage: NextPage = () => {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote>(initialValues);

  useEffect(() => {
    console.log(router.query);
    const api_url = `https://zenquotes.io/api/${router.query.quoteType}/${process.env.NEXT_PUBLIC_ZENQUOTES_API_KEY}`;
    const fetchQuotes = async () => {
      const res = await axios.get(api_url);
      setQuote(res.data[0]);
    };
    fetchQuotes();
  }, []);

  return (
    <Quote
      quote={quote}
      showAuthor={router.query.showAuthor === "true"}
      fontClass={router.query.fontClass!.toString()}
      textSize={router.query.textSize!.toString()}
    />
  );
};

export default QuotePage;
