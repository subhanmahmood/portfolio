import React from "react";
import AnimatedSection from "./AnimatedSection";
import { NextPage } from "next";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";

interface Props {
  work: Work;
  idx: number;
}

const WorkCard: NextPage<Props> = ({ work, idx }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatedSection variants={variants}>
      <div
        className={`project w-full border-2 border-stone-300 shadow-lg md:border-0 md:shadow-none ${
          idx % 2 === 0 ? "left" : "right"
        }`}
      >
        <div
          className="project-image h-full bg-cover "
          style={{ backgroundImage: `url(${work.data.cover_image.url})` }}
        ></div>
        <div className="project-content text-left">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400">
            {work.data.featured ? "Featured Project" : "Project"}
          </h3>
          <h3 className="mb-4 text-3xl font-semibold">
            {work.data.title[0].text}
          </h3>
          <p className="prose mb-4 bg-transparent p-0 md:bg-white md:p-8 md:shadow-lg">
            {work.data.excerpt}
          </p>
          <div className="tools flex flex-row flex-wrap space-x-3">
            {work.data.tools.map(({ tool }, i) => {
              return <p className="font-code text-stone-500">{tool}</p>;
            })}
          </div>
          <div className="links mt-4 flex w-full space-x-4">
            <a href={work.data.link.url}>
              <ExternalLinkIcon className="h-6 cursor-pointer text-stone-800 hover:text-stone-500" />
            </a>
            <FaGithub className="h-6 cursor-pointer text-stone-800 hover:text-stone-500" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WorkCard;
