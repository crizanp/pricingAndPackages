import TextHeroSection from "../../components/home/textHero";
import BenefitsSection from "../../components/services/BenefitsSection";
import FAQSection from "../../components/services/faqSection";
import DevProcess from "../../components/services/ProcessStep";
import ServiceCardSlider from "../../components/services/ServiceCardSlider";
import ServicesGrid from "../../components/services/ServicesGrid";
import TeamBanner from "../../components/services/shortQuickBanner";
import IndustrySlider from "../../components/services/sliderService";
import UniqueFeatures from "../../components/services/UniqueFeatures";
import ServiceBanner from "../../components/services/upperHero";

export default function HealthcareWebsite() {
  const serviceData = {
    title: "Healthcare Website Development Services",
    description: "We build secure, compliant healthcare platforms that streamline patient care and enhance medical services.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Patient Portal Development", description: "Secure login areas for patients and healthcare providers." },
      { title: "Responsive Medical Design", description: "Healthcare information accessible on all devices." },
      { title: "Appointment Scheduling", description: "Online booking systems with calendar integration." },
      { title: "Telehealth Integration", description: "Virtual consultation capabilities and remote care." },
      { title: "Medical Records Access", description: "Secure EHR/EMR integration with strict access controls." },
      { title: "Payment Processing", description: "HIPAA-compliant billing and insurance verification." }
    ]
  };
  
  const industrySliderData = {
    title: "Healthcare Websites for Every Medical Sector",
    subtitle: "FoxBeep creates effective digital platforms across all healthcare domains.",
    industries: [
      { title: "Medical Practices", description: "Specialist and general practitioner websites." },
      { title: "Hospitals & Clinics", description: "Comprehensive healthcare center platforms." },
      { title: "Mental Health Services", description: "Sensitive and accessible therapy platforms." },
      { title: "Dental Practices", description: "Specialized dental care websites with visual tools." },
      { title: "Pharmacies", description: "Prescription management and product showcases." },
      { title: "Wellness Centers", description: "Holistic health and preventative care platforms." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Healthcare Websites",
    description: "Our process ensures secure, compliant, and patient-focused platforms.",
    processSteps: [
      { number: 1, title: "Healthcare Needs Assessment", description: "Understanding medical services and patient requirements." },
      { number: 2, title: "Compliance Planning", description: "Ensuring HIPAA, GDPR, and healthcare regulations are met." },
      { number: 3, title: "Patient Experience Design", description: "Creating intuitive pathways for patients and providers." },
      { number: 4, title: "Content Architecture", description: "Structuring medical information and resources." },
      { number: 5, title: "Secure Platform Development", description: "Building robust healthcare systems with encryption." },
      { number: 6, title: "Integration Features", description: "Connecting with EHR/EMR and practice management tools." },
      { number: 7, title: "Staff Training & Deployment", description: "Empowering healthcare teams to manage their platform." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does a healthcare website cost?",
      answer: "Costs range from $8,000 for basic practice sites to $50,000+ for comprehensive medical platforms with patient portals."
    },
    {
      question: "How long does it take to develop a healthcare website?",
      answer: "Typically 8 to 20 weeks, depending on features and compliance requirements."
    },
    {
      question: "Is your healthcare website development HIPAA compliant?",
      answer: "Yes, we adhere to all HIPAA regulations and implement required security measures for PHI protection."
    },
    {
      question: "Can you integrate with existing EHR/EMR systems?",
      answer: "Yes, we can integrate with Epic, Cerner, Allscripts, and other popular medical record systems."
    },
    {
      question: "Do you provide content creation for healthcare websites?",
      answer: "We offer medical content development services with healthcare communication specialists."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Healthcare Website Services Excel",
    benefits: [
      "HIPAA-compliant architecture and secure data handling",
      "Accessible design for patients of all abilities",
      "Intuitive interfaces that reduce administrative burden",
      "Scalable solutions for growing medical practices",
      "Performance optimized for critical healthcare functions"
    ],
    techIcons: [
      { name: "Epic", isDark: true },
      { name: "Cerner", isDark: false },
      { name: "Allscripts", isDark: true },
      { name: "Zoom Health", isDark: false },
      { name: "Stripe Medical", isDark: true },
      { name: "AWS Healthcare", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Build Your Healthcare Platform"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "compliance",
        title: "Healthcare Compliance",
        content: "Websites that adhere to all medical data protection regulations."
      },
      {
        id: "accessibility",
        title: "Universal Accessibility",
        content: "Inclusive design that accommodates diverse patient needs."
      },
      {
        id: "interoperability",
        title: "Medical System Integration",
        content: "Seamless connection with existing healthcare IT infrastructure."
      },
      {
        id: "analytics",
        title: "Patient Insights",
        content: "Data analytics to improve healthcare delivery and outcomes."
      },
      {
        id: "security",
        title: "Enhanced Security",
        content: "Multi-layer protection for sensitive patient information."
      },
      {
        id: "telehealth",
        title: "Virtual Care Support",
        content: "Integrated telehealth capabilities for remote patient care."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a healthcare website development",
    highlightedText: "Team",
    buttonText: "Transform Patient Care Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-600",
    buttonGradientFrom: "from-blue-500",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-blue-600",
    buttonHoverTo: "to-blue-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="/images/pages/healthcare.jpg"
          alt="Healthcare Website Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Medical Practice Websites",
            description: "Professional healthcare websites that showcase your services and streamline patient communication.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "Patient Portals",
            description: "Secure platforms for appointment scheduling, medical records, and provider messaging.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-teal-500"
          },
          {
            id: 3,
            title: "Telehealth Platforms",
            description: "Feature-rich solutions for virtual consultations and remote patient monitoring.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-indigo-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="blue"
      />

      <DevProcess {...devProcessData} />
      <UniqueFeatures {...uniqueFeaturesData} />
      <TeamBanner {...teamBannerData} />
      <IndustrySlider {...industrySliderData} />
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-3xl"
      />     
      <TextHeroSection />
    </div>
  );
}