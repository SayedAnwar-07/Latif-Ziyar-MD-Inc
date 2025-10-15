"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope,
  Phone,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/appointments", label: "Appointments" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#004a65] flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-[#004a65] transition-colors">
                Latif Ziyar MD Inc
              </h1>
              <p className="text-sm text-gray-600">Psychiatric Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive(item.href)
                    ? "text-[#004a65] border-b-2 border-[#004a65]"
                    : "text-gray-700 hover:text-[#004a65]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Call Today</p>
              <a
                href="tel:559-449-1209"
                className="text-[#004a65] font-semibold text-lg hover:text-[#00374d] transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                (559) 449-1209
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 px-4 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-[#004a65] bg-[#004a65] bg-opacity-5 border-l-4 border-[#004a65]"
                      : "text-gray-700 hover:text-[#004a65] hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 px-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Call Today</p>
                <a
                  href="tel:559-449-1209"
                  className="text-[#004a65] font-semibold text-lg hover:text-[#00374d] transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (559) 449-1209
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}