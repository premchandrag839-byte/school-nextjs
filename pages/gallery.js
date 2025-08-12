import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { AnimatePresence, motion } from "framer-motion";

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery/${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`
}));

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="font-inter">
      <SEO title="Gallery" description="Explore Blue Ridge School campus and events in our photo gallery." />
      <Navbar />

      <Section title="Photo Gallery" subtitle="Hover to preview. Click to open lightbox.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <button key={img.id} onClick={() => setActive(img)} className="group overflow-hidden rounded-lg border border-blue-100">
              <div className="aspect-square w-full placeholder-bg group-hover:scale-105 transition-transform" />
              <span className="sr-only">Open image {img.id}</span>
            </button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="max-w-3xl w-full">
              <div className="w-full aspect-video bg-white rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
