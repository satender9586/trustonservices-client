import Image from "next/image";
import { industriesWeServe } from "./homeData";

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-14 text-[#181818]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Industries we serve
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold md:text-4xl">
              Service support for homes, businesses, and managed properties.
            </h2>
          </div>
          <div className="grid gap-3 rounded-lg border border-black/10 bg-[#f7f4ef] p-4 md:grid-cols-3">
            {[
              ["5+", "property types"],
              ["24/7", "support requests"],
              ["12k+", "monthly visits"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-black/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {industriesWeServe.map((industry) => (
            <article
              key={industry.name}
              className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[5/3] bg-[#f7f4ef]">
                <Image
                  src={industry.image}
                  alt={`${industry.name} service coverage`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{industry.name}</h3>
                <p className="mt-3 text-sm leading-6 text-black/62">
                  {industry.detail}
                </p>
                <p className="mt-5 rounded-md border border-black/10 px-3 py-2 text-sm font-semibold text-emerald-700">
                  Service available
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
