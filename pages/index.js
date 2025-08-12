import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <div className="font-inter">
      <SEO title="Home" description="Welcome to AKASH INTER COLLEGE. Admissions open. Explore academics, campus life, and more." />
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <Slider />
      </div>

      <Section title="Why Choose Us" subtitle="Holistic development through academics, sports, and arts.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Modern Classrooms", "Qualified Faculty", "Sports & Arts", "STEM Labs", "Library", "Clubs"].map((feature) => (
            <div key={feature} className="rounded-lg border border-blue-100 p-6 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded bg-primary/10 text-primary flex items-center justify-center mb-3">★</div>
              <h3 className="font-semibold text-gray-800">{feature}</h3>
              <p className="text-sm text-gray-600 mt-1">Brief description about {feature.toLowerCase()} and its benefits.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Upcoming Events" subtitle="Stay updated with school activities and announcements.">
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl border border-blue-100 p-5 hover:shadow-md transition">
              <div className="h-40 w-full rounded-lg placeholder-bg" />
              <h4 className="mt-3 font-semibold text-gray-800">Event Title {i}</h4>
              <p className="text-sm text-gray-600">Short description of the event details and date.</p>
              <button className="mt-3 text-primary hover:underline">Learn more</button>
            </article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
