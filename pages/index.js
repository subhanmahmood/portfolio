import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../lib/components/MainLayout'
import ServiceItem from '../lib/components/ServiceItem'
import WorkCard from '../lib/components/WorkCard'
import AnimatedSection from '../lib/components/AnimatedSection'
import Client from '../utils/prismicHelpers'
import Prismic from '@prismicio/client'


export default function Home(props) {

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

  const services = [
    {
      title: "Website Audit",
      description: "I take a look and assess your current website to find out what you're doing right, and what I need to do to take it to the next level."
    },
    {
      title: "Bespoke Development",
      description: "Whether you just have an idea and need someone to bring it to life, or have designs and need someone to create pixel-perfect code to bring them to your users, you're in the right place."
    },
    {
      title: "UX Design",
      description: "Your user's experience is more than just some files. I carefully plan out your user's journey to provide them the best experience and you with the most conversions."
    },
    {
      title: "Ongoing Support",
      description: "We all know the job isn't once your site goes live. I provide ongoing support with all my services to make sure that you understand how your site works and any questions you have are answered."
    },
  ]

  const aboutMe = "I'm a freelance developer and designer with a passion for creating great user experiences. I've been coding since I was 12, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients. Most recently, I've been helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences."


  return (
    <MainLayout className="font-display flex flex-col-reverse md:flex-col items-center min-h-screen">
      <main className="w-full">
        <header className="container mx-auto">
          <div className="px-4 md:px-0 md:w-8/12 mx-auto">
            <div className="flex flex-row items-center py-48">
              <div className="flex flex-col flex-grow">
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, type: "tween" }}
                    className="font-medium md:font-medium text-lg">Hi, I'm Subhan Mahmood</motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "tween" }}
                    className="font-semibold text-3xl md:text-7xl mt-2">Front end developer</motion.h1>
                </div>
                <div className="overflow-hidden pb-4">
                  <motion.h1
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "tween" }}
                    className="font-semibold text-3xl md:text-7xl mt-4 ml-4 md:ml-16">UX/UI Designer</motion.h1>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-8 ml-8 md:ml-32 mt-8">
                  <button className="max-w-max px-6 py-4 rounded-md bg-black text-white font-semibold transition-all hover:shadow-lg">Book a call</button>
                  <button className="hidden max-w-max px-6 py-4 font-semibold group flex flex-row items-center text-gray-600">
                    Download CV <img className="ml-4 transition-transform transform group-hover:translate-x-2 opacity-80" src="/icons/arrow.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                  {
                    services.map((service, i) => {
                      return (
                        <ServiceItem i={1} service={service} />
                      )
                    })
                  }
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
                  <p>I'm a freelance developer and designer with a passion for creating great user experiences.</p>
                  <p>I've been coding since I was 12, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients. </p>
                  <p>Most recently, I've been helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences.</p>
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
                  {work.map((work, i) => {
                    return <WorkCard state={work} key={i} />
                  })}
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
                    {projects.map((work, i) => {
                      return <WorkCard state={work} key={i} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        {/* <section className="py-48 w-full">
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
        </section> */}
        <section className="pb-48 w-full" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-max rounded-xl overflow-hidden mx-auto bg-gray-200">
              <div className="flex flex-row items-center justify-center gap-x-8">
                <div className="flex flex-col gap-y-4 py-6 max-w-sm px-6">
                  <h3 className="font-medium text-4xl ">Let's get started</h3>
                  <p>If you have an interesting opportunity or some work, book a call and let's get started</p>
                  <button className="px-6 py-4 max-w-max rounded-md bg-black text-white font-semibold">Book a call</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout >
  )
}

export async function getStaticProps() {
  const work = await Client().query(Prismic.Predicates.at("document.type", "work"))
  const workItems = work.results

  return {
    props: { workItems }
  }
}