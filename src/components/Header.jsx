import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/vatia_high_school_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'হোম', href: '/', key: 'home' },
    { name: 'আমাদের সম্পর্কে', href: '/about', key: 'about' },
    { name: 'একাডেমিক', href: '/academics', key: 'academics' },
    { name: 'শিক্ষক ও কর্মচারী', href: '/faculty', key: 'faculty' },
    { name: 'ছাত্র জীবন', href: '/student-life', key: 'student-life' },
    { name: 'ভর্তি', href: '/admission', key: 'admission' },
    { name: 'নোটিশ', href: '/notice', key: 'notice' },
    { name: 'গ্যালারি', href: '/gallery', key: 'gallery' },
    { name: 'যোগাযোগ', href: '/contact', key: 'contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+880-XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@asbacademy.edu.bd</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>অফিস সময়: সকাল ৮:০০ - বিকাল ৪:০০</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="ASB ACADEMY" className="h-16 w-16" />
            <div>
              <h1 className="text-2xl font-bold text-primary">ASB ACADEMY</h1>
              <p className="text-sm text-muted-foreground">এ.এস.বি (আয়েশা সালাম ভূঞা) একাডেমী</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

