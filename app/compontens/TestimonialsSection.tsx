import { testimonials } from "./homeData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Customers trust the process.
            </h2>
          </div>
          <div className="rounded-md bg-[#f7f4ef] px-4 py-3 text-sm font-semibold">
            4.8 average platform rating
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-black/10 bg-[#fbfaf7] p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-black/50">{item.area}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {item.rating}
                </span>
              </div>
              <p className="mt-5 min-h-28 text-sm leading-6 text-black/65">
                {item.text}
              </p>
              <p className="mt-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black/70">
                {item.service}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
