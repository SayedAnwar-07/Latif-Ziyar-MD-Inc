import { MapPin, Phone, Clock, Mail, Stethoscope } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#004a65] flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Latif Ziyar MD Inc</h3>
                <p className="text-gray-400 text-sm">Psychiatric Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Providing compassionate, evidence-based psychiatric care and addiction medicine 
              services to the Fresno community with personalized treatment approaches.
            </p>
            <div className="flex space-x-3">
              <button 
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#004a65] transition-colors"
                data-testid="social-facebook"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#004a65] transition-colors"
                data-testid="social-google"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#004a65] transition-colors"
                data-testid="social-yelp"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.271 17.814c1.266 0 2.185-.886 2.185-2.109 0-.886-.559-1.548-1.377-1.772l-4.107-1.118c-.223-.059-.336-.223-.336-.447 0-.335.224-.559.559-.559.111 0 .223.037.335.111l4.218 2.109c.559.279 1.154.279 1.713 0 .559-.279.895-.894.895-1.548V5.695c0-1.266-.919-2.185-2.185-2.185s-2.185.919-2.185 2.185v6.886l-4.218-2.109c-.112-.074-.224-.111-.335-.111-.335 0-.559.224-.559.559 0 .224.113.388.336.447l4.107 1.118c.818.224 1.377.886 1.377 1.772 0 1.223-.919 2.109-2.185 2.109z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left text-sm">Addiction Medicine</button></li>
              <li><button className="hover:text-white transition-colors text-left text-sm">Suboxone Treatment</button></li>
              <li><button className="hover:text-white transition-colors text-left text-sm">Depression Treatment</button></li>
              <li><button className="hover:text-white transition-colors text-left text-sm">Anxiety Treatment</button></li>
              <li><button className="hover:text-white transition-colors text-left text-sm">Medication Management</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#004a65] flex-shrink-0" />
                <span className="text-sm">7335 N 1st St Ste 102<br />Fresno, CA 93720</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#004a65] flex-shrink-0" />
                <a 
                  href="tel:559-449-1209" 
                  className="text-sm hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  (559) 449-1209
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#004a65] flex-shrink-0" />
                <a 
                  href="mailto:info@practice.com" 
                  className="text-sm hover:text-white transition-colors"
                >
                  info@practice.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#004a65] flex-shrink-0" />
                <span className="text-sm">Mon-Fri: 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Latif Ziyar MD Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-gray-500 hover:text-white transition-colors">Terms of Service</button>
              <button className="text-gray-500 hover:text-white transition-colors">HIPAA Notice</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}