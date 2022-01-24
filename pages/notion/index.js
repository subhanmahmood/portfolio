import { useState } from 'react'
import * as Prismic from '@prismicio/client'
import Client from 'utils/prismicHelpers'
import { AcademicCapIcon, CalculatorIcon, ChartSquareBarIcon, ClipboardListIcon, FolderIcon, SparklesIcon } from '@heroicons/react/outline'
import Head from 'next/head'


function CTAButton() {
  return <a href="#templates" className="px-6 py-4 max-w-max bg-black text-white transition-all hover:shadow-xl hover:-translate-y-2">Get me organised</a>

}

function Question({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col space-y-2 py-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <p className="text-stone-700 text-xl">{data.question}</p>
      {isOpen && <p className="text-stone-500 text-lg">{data.answer}</p>}
    </div>
  )
}

function TemplateCard({ data }) {
  if (data.live) {
    return (
      <div className="rounded-lg border-2 border-stone-200 transition-all hover:shadow-md w-full overflow-hidden flex flex-col cursor-pointer">
        <div className="h-64 bg-cover flex flex-col items-end" style={{ backgroundImage: `url(${data.cover_image})` }}>
          {
            data.pro ?
              <span className="rounded bg-amber-400 font-semibold bg-opacity-80 px-2 py-1 text-amber-900 mt-2 mr-2">PRO</span>
              :
              <span className="rounded bg-stone-400 font-semibold bg-opacity-80 px-2 py-1 text-stone-100 mt-2 mr-2">FREE</span>
          }
        </div>
        <div className="p-4 flex flex-col space-x-1 space-y-4 lg:space-y-0 lg:flex-row items-start justify-between">
          <div className="flex flex-col w-full">
            <h3 className="font-medium text-xl text-stone-700">{data.name}</h3>
            <p className="text-stone-500">{data.description}</p>
          </div>
          <button className="px-4 py-3 lg:py-2 rounded-md bg-black text-white w-full lg:max-w-max">I want this</button>
        </div>
      </div>
    )
  }
  return (
    <div className="relative rounded-lg border-2 border-stone-200 transition-all w-full overflow-hidden flex flex-col">
      <div className="absolute w-full h-full bg-stone-500 bg-opacity-10 flex flex-col justify-center items-center space-y-1 px-4">

      </div>
      <div className="h-64 bg-stone-200 flex flex-col items-center justify-center">
        <h3 className="text-stone-700 text-2xl">Coming soon!</h3>
        {/* <p className="text-stone-600 text-lg text-center">Sign up below to be the first to be notified :)</p> */}
      </div>
      <div className="p-4 flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-2">
          {/* <div className="w-24 h-4 rounded bg-stone-300"></div> */}
          <h3 className="font-medium text-xl text-stone-700">{data.name}</h3>
          {/* <div className="w-16 h-2 rounded bg-stone-300"></div> */}
          <p className="text-stone-500">{data.description}</p>
        </div>
        {/* <div className="w-24 h-8 bg-stone-300 rounded-md"></div> */}
      </div>
    </div>
  )
}

