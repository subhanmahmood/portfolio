import { useState } from "react";
import * as Prismic from "@prismicio/client";
import Client from "utils/prismicHelpers";
import {
  AcademicCapIcon,
  CalculatorIcon,
  ChartSquareBarIcon,
  ClipboardListIcon,
  FolderIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import Head from "next/head";

function CTAButton() {
  return (
    <a
      href="#templates"
      className="max-w-max rounded bg-black px-6 py-4 text-white transition-all hover:-translate-y-2 hover:shadow-xl"
    >
      Get me organised
    </a>
  );
}

function Question({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex cursor-pointer flex-col space-y-2 py-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="text-xl text-stone-700">{data.question}</p>
      {isOpen && <p className="text-lg text-stone-500">{data.answer}</p>}
    </div>
  );
}

function TemplateCard({ data }) {
  if (data.live) {
    return (
      <div className="flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-stone-200 transition-all hover:shadow-md">
        <div
          className="flex h-64 flex-col items-end bg-cover"
          style={{ backgroundImage: `url(${data.cover_image})` }}
        >
          {data.pro ? (
            <span className="mt-2 mr-2 rounded bg-amber-400 bg-opacity-80 px-2 py-1 font-semibold text-amber-900">
              PRO
            </span>
          ) : (
            <span className="mt-2 mr-2 rounded bg-stone-400 bg-opacity-80 px-2 py-1 font-semibold text-stone-100">
              FREE
            </span>
          )}
        </div>
        <div className="flex flex-col items-start justify-between space-x-1 space-y-4 p-4 lg:flex-row lg:space-y-0">
          <div className="flex w-full flex-col">
            <h3 className="text-xl font-medium text-stone-700">{data.name}</h3>
            <p className="text-stone-500">{data.description}</p>
          </div>
          <button className="w-full rounded-md bg-black px-4 py-3 text-white lg:max-w-max lg:py-2">
            I want this
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-lg border-2 border-stone-200 transition-all">
      <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-1 bg-stone-500 bg-opacity-10 px-4"></div>
      <div className="flex h-64 flex-col items-center justify-center bg-stone-200">
        <h3 className="text-2xl text-stone-700">Coming soon!</h3>
        {/* <p className="text-stone-600 text-lg text-center">Sign up below to be the first to be notified :)</p> */}
      </div>
      <div className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-col space-y-2">
          {/* <div className="w-24 h-4 rounded bg-stone-300"></div> */}
          <h3 className="text-xl font-medium text-stone-700">{data.name}</h3>
          {/* <div className="w-16 h-2 rounded bg-stone-300"></div> */}
          <p className="text-stone-500">{data.description}</p>
        </div>
        {/* <div className="w-24 h-8 bg-stone-300 rounded-md"></div> */}
      </div>
    </div>
  );
}

export default function Home(props) {
  const features = [
    {
      text: "A space to organise all of the areas of your life",
      icon: <AcademicCapIcon className="max-w-[35px]" />,
    },
    {
      text: "Tools to track tasks and completion rates",
      icon: <CalculatorIcon className="max-w-[35px]" />,
    },
    {
      text: "A system to manage, track and (hopefully) achieve your goals",
      icon: <ChartSquareBarIcon className="max-w-[35px]" />,
    },
    {
      text: "Templates to stay on top of your school work",
      icon: <ClipboardListIcon className="max-w-[35px]" />,
    },
    {
      text: "A space to keep yourself accountable to your tasks",
      icon: <FolderIcon className="max-w-[35px]" />,
    },
    {
      text: "Make sure you don’t fall behind on your deadlines again :)",
      icon: <SparklesIcon className="max-w-[35px]" />,
    },
  ];

  const questions = [
    {
      question: "Will these templates 10x my productivity overnight?",
      answer:
        "No. These aren’t going to magically make you more productive, rather, they provide you with the tools to organise your life. If you use them properly, they’ll definitely help you stay on top of things and ultimately, get more done.",
    },
  ];

  return (
    <>
      <Head>
        <title>Notion templates by Subhan Mahmood</title>
        <script
          async
          data-uid="f89bfb05b0"
          src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js"
        />

        <meta
          name="description"
          content="A collection of carefully crafted Notion Templates to help you be more productive and get more done."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/macbook.png" as="image" />
      </Head>
      <div className="flex flex-col space-y-12 md:space-y-24">
        <section>
          <div className="bg-gradient-to-tr from-amber-200 to-amber-400">
            <div className="mx-auto flex max-w-screen-xl justify-end px-0 md:px-4 md:pt-4">
              <a
                href="https://ntn.so/subhan"
                className="w-full rounded-none bg-amber-800 px-4 py-4 text-center text-white md:max-w-max md:rounded md:py-2"
              >
                Get a <b>FREE</b> account
              </a>
            </div>
            <div className="flex h-1/2 min-h-[75vh] flex-col justify-center ">
              <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center space-y-6 px-6">
                <h1 className="text-center text-4xl font-bold text-stone-900 md:text-6xl">
                  Get organised with Notion -{" "}
                  <span className="text-amber-900">without the hassle</span>
                </h1>
                <p className="mt-4 max-w-screen-md text-center text-xl text-amber-800">
                  Notion can be overwhelming if you&apos;re just starting out.
                  That&apos;s why I made these templates to help you get started
                </p>
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <img
            className="-mt-[15vh] h-56 object-cover px-6 md:-mt-[30vh] md:h-auto md:px-12"
            src="/macbook.png"
          />
        </section>
        <section>
          <div className="mx-auto -mt-12 max-w-screen-xl px-6 md:-mt-24">
            <div className="flex flex-col-reverse md:flex-row md:space-x-12">
              <div className="mt-12 flex-1 md:mt-0">
                <img
                  loading="lazy"
                  className="p-4 md:p-16"
                  src="/notion-icons.svg"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-6">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Spend less time creating your workspace - and{" "}
                  <span className="text-amber-500">more time using it</span>
                </h2>
                <p className="mt-4 text-xl text-stone-600">
                  If you&apos;ve never used Notion before it can be very easy to
                  fall into the rabbit hole. Before you know it days have passed
                  while you experiment and create your workspace. With these
                  carefully thought out templates you&apos;ll have everything
                  you need to get started
                </p>
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="flex flex-1 flex-col justify-center space-y-6">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Your productivity,{" "}
                  <span className="text-amber-500">supercharged</span>
                </h2>
                <p className="mt-4 text-xl text-stone-600">
                  You&apos;ll make use of all of Notion&apos;s amazing features,
                  with step by step instructions. You&apos;ll see how databases,
                  lists, galleries and boards can be used to supercharge your
                  productivity.
                </p>
                <CTAButton />
              </div>
              <div className="mt-12 flex flex-1 items-center md:mt-0">
                <img loading="lazy" className="rounded-xl" src="/laptop.png" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-cover bg-no-repeat py-24"
          style={{ backgroundImage: "url('/mobile-templates.png')" }}
        >
          <div className="mx-auto max-w-screen-xl">
            <div className="flex flex-col-reverse md:flex-row md:space-x-12">
              <div className="flex-1"></div>
              <div className="col-start-2 flex flex-1 flex-col justify-center space-y-6 bg-white px-4 py-8 md:bg-transparent md:p-0">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  <span className="text-amber-500">Customise</span> to your
                  heart&apos;s desire
                </h2>
                <p className="mt-4 text-xl text-stone-600">
                  Unlike other productivity tools, Notion allows you to create
                  the perfect workspace for you. You&apos;ll have all the tools
                  you need to make these templates yours. Maybe add some GIFs or
                  some custom widgets. The sky&apos;s the limit :)
                </p>
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-semibold">
                Here&apos;s an idea of what you&apos;ll get
              </h3>
              <p className="mt-4 max-w-screen-md text-xl text-stone-600 md:text-center"></p>
              <div className="grid w-full grid-cols-1 gap-6 py-8 text-lg text-stone-700 md:w-9/12 md:grid-cols-2">
                {features.map((feature, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row items-start space-x-3 rounded border border-stone-100 p-6 shadow-md transition-all hover:text-stone-800 hover:shadow-lg md:text-stone-500"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center py-2">
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gradient-to-tr from-amber-200 to-amber-500"
          id="templates"
        >
          <div className="mx-auto -my-20 max-w-screen-xl px-6">
            <script
              async
              data-uid="f89bfb05b0"
              src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js"
            />
            {/* <Script async data-uid="f89bfb05b0" src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js" /> */}
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <h2 className="text-3xl font-semibold md:text-4xl">Templates</h2>
            <p className="mt-4 text-xl text-stone-600">
              These templates aren&apos;t available yet, sign up above to be the
              first to find out when they are!
            </p>
            <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
              {props.templates.map((template, i) => {
                return <TemplateCard key={i} data={template.data} />;
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <h2 className="text-3xl font-semibold md:text-4xl">FAQ</h2>
            <div className="flex flex-col divide-y-2 divide-solid divide-stone-200 py-8">
              {questions.map((question, i) => {
                return <Question key={i} data={question} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const templateQuery = await Client.get({
    predicates: [Prismic.Predicates.at("document.type", "notion_template")],
  });
  const templates = templateQuery.results;

  return {
    props: { templates },
  };
}
