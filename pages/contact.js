import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { site } from "../config/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="font-inter">
      <SEO title="Contact" description={`Contact ${site.name} – ${site.address}. Phone: ${site.phone}`} />
      <Navbar />

      <Section title="Find Us">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="min-h-[300px] rounded-lg overflow-hidden border border-blue-100">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Husainganj%2C%20Fatehpur%20212651&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Contact Details</h3>
            <p className="text-gray-700 mt-2">Address: {site.address}</p>
            <p className="text-gray-700">Phone: {site.phone}</p>
            <p className="text-gray-700">Email: {site.email}</p>
          </div>
        </div>
      </Section>

      <Section title="Send a Message">
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?" />
          </div>
          <button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded bg-primary text-white hover:bg-primary-dark">Send</button>
          {sent && <p className="text-green-600">Thanks! We'll be in touch.</p>}
        </form>
      </Section>

      <Footer />
    </div>
  );
}
