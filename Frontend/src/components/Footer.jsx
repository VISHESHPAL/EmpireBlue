import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import navicon from  '../assets/navicon.png'
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-4">
            <img
              src={navicon}
              alt="Empire Blue Logo"
              className="h-10"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Providing clean and safe water solutions for a healthier tomorrow.
            Our commitment to quality and innovation makes us the trusted choice
            in water treatment.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-blue-900">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-pink-600">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-900">About Us</a></li>
            <li><a href="#" className="hover:text-blue-900">Our Services</a></li>
            <li><a href="#" className="hover:text-blue-900">Latest News</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-900">Water Testing</a></li>
            <li><a href="#" className="hover:text-blue-900">Water Purification</a></li>
            <li><a href="#" className="hover:text-blue-900">Water Treatment</a></li>
            <li><a href="#" className="hover:text-blue-900">Expert Consultation</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="text-blue-900" />
              <span>Empire Blue Pvt. Ltd.<br />Chhindwara, Madhya Pradesh, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-900" />
              <a href="tel:+918867268719" className="hover:text-blue-900">+91 8867268719</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-900" />
              <a href="mailto:info@empireblue.in" className="hover:text-blue-900">info@empireblue.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-6 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© 2025 Empire Blue. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-900">Privacy Policy</a>
          <a href="#" className="hover:text-blue-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
