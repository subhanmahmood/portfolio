import React, { useState } from "react";
import { useForm } from "lib/hooks/useForm";
import { PlusIcon } from "@heroicons/react/outline";
import OutsideClickWrapper from "lib/components/OutsideClickWrapper.tsx";
import EditableTextField from "lib/components/EditableTextField";

export default function AddLinkForm({ onSubmit }) {
  const [values, handleChange, resetForm] = useForm({ name: "", url: "" });
  const [adding, setAdding] = useState(false);

  const onOutsideClick = () => {
    resetForm();
    setAdding(false);
  };

  return (
    <OutsideClickWrapper onOutsideClick={onOutsideClick}>
      {adding ? (
        <div className="mt-4 flex flex-row justify-between rounded-md border border-stone-200 p-4 shadow-md">
          <div className="flex flex-col">
            <EditableTextField
              value={values.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <EditableTextField
              value={values.url}
              name="url"
              placeholder="URL"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={() => {
              onSubmit(values);
              setAdding(false);
            }}
            className="rounded bg-black px-8 text-white shadow"
          >
            Add
          </button>
        </div>
      ) : (
        <div
          onClick={() => setAdding(true)}
          className="mt-4 flex h-16 cursor-pointer items-center justify-center rounded-md border border-stone-200 text-stone-200"
        >
          <PlusIcon className="h-6" />
        </div>
      )}
    </OutsideClickWrapper>
  );
}
