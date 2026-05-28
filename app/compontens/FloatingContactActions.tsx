const phoneNumber = "+911234567890";
const whatsappNumber = "911234567890";
const whatsappMessage = encodeURIComponent(
  "Hi TrustonServices, I need help booking a service.",
);

export default function FloatingContactActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="flex gap-2">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="grid size-11 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
            <path
              d="M12 3.5A8.3 8.3 0 0 0 5 16.2l-1 4.3 4.4-1A8.3 8.3 0 1 0 12 3.5Zm0 1.7a6.6 6.6 0 0 1 5.6 10.2 6.6 6.6 0 0 1-8.8 2.4l-.3-.2-2 .5.5-1.9-.2-.3A6.6 6.6 0 0 1 12 5.2Zm-3.1 3.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1 0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.8 2.2.9 2.7.7 3.2.7s1.6-.7 1.9-1.3c.2-.6.2-1.1.1-1.2l-1.9-.9c-.3-.1-.5-.1-.7.2l-.7.9c-.1.2-.3.2-.6.1a5.4 5.4 0 0 1-2.7-2.3c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.1-.4 0-.6l-.8-1.9c-.2-.4-.4-.4-.6-.4H8.9Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call TrustonServices"
          title="Call TrustonServices"
          className="grid size-11 place-items-center rounded-full bg-black text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
            <path
              d="M7.2 4.5 9.4 4c.5-.1 1 .2 1.2.7l1 2.5c.2.5 0 1-.4 1.3L10 9.4c.9 1.8 2.3 3.2 4.1 4.1l.9-1.2c.3-.4.8-.6 1.3-.4l2.5 1c.5.2.8.7.7 1.2l-.5 2.2c-.1.6-.6 1-1.2 1A12.8 12.8 0 0 1 5 5.7c0-.6.4-1.1 1-1.2l1.2 0Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
