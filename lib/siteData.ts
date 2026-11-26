/**
 * ─────────────────────────────────────────────────────────────
 *  ALL WEBSITE CONTENT LIVES HERE.
 *  Edit text, dates, names, fees, links in this one file —
 *  the components pick everything up automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const conference = {
  shortName: "ICTWM 3.0",
  edition: "3rd International Conference",
  titleLine1: "Transforming Waste Management",
  titleLine2: "Circular Economy & Energy Sustainability",
  fullTitle:
    "International Conference on Transforming Waste Management: Circular Economy & Energy Sustainability – 3.0",
  tagline: "From Waste to Worth — Engineering a Circular, Net-Zero Future",
  dates: "11 – 13 March 2027",
  // Countdown target (IST). Format: YYYY-MM-DDTHH:mm:ss+05:30
  startDateISO: "2027-03-11T09:00:00+05:30",
  venue: "Indian Institute of Technology Roorkee",
  venueShort: "IIT Roorkee, Uttarakhand, India",
  mode: "Hybrid (In-person + Online)",
  email: "ictwm3@iitr.ac.in",
  phone: "+91 00000 00000",
  registerUrl: "#registration",
  submitUrl: "#important-dates",
  brochureUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Dates", href: "#important-dates" },
  { label: "Speakers", href: "#speakers" },
  { label: "Committee", href: "#committee" },
  { label: "Registration", href: "#registration" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

/** Hero slider — IIT Roorkee campus photos (Wikimedia Commons, CC licensed). */
export const heroSlides = [
  { src: "/images/slider/admin-block.jpg", caption: "Main Building, IIT Roorkee" },
  { src: "/images/slider/main-lawn.jpg", caption: "James Thomason Building & Lawns" },
  { src: "/images/slider/main-building.jpg", caption: "The Iconic Dome — Est. 1847" },
  { src: "/images/slider/sunrise.jpg", caption: "Sunrise over the Main Building" },
  { src: "/images/slider/central-library.jpg", caption: "Mahatma Gandhi Central Library" },
];

export const announcements = [
  "Call for Abstracts opens 1 December 2026",
  "Early-bird registration closes 10 February 2027",
  "Selected papers to be published in Scopus-indexed proceedings (to be confirmed)",
  "Best Paper & Best Poster awards in every track",
  "Industry Expo on Waste-to-Energy & Recycling Technologies",
];

export const aboutConference = {
  heading: "About the Conference",
  paragraphs: [
    "Building on the success of its first two editions, the 3rd International Conference on Transforming Waste Management: Circular Economy & Energy Sustainability brings together researchers, policymakers, industry leaders, urban local bodies and start-ups to reimagine waste as a resource.",
    "Over three days at IIT Roorkee, participants will explore technologies and policies that close material loops, recover energy from waste streams and accelerate the transition to a low-carbon, resource-efficient economy — in line with India's Swachh Bharat Mission, Mission LiFE and Net-Zero 2070 commitments.",
    "The programme features keynote addresses, plenary panels, technical sessions, poster presentations, an industry exhibition and hands-on workshops.",
  ],
  highlights: [
    "Keynotes by global experts",
    "Technical & poster sessions",
    "Industry–academia conclave",
    "Start-up & innovation showcase",
    "Pre-conference workshops",
    "Campus & site visits",
  ],
};

export const aboutIITR = {
  heading: "About IIT Roorkee",
  image: "/images/campus/thomason.jpg",
  paragraphs: [
    "The Indian Institute of Technology Roorkee is among the oldest technical institutions in Asia. Founded in 1847 as the Roorkee College to train engineers for the Ganga Canal project, it was renamed Thomason College of Civil Engineering in 1854, became the University of Roorkee in 1949 and was converted into India's seventh IIT in 2001.",
    "Spread over a green 365-acre campus on the banks of the Upper Ganga Canal, the Institute has over 20 academic departments and several centres of excellence, and is consistently ranked among India's top engineering institutions in NIRF.",
    "IIT Roorkee has a long legacy of research in environmental engineering, water resources, hydrology and renewable energy — making it a natural home for a conference on sustainable waste management.",
  ],
  stats: [
    { value: "1847", label: "Year of Establishment" },
    { value: "175+", label: "Years of Legacy" },
    { value: "20+", label: "Academic Departments" },
    { value: "Top 10", label: "NIRF Engineering" },
  ],
};

