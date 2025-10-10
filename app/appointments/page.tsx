import { Card, CardContent } from "@/components/ui/card";

export default function Appointments() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Schedule an Appointment</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book your appointment with our psychiatric team at your convenience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <path d="M16 2v4"/>
                    <path d="M8 2v4"/>
                    <path d="M3 10h18"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground text-sm">Choose a time that works best for your schedule</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Confirmation</h3>
                <p className="text-muted-foreground text-sm">Receive instant confirmation of your appointment</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
                <p className="text-muted-foreground text-sm">Your information is protected and confidential</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <path d="M16 2v4"/>
                    <path d="M8 2v4"/>
                    <path d="M3 10h18"/>
                    <path d="M8 14h.01"/>
                    <path d="M12 14h.01"/>
                    <path d="M16 14h.01"/>
                    <path d="M8 18h.01"/>
                    <path d="M12 18h.01"/>
                    <path d="M16 18h.01"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Online Scheduling System</h2>
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 space-y-3">
                      <p className="text-foreground font-medium">EMR Integration Placeholder</p>
                      <p className="text-muted-foreground text-sm">
                        This area is reserved for your EMR is online scheduling system integration.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Your web developer can embed the scheduling widget or iframe here.
                      </p>
                      <div className="pt-4 text-xs text-muted-foreground font-mono bg-background/50 p-4 rounded border border-border">
                        &lt;!-- EMR Scheduling Integration Code Goes Here --&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Need Help Scheduling?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Call Our Office</h4>
                  <p className="text-muted-foreground mb-2">
                    Prefer to speak with someone? Our staff is happy to assist you with scheduling.
                  </p>
                  <a 
                    href="tel:559-449-1209" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    data-testid="appointments-phone"
                  >
                    (559) 449-1209
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Office Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
