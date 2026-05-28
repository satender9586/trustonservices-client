"use client";

import { useState } from "react";
import { faqs } from "./homeData";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Common questions
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Everything clear before booking.
          </h2>
          <p className="mt-4 text-black/62">
            Keep customer doubts answered before they move from service type to
            booking.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className={`w-full rounded-lg border border-black/10 p-5 transition ${
                openIndex === index ? "bg-white shadow-sm" : "bg-[#fbfaf7]"
              }`}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-semibold"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(index)}
              >
                <span>{item.question}</span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-md bg-black text-sm text-white transition ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index ? (
                <p className="mt-4 max-w-4xl text-sm leading-6 text-black/62">
                  {item.answer}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
