"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  HeartPulse, 
  Brain, 
  Shield, 
  ClipboardCheck, 
  Activity, 
  Zap,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import SectionHeader from "../common/Header";

export default function Services() {
  const services = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Addiction Medicine",
      description: "Comprehensive addiction treatment including medication-assisted therapy and behavioral interventions for substance use disorders.",
      features: ["Suboxone Treatment", "Opioid Addiction", "Alcohol Use Disorder"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Depression Treatment",
      description: "Evidence-based treatment for depression using medication management and therapeutic approaches tailored to your needs.",
      features: ["Major Depression", "Bipolar Disorder", "Seasonal Depression"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anxiety Disorders",
      description: "Comprehensive treatment for various anxiety disorders using both medication and evidence-based therapeutic techniques.",
      features: ["Generalized Anxiety", "Panic Disorder", "Social Anxiety"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Medication Management",
      description: "Expert psychiatric medication management with regular monitoring and adjustments for optimal therapeutic outcomes.",
      features: ["Prescription Monitoring", "Side Effect Management", "Drug Interactions"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Mood Disorders",
      description: "Specialized treatment for complex mood disorders, OCD, PTSD, eating disorders, and personality disorders.",
      features: ["Bipolar Disorder", "OCD & PTSD", "Eating & Personality Disorders"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ADHD Treatment",
      description: "Comprehensive evaluation and treatment for attention-deficit/hyperactivity disorder in adults and adolescents.",
      features: ["ADHD Assessment", "Medication Management", "Behavioral Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
            badgeIcon={Stethoscope}
            badgeText="Our Services"
            title="Comprehensive Psychiatric Care"
            description="Evidence-based mental health treatments delivered with compassion and expertise. Your journey to wellness starts here."
          />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#004a65]/40"
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex gap-3 items-center">
                  <div className="w-16 h-16 border  rounded-full flex items-center justify-center mb-6 group-hover:bg-[#004a65]/10 transition-colors duration-300">
                    <div className="text-[#004a65]">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl w-36 font-bold text-gray-900 mb-4 group-hover:text-[#004a65] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#004a65] mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 border border-gray-200 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey to Better Mental Health?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a confidential consultation with our expert psychiatric team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#004a65] hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
              <button className="border border-[#004a65] text-[#004a65] hover:bg-blue-50 px-8 py-3 font-semibold transition-colors duration-300">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}