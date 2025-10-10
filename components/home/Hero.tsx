"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Compassionate Mental Health Care in Fresno
            </h1>
            <p className="text-xl text-black/90 mb-8 leading-relaxed">
              Our team provides comprehensive psychiatric services including addiction medicine, depression treatment, and Suboxone therapy to help you achieve lasting wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-card text-black px-8 py-4 rounded-lg font-semibold hover:bg-card/90 transition-colors border hover:bg-gray-50"
                data-testid="hero-schedule-button"
              >
                Schedule Appointment
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-lg font-semibold bg-black text-white transition-colors hover:bg-gray-800"
                data-testid="hero-learn-more-button"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern medical office with comfortable seating"
                fill
                className="object-cover"
                data-testid="hero-office-image"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M8 2v4l-4-4"/>
                    <path d="M22 20L2 20"/>
                    <path d="M21 3v6l-6-6"/>
                    <path d="M3 21V9l9-9"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black">Same Day</p>
                  <p className="text-black/70 text-sm">Appointments Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
