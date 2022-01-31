import React from "react";
import { NextPage, GetStaticProps } from "next";
import WorkCard from "lib/components/WorkCard";
import * as Prismic from "@prismicio/client";
import Client from "../../utils/prismicHelpers";
import MainLayout from "../../lib/components/MainLayout";

interface Props {
  workItems: Work[];
}

const index: NextPage<Props> = (props) => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="py-12 md:py-24">
          <h1 className="text-center text-5xl font-bold text-stone-800 md:text-6xl">
            My Work and Projects
          </h1>
          <p className="mt-4 text-center text-xl text-stone-600">
            View all of my work and projects
          </p>
        </div>
        <div className="mx-auto flex max-w-screen-lg flex-col space-y-16 pb-36 md:space-y-36">
          {props.workItems.map((work, i) => {
            console.log(work);
            return <WorkCard work={work} key={i} idx={i} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const work = await Client.get({
    predicates: [Prismic.predicate.at("document.type", "work")],
  });

  const workItems = work.results;

  return {
    props: { workItems },
  };
};
