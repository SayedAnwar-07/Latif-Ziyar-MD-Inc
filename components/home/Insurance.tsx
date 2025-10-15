"use client";

import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../common/Header";
import { 
  Shield,
  CreditCard,
  Wallet,
  CheckCircle2,
  Phone,
  Mail,
  Building,
  HeartPulse,
  FileText
} from 'lucide-react';

export default function Insurance() {
  const insurancePlans = [
    "Blue Cross Blue Shield",
    "Aetna", 
    "Cigna",
    "UnitedHealthcare",
    "Medicare Part B",
    "Medicaid", 
    "Anthem",
    "Kaiser Permanente"
  ];

  const paymentOptions = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Credit & Debit Cards",
      description: "Visa, MasterCard, American Express, and Discover"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "HSA & FSA Accounts",
      description: "Health Savings and Flexible Spending Accounts accepted"
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Cash & Personal Checks",
      description: "Traditional payment methods for your convenience"
    }
  ];

  return (
    <section id="insurance" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeIcon={Shield}
          badgeText="INSURANCE & PAYMENT"
          title="Financial Care for Your Journey"
          description="We work with major insurance providers and offer multiple payment options to ensure mental health care is accessible and stress-free."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Insurance Plans */}
          <Card className="group hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#004a65]/40 rounded-none shadow-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <Building className="w-6 h-6 text-[#004a65] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Accepted Insurance Providers</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8 h-full md:h-[270px]">
                <div className="space-y-4">
                  {insurancePlans.map((plan, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-[#004a65] mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#004a65] bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3 h-3 text-[#004a65]" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium mb-1">Verify Your Coverage</p>
                    <p className="text-gray-600 text-sm">
                      Contact our office to confirm your specific plan benefits and coverage details.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Payment Options */}
          <Card className="group hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#004a65]/40 rounded-none shadow-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <HeartPulse className="w-6 h-6 text-[#004a65] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Payment Methods</h3>
              </div>
              
              <div className="space-y-6 mb-8 h-full md:h-[270px]">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="w-10 h-10 bg-[#004a65] bg-opacity-5 flex items-center justify-center flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#004a65] bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3 h-3 text-[#004a65]" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium mb-1">Financial Questions?</p>
                    <p className="text-gray-600 text-sm">
                      Our billing team is available to discuss payment plans and answer any questions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Ready to Verify Your Insurance?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Contact us today to confirm your coverage and schedule your first appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
             <a href="tel:+18001234567">
                <button className="inline-flex items-center justify-center bg-[#004a65] text-white px-6 py-3 text-sm font-medium hover:bg-[#00374d] transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Verify Benefits
                </button>
              </a>
              <button className="inline-flex items-center justify-center border border-[#004a65] text-[#004a65] px-6 py-3 text-sm font-medium hover:bg-[#004a65] hover:text-white transition-all">
                <Mail className="w-4 h-4 mr-2" />
                Email for Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}