import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[--color-primary] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl">Nhà Hàng Việt</h3>
            <p className="font-vietnam text-sm">
              123 Vietnamese Street<br />
              City, State 12345<br />
              Tel: (123) 456-7890
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[--color-secondary]">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-[--color-secondary]">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-[--color-secondary]">
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl">Hours</h3>
            <ul className="font-vietnam text-sm space-y-2">
              <li>
                <span className="font-medium">Lunch</span><br />
                Mon-Fri: 11:30 AM - 2:30 PM
              </li>
              <li>
                <span className="font-medium">Dinner</span><br />
                Mon-Sun: 5:30 PM - 10:00 PM
              </li>
              <li>
                <span className="font-medium">Weekend Brunch</span><br />
                Sat-Sun: 10:30 AM - 3:00 PM
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl">Quick Links</h3>
            <ul className="font-vietnam text-sm space-y-2">
              <li>
                <Link href="/menu" className="hover:text-[--color-secondary]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-[--color-secondary]">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/private-events" className="hover:text-[--color-secondary]">
                  Private Events
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[--color-secondary]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl">Newsletter</h3>
            <p className="font-vietnam text-sm">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md
                focus:outline-none focus:border-[--color-secondary] text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[--color-secondary] rounded-md text-sm
                hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-vietnam text-sm">
              © {new Date().getFullYear()} Nhà Hàng Việt. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-vietnam">
              <Link href="/privacy" className="hover:text-[--color-secondary]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[--color-secondary]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 