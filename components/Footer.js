import Image from "next/image";
import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="AKASH INTER COLLEGE logo" width={32} height={32} className="h-8 w-8 rounded" />
            <span className="font-bold text-primary">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Nurturing minds, shaping futures. Excellence in education and character development.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Contact</h3>
          <p className="mt-2 text-sm text-gray-600">{site.address}</p>
          <p className="text-sm text-gray-600">Phone: {site.phone}</p>
          <p className="text-sm text-gray-600">Email: {site.email}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a className="hover:text-primary" href="/about">About</a></li>
            <li><a className="hover:text-primary" href="/academics">Academics</a></li>
            <li><a className="hover:text-primary" href="/admissions">Admissions</a></li>
            <li><a className="hover:text-primary" href="/gallery">Gallery</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-100 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
