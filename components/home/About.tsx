"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern medical office with comfortable seating"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                />

          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Dr. Latif Ziyar</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr. Latif Ziyar is a board-certified psychiatrist with extensive experience in treating mental health disorders and addiction medicine. He is dedicated to providing compassionate, evidence-based care to help patients achieve lasting recovery and wellness.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 3 4 4 6 4s6-1 6-4v-5"/>
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Education & Training</p>
                  <p className="text-muted-foreground">Board-certified psychiatrist with specialized training in addiction medicine and mood disorders</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Specializations</p>
                  <p className="text-muted-foreground">Addiction Medicine, Depression, Anxiety, Suboxone Treatment, Medication Management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Treatment Philosophy</p>
                  <p className="text-muted-foreground">Patient-centered care focusing on both medication management and therapeutic support for holistic healing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20" data-testid="doctor-quote">
              <p className="text-foreground italic">
                My goal is to provide each patient with personalized, compassionate care that addresses not just symptoms, but the whole person. Recovery is possible, and I am here to support you every step of the way.
              </p>
              <p className="text-primary font-semibold mt-2">- Dr. Latif Ziyar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
