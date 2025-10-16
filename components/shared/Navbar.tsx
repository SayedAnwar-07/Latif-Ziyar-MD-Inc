"use client";

import { useState, useEffect, useMemo } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  // Memoize homeSections to prevent unnecessary re-renders
  const homeSections = useMemo(() => [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact" },
  ], []);

  const navItems = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/appointments", label: "Appointments" },
    { href: "/blog", label: "Blog" },
  ], []);

  // Update active section based on scroll position - CLIENT SIDE ONLY
  useEffect(() => {
    if (pathname !== "/" || !isClient) return;

    const handleScroll = () => {
      const sections = homeSections.map(sectionItem => sectionItem.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isClient, homeSections]); // Added homeSections to dependencies

  // Helper function to check if a section is active
  const isSectionActive = (sectionId: string) => {
    return pathname === "/" && activeSection === sectionId && isClient;
  };

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
              <h1 className="text-lg lg:text-base xl:text-lg font-bold text-gray-900 group-hover:text-[#004a65] transition-colors">
                Latif Ziyar MD Inc
              </h1>
              <p className="text-sm text-gray-600">Psychiatric Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {pathname === "/" ? (
              // Home page navigation with scroll functionality and active states
              <>
                {homeSections.map((sectionItem) => (
                  <button
                    key={sectionItem.id}
                    onClick={() => scrollToSection(sectionItem.id)}
                    className={`text-sm font-medium transition-colors uppercase ${
                      isSectionActive(sectionItem.id)
                        ? "text-[#004a65] border-b-2 border-[#004a65]"
                        : "text-gray-700 hover:text-[#004a65]"
                    }`}
                    data-testid={`nav-${sectionItem.id}`}
                  >
                    {sectionItem.label}
                  </button>
                ))}
                {/* Regular navigation items for other pages */}
                {navItems.filter(item => item.href !== "/").map((item) => (
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
              </>
            ) : (
              // Regular navigation for other pages
              navItems.map((item) => (
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
              ))
            )}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Call Today</p>
              <a
                href="tel:559-449-1209"
                className="text-[#004a65] font-semibold text-lg lg:text-base xl:text-lg hover:text-[#00374d] transition-colors flex items-center"
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
            className="lg:hidden p-2"
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
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              {pathname === "/" ? (
                // Home page mobile navigation with scroll functionality and active states
                <>
                  {homeSections.map((sectionItem) => (
                    <button
                      key={sectionItem.id}
                      onClick={() => scrollToSection(sectionItem.id)}
                      className={`py-2 px-4 text-base font-medium transition-colors text-left ${
                        isSectionActive(sectionItem.id)
                          ? "text-[#004a65] bg-[#004a65] bg-opacity-5 border-l-4 border-[#004a65]"
                          : "text-gray-700 hover:text-[#004a65] hover:bg-gray-50"
                      }`}
                      data-testid={`nav-${sectionItem.id}`}
                    >
                      {sectionItem.label}
                    </button>
                  ))}
                  {/* Regular navigation items for other pages */}
                  {navItems.filter(item => item.href !== "/").map((item) => (
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
                </>
              ) : (
                // Regular mobile navigation for other pages
                navItems.map((item) => (
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
                ))
              )}
              
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