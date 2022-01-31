import React, { useEffect, useRef, FunctionComponent } from "react";
import axios from "axios";
import { useForm } from "lib/hooks/useForm";
import { XIcon } from "@heroicons/react/outline";
import { useAuth } from "lib/contexts/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/outline";
import EditableTextField from "lib/components/EditableTextField";

type ClickData = {
  today: number;
  yesterday: number;
  total: number;
  percentChange: number;
};

export type LinkData = {
  created_at: string;
  id: number;
  name: string;
  order: number;
  clicks: ClickData;
  selected: boolean;
  url: string;
};

export type LinkDataRef = React.MutableRefObject<LinkData | undefined>;

type Props = {
  data: LinkData;
  updateLink: (linkRef: LinkDataRef, updateState: boolean) => void;
  deleteLink: (link: LinkDataRef) => void;
};

const LinkCard: React.FC<Props> = ({ data, updateLink, deleteLink }) => {
  const [values, handleChange, resetForm] = useForm(data);
  const { currentUser } = useAuth();
  const valuesRef = useRef<LinkData>(values as LinkData);

  console.log(data);

  useEffect(() => {
    valuesRef.current = values as LinkData;
  }, [values]);

  const handleClick = async () => {
    try {
      const res = await axios.post(`/api/links/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (currentUser) {
    return (
      <>
        <div className="flex flex-col justify-between rounded-md border border-stone-200 bg-white p-4 shadow-md md:flex-row">
          <div className="flex flex-1 flex-col" style={{ minWidth: 0 }}>
            <EditableTextField
              value={values.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              inputClassNames="w-full"
              callback={() => updateLink(valuesRef, true)}
            />
            <EditableTextField
              value={values.url}
              name="url"
              placeholder="URL"
              onChange={handleChange}
              textClassNames="text-stone-500"
              inputClassNames="w-full"
              callback={() => updateLink(valuesRef, true)}
            />
            {valuesRef.current!.clicks.percentChange > 0 ? (
              <div className="mt-1 flex items-center text-sm text-emerald-300">
                <TrendingUpIcon className="mr-1 h-4" />
                <span>{valuesRef.current!.clicks.percentChange}%</span>
                <span className="ml-2 text-stone-300">{" (24hrs)"}</span>
              </div>
            ) : (
              <div className="mt-1 flex items-center text-sm text-red-300">
                <TrendingDownIcon className="mr-1 h-4" />
                <span>{valuesRef.current!.clicks.percentChange}%</span>
                <span className="ml-2 text-stone-300">{" (24hrs)"}</span>
              </div>
            )}
          </div>
          <button
            onClick={() => deleteLink(valuesRef)}
            className="mt-2 flex items-center justify-center space-x-2 rounded border border-red-300 px-4 py-2 text-red-500 transition-all hover:bg-red-500 hover:text-white md:space-x-0 md:border-0"
          >
            <span className="md:hidden">DELETE</span>
            <XIcon className="h-5" />
          </button>
        </div>
      </>
    );
  }

  return (
    <a
      onClick={handleClick}
      href={data.url}
      className="flex justify-between rounded-md border border-stone-200 bg-white p-6 text-xl font-medium shadow-md transition-all hover:shadow-lg"
    >
      <p>{data.name}</p>
    </a>
  );
};

export default LinkCard;
