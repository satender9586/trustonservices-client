import Image from "next/image";
import Link from "next/link";
import { services } from "./homeData";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Choose service
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              What service do you need today?
            </h2>
          </div>
          <p className="max-w-xl text-black/60">
            Start with a service, then choose the exact type like Split AC,
            Window AC, bathroom cleaning, tap fitting, and more.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} service`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  {service.badge}
                </span>
              </div>
              <div className="p-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">
                  {service.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{service.name}</h3>

                <div className="mt-3 rounded-md border border-black/10 bg-[#fbfaf7] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/42">
                        Starts at
                      </p>
                      <p className="mt-1 text-lg font-semibold">
                        Rs. {service.price}
                      </p>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                      {service.rating} rated
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 text-sm text-black/60">
                    <span>{service.duration}</span>
                    <span>Choose type</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