export const themes = [
  {
    icon: "Trash2",
    title: "Municipal Solid Waste Management",
    points: ["Segregation & collection systems", "Sanitary landfills & legacy waste", "Decentralised composting"],
  },
  {
    icon: "Recycle",
    title: "Circular Economy & Resource Recovery",
    points: ["Design for recycling", "Extended Producer Responsibility", "Industrial symbiosis"],
  },
  {
    icon: "Flame",
    title: "Waste-to-Energy & Bioenergy",
    points: ["Anaerobic digestion & biogas", "Pyrolysis & gasification", "Refuse-derived fuel"],
  },
  {
    icon: "Package",
    title: "Plastic Waste & Sustainable Materials",
    points: ["Chemical & mechanical recycling", "Biodegradable alternatives", "Marine litter"],
  },
  {
    icon: "Cpu",
    title: "E-Waste & Hazardous Waste",
    points: ["Critical metal recovery", "Battery recycling", "Biomedical waste"],
  },
  {
    icon: "Droplets",
    title: "Wastewater Treatment & Reuse",
    points: ["Sludge management", "Nutrient recovery", "Zero Liquid Discharge"],
  },
  {
    icon: "Sun",
    title: "Renewable Energy & Net-Zero Transition",
    points: ["Green hydrogen from waste", "Carbon capture & utilisation", "Life-cycle assessment"],
  },
  {
    icon: "Wheat",
    title: "Agricultural, Biomass & C&D Waste",
    points: ["Crop-residue management", "Construction & demolition waste", "Bio-based products"],
  },
  {
    icon: "Landmark",
    title: "Policy, Governance & Digital Solutions",
    points: ["AI/IoT for smart waste systems", "Waste-picker inclusion", "Green finance & carbon markets"],
  },
];

export const objectives = [
  "Provide a global platform to share cutting-edge research in waste management and resource recovery.",
  "Promote circular-economy business models and policy frameworks for developing economies.",
  "Showcase scalable waste-to-energy and clean-energy technologies.",
  "Strengthen industry–academia–government collaboration for sustainable cities.",
  "Encourage young researchers and start-ups working on green innovation.",
];

export const whoShouldAttend = [
  "Researchers & Academicians",
  "PhD / PG / UG Students",
  "Industry Professionals",
  "Urban Local Bodies & Municipal Officers",
  "Policymakers & Regulators",
  "Start-ups & Entrepreneurs",
  "NGOs & Civil Society",
  "Environmental Consultants",
];

export const importantDates = [
  { date: "01 Dec 2026", event: "Call for Abstracts Opens" },
  { date: "31 Dec 2026", event: "Last Date for Abstract Submission" },
  { date: "15 Jan 2027", event: "Notification of Acceptance" },
  { date: "31 Jan 2027", event: "Full Paper Submission" },
  { date: "10 Feb 2027", event: "Early-Bird Registration Closes" },
  { date: "28 Feb 2027", event: "Final Registration Deadline" },
  { date: "11–13 Mar 2027", event: "Conference Days at IIT Roorkee", highlight: true },
];

