import React, { useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../lib/components/MainLayout'
import ServiceItem from '../lib/components/ServiceItem'
import WorkCard from '../lib/components/WorkCard'
import AnimatedSection from '../lib/components/AnimatedSection'
import Client from '../utils/prismicHelpers'
import * as Prismic from '@prismicio/client'
import { htmlSerializer } from '../utils/htmlSerializer'
import { useAuth } from 'lib/contexts/AuthContext'
import { useRouter } from 'next/router'
import { ChevronRightIcon, UserIcon, PlayIcon, HeartIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Script from 'next/script'


export default function Home(props) {
  const router = useRouter()
  console.log(props.workItems)

  const work = props.workItems.filter(w => w.data.category === 'Work')
  const projects = props.workItems.filter(w => w.data.category === 'Project')

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
    <MainLayout className="font-display flex flex-col-reverse md:flex-col items-center min-h-screen">
      <Head>
        <script data-uid="2cba1297dc" src="https://prodigious-trader-6281.ck.page/2cba1297dc/index.js" />

        <title>Home</title>
      </Head>
      <header className="py-72 max-w-screen-xl mx-auto flex flex-col items-center justify-center h-[40vh]">
        <p className="text-2xl font-medium">Hi, I'm Subhan</p>
        <h1 className="text-6xl font-bold text-center max-w-screen-md">I&apos;m a frontend developer and content creator</h1>
        <p className="text-neutral-600 text-lg text-center max-w-screen-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium id integer faucibus bibendum rhoncus felis feugiat feugiat.</p>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 my-4">
          <div className="flex space-x-2 items-center group">
            <UserIcon className="h-6 text-neutral-500 transition-all group-hover:text-neutral-800 group-hover:fill-neutral-800" />
            <p className="text-2xl text-neutral-500">96k+</p>
          </div>
          <div className="flex space-x-2 items-center group">
            <PlayIcon className="h-6 text-neutral-500 transition-all group-hover:text-blue-900" />
            <p className="text-2xl text-neutral-500">10M+</p>
          </div>
          <div className="flex space-x-2 items-center group">
            <HeartIcon className="h-6 text-neutral-500 transition-all group-hover:text-red-600 group-hover:fill-red-600" />
            <p className="text-2xl text-neutral-500">1.2M+</p>
          </div>
        </div>
        <button className="font-medium bg-black mt-4 text-white px-6 py-4 shadow-md">View my work</button>
      </header>

      <section className="w-full md:px-0">
        <div className="-mb-48 px-4 md:px-0 md:shadow-xl relative w-full md:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 mt-48" >
          <div className="bg-cover" style={{ backgroundImage: 'url(/grad.jpg)' }} ></div>
          <div className="flex flex-col gap-y-4 p-6 md:p-8 max-w-sm bg-gray-200">
            <h3 className="font-medium text-4xl ">A little about me</h3>
            <p>I'm a frontend developer/designer and content creator with a passion for creating great user experiences.

I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients.</p>
            {/* <button className="max-w-max font-medium bg-black text-white px-6 py-4 shadow-md">View my work</button> */}
            <p>Technologies and tools I've been working with recently</p>
            <div className="flex">
              <div className="flex-1 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>JavaScript</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>Next.js</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>React</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>PostgreSQL</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>Figma</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRightIcon className="h-4 text-neutral-500" />
                  <p>Firebase</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full px-4 pb-48 pt-96 bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center space-y-24">
              <h2 className="text-6xl font-bold">My work and projects</h2>
              <div className="flex flex-col space-y-36 max-w-screen-lg">
                {props.workItems.map((work, i) => <WorkCard work={work} key={i} idx={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-48 py-24 w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-6xl font-bold text-center">I write sometimes</h2>
            <p className="text-center text-neutral-500 mt-2 text-xl">Read my latest works</p>
          </div>
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {Array.from({ length: 3 }).map((e, i) => {
              return (
                <div className="flex flex-col group transition-all hover:-translate-y-2 cursor-pointer">
                  <div className="grid grid-cols-12 w-full">

                    <img className="w-full h-72 row-span-1 row-start-1 row-end-1 col-span-12 col-start-1 col-end-13 object-cover transition-all group-hover:shadow-xl z-40" src="https://images.unsplash.com/photo-1628468615047-c70ef9e36ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                    <img className="w-full h-72 row-span-1 row-start-1 row-end-1 col-span-12 col-start-1 col-end-13 object-cover transition-all group-hover:shadow-xl blur group-hover:blur-xl" src="https://images.unsplash.com/photo-1628468615047-c70ef9e36ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                  </div>
                  {/* <img className=" h-72 object-cover transition-all group-hover:shadow-xl" src="https://images.unsplash.com/photo-1628468615047-c70ef9e36ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /> */}
                  <h3 className="text-3xl font-semibold mt-4">I write sometimes</h3>
                  <p className="text-xl text-neutral-500 mt-2">Subtitle</p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="max-w-max font-medium border border-neutral-200 px-6 py-4 shadow-md">Read More</button>
          </div>
        </div>
      </section>
      <section className="pb-48 w-full" id="contact">
        <div className="mx-auto max-w-screen-xl px-6 -my-20">
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