import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DirectorSection } from './components/DirectorSection';
import { CredentialsSection } from './components/CredentialsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PatientJourneySection } from './components/PatientJourneySection';
import { ClinicExperienceSection } from './components/ClinicExperienceSection';
import { SportsPerformanceSection } from './components/SportsPerformanceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { QuickContactBar } from './components/QuickContactBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Orthopedic Rehabilitation');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FA] text-slate-900 font-sans antialiased pb-16 lg:pb-0 selection:bg-slate-900 selection:text-white">
      {/* Sticky Floating Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* Split Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => handleScrollTo('services')}
        />

        {/* About & 3 Principles Section */}
        <AboutSection
          onStartJourney={() => handleScrollTo('journey')}
        />

        {/* Services & Specializations Section */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Clinical Director Section */}
        <DirectorSection
          onConsultDirector={() => handleOpenBooking('Director Clinical Consultation')}
        />

        {/* Credentials & Associations Section */}
        <CredentialsSection />

        {/* Why Choose Us Section */}
        <WhyUsSection />

        {/* 4-Step Patient Journey Section */}
        <PatientJourneySection
          onBookAssessment={() => handleOpenBooking('Initial Biomechanical Assessment')}
        />

        {/* Real Clinic Experience Gallery Section */}
        <ClinicExperienceSection />

        {/* Sports & Athletic Recovery Section */}
        <SportsPerformanceSection
          onTalkToPhysio={() => handleOpenBooking('Sports Injury Rehabilitation')}
        />

        {/* Patient Experiences & Recovery Feedback Placeholders */}
        <TestimonialsSection />

        {/* Accordion FAQ Section */}
        <FAQSection />

        {/* High-Impact Final CTA Section */}
        <FinalCTASection
          onOpenBooking={() => handleOpenBooking()}
          onContactClinic={() => handleScrollTo('contact')}
        />

        {/* Contact Information & Inquiry Form */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Mobile Floating Quick Action Bar */}
      <QuickContactBar
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
