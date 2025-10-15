"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 4v16l-4-2-4 2V4M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                <path d="M12 8h.01M12 12h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Latif Ziyar MD Inc</h1>
              <p className="text-sm text-muted-foreground">Psychiatric Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {pathname === "/" ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Resources
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              href="/appointments"
              className="text-foreground hover:text-primary transition-colors"
            >
              Appointments
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Call Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Call Today</p>
              <a
                href="tel:559-449-1209"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                (559) 449-1209
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {pathname === "/" ? (
                <>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-foreground hover:text-primary transition-colors text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-foreground hover:text-primary transition-colors text-left"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("resources")}
                    className="text-foreground hover:text-primary transition-colors text-left"
                  >
                    Resources
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-foreground hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                href="/appointments"
                className="text-foreground hover:text-primary transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Appointments
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Call Info Mobile */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">Call Today</p>
                <a
                  href="tel:559-449-1209"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
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
