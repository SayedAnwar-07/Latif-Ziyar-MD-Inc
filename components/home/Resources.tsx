"use client";

import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../common/Header";
import { 
  ClipboardList,
  Pill,
  CalendarClock,
  Brain,
  FileText,
  HeartPulse,
  Clock,
  BookOpen
} from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: <ClipboardList className="w-8 h-8 text-[#004a65]" />,
      title: "New Patient Intake",
      description: "Complete your initial assessment forms and health history questionnaire before your first visit",
      action: "Download Forms"
    },
    {
      icon: <Pill className="w-8 h-8 text-[#004a65]" />,
      title: "Medication Resources",
      description: "Comprehensive information about psychiatric medications, side effects, and treatment options",
      action: "Learn More"
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-[#004a65]" />,
      title: "Appointment Guide",
      description: "Understand our scheduling, cancellation policies, and what to expect during your sessions",
      action: "View Guide"
    },
    {
      icon: <Brain className="w-8 h-8 text-[#004a65]" />,
      title: "Mental Wellness Library",
      description: "Educational materials on anxiety, depression, ADHD, and other mental health conditions",
      action: "Browse Resources"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#004a65]" />,
      title: "Treatment Plans",
      description: "Access your personalized treatment documents and progress tracking materials",
      action: "View Documents"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#004a65]" />,
      title: "Wellness Strategies",
      description: "Mindfulness exercises, coping techniques, and daily mental health practices",
      action: "Explore Techniques"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#004a65]" />,
      title: "Crisis Resources",
      description: "Emergency contact information and crisis intervention services available 24/7",
      action: "Get Help Now"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#004a65]" />,
      title: "Therapy Worksheets",
      description: "Printable worksheets for CBT, DBT, and other therapeutic approaches",
      action: "Download Worksheets"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badgeIcon={Brain}
          badgeText="MENTAL HEALTH RESOURCES"
          title="Comprehensive Support for Your Journey"
          description="Access our complete library of mental health resources, treatment materials, and educational content designed to support your therapeutic journey and overall well-being."
        />

        {/* Updated Cards Grid - Now 2x4 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#004a65]/40" 
            data-testid={`resource-card-${index}`}>
              <CardContent className="p-6">
                <div className="w-16 h-16 border rounded-full bg-opacity-5 flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-10 transition-all duration-300 p-2">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#004a65] transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}