"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../common/Header";
import { 
  MapPin,
  Phone,
  Clock,
  Car,
  Mail,
  Send
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.phone) {
      alert("Please fill in required fields");
      return;
    }

    // Show success message
    alert('Appointment Request Sent');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeIcon={MapPin}
          badgeText="CONTACT & LOCATION"
          title="Visit Our Fresno Office"
          description="Schedule your appointment today. We're here to support your mental health journey in a comfortable, professional environment."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Information & Form */}
          <div className="flex flex-col gap-6 h-full">
            {/* Contact Information Card */}
            <Card className="border border-gray-200 rounded-none shadow-none flex-1">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-5 h-5 text-[#004a65] mr-3" />
                  Contact Information
                </h3>
                
                <div className="space-y-6 flex-1">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#004a65] bg-opacity-5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#004a65]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Office Address</h4>
                      <p className="text-gray-600 text-sm">
                        7335 N 1st St Ste 102<br />
                        Fresno, CA 93720
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#004a65] bg-opacity-5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#004a65]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Phone Number</h4>
                      <a
                        href="tel:559-449-1209"
                        className="text-[#004a65] text-sm hover:text-[#00374d] transition-colors"
                      >
                        (559) 449-1209
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#004a65] bg-opacity-5 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#004a65]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Office Hours</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#004a65] bg-opacity-5 flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-[#004a65]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Parking Information</h4>
                      <p className="text-gray-600 text-sm">
                        Free parking available directly in front of the building with accessible spaces near the entrance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Form Card */}
            <Card className="border border-gray-200 rounded-none shadow-none flex-1">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-5 h-5 text-[#004a65] mr-3" />
                  Schedule Appointment
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-[#004a65] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-[#004a65] focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-[#004a65] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-[#004a65] focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="therapy">Therapy Session</option>
                      <option value="medication">Medication Management</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-[#004a65] focus:outline-none flex-1 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#004a65] text-white py-3 text-sm font-medium hover:bg-[#00374d] transition-colors flex items-center justify-center mt-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Appointment Request
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Map & Emergency */}
          <div className="flex flex-col gap-6 h-full">
            {/* Map Card */}
            <Card className="rounded-none border-none shadow-none flex-1">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Google Maps Embed */}
                <div className="flex-1 min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.123456789012!2d-119.78784968471234!3d36.84745697973572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945c26e69d2aab%3A0x123456789abcdef!2s7335%20N%201st%20St%20Ste%20102%2C%20Fresno%2C%20CA%2093720!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height='600px'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Practice Location"
                  />
                </div>
                
                <div className="p-6 ">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[#004a65] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">North Fresno Medical Area</p>
                        <p className="text-gray-600">Located in the professional medical district with easy freeway access.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Car className="w-4 h-4 text-[#004a65] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Parking & Accessibility</p>
                        <p className="text-gray-600">Ample free parking with wheelchair accessible entrance and facilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact Card */}
            <Card className="border border-[#004a65] rounded-none bg-[#004a65] bg-opacity-5 flex-1">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Contact</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    If you are experiencing a mental health emergency, please contact emergency services immediately.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:559-449-1209"
                      className="bg-[#004a65] text-white px-6 py-3 text-sm font-medium text-center hover:bg-[#00374d] transition-colors"
                    >
                      Call (559) 449-1209
                    </a>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}