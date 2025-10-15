"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#004a65] text-sm font-medium mb-4 border-b-[#004a65]">
              <Calendar className="w-4 h-4" />
              COMPREHENSIVE PSYCHIATRIC CARE
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Mental Health Treatment in Fresno
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Board-certified psychiatric services specializing in addiction medicine, 
              depression treatment, and personalized mental health care for lasting wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#004a65] text-white rounded-none px-8 py-4 text-base font-semibold hover:bg-[#00374d] transition-colors flex items-center gap-2"
                data-testid="hero-schedule-button"
              >
                <Calendar className="w-5 h-5" />
                Schedule Appointment
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 border-[#004a65] text-[#004a65] rounded-none px-8 py-4 text-base font-semibold hover:bg-[#004a65] hover:text-white transition-all flex items-center gap-2"
                data-testid="hero-learn-more-button"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[#004a65]"></div>
                Board Certified Psychiatrist
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[#004a65]"></div>
                Same Day Appointments
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[#004a65]"></div>
                Insurance Accepted
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-96 border-2 border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern psychiatric office with comfortable seating area"
                fill
                className="object-cover"
                data-testid="hero-office-image"
                priority
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#004a65] bg-opacity-10 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-[#004a65]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Same Day</p>
                  <p className="text-gray-600 text-xs">Appointments Available</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-[#004a65] text-white px-4 py-2">
              <p className="text-sm font-medium">15+ Years Experience</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}