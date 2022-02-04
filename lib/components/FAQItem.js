import React, { useState } from "react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";

export default function FAQItem() {
  const [open, setOpen] = useState(false);
  return (
    <AnimatePresence>
      <div
        className="cursor-pointer rounded-xl border border-gray-300 shadow-md transition-all"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-row items-start px-5 py-4">
          <div className="flex flex-grow flex-col">
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {open && (
              <motion.p
                key="faq-answer"
                className="text-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </motion.p>
            )}
          </div>
          {open ? (
            <motion.div
              className="mt-2"
              key="x-icon"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <XIcon className="h-5" />
            </motion.div>
          ) : (
            <motion.div
              className="mt-2"
              key="chevron-down"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <ChevronDownIcon className="h-5" />
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
