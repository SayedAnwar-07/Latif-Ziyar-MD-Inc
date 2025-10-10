export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M16 4v16l-4-2-4 2V4M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                  <path d="M12 8h.01M12 12h.01"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Latif Ziyar MD Inc</h3>
                <p className="text-background/80">Psychiatric Services</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Providing compassionate, evidence-based psychiatric care and addiction medicine services to the Fresno community with a focus on personalized treatment and lasting recovery.
            </p>
            <div className="flex space-x-4">
              <button 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="social-facebook"
              >
                <svg className="w-5 h-5 text-background" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="social-google"
              >
                <svg className="w-5 h-5 text-background" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="social-yelp"
              >
                <svg className="w-5 h-5 text-background" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.271 17.814c1.266 0 2.185-.886 2.185-2.109 0-.886-.559-1.548-1.377-1.772l-4.107-1.118c-.223-.059-.336-.223-.336-.447 0-.335.224-.559.559-.559.111 0 .223.037.335.111l4.218 2.109c.559.279 1.154.279 1.713 0 .559-.279.895-.894.895-1.548V5.695c0-1.266-.919-2.185-2.185-2.185s-2.185.919-2.185 2.185v6.886l-4.218-2.109c-.112-.074-.224-.111-.335-.111-.335 0-.559.224-.559.559 0 .224.113.388.336.447l4.107 1.118c.818.224 1.377.886 1.377 1.772 0 1.223-.919 2.109-2.185 2.109z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><button className="hover:text-background transition-colors text-left">Addiction Medicine</button></li>
              <li><button className="hover:text-background transition-colors text-left">Suboxone Treatment</button></li>
              <li><button className="hover:text-background transition-colors text-left">Depression Treatment</button></li>
              <li><button className="hover:text-background transition-colors text-left">Anxiety Treatment</button></li>
              <li><button className="hover:text-background transition-colors text-left">Medication Management</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <p className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>7335 N 1st St Ste 102<br />Fresno, CA 93720</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a 
                  href="tel:559-449-1209" 
                  className="hover:text-background transition-colors"
                  data-testid="footer-phone"
                >
                  (559) 449-1209
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Mon-Fri: 8AM-5PM</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Latif Ziyar MD Inc. All rights reserved. | 
            <button className="hover:text-background transition-colors ml-2">Privacy Policy</button> | 
            <button className="hover:text-background transition-colors ml-2">Terms of Service</button> | 
            <button className="hover:text-background transition-colors ml-2">HIPAA Notice</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
