export const services = [
  {
    id: "salon-at-home",
    name: "Salon at home",
    icon: "/services/salon.svg",
    image: "/services/salon-photo.png",
    category: "Beauty and wellness",
    price: 499,
    duration: "45-90 min",
    rating: "4.8",
    bookings: "1.8k bookings",
    eta: "Same day slots",
    badge: "Trending",
    tone: "bg-rose-100 text-rose-900",
    accent: "from-rose-100 via-white to-pink-50",
    description:
      "Professional grooming, facial, waxing, and hair care services delivered by verified beauty experts.",
    includes: ["Hygiene kit", "Verified stylist", "Transparent add-ons"],
    popularFor: ["Facial cleanup", "Waxing", "Hair spa"],
    subcategories: [
      {
        id: "facial-cleanup",
        name: "Facial cleanup",
        price: 699,
        duration: "60 min",
        description: "Deep cleansing, scrub, massage, steam, and glow mask.",
      },
      {
        id: "waxing",
        name: "Waxing",
        price: 399,
        duration: "45 min",
        description: "Hygienic roll-on or regular waxing for arms and legs.",
      },
      {
        id: "hair-spa",
        name: "Hair spa",
        price: 899,
        duration: "75 min",
        description: "Nourishing hair spa with head massage and steam.",
      },
    ],
  },
  {
    id: "ac-repair",
    name: "AC repair",
    icon: "/services/ac-repair.svg",
    image: "/services/ac-repair-photo.png",
    category: "Appliance care",
    price: 299,
    duration: "30-60 min",
    rating: "4.7",
    bookings: "934 live slots",
    eta: "Technician in 45 min",
    badge: "Fastest",
    tone: "bg-cyan-100 text-cyan-900",
    accent: "from-cyan-100 via-white to-sky-50",
    description:
      "Inspection, servicing, gas checks, cooling issue diagnosis, and repair for split and window AC units.",
    includes: ["Diagnosis report", "Spare quote", "30-day service support"],
    popularFor: ["Low cooling", "Water leakage", "Annual service"],
    subcategories: [
      {
        id: "split-ac",
        name: "Split AC service",
        image: "/services/split-ac-photo.png",
        price: 499,
        duration: "45-60 min",
        description: "Indoor unit filter cleaning, coil wash, drain check, and cooling inspection.",
      },
      {
        id: "window-ac",
        name: "Window AC service",
        image: "/services/window-ac-photo.png",
        price: 399,
        duration: "40-55 min",
        description: "Filter cleaning, coil cleaning, fan check, and basic performance testing.",
      },
      {
        id: "gas-refill",
        name: "AC gas refill",
        image: "/services/ac-gas-refill-photo.png",
        price: 1899,
        duration: "60-90 min",
        description: "Leak check, pressure testing, and refrigerant refill as per AC tonnage.",
      },
      {
        id: "installation",
        name: "AC installation",
        image: "/services/ac-installation-photo.png",
        price: 1499,
        duration: "90-150 min",
        description: "Mounting, copper pipe connection, drainage setup, and test run.",
      },
    ],
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    icon: "/services/deep-cleaning.svg",
    image: "/services/deep-cleaning-photo.png",
    category: "Home cleaning",
    price: 1299,
    duration: "2-5 hrs",
    rating: "4.9",
    bookings: "612 teams",
    eta: "Next slot today",
    badge: "Best rated",
    tone: "bg-emerald-100 text-emerald-900",
    accent: "from-emerald-100 via-white to-lime-50",
    description:
      "Room, bathroom, kitchen, sofa, and full-home cleaning with trained teams and professional supplies.",
    includes: ["Machine cleaning", "Trained team", "Before-after checklist"],
    popularFor: ["Kitchen cleaning", "Bathroom cleaning", "Full home"],
    subcategories: [
      {
        id: "kitchen-cleaning",
        name: "Kitchen cleaning",
        price: 999,
        duration: "2-3 hrs",
        description: "Degreasing of tiles, stove area, sink, cabinets outside, and floor.",
      },
      {
        id: "bathroom-cleaning",
        name: "Bathroom cleaning",
        price: 499,
        duration: "60-90 min",
        description: "Tile scrubbing, fixture polishing, hard-water stain removal, and disinfection.",
      },
      {
        id: "full-home-cleaning",
        name: "Full home cleaning",
        price: 2499,
        duration: "4-6 hrs",
        description: "Complete dry and wet cleaning for rooms, kitchen, bathrooms, and common areas.",
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "/services/plumbing.svg",
    image: "/services/plumbing-photo.png",
    category: "Home repair",
    price: 199,
    duration: "20-60 min",
    rating: "4.6",
    bookings: "24 min ETA",
    eta: "Emergency support",
    badge: "On demand",
    tone: "bg-amber-100 text-amber-950",
    accent: "from-amber-100 via-white to-orange-50",
    description:
      "Leak repair, tap fitting, drainage fixes, flush repairs, and installation work by trained plumbers.",
    includes: ["Visit inspection", "Material estimate", "Work warranty"],
    popularFor: ["Leakage", "Tap fitting", "Drain blockage"],
    subcategories: [
      {
        id: "tap-fitting",
        name: "Tap fitting",
        price: 249,
        duration: "30-45 min",
        description: "Installation or replacement of kitchen and bathroom taps.",
      },
      {
        id: "leak-repair",
        name: "Leak repair",
        price: 299,
        duration: "30-60 min",
        description: "Leak detection and repair for exposed pipes, taps, and joints.",
      },
      {
        id: "drain-blockage",
        name: "Drain blockage",
        price: 399,
        duration: "45-75 min",
        description: "Blockage clearing for bathroom, kitchen, and utility drains.",
      },
    ],
  },
  {
    id: "washing-machine",
    name: "Washing machine",
    icon: "/services/washing-machine.svg",
    image: "/services/washing-machine-photo.png",
    category: "Appliance care",
    price: 349,
    duration: "30-75 min",
    rating: "4.7",
    bookings: "520 bookings",
    eta: "Same day visit",
    badge: "Popular",
    tone: "bg-blue-100 text-blue-900",
    accent: "from-blue-100 via-white to-sky-50",
    description:
      "Diagnosis, servicing, drainage checks, vibration issues, and repair support for washing machines.",
    includes: ["Diagnosis report", "Spare quote", "Service support"],
    popularFor: ["Front load", "Top load", "Drain issue"],
    subcategories: [
      {
        id: "front-load",
        name: "Front load repair",
        price: 399,
        duration: "45-75 min",
        description: "Diagnosis and repair for drum, drainage, vibration, and panel issues.",
      },
      {
        id: "top-load",
        name: "Top load repair",
        price: 349,
        duration: "35-60 min",
        description: "Inspection and repair for wash cycle, motor, inlet, and drainage issues.",
      },
      {
        id: "installation",
        name: "Installation",
        price: 499,
        duration: "45-60 min",
        description: "Machine placement, inlet-outlet connection, leveling, and test run.",
      },
    ],
  },
  {
    id: "electrician",
    name: "Electrician",
    icon: "/services/electrician.svg",
    image: "/services/electrician-photo.png",
    category: "Electrical work",
    price: 199,
    duration: "20-60 min",
    rating: "4.6",
    bookings: "740 bookings",
    eta: "Fast visit",
    badge: "Essential",
    tone: "bg-yellow-100 text-yellow-950",
    accent: "from-yellow-100 via-white to-amber-50",
    description:
      "Switchboard repair, light fitting, fan installation, wiring checks, and small electrical fixes.",
    includes: ["Safety check", "Material estimate", "Work support"],
    popularFor: ["Switch repair", "Fan fitting", "Light fitting"],
    subcategories: [
      {
        id: "switchboard-repair",
        name: "Switchboard repair",
        price: 249,
        duration: "30-45 min",
        description: "Repair or replacement support for switches, sockets, and boards.",
      },
      {
        id: "fan-installation",
        name: "Fan installation",
        price: 399,
        duration: "45-60 min",
        description: "Ceiling fan installation, balancing, and basic wiring check.",
      },
      {
        id: "light-fitting",
        name: "Light fitting",
        price: 199,
        duration: "20-40 min",
        description: "Installation or replacement of wall, ceiling, and decorative lights.",
      },
    ],
  },
  {
    id: "parceling",
    name: "Parceling",
    icon: "/services/parceling.svg",
    image: "/services/parceling-photo.png",
    category: "Packing help",
    price: 299,
    duration: "30-120 min",
    rating: "4.5",
    bookings: "310 bookings",
    eta: "Scheduled slots",
    badge: "Helpful",
    tone: "bg-green-100 text-green-900",
    accent: "from-green-100 via-white to-emerald-50",
    description:
      "Home packing, parcel preparation, box labeling, and safe item wrapping for local movement.",
    includes: ["Packing guidance", "Labeling", "Careful handling"],
    popularFor: ["Box packing", "Fragile packing", "Move prep"],
    subcategories: [
      {
        id: "box-packing",
        name: "Box packing",
        price: 299,
        duration: "30-60 min",
        description: "Neat packing of household items into boxes with basic labeling.",
      },
      {
        id: "fragile-packing",
        name: "Fragile packing",
        price: 599,
        duration: "60-120 min",
        description: "Extra-care wrapping for glassware, decor, electronics, and delicate items.",
      },
      {
        id: "move-prep",
        name: "Move preparation",
        price: 899,
        duration: "90-150 min",
        description: "Organized packing assistance before local shifting or transport pickup.",
      },
    ],
  },
  {
    id: "home-painter",
    name: "Home painter",
    icon: "/services/home-painter.svg",
    image: "/services/home-painter-photo.png",
    category: "Home improvement",
    price: 1499,
    duration: "4-8 hrs",
    rating: "4.7",
    bookings: "430 bookings",
    eta: "Site visit slots",
    badge: "Premium",
    tone: "bg-pink-100 text-pink-900",
    accent: "from-pink-100 via-white to-rose-50",
    description:
      "Interior wall painting, touch-ups, texture consultation, and room refresh services.",
    includes: ["Wall inspection", "Paint estimate", "Surface prep"],
    popularFor: ["Room painting", "Touch-up", "Texture wall"],
    subcategories: [
      {
        id: "single-room",
        name: "Single room painting",
        price: 1499,
        duration: "4-6 hrs",
        description: "Painting support for one room with surface preparation and neat finishing.",
      },
      {
        id: "wall-touch-up",
        name: "Wall touch-up",
        price: 699,
        duration: "2-4 hrs",
        description: "Minor patches, stain coverage, and small wall repainting work.",
      },
      {
        id: "texture-wall",
        name: "Texture wall",
        price: 2499,
        duration: "6-8 hrs",
        description: "Accent wall texture consultation and execution for premium interiors.",
      },
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}

export function getServiceCategory(serviceId: string, categoryId: string) {
  const service = getServiceById(serviceId);
  const category = service?.subcategories.find((item) => item.id === categoryId);

  return service && category ? { service, category } : null;
}

export const bookingSteps = [
  "Choose service",
  "Select exact type",
  "Pick slot",
  "Track professional",
];

export const testimonials = [
  {
    name: "Riya Sharma",
    area: "Gurugram",
    rating: "5.0",
    text: "The AC technician arrived on time, explained the issue clearly, and fixed cooling in one visit. The booking flow felt very simple.",
    service: "Split AC service",
  },
  {
    name: "Aman Verma",
    area: "Noida",
    rating: "4.9",
    text: "Booked bathroom cleaning before guests arrived. The team was professional, carried proper tools, and shared photos after completion.",
    service: "Bathroom cleaning",
  },
  {
    name: "Neha Kapoor",
    area: "Delhi",
    rating: "4.8",
    text: "I liked that the price and duration were visible before booking. The salon service felt premium and hygienic.",
    service: "Salon at home",
  },
];

export const faqs = [
  {
    question: "How do I book the exact service type?",
    answer:
      "Click a service card, choose the exact type such as Split AC service or Window AC service, then use the booking action on that type page.",
  },
  {
    question: "Are prices final before the professional visits?",
    answer:
      "The shown price is a starter estimate. Final cost depends on scope, materials, spare parts, and add-ons confirmed before work starts.",
  },
  {
    question: "Can I track the assigned professional?",
    answer:
      "Yes. The planned flow supports job assignment, ETA, status updates, and manager-side tracking for field teams.",
  },
  {
    question: "What happens if I need support after service?",
    answer:
      "Each eligible service can include support windows, inspection notes, and customer feedback so follow-up is easy to manage.",
  },
  {
    question: "Can I choose the time slot myself?",
    answer:
      "Yes. You can pick a convenient date and time slot based on availability for the selected service type.",
  },
  {
    question: "Do professionals bring tools and materials?",
    answer:
      "Professionals carry basic tools for inspection and standard work. If extra materials or spare parts are needed, the cost is shared before work begins.",
  },
  {
    question: "Is there a visiting charge?",
    answer:
      "Some services may include a basic visiting or inspection charge. It is shown with the service or confirmed before the professional visit.",
  },
  {
    question: "Can I call before booking?",
    answer:
      "Yes. You can use the Call Now option if you need help choosing the right service or service type.",
  },
  {
    question: "What if I choose the wrong service type?",
    answer:
      "The professional can review the requirement during inspection and suggest the correct service type before starting work.",
  },
  {
    question: "Do you provide same-day service?",
    answer:
      "Same-day slots may be available for services like AC repair, plumbing, electrical work, and cleaning depending on your location and team availability.",
  },
];

export const trustedPartners = [
  {
    name: "Verified Professionals",
    detail: "Background-checked service experts",
    metric: "2.4k+",
  },
  {
    name: "Quality Supply Network",
    detail: "Approved tools and consumables",
    metric: "180+",
  },
  {
    name: "City Operations Teams",
    detail: "Managers for assignment and SLA",
    metric: "42",
  },
  {
    name: "Customer Support Desk",
    detail: "Escalation and feedback handling",
    metric: "7 days",
  },
];

export const industriesWeServe = [
  {
    name: "Residential societies",
    image: "/services/deep-cleaning-photo.png",
    detail: "Apartments, villas, and gated communities",
  },
  {
    name: "Corporate offices",
    image: "/services/electrician-photo.png",
    detail: "Workspaces, cabins, and admin facilities",
  },
  {
    name: "Hotels & resorts",
    image: "/services/ac-repair-photo.png",
    detail: "Guest rooms, kitchens, and maintenance areas",
  },
  {
    name: "Restaurants & cafes",
    image: "/services/plumbing-photo.png",
    detail: "Cleaning, plumbing, electrical, and AC support",
  },
  {
    name: "Retail stores",
    image: "/services/salon-photo.png",
    detail: "Showrooms, salons, and customer-facing spaces",
  },
];

export const roleCards = [
  {
    role: "Customer",
    title: "Book trusted home services",
    items: ["Saved addresses", "Live slot pricing", "Booking history"],
  },
  {
    role: "Admin",
    title: "Run services, users, and revenue",
    items: ["Manage bookings", "Service catalog", "Reports and payouts"],
  },
  {
    role: "Manager",
    title: "Assign jobs and track field work",
    items: ["Lead queue", "Team capacity", "Employee route status"],
  },
  {
    role: "Employee",
    title: "Complete assigned jobs faster",
    items: ["Today's jobs", "Job checklist", "Status updates"],
  },
];

export const metrics = [
  ["42", "active cities"],
  ["12k", "monthly bookings"],
  ["98%", "SLA compliance"],
  ["4.8", "avg. rating"],
];
