import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              THE GREAT LPU&apos;S IDEATHON 2025
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Organized by Student Career Committee, School of Computer Science and Engineering, LPU.
              Empowering the Green Revolution through AI and Innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/cse_lpu/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} className="sm:w-6 sm:h-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/scselpu/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link href="#about" className="text-gray-400 hover:text-white">About Event</Link></li>
              <li><Link href="#speakers" className="text-gray-400 hover:text-white">Speakers</Link></li>
              <li><Link href="#timeline" className="text-gray-400 hover:text-white">Timeline</Link></li>
              <li><Link href="#tracks" className="text-gray-400 hover:text-white">Innovation Tracks</Link></li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Event Details</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>📅 27 Oct - 11 Nov 2025</li>
              <li>📍 Lovely Professional University</li>
              <li>💰 ₹45L Seed Funding</li>
              <li>🎓 SCSE, LPU</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <FaPhone className="text-purple-400 mt-1 flex-shrink-0" size={14} />
                <div>
                  <p className="font-semibold text-white">Sahil Mishra</p>
                  <a href="tel:+916206686464" className="hover:text-purple-400 transition-colors">
                    +91 62066 86464
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="text-purple-400 mt-1 flex-shrink-0" size={14} />
                <div>
                  <p className="font-semibold text-white">Khitish Kumar</p>
                  <a href="tel:+917008788058" className="hover:text-purple-400 transition-colors">
                    +91 7008788058
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-lg font-semibold text-gray-400">Powered by</h4>
            <div className="p-4 bg-white/5 rounded-lg">
              <Image
                src="/images/partners/vickybytes.jpeg"
                alt="Vickeybytes"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 AI Innovation Summit - The Great LPU&apos;s Ideathon 2025. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm">Organized by Student Career Committee, School of Computer Science and Engineering</p>
        </div>
      </div>
    </footer>
  );
}
