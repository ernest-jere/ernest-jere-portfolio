import { Mail, PhoneCall } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  // Manage form submission status messages ("IDLE", "SENDING", "SUCCESS", "ERROR")
  const [status, setStatus] = useState("IDLE");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("SENDING"); // Stop the form hanging by changing the button to "Sending..."

    const formData = new FormData(event.target);
    // Web3Forms expects your access key here
    formData.append("access_key", "56b56248-1731-4ac1-8823-adab6d7046f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus("SUCCESS");
        event.target.reset(); // Clears form inputs on success
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-16 max-w-2xl mx-auto">
          Love a project or want to collaborate? I am always open to discussing new opportunities.
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            
            <div className="flex flex-col items-center space-y-6 md:items-start w-full">
              {/* Email */}
              <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                  <a 
                    href="mailto:ernestmmjere@outlook.com" 
                    className="text-secondary hover:text-primary transition-colors font-medium break-all"
                  >
                    ernestmmjere@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h4 className="font-medium text-sm text-muted-foreground">Phone Number</h4>
                  <a 
                    href="tel:+27632985713" 
                    className="text-secondary hover:text-primary transition-colors font-medium"
                  >
                    +27 632 985 713
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-border w-full flex flex-col items-center md:items-start">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ernest-jere-8b711686" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-105 transform">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/makhujere/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-105 transform">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/ernest.jere?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-105 transform">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-foreground" 
                  required 
                  placeholder="Ernest..." 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-foreground" 
                  required 
                  placeholder="text@example.com" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all resize-none text-foreground" 
                  required 
                  placeholder="How can I help you?" 
                />
              </div>

              {/* Status Notifications */}
              {status === "SUCCESS" && (
                <p className="text-emerald-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === "ERROR" && (
                <p className="text-rose-400 text-sm font-medium">Something went wrong. Please try again or email directly.</p>
              )}

              <button 
                type="submit" 
                disabled={status === "SENDING"}
                className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:opacity-90 transition-opacity cursor-pointer text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "SENDING" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
