"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Resources() {
  const resources = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      ),
      title: "New Patient Forms",
      description: "Download and complete intake forms before your first appointment",
      action: "Download Forms"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
          <path d="M6 7h12"/>
          <path d="M6 12h12"/>
          <path d="M6 17h12"/>
        </svg>
      ),
      title: "Medication Guide",
      description: "Information about psychiatric medications and their effects",
      action: "View Guide"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M9 15h6"/>
          <path d="M12 12v6"/>
        </svg>
      ),
      title: "Appointment Policies",
      description: "Important information about scheduling, cancellations, and office procedures",
      action: "View Policies"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: "Educational Materials",
      description: "Learn about mental health conditions and treatment options",
      action: "Browse Library"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Patient Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Helpful information and resources to support your mental health journey and treatment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="text-center" data-testid={`resource-card-${index}`}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <button 
                  className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  data-testid={`resource-action-${index}`}
                >
                  {resource.action}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
