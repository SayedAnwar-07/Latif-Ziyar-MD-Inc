import SectionHeader from "@/components/common/Header";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar,
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  Mail
} from 'lucide-react';

export default function Appointments() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badgeIcon={Calendar}
            badgeText="SCHEDULE APPOINTMENT"
            title="Book Your Consultation"
            description="Begin your mental health journey with a confidential appointment. Choose the option that works best for you."
            className="mb-12"
          />

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border border-gray-200 rounded-none shadow-none text-center hover:border-[#004a65] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#004a65] bg-opacity-5 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-[#004a65]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Choose appointment times that fit your schedule with our flexible availability.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-none shadow-none text-center hover:border-[#004a65] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#004a65] bg-opacity-5 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#004a65]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Instant Confirmation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive immediate confirmation and reminders for all your scheduled appointments.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-none shadow-none text-center hover:border-[#004a65] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#004a65] bg-opacity-5 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#004a65]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Secure & Private</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All appointments and patient information are protected with strict confidentiality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Scheduling System */}
          <Card className="border border-gray-200 rounded-none shadow-none mb-12">
            <CardContent className="p-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-[#004a65] bg-opacity-5 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-[#004a65]" />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Online Scheduling</h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Book your appointment securely through our integrated scheduling system.
                  </p>
                  
                  <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900 text-lg">EMR Integration</h3>
                      <p className="text-gray-600 text-sm">
                        This area is configured for your Electronic Medical Record system is scheduling widget.
                      </p>
                      <div className="bg-white border border-gray-200 p-6 text-center">
                        <div className="space-y-3">
                          <Calendar className="w-12 h-12 text-gray-400 mx-auto" />
                          <p className="text-gray-700 font-medium">Scheduling System</p>
                          <p className="text-gray-500 text-sm">
                            Your EMR scheduling integration will appear here
                          </p>
                          <button className="bg-[#004a65] text-white px-6 py-2 text-sm font-medium hover:bg-[#00374d] transition-colors mx-auto">
                            Connect Scheduling
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 rounded-none shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-5 h-5 text-[#004a65] mr-3" />
                  Phone Scheduling
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Prefer to schedule by phone? Our friendly staff is available during business hours to assist you.
                  </p>
                  
                  <div className="bg-[#004a65] bg-opacity-5 p-4 border-l-4 border-[#004a65]">
                    <a 
                      href="tel:559-449-1209" 
                      className="text-[#004a65] text-2xl font-semibold hover:text-[#00374d] transition-colors flex items-center justify-center"
                      data-testid="appointments-phone"
                    >
                      <Phone className="w-6 h-6 mr-2" />
                      (559) 449-1209
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 text-sm mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#004a65]" />
                      Phone Hours
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-none shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-5 h-5 text-[#004a65] mr-3" />
                  Email Inquiry
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Have questions before scheduling? Send us an email and we will respond within 24 hours.
                  </p>
                  
                  <div className="bg-gray-50 p-4">
                    <a 
                      href="mailto:appointments@practice.com" 
                      className="text-[#004a65] font-medium hover:text-[#00374d] transition-colors flex items-center justify-center text-lg"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      appointments@practice.com
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 text-sm mb-2">What to Include:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#004a65] mr-2 mt-0.5 flex-shrink-0" />
                        Your full name and contact information
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#004a65] mr-2 mt-0.5 flex-shrink-0" />
                        Preferred appointment type
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#004a65] mr-2 mt-0.5 flex-shrink-0" />
                        Any specific scheduling preferences
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}