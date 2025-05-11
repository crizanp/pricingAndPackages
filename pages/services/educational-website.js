import TextHeroSection from "../components/home/textHero";
import BenefitsSection from "../components/services/BenefitsSection";
import FAQSection from "../components/services/faqSection";
import DevProcess from "../components/services/ProcessStep";
import ServiceCardSlider from "../components/services/ServiceCardSlider";
import ServicesGrid from "../components/services/ServicesGrid";
import TeamBanner from "../components/services/shortQuickBanner";
import IndustrySlider from "../components/services/sliderService";
import UniqueFeatures from "../components/services/UniqueFeatures";
import ServiceBanner from "../components/services/upperHero";

export default function EducationalWebsite() {
  const serviceData = {
    title: "Educational Website Development Services",
    description: "We build engaging learning platforms that educate, inspire, and transform the educational experience.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "68",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Custom LMS Development", description: "Tailored learning management systems for your institution." },
      { title: "Responsive Design", description: "Accessible education on all devices and screen sizes." },
      { title: "Interactive Content", description: "Engaging multimedia elements and learning materials." },
      { title: "Student Portal Integration", description: "Secure login areas for students and educators." },
      { title: "Assessment Tools", description: "Quiz, test, and assignment submission features." },
      { title: "Course Management", description: "Easy content organization and curriculum delivery." }
    ]
  };
  
  const industrySliderData = {
    title: "Educational Websites for Every Sector",
    subtitle: "FoxBeep creates effective learning platforms across all educational domains.",
    industries: [
      { title: "K-12 Schools", description: "Age-appropriate interfaces with parent portals." },
      { title: "Higher Education", description: "Comprehensive university and college platforms." },
      { title: "Professional Training", description: "Corporate learning and certification systems." },
      { title: "Online Courses", description: "MOOC-style platforms with enrollment features." },
      { title: "Language Learning", description: "Interactive platforms with progress tracking." },
      { title: "Special Education", description: "Accessible platforms with adaptive features." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Educational Websites",
    description: "Our process ensures engaging, functional, and learning-focused platforms.",
    processSteps: [
      { number: 1, title: "Educational Needs Assessment", description: "Understanding learning goals and pedagogical approach." },
      { number: 2, title: "User Experience Planning", description: "Creating intuitive pathways for students and educators." },
      { number: 3, title: "Learning Interface Design", description: "Developing engaging and accessible UI designs." },
      { number: 4, title: "Content Architecture", description: "Structuring course materials and learning resources." },
      { number: 5, title: "Platform Development", description: "Building robust and scalable educational systems." },
      { number: 6, title: "Interactive Features", description: "Implementing engagement and assessment tools." },
      { number: 7, title: "Training & Deployment", description: "Empowering educators to manage their platform." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does an educational website cost?",
      answer: "Costs range from $5,000 for basic school sites to $30,000+ for comprehensive learning platforms."
    },
    {
      question: "How long does it take to develop an educational website?",
      answer: "Typically 6 to 16 weeks, depending on features and complexity of learning tools."
    },
    {
      question: "Which platforms do you use for educational websites?",
      answer: "We work with Moodle, Canvas, WordPress LMS, or build custom solutions based on your needs."
    },
    {
      question: "Can you integrate with existing school management systems?",
      answer: "Yes, we can integrate with popular SIS/SMS platforms like PowerSchool, Blackboard, and others."
    },
    {
      question: "Do you provide content creation for educational websites?",
      answer: "We offer instructional design services to help develop engaging educational content."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Educational Website Services Excel",
    benefits: [
      "Intuitive interfaces that enhance learning",
      "Accessible design for all types of learners",
      "Robust security for student data protection",
      "Scalable architecture for growing institutions",
      "Performance optimized for seamless learning experiences"
    ],
    techIcons: [
      { name: "Moodle", isDark: true },
      { name: "Canvas", isDark: false },
      { name: "WordPress LMS", isDark: true },
      { name: "Google Classroom", isDark: false },
      { name: "H5P", isDark: true },
      { name: "AWS", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Start Your Learning Platform"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "pedagogy",
        title: "Pedagogy-First Design",
        content: "Websites that prioritize learning outcomes and educational best practices."
      },
      {
        id: "accessibility",
        title: "Universal Accessibility",
        content: "Inclusive design that accommodates diverse learning needs."
      },
      {
        id: "engagement",
        title: "Student Engagement",
        content: "Interactive elements that motivate and enhance knowledge retention."
      },
      {
        id: "analytics",
        title: "Learning Analytics",
        content: "Insights to track progress and improve educational approaches."
      },
      {
        id: "security",
        title: "Data Protection",
        content: "FERPA-compliant security for student information and records."
      },
      {
        id: "mobile",
        title: "Mobile Learning",
        content: "Seamless educational experiences across all devices."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an educational website development",
    highlightedText: "Team",
    buttonText: "Transform Learning Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-green-600",
    buttonGradientFrom: "from-green-500",
    buttonGradientTo: "to-green-600",
    buttonHoverFrom: "from-green-600",
    buttonHoverTo: "to-green-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2021/10/07105852/website-development-process.jpg"
          alt="Educational Website Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "School Websites",
            description: "Professional K-12 and higher education websites that showcase your institution and engage students.",
            image: "https://w3layouts.b-cdn.net//wp-content/uploads/2021/12/Edu-School-Website-Template-1-scaled.jpg",
            accentColor: "bg-green-500"
          },
          {
            id: 2,
            title: "Learning Management Systems",
            description: "Comprehensive platforms for course delivery, assessment, and student engagement.",
            image: "https://www.techasoft.com/blog/2021/01/1609606508.png",
            accentColor: "bg-blue-500"
          },
          {
            id: 3,
            title: "Online Course Platforms",
            description: "Feature-rich sites for creating, selling, and delivering educational content.",
            image: "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png",
            accentColor: "bg-purple-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="green"
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