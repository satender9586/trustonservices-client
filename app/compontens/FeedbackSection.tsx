import Button from "./Button";

export default function FeedbackSection() {
  return (
    <section className="bg-[#202622] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            Feedback
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Help us improve every home visit.
          </h2>
          <p className="mt-4 max-w-xl text-white/62">
            Customers can share service quality, punctuality, pricing clarity,
            and professional behavior after every booking.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Quality", "Timing", "Support"].map((item) => (
              <div key={item} className="rounded-md bg-white/10 p-4">
                <p className="text-sm text-white/55">{item}</p>
                <p className="mt-2 text-2xl font-semibold">4.8</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-lg bg-white p-5 text-black shadow-xl shadow-black/20">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Name
              <input
                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium">
              Service
              <select className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3">
                <option>AC repair</option>
                <option>Deep cleaning</option>
                <option>Salon at home</option>
                <option>Plumbing</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">
            Rating
            <select className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3">
              <option>5 - Excellent</option>
              <option>4 - Good</option>
              <option>3 - Average</option>
              <option>2 - Needs improvement</option>
            </select>
          </label>
          <label className="mt-4 block text-sm font-medium">
            Feedback
            <textarea
              className="mt-2 min-h-28 w-full rounded-md border border-black/15 px-3 py-3"
              placeholder="Tell us about your experience"
            />
          </label>
          <Button className="mt-4 w-full">Submit feedback</Button>
        </form>
      </div>
    </section>
  );
}
