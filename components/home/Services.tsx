"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.07 2.07 0 0 1-.54-.44l-3-3a2.5 2.5 0 0 1 3.53-3.53l.47.47V4.5A2.5 2.5 0 0 1 9.5 2z"/>
          <path d="M14 6.5v6.83l1.72 1.72a2.5 2.5 0 0 1 0 3.54v0a2.5 2.5 0 0 1-3.54 0L9.5 15.9V4.5"/>
        </svg>
      ),
      title: "Addiction Medicine",
      description: "Comprehensive addiction treatment including medication-assisted therapy and behavioral interventions for substance use disorders.",
      features: ["Suboxone Treatment", "Opioid Addiction", "Alcohol Use Disorder"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Depression Treatment",
      description: "Evidence-based treatment for depression using medication management and therapeutic approaches tailored to your needs.",
      features: ["Major Depression", "Bipolar Disorder", "Seasonal Depression"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Anxiety Disorders",
      description: "Comprehensive treatment for various anxiety disorders using both medication and evidence-based therapeutic techniques.",
      features: ["Generalized Anxiety", "Panic Disorder", "Social Anxiety"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M16 4v16l-4-2-4 2V4M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
          <path d="M12 8h.01M12 12h.01"/>
        </svg>
      ),
      title: "Medication Management",
      description: "Expert psychiatric medication management with regular monitoring and adjustments for optimal therapeutic outcomes.",
      features: ["Prescription Monitoring", "Side Effect Management", "Drug Interactions"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
          <path d="M12 6v6l4 2"/>
          <path d="M8 12a4 4 0 1 0 8 0"/>
        </svg>
      ),
      title: "Mood Disorders",
      description: "Specialized treatment for complex mood disorders, OCD, PTSD, eating disorders, and personality disorders.",
      features: ["Bipolar Disorder", "OCD & PTSD", "Eating & Personality Disorders"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "ADHD Treatment",
      description: "Comprehensive evaluation and treatment for attention-deficit/hyperactivity disorder in adults and adolescents.",
      features: ["ADHD Assessment", "Medication Management", "Behavioral Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Psychiatric Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team offers evidence-based treatments for a wide range of mental health conditions with personalized care plans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover" data-testid={`service-card-${index}`}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-accent mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
