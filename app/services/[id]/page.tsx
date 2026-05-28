import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../compontens/Button";
import Footer from "../../compontens/Footer";
import Header from "../../compontens/Header";
import { getServiceById, services } from "../../compontens/homeData";

type ServiceCategory = (typeof services)[number]["subcategories"][number];

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

function getCategoryImage(category: ServiceCategory, fallbackImage: string) {
  return (category as ServiceCategory & { image?: string }).image ?? fallbackImage;
}

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service not found | TrustonServices",
    };
  }

  return {
    title: `${service.name} | TrustonServices`,
    description: `${service.description} Starting at Rs. ${service.price}.`,
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.id !== service.id);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181818]">
      <Header />

      <section id="service-types" className="mx-auto max-w-7xl px-5 py-12">
        <div>
          <Link
            href="/#services"
            className="text-sm font-semibold text-black/58 hover:text-black"
          >
            Back to services
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Service types
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Choose the exact {service.name} work.
          </h2>
          <p className="mt-4 max-w-2xl text-black/62">
            Select one option to see details, starter price, duration, and book
            that exact service type.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.subcategories.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                <Image
                  src={getCategoryImage(item, service.image)}
                  alt={`${item.name} service`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-black/62">
                  {item.description}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-md bg-[#f7f4ef] p-3">
                    <p className="font-semibold">Rs. {item.price}</p>
                    <p className="mt-1 text-xs text-black/50">starts</p>
                  </div>
                  <div className="rounded-md bg-[#f7f4ef] p-3">
                    <p className="font-semibold">{item.duration}</p>
                    <p className="mt-1 text-xs text-black/50">duration</p>
                  </div>
                </div>
                <Button
                  href={`/services/${service.id}/${item.id}`}
                  className="mt-5 block w-full py-2 text-center"
                >
                  Book this
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                More services
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Other categories customers book.
              </h2>
            </div>
            <Link href="/#services" className="text-sm font-semibold">
              View all services
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={`${item.name} service`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-black/50">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-black/60">
                    Starts at Rs. {item.price} - {item.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
