import React from "react";
import Navbar from "./Navbar.jsx";
import Welcome from "./Welcome.jsx";
import ServicesPage from "./servicespage.jsx";
import HappyClients from "./HappyClients.jsx";
import ClientTestimonials from "./Testimonials.jsx";
import FAQPage from "./Faq.jsx";
import ContactSection from "./contact.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="fullscreen">
      <Navbar />
      <Welcome />
      <ServicesPage />
      <HappyClients />
      <ClientTestimonials />
      <FAQPage />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;
