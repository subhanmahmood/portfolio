import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import AddLinkForm from "lib/components/AddLinkForm";
import LinkCard from "lib/components/LinkCard";
import { useAuth } from "lib/contexts/AuthContext";
import { ReactSortable } from "react-sortablejs";
import { toast } from "react-toastify";
import { FaTiktok, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Head from "next/head";
import SocialIcons from "lib/components/SocialIcons";

export default function index() {
  const { currentUser } = useAuth();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await axios.get("/api/links");
        const listOfPromises = Promise.all(
          res.data.map(async (link) => {
            return axios.get(`/api/links/${link.id}/clicks`);
          })
        );
        const linkClicks = await listOfPromises;
        const links = res.data.map((link, i) => {
          const clickData = linkClicks[i].data;
          const percentChange =
            Math.round(
              ((clickData.today - clickData.yesterday) / clickData.yesterday) *
                100 *
                100
            ) / 100;
          return {
            ...link,
            ...linkClicks[i].data,
            percentChange,
          };
        });
        console.log(links);
        setLinks(links.sort((a, b) => a.order - b.order));
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast("there was an error, please try again");
        setLoading(false);
      }
    };
    fetchLinks();
  }, []);

  const addLink = async (link) => {
    try {
      link.order = links.length;
      const res = await axios.post("/api/links", link, {
        headers: { Authorization: "Bearer " + currentUser.accessToken },
      });
      setLinks([...links, res.data[0]]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLink = async (link, updateState) => {
    try {
      const res = await axios.put("/api/links", link, {
        headers: { Authorization: "Bearer " + currentUser.accessToken },
      });
      console.log(res);
      if (updateState) {
        toast(`Updated ${link.name} successfully`);
        let updatedLinks = Object.assign(links);
        const idx = updatedLinks.indexOf(
          updatedLinks.find((l) => l.id === link.id)
        );
        updatedLinks[idx] = link;
        setLinks([...updatedLinks]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLink = async (link) => {
    try {
      const res = await axios.delete("/api/links", {
        headers: { Authorization: "Bearer " + currentUser.accessToken },
        data: { id: link.id },
      });
      setLinks(links.filter((l) => l.id !== link.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let sorted = true;
    for (let i = 0; i < links.length - 1; i++) {
      if (links[i].order > links[i + 1].order) {
        sorted = false;
        break;
      }
    }

    if (!sorted) {
      let updatedLinks = Object.assign(links);
      updatedLinks = updatedLinks.map((link, i) => {
        link.order = i;
        return link;
      });
      updatedLinks.forEach((link, i) => {
        updateLink(link, false);
      });
      toast(`Updated links order successfully`);
      setLinks([...updatedLinks]);
    }
  }, [links]);

  return (
    <div className="mx-auto max-w-screen-sm py-8 md:py-24">
      <Head>
        <title>subhan.io | Links</title>
        <script
          async
          data-uid="0984e58a42"
          src="https://prodigious-trader-6281.ck.page/0984e58a42/index.js"
        ></script>
      </Head>
      <h1 className="text-center text-4xl font-bold text-stone-800 md:text-6xl">
        Links
      </h1>
      <p className="text-center text-lg text-stone-600 md:text-xl">
        View all my links
      </p>
      <SocialIcons containerClasses="mt-8 mb-8 justify-center" />
      {loading ? (
        <div className="flex items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin" size="2em" />
        </div>
      ) : (
        <div className="mx-auto mt-4 flex max-w-[400px] flex-col space-y-4 px-4">
          {currentUser ? (
            <>
              <ReactSortable
                className="flex flex-col space-y-4"
                list={links}
                setList={setLinks}
              >
                {links.map((link, i) => (
                  <LinkCard
                    key={link.id}
                    data={link}
                    updateLink={updateLink}
                    deleteLink={deleteLink}
                  />
                ))}
              </ReactSortable>
              {currentUser && <AddLinkForm onSubmit={addLink} />}
            </>
          ) : (
            <>
              <div className="flex flex-col space-y-4">
                {links.map((link, i) => (
                  <LinkCard
                    key={link.id}
                    data={link}
                    updateLink={updateLink}
                    deleteLink={deleteLink}
                  />
                ))}
              </div>
              {currentUser && <AddLinkForm onSubmit={addLink} />}
            </>
          )}
        </div>
      )}
      <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center py-12 px-4">
        <h2 className="md:text-4x text-2xl font-medium text-stone-800">
          Get the good stuff
        </h2>
        <p className="prose-lg mt-2 text-left text-stone-500 md:text-center">
          I'll occasionally send you productivity and personal development tips.
          Sometimes, I might even send you my favourite articles, tweets and
          books for that week :)
        </p>
        <p className="prose-lg mt-2 text-stone-500 underline">
          No spam ever. I promise.
        </p>
        <div className="mt-4 max-w-screen-sm">
          <script
            async
            data-uid="0984e58a42"
            src="https://prodigious-trader-6281.ck.page/0984e58a42/index.js"
          ></script>
        </div>
      </div>
    </div>
  );
}