export const speakers = [
  { name: "Prof. Speaker Name", role: "Professor, Environmental Engg.", org: "University, Country" },
  { name: "Dr. Speaker Name", role: "Director, Waste Research Centre", org: "Institute, Country" },
  { name: "Prof. Speaker Name", role: "Chair, Circular Economy Lab", org: "University, Country" },
  { name: "Mr. Speaker Name", role: "CEO, Green Energy Pvt. Ltd.", org: "Industry, India" },
  { name: "Dr. Speaker Name", role: "Scientist, Ministry / Agency", org: "Government of India" },
  { name: "Prof. Speaker Name", role: "Dean, Sustainability", org: "University, Country" },
  { name: "Dr. Speaker Name", role: "Senior Advisor, UNEP", org: "International Org." },
  { name: "Prof. Speaker Name", role: "Professor, Chemical Engg.", org: "IIT Roorkee, India" },
];

export const committee = {
  patrons: [
    { name: "Prof. Name Surname", role: "Chief Patron", org: "Director, IIT Roorkee" },
    { name: "Prof. Name Surname", role: "Patron", org: "Deputy Director, IIT Roorkee" },
  ],
  chairs: [
    { name: "Prof. Name Surname", role: "Conference Chair", org: "Department, IIT Roorkee" },
    { name: "Prof. Name Surname", role: "Co-Chair", org: "Department, IIT Roorkee" },
    { name: "Dr. Name Surname", role: "Organising Secretary", org: "Department, IIT Roorkee" },
    { name: "Dr. Name Surname", role: "Joint Secretary", org: "Department, IIT Roorkee" },
  ],
  advisory: [
    "Prof. Name Surname — University, Country",
    "Prof. Name Surname — University, Country",
    "Dr. Name Surname — Organisation, India",
    "Prof. Name Surname — IIT, India",
    "Dr. Name Surname — Research Institute, Country",
    "Prof. Name Surname — University, Country",
    "Mr. Name Surname — Industry, India",
    "Prof. Name Surname — NIT, India",
  ],
};

export const fees = {
  note: "Fees include conference kit, access to all sessions, lunch, tea and conference dinner. 18% GST applicable for Indian participants.",
  columns: ["Category", "Early Bird (till 10 Feb 2027)", "Regular (after 10 Feb 2027)"],
  rows: [
    ["Students / Research Scholars (India)", "₹ 4,000", "₹ 5,000"],
    ["Academicians / Faculty (India)", "₹ 7,000", "₹ 8,500"],
    ["Industry Professionals (India)", "₹ 10,000", "₹ 12,000"],
    ["Foreign Students", "US$ 150", "US$ 200"],
    ["Foreign Delegates", "US$ 300", "US$ 350"],
    ["Accompanying Person / Attendee", "₹ 3,000", "₹ 3,500"],
  ],
  steps: [
    "Submit your abstract and receive acceptance",
    "Fill the online registration form",
    "Pay the fee via the secure payment gateway",
    "Email the payment receipt to the secretariat",
  ],
};

export const venue = {
  heading: "Venue & How to Reach",
  address: "Indian Institute of Technology Roorkee, Roorkee – 247667, Uttarakhand, India",
  mapEmbed: "https://www.google.com/maps?q=IIT+Roorkee&output=embed",
  howToReach: [
    { mode: "By Air", text: "Jolly Grant Airport, Dehradun (~70 km) — about 1.5 hrs by road." },
    { mode: "By Rail", text: "Roorkee Railway Station (~2 km) on the Delhi–Haridwar–Dehradun line." },
    { mode: "By Road", text: "~180 km from New Delhi via NH-334; regular buses from ISBT Kashmere Gate." },
  ],
};

export const contacts = [
  { name: "Dr. Name Surname", role: "Organising Secretary", phone: "+91 00000 00000", email: "ictwm3@iitr.ac.in" },
  { name: "Dr. Name Surname", role: "Joint Secretary", phone: "+91 00000 00000", email: "ictwm3@iitr.ac.in" },
];

export const footerLinks = [
  { label: "IIT Roorkee", href: "https://www.iitr.ac.in" },
  { label: "Swachh Bharat Mission", href: "https://swachhbharatmission.ddws.gov.in" },
  { label: "MoEFCC", href: "https://moef.gov.in" },
  { label: "CPCB", href: "https://cpcb.nic.in" },
];
