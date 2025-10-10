import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Insurance from "@/components/home/Insurance";
import Resources from "@/components/home/Resources";
import Services from "@/components/home/Services";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <div className="bg-card py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 text-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">7335 N 1st St Ste 102, Fresno CA</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 text-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-muted-foreground text-sm">(559) 449-1209</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 text-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 8AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Resources />
        <Insurance />
        <Contact />
      </main>
    </div>
  );
}
