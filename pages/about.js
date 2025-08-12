import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <div className="font-inter">
      <SEO title="About Us" description="Learn about Blue Ridge School's history, vision, mission, and leadership." />
      <Navbar />

      <Section title="Our Story" subtitle="A legacy of excellence and innovation in education.">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <p className="text-gray-700 leading-relaxed">Founded in 1995, Blue Ridge School has grown into a vibrant community of learners. Our commitment is to provide a nurturing environment where students thrive academically and personally.</p>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-32 sm:h-40 w-full rounded-lg placeholder-bg" />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Vision & Mission">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 p-6">
            <h3 className="font-semibold text-gray-800">Vision</h3>
            <p className="text-gray-700 mt-2">To empower students to become compassionate leaders and lifelong learners who positively impact the world.</p>
          </div>
          <div className="rounded-xl border border-blue-100 p-6">
            <h3 className="font-semibold text-gray-800">Mission</h3>
            <p className="text-gray-700 mt-2">To deliver holistic education that fosters intellectual curiosity, creativity, and character through innovative teaching and community engagement.</p>
          </div>
        </div>
      </Section>

      <Section title="Principal's Message">
        <div className="grid gap-6 md:grid-cols-[200px,1fr] items-start">
          <div className="h-48 w-48 rounded-full placeholder-bg mx-auto md:mx-0" />
          <div>
            <p className="text-gray-700 leading-relaxed">Dear students and parents, welcome to Blue Ridge School. We believe in a balanced education that nurtures the mind and heart. Together, we will cultivate a community of respect, responsibility, and resilience.</p>
            <p className="mt-2 font-semibold text-gray-800">- Dr. A. Sharma, Principal</p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
