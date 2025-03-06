"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login screen. You'll receive a reset link on your email.",
  },
  {
    question: "How to post a property?",
    answer: "Go to 'Post Property' on the top nav. Fill in the required details and submit.",
  },
  {
    question: "How to contact customer support?",
    answer: "Use our helpline number or email us at support@99acres.com. We’re here 24/7.",
  },
];

export default function HelpSupportPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <section className="max-w-6xl mx-auto p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <GeneralQuestions />
            <ContactForm />
          </div>

          <HowItHelps />
          <BrowseByTopic />
          <ExpertSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------------
   1) HEADER (NAVBAR)
------------------------------------- */
function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">99acres</div>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
            1800-XXX-XXXX
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
            Mail us
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
            FAQs
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
            My Account
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
            Post Property
          </a>
        </nav>
      </div>
    </header>
  );
}

/* -------------------------------------
   2) BANNER / SEARCH SECTION
------------------------------------- */
function Banner() {
  return (
    <div className="bg-blue-800 py-10 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Hello, how can we help?</h1>
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder="Search by Keywords"
            className="w-full rounded-md p-3 pr-10 text-black outline-none"
          />
          <Search className="absolute right-3 top-3 text-gray-500" size={20} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------
   3) GENERAL QUESTIONS (FAQ)
------------------------------------- */
function GeneralQuestions() {
  return (
    <div className="w-full md:w-2/3">
      <h2 className="text-xl font-bold mb-4">General Questions</h2>
      <div className="bg-white shadow-sm rounded-md p-4">
        <FAQList />
      </div>
      <p className="text-sm text-gray-500 mt-2">
        *These are some of our most asked questions. Still need help? Call or email us.
      </p>
    </div>
  );
}

function FAQList() {
  return (
    <div className="space-y-2">
      {faqData.map((item, idx) => (
        <FAQItem key={idx} item={item} />
      ))}
    </div>
  );
}

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 text-left"
      >
        <span className="font-medium">{item.question}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-gray-50 px-4 py-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-700">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------
   4) CONTACT FORM
------------------------------------- */
function ContactForm() {
  return (
    <div className="w-full md:w-1/3 bg-white shadow-sm rounded-md p-4 h-fit">
      <h2 className="text-xl font-bold mb-2">We’ll get in touch with you</h2>
      <p className="text-gray-600 mb-4 text-sm">
        Fill out the details and our support team will call or email you back.
      </p>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2 border rounded-md outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded-md outline-none"
          rows={3}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

/* -------------------------------------
   5) HOW FAQ HELPS USERS
------------------------------------- */
function HowItHelps() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-2">How can 99acres FAQ help users?</h3>
      <p className="text-gray-700 mb-4">
        Our FAQs are designed to quickly answer your questions about using the 99acres platform,
        property search, posting listings, and more. Whether you’re a buyer, seller, or agent, we
        cover common queries to help you navigate easily.
      </p>
      <p className="text-gray-700">
        Explore topics like property listing, site features, pricing, and more. For additional
        support, feel free to reach out to our customer service.
      </p>
    </div>
  );
}

/* -------------------------------------
   6) BROWSE QUESTIONS BY TOPIC
------------------------------------- */
function BrowseByTopic() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">BROWSE QUESTIONS BY TOPIC</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TopicCard
          title="Property Listing"
          items={[
            "View or Edit Listing",
            "Delete Listing",
            "Featured Listing",
            "Property Verification",
          ]}
        />
        <TopicCard
          title="Manage Services"
          items={["Renew Services", "Upgrade Plan", "Payment & Billing", "Refunds"]}
        />
        <TopicCard
          title="Login / Registration"
          items={["Create Account", "Reset Password", "Change Profile Info", "Email Preferences"]}
        />
        <TopicCard
          title="Enquiry / Complaint"
          items={["General Feedback", "Report a Bug", "Escalate Issue", "Resolve Dispute"]}
        />
      </div>
    </div>
  );
}

function TopicCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------
   7) EXPERT SECTION + ARTICLES
------------------------------------- */
function ExpertSection() {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Expert Section</h3>
        <button className="text-blue-600 hover:underline text-sm">View all Experts</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExpertCard name="John Realtor" expertise="Real Estate Consultant" />
        <ExpertCard name="Jane Builder" expertise="Construction Expert" />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ArticleCard
            title="How to get a home loan easily"
            desc="Step-by-step guide to secure a home loan without hassle."
          />
          <ArticleCard
            title="Tips for first-time home buyers"
            desc="Important things to keep in mind when buying your first property."
          />
          <ArticleCard
            title="Renovation trends in 2025"
            desc="Explore the latest design and renovation trends for modern homes."
          />
        </div>
      </div>
    </div>
  );
}

function ExpertCard({ name, expertise }: { name: string; expertise: string }) {
  return (
    <div className="bg-white rounded-md shadow p-4 flex flex-col justify-between">
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{expertise}</p>
      </div>
      <button className="text-blue-600 text-sm mt-4 hover:underline">Ask a Question</button>
    </div>
  );
}

function ArticleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{desc}</p>
      <button className="text-blue-600 text-sm hover:underline">Read More</button>
    </div>
  );
}

/* -------------------------------------
   8) FOOTER
------------------------------------- */
function Footer() {
  return (
    <footer className="bg-white mt-8 border-t">
      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <FooterLinkGroup
            title="About 99acres"
            links={["About Us", "Careers", "Contact Us", "Privacy Policy"]}
          />
          <FooterLinkGroup
            title="Browse By City"
            links={["Bangalore", "Mumbai", "Delhi", "Kolkata"]}
          />
          <FooterLinkGroup
            title="Real Estate Tools"
            links={["Home Loan", "EMI Calculator", "Property Valuation", "Area Converter"]}
          />
          <FooterLinkGroup
            title="More Links"
            links={["Sitemap", "Terms & Conditions", "Media Coverage", "Help & Support"]}
          />
        </div>
        <p className="text-sm text-gray-500 text-center">
          All rights reserved · Info Edge (India) Ltd. A naukri.com group company
        </p>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="font-bold mb-2 text-gray-800">{title}</h5>
      <ul className="space-y-1 text-sm text-gray-600">
        {links.map((link, idx) => (
          <li key={idx} className="hover:underline hover:text-blue-600 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
