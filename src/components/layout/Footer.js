import Link from "next/link";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#091b27] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="text-sm">
              Integral IQ is a platform that empowers entrepreneurs by providing essential tools, resources, and mentorship to help them scale their startups effectively.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-sm hover:text-[#91e0ed]">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#91e0ed]">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#91e0ed]">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#91e0ed]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm">
              Email: <Link href="mailto:mail@integraliq.com" className="hover:text-[#91e0ed]">mail@integraliq.com</Link>
            </p>
            <p className="text-sm">Phone: +91 9656250000</p>
            <p className="text-sm">
              Address: 7th floor, Capital City, Round North, Thrissur, Kerala 680020
            </p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="grid grid-cols-3 gap-y-6">
              <Link href="https://www.facebook.com/IntegraliqBi" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaFacebookF />
              </Link>
              <Link href="https://x.com/integral_iQ" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaXTwitter />
              </Link>
              <Link href="https://www.instagram.com/integraliqbic" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaLinkedinIn />
              </Link>
              <Link href="https://instagram.com" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaInstagram />
              </Link>
              <Link href="https://youtube.com" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaYoutube />
              </Link>
              <Link href="https://www.threads.net" className="text-xl hover:text-[#91e0ed] inline-block">
                <FaSquareThreads />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider Line and Footer Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Integral IQ. All rights reserved | Powered by Quantquotient
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
