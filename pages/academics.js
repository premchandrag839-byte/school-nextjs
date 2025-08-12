import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function AcademicsPage() {
  const classes = [
    { name: "Primary (I - V)", desc: "Foundational literacy, numeracy, and creativity." },
    { name: "Middle (VI - VIII)", desc: "Strengthening concepts with interdisciplinary projects." },
    { name: "Secondary (IX - X)", desc: "Focused subject learning and skill development." },
    { name: "Senior Secondary (XI - XII)", desc: "Science, Commerce, and Arts streams." }
  ];

  return (
    <div className="font-inter">
      <SEO title="Academics" description="Curriculum, classes offered, and timetable downloads at Blue Ridge School." />
      <Navbar />

      <Section title="Curriculum" subtitle="Comprehensive, inquiry-based learning aligned with national standards.">
        <p className="text-gray-700 max-w-3xl">Our curriculum integrates core subjects with arts, sports, and technology. We encourage critical thinking and hands-on learning through labs, clubs, and field trips.</p>
      </Section>

      <Section title="Classes Offered">
        <div className="grid gap-6 md:grid-cols-2">
          {classes.map((c) => (
            <div key={c.name} className="rounded-xl border border-blue-100 p-6 hover:shadow transition">
              <h3 className="font-semibold text-gray-800">{c.name}</h3>
              <p className="text-gray-700 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Timetable">
        <a href="/assets/sample-timetable.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-primary text-white hover:bg-primary-dark">
          Download Timetable (PDF)
        </a>
        <p className="text-sm text-gray-600 mt-2">Replace the file at `public/assets/sample-timetable.pdf` with your timetable.</p>
      </Section>

      <Footer />
    </div>
  );
}
