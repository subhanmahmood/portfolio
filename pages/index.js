import React from 'react'
import Head from 'next/head'
import MainLayout from '../lib/components/MainLayout'
import WorkCard from '../lib/components/WorkCard'
import Client from '../utils/prismicHelpers'
import * as Prismic from '@prismicio/client'
import { ChevronRightIcon, UserIcon, PlayIcon, HeartIcon } from '@heroicons/react/outline'

export default function Home(props) {
  console.log(props.workItems)

  const WorkSectionVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <MainLayout>
      <Head>
        <script data-uid="2cba1297dc" src="https://prodigious-trader-6281.ck.page/2cba1297dc/index.js" />
        <title>Home</title>
        <meta name="description" content="I'm a freelance developer and designer with a passion for creating great user experiences. I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients. Most recently, I've been helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences." />
        <meta property="og:description" content="I'm a freelance developer and designer with a passion for creating great user experiences. I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients. Most recently, I've been helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences." />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <header className="mt-4 px-4 min-h-screen max-w-screen-xl mx-auto flex flex-col items-center justify-start md:justify-center">
        <p className="text-2xl md:text-4xl text-stone-600 font-medium mb-4">Hi, I'm Subhan</p>
        <h1 className="text-5xl md:text-8xl font-bold text-center max-w-screen-xl mb-4">I&apos;m a frontend developer and content creator</h1>
        <p className="text-stone-600 text-lg md:text-xl text-center max-w-screen-md mt-3">Currently helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences.</p>
        <div className="flex justify-between space-x-4 md:space-x-8 my-4">
          <div className="flex space-x-2 items-center group">
            <UserIcon className="h-6 text-stone-500 transition-all group-hover:text-stone-800 group-hover:fill-stone-800" />
            <p className="text-2xl text-stone-500">96k+</p>
          </div>
          <div className="flex space-x-2 items-center group">
            <PlayIcon className="h-6 text-stone-500 transition-all group-hover:text-blue-900" />
            <p className="text-2xl text-stone-500">10M+</p>
          </div>
          <div className="flex space-x-2 items-center group">
            <HeartIcon className="h-6 text-stone-500 transition-all group-hover:text-red-600 group-hover:fill-red-600" />
            <p className="text-2xl text-stone-500">1.2M+</p>
          </div>
        </div>
        <a href="/#work" className="font-medium bg-black mt-4 text-white px-6 py-4 shadow-md">View my work</a>
      </header>

      <section className="w-full md:px-0">
        <div className="px-4 md:px-0 md:shadow-xl relative w-full md:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-white border border-stone-100" >
          <img className="w-full object-cover" src="https://images.prismic.io/subhan/76107870-1c9e-421e-a775-dbfaf8550811_grad.JPG?auto=compress,format"/>
          <div className="w-full flex flex-col gap-y-4 p-6 md:p-8 shadow-lg md:shadow-none">
            <h3 className="font-medium text-4xl ">A little about me</h3>
            <p className="text-stone-600">I'm a frontend developer/designer and content creator with a passion for creating great user experiences.

I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients.</p>
            <p className="text-stone-600">I'm a frontend developer/designer and content creator with a passion for creating great user experiences.

I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients.</p>
           {/* <button className="max-w-max font-medium bg-black text-white px-6 py-4 shadow-md">View my work</button> */}
            <p className="text-stone-600">Technologies and tools I've been working with recently</p>
            <div className="flex space-x-8 text-stone-600">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                  <p>JavaScript</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                  <p>Next.js</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                  <p>React</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                  <p>PostgreSQL</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                <p>Figma</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-stone-500" />
                  <p>Firebase</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full px-4 pb-48 pt-72 md:pt-96">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center space-y-12 md:space-y-24">
              <h2 className="text-5xl md:text-6xl font-bold" id="work">My work and projects</h2>
              <div className="flex flex-col space-y-12 md:space-y-36 max-w-screen-lg">
                {props.workItems.map((work, i) => <WorkCard work={work} key={i} idx={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pb-48 py-24 w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-6xl font-bold text-center">I write sometimes</h2>
            <p className="text-center text-stone-500 mt-2 text-xl">Read my latest works</p>
          </div>
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {Array.from({ length: 3 }).map((e, i) => {
              return (
                <div key={i} className="flex flex-col group transition-all hover:-translate-y-2 cursor-pointer">
                  <div className="grid grid-cols-12 w-full">

                    <img className="w-full h-72 row-span-1 row-start-1 row-end-1 col-span-12 col-start-1 col-end-13 object-cover transition-all group-hover:shadow-xl z-40" src="https://images.unsplash.com/photo-1628468615047-c70ef9e36ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                    <img className="w-full h-72 row-span-1 row-start-1 row-end-1 col-span-12 col-start-1 col-end-13 object-cover transition-all group-hover:shadow-xl blur group-hover:blur-xl" src="https://images.unsplash.com/photo-1628468615047-c70ef9e36ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                  </div>

                  <h3 className="text-3xl font-semibold mt-4">I write sometimes</h3>
                  <p className="text-xl text-stone-500 mt-2">Subtitle</p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="max-w-max font-medium border border-stone-200 px-6 py-4 shadow-md">Read More</button>
          </div>
        </div>
      </section> */}
      <section className="pb-48 w-full" id="contact">
        <div className="mx-auto max-w-screen-xl px-6">
          <script data-uid="2cba1297dc" src="https://prodigious-trader-6281.ck.page/2cba1297dc/index.js" />
        </div>
      </section>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const posts = await Client.get(
    Prismic.predicate.at("document.type", "blog")
  )

  const work = await Client.get({
    predicates: [
      Prismic.predicate.at("document.type", "work"),
      Prismic.predicate.at("my.work.featured", true)
    ]
  })

  const workItems = work.results

  return {
    props: { posts, workItems }
  }
}