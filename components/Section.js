import { motion } from "framer-motion";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
        </motion.div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
