import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
const cn = require("classnames");
import MainLayout from "lib/components/MainLayout";
import Quote from "lib/components/Quote";
import { toast } from "react-toastify";

const initialValues = {
  q: "",
  a: "",
  i: "",
  c: "",
  h: "",
};

const Quotes: NextPage = () => {
  const [quote, setQuote] = useState<Quote>(initialValues);
  const [textSize, setTextSize] = useState<string>("sm");
  const [fontClass, setFontClass] = useState<string>("font-outfit");
  const [showAuthor, setShowAuthor] = useState<boolean>(true);
  const [quoteType, setQuoteType] = useState<string>("today");

  let BASE_URL = "";
  if (process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:3000/notion/widgets/quote";
  } else {
    BASE_URL = "https://subhan.io/notion/widgets/quote";
  }

  useEffect(() => {
    const api_url = `https://zenquotes.io/api/${quoteType}/${process.env.NEXT_PUBLIC_ZENQUOTES_API_KEY}`;
    const fetchQuotes = async () => {
      const res = await axios.get(api_url);
      setQuote(res.data[0]);
    };
    fetchQuotes();
  }, [quoteType]);

  const getURL = (): string => {
    const widgetURL = new URL(BASE_URL);
    widgetURL.searchParams.set("textSize", textSize);
    widgetURL.searchParams.set("fontClass", fontClass);
    widgetURL.searchParams.set("showAuthor", showAuthor.toString());
    widgetURL.searchParams.set("quoteType", quoteType);
    try {
      navigator.clipboard.writeText(widgetURL.href);
      toast("Copied to clipboard");
    } catch (err) {
      console.log(err);
      toast("Couldn't copy to clipboard");
    }
    return widgetURL.href;
  };

  return (
    <MainLayout>
      <input className="hidden" name="copyText" />
      <div className="mx-auto max-w-screen-xl py-12 px-4 md:py-24">
        <h1 className="mb-4 text-5xl font-semibold">Notion Widget Generator</h1>

        <div className="flex flex-col-reverse md:flex-row md:space-x-4">
          <div className=" w-full md:w-10/12">
            <div className="mb-8 mt-8 flex w-full rounded-lg border border-stone-100 p-6 shadow-md md:mt-0">
              <Quote
                fontClass={fontClass}
                quote={quote}
                textSize={textSize}
                showAuthor={showAuthor}
              />
            </div>
          </div>
          <div className="flex w-full flex-col space-y-4 md:w-2/12">
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold uppercase text-zinc-500">
                TEXT SIZE
              </label>
              <select
                className="m-0 block rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-stone-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTextSize(e.target.value)
                }
              >
                <option disabled>Text Size</option>
                <option value="md">Normal</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
                <option value="2xl">Extra Extra Large</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold uppercase text-zinc-500">
                Font Style
              </label>
              <select
                className="m-0 block rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-stone-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFontClass(e.target.value)
                }
              >
                <option disabled>Font Type</option>
                <option value="font-outfit">Sans-Serif</option>
                <option value="font-code" className="font-code">
                  Monospace
                </option>
                <option value="font-serif wider" className="font-serif">
                  Serif
                </option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold uppercase text-zinc-500">
                Quote Type
              </label>
              <select
                className="m-0 block rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-stone-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setQuoteType(e.target.value)
                }
              >
                <option disabled>Quote Type</option>
                <option value="today">Daily</option>
                <option value="random">Random</option>
              </select>
            </div>
            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="author"
                  aria-describedby="author"
                  type="checkbox"
                  checked={showAuthor}
                  onChange={(e) => setShowAuthor(e.target.checked)}
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  required
                />
              </div>
              <div className="ml-3">
                <label htmlFor="author" className="text-gray-900">
                  Show Author
                </label>
              </div>
            </div>
            <button
              className="rounded bg-stone-800 px-4 py-2 font-medium text-white"
              onClick={getURL}
            >
              Get Link
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Quotes;