export default function Home(props) {
  const features = [
    {
      text: "A space to organise all of the areas of your life",
      icon: <AcademicCapIcon className="max-w-[35px]" />
    },
    {
      text: "Tools to track tasks and completion rates",
      icon: <CalculatorIcon className="max-w-[35px]" />
    },
    {
      text: "A system to manage, track and (hopefully) achieve your goals",
      icon: <ChartSquareBarIcon className="max-w-[35px]" />
    },
    {
      text: "Templates to stay on top of your school work",
      icon: <ClipboardListIcon className="max-w-[35px]" />
    },
    {
      text: "A space to keep yourself accountable to your tasks",
      icon: <FolderIcon className="max-w-[35px]" />
    },
    {
      text: "Make sure you don’t fall behind on your deadlines again :)",
      icon: <SparklesIcon className="max-w-[35px]" />
    }
  ]

  const questions = [
    {
      question: "Will these templates 10x my productivity overnight?",
      answer: "No. These aren’t going to magically make you more productive, rather, they provide you with the tools to organise your life. If you use them properly, they’ll definitely help you stay on top of things and ultimately, get more done."
    }
  ]

  return (
    <>
      <Head>
        <title>Notion templates by Subhan Mahmood</title>
        <script async data-uid="f89bfb05b0" src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js" />

        <meta name="description" content="A collection of carefully crafted Notion Templates to help you be more productive and get more done." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="/macbook.png"
          as="image"
        />
      </Head>
      <div className="flex flex-col space-y-12 md:space-y-24">
        {/* <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-6 p-4">
          <img src="/logo.svg" width="30px" />
        </div>
      </div> */}
        <section>

          <div className="bg-gradient-to-tr from-amber-200 to-amber-400 h-1/2 flex flex-col min-h-[75vh] justify-center">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-6 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-center text-stone-900">Get organised with Notion - <span className="text-amber-900">without the hassle</span></h1>
              <p className="max-w-screen-md text-amber-800 text-xl text-center mt-4">Notion can be overwhelming if you&apos;ve never used it before. That&apos;s why I made these templates to help you get started</p>
              <CTAButton />
            </div>


          </div>
        </section>
        <section className="flex justify-center">
          <img className="-mt-[15vh] md:-mt-[30vh] h-56 md:h-auto object-cover px-6 md:px-12" src="/macbook.png" />
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6 -mt-12 md:-mt-24">
            <div className="flex flex-col-reverse md:flex-row md:space-x-12">
              <div className="flex-1 mt-12 md:mt-0">
                <img loading="lazy" className="p-4 md:p-16" src="/notion-icons.svg" />
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">Spend less time creating your workspace - and <span className="text-amber-500">more time using it</span></h2>
                <p className="text-stone-600 text-xl mt-4">If you&apos;ve never used Notion before it can be very easy to fall into the rabbit hole. Before you know it days have passed while you experiment and create your workspace. With these carefully thought out templates you&apos;ll have everything you need to get started</p>
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">Your productivity, <span className="text-amber-500">supercharged</span></h2>
                <p className="text-stone-600 text-xl mt-4">You&apos;ll make use of all of Notion&apos;s amazing features, with step by step instructions. You&apos;ll see how databases, lists, galleries and boards can be used to supercharge your productivity.</p>
                <CTAButton />
              </div>
              <div className="flex-1 flex items-center mt-12 md:mt-0">
                <img loading="lazy" className="rounded-xl" src="/laptop.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-no-repeat bg-cover py-24" style={{ backgroundImage: "url('/mobile-templates.png')" }}>
          <div className="mx-auto max-w-screen-xl">
            <div className="flex flex-col-reverse md:flex-row md:space-x-12">
              <div className="flex-1"></div>
              <div className="flex-1 flex flex-col justify-center space-y-6 col-start-2 px-4 py-8 md:p-0 bg-white md:bg-transparent">
                <h2 className="text-3xl md:text-4xl font-semibold"><span className="text-amber-500">Customise</span> to your heart&apos;s desire</h2>
                <p className="text-stone-600 text-xl mt-4">Unlike other productivity tools, Notion allows you to create the perfect workspace for you. You&apos;ll have all the tools you need to make these templates yours. Maybe add some GIFs or some custom widgets. The sky&apos;s the limit :)</p>
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-4xl">Here&apos;s an idea of what you&apos;ll get</h3>
              <p className="text-stone-600 text-xl mt-4 max-w-screen-md md:text-center"></p>
              <div className="py-8 grid grid-cols-1 md:grid-cols-2 w-full md:w-9/12 text-lg text-stone-700 gap-6">
                {features.map((feature, i) => {
                  return (
                    <div key={i} className="flex flex-row items-start space-x-3 p-6 rounded shadow-md hover:shadow-lg transition-all border border-stone-100 md:text-stone-500 hover:text-stone-800">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  )
                })}
              </div>
              <div className="py-2 flex justify-center">
                <CTAButton />
              </div>
            </div>
          </div>
        </section>
        <section id="templates">
          <div className="mx-auto max-w-screen-xl px-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Templates</h2>
            <p className="text-stone-600 text-xl mt-4">These templates aren&apos;t available yet, sign up below to be the first to find out when they are!</p>
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.templates.map((template, i) => {
                return <TemplateCard key={i} data={template.data} />
              })}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tr from-amber-200 to-amber-500" id="email-wrapper">
          <div className="mx-auto max-w-screen-xl px-6 -my-20">
            <script async data-uid="f89bfb05b0" src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js" />
            {/* <Script async data-uid="f89bfb05b0" src="https://prodigious-trader-6281.ck.page/f89bfb05b0/index.js" /> */}
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-6">
            <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
            <div className="flex flex-col py-8 divide-y-2 divide-solid divide-stone-200">
              {questions.map((question, i) => {
                return <Question key={i} data={question} />
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const templateQuery = await Client.get({ 
      predicates: [
        Prismic.Predicates.at("document.type", "notion_template")
      ]
  })
  const templates = templateQuery.results

  return {
    props: { templates }
  }
}