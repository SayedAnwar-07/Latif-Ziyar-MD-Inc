"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Insurance() {
  const insurancePlans = [
    "Blue Cross Blue Shield",
    "Aetna", 
    "Cigna",
    "UnitedHealth",
    "Medicare",
    "Medicaid", 
    "Anthem",
    "Kaiser Permanente"
  ];

  const paymentOptions = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      ),
      title: "Cash & Check",
      description: "We accept cash and personal checks for all services."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <path d="M1 10h22"/>
        </svg>
      ),
      title: "Credit & Debit Cards",
      description: "Visa, MasterCard, American Express, and Discover accepted."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Insurance & Payment Information</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We accept most major insurance plans and offer flexible payment options to make care accessible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Accepted Insurance Plans
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {insurancePlans.slice(0, 4).map((plan, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <span className="text-muted-foreground">{plan}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {insurancePlans.slice(4, 8).map((plan, index) => (
                    <div key={index + 4} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <span className="text-muted-foreground">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground text-sm">
                  <svg className="w-5 h-5 text-primary mr-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  Insurance coverage varies by plan. Please contact our office to verify your benefits and coverage details.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <path d="M1 10h22"/>
                </svg>
                Payment Options
              </h3>
              <div className="space-y-6">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{option.title}</h4>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
