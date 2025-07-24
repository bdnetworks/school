import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Instagram
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import logo from '../assets/vatia_high_school_logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'হোম', href: '/' },
    { name: 'আমাদের সম্পর্কে', href: '/about' },
    { name: 'ভর্তি', href: '/admission' },
    { name: 'নোটিশ', href: '/notice' },
    { name: 'যোগাযোগ', href: '/contact' }
  ];

  const academicLinks = [
    { name: 'একাডেমিক', href: '/academics' },
    { name: 'শিক্ষক ও কর্মচারী', href: '/faculty' },
    { name: 'ছাত্র জীবন', href: '/student-life' },
    { name: 'গ্যালারি', href: '/gallery' },
    { name: 'ফলাফল', href: '/results' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Vatia High School" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Vatia High School</h3>
                <p className="text-sm opacity-80">ভাটিয়া হাই স্কুল</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              গুণগত শিক্ষা, নৈতিক মূল্যবোধ ও সৃজনশীলতার সমন্বয়ে গড়ে তুলছি আগামীর নেতৃত্ব। 
              আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীর সর্বোচ্চ সম্ভাবনা বিকশিত করা।
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">একাডেমিক</h4>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>Vatia High School</p>
                  <p>[ঠিকানা লিখতে হবে]</p>
                  <p>বাংলাদেশ</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm opacity-80">+880-XXX-XXXXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm opacity-80">info@vatiahighschool.edu.bd</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>সোম - বৃহ: সকাল ৮:০০ - বিকাল ৪:০০</p>
                  <p>শুক্র: সকাল ৮:০০ - দুপুর ১২:০০</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">নিউজলেটার সাবস্ক্রাইব করুন</h4>
            <p className="text-sm opacity-80 mb-4">
              স্কুলের সর্বশেষ খবর ও আপডেট পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="আপনার ইমেইল ঠিকানা"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © ২০২৫ Vatia High School. সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                প্রাইভেসি পলিসি
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                শর্তাবলী
              </Link>
              <Link to="/sitemap" className="hover:opacity-100 transition-opacity">
                সাইট ম্যাপ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

