import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import FAQItem from '../lib/components/FAQItem'
import MainLayout from '../lib/components/MainLayout'
import ServiceItem from '../lib/components/ServiceItem'
import WorkCard from '../lib/components/WorkCard'
import AnimatedSection from '../lib/components/AnimatedSection'
import { fetchBlogPost, fetchBlogPosts, queryBlogPosts, queryRepeatableDocuments } from '../utils/queries'
import Client from '../utils/prismicHelpers'
import Prismic from '@prismicio/client'
import { htmlSerializer } from '../utils/htmlSerializer'


export default function Home(props) {

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
      <header className="max-w-screen-xl mx-auto flex flex-col items-center">
        <p className="text-lg font-medium">Hi, I'm Subhan</p>
        <h1 className="text-6xl font-bold text-center max-w-screen-md">I&apos;m a frontend developer and content creator</h1>
        <p className="text-neutral-600 text-lg text-center max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium id integer faucibus bibendum rhoncus felis feugiat feugiat.</p>
      </header>
      <section className="py-48 bg-gray-100 w-full px-4 md:px-0">
        <div className="md:container mx-auto ">
          <div className="w-full flex flex-col space-y-16 md:items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.6, type: "tween" }}
              className="font-semibold text-5xl">
              My Services
            </motion.h2>
            <div className="px-2 md:px-0 md:w-8/12">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 xl:gap-y-8">
                <ServiceItem i={1} />
                <ServiceItem i={2} />
                <ServiceItem i={3} />
                <ServiceItem i={4} />
                <ServiceItem i={5} />
                <ServiceItem i={6} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-48 w-full px-4 md:px-0" id="about">
        <div className="container mx-auto">
          <div className="md:w-6/12 rounded-xl overflow-hidden mx-auto ">
            <div className="w-full flex flex-col md:flex-row items-center justify-end gap-x-8 p-3 pt-48 md:p-5 bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80)' }}>
              <div className="flex flex-col gap-y-4 p-6 max-w-sm bg-gray-200 rounded-xl">
                <h3 className="font-medium text-4xl ">A little about me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, egestas tempor faucibus facilisi. Sit in nulla in arcu facilisi consequat. Purus laoreet ultricies amet eu laoreet sed vulputate nibh. Et gravida tellus, leo congue enim vulputate volutpat molestie.</p>
                <button className="px-6 py-4 max-w-max rounded-md bg-black text-white font-semibold">Book a call</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatedSection variants={WorkSectionVariants}>
        <section className="py-48 w-full" id="work">
          <div className="container mx-auto">
            <div className="px-4 md:px-0 md:w-8/12 mx-auto">
              <h2 className="font-semibold text-5xl mb-8">My Work</h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.8 } }}
              >
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection variants={WorkSectionVariants}>
        <section className="py-48 w-full">
          <div className="container mx-auto">
            <div className="px-4 md:px-0 md:w-8/12 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <h2 className="font-semibold text-5xl mb-8">My Projects</h2>
                <div className="flex flex-col space-y-8">
                  <WorkCard pills />
                  <WorkCard pills />
                  <WorkCard pills />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <section className="py-48 w-full">
        <div className="container mx-auto">
          <div className="px-4 md:px-0 md:w-8/12 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="font-semibold text-5xl mb-8">FAQ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col space-y-8">
                  <FAQItem />
                  <FAQItem />
                  <FAQItem />
                </div>
                <div className="flex flex-col space-y-8">
                  <FAQItem />
                  <FAQItem />
                  <FAQItem />
                </div>
              </div> *
            </div>
          </div>
        </div>
      </section>
      <section className="pb-48 w-full" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-max rounded-xl overflow-hidden mx-auto bg-gray-200">
            <div className="flex flex-row items-center justify-center gap-x-8">
              <div className="flex flex-col gap-y-4 py-6 max-w-sm pl-6">
                <h3 className="font-medium text-4xl ">Let's get started</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, egestas tempor faucibus facilisi.</p>
                <button className="px-6 py-4 max-w-max rounded-md bg-black text-white font-semibold">Book a call</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout >
  )
}

export async function getStaticProps() {
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "blog")
  )


  const paths = posts.results.map((blog) => {
    return {
      params: {
        uid: blog.uid
      }
    }
  })

  console.log(paths)


  return {
    props: posts
  }
}