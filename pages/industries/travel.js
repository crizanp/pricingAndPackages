import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const Travel = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Elevating Travel Experiences Through Digital Innovation",
    subtitle: "Reimagining the way people discover, book, and experience travel with intelligent, seamless technology solutions for the modern traveler.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://10pearls.com/wp-content/uploads/2025/01/travel-banner-Hero-Image.png",
    imageAlt: "Modern travel experience with digital technology"
  };

  const textHeroContent = {
    headingText: "TECHNOLOGY IS TRANSFORMING TRAVEL BY CREATING",
    highlightWord: "CREATING",
    descriptionText: "Technology is transforming travel by creating personalized, frictionless experiences that empower travelers throughout their journey. From AI-powered recommendations to contactless services, emerging technologies are revolutionizing how travel is planned, booked, and experienced. {brandName} helps travel companies enhance customer satisfaction and operational efficiency through intuitive, connected digital travel ecosystems.",
    brandName: "10Pearls",
    highlightColor: "bg-purple-300"
  };

  const travelTechContent1 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal travel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Booking & Reservation Systems",
      "Travel Experience Platforms",
      "Intelligent Travel Assistance",
      "Operations Management Solutions"
    ],
    featuredService: "Booking & Reservation Systems",
    featuredServiceDescription: "We develop comprehensive travel booking platforms that deliver seamless, intuitive experiences across all channels. Our solutions optimize the entire booking journey from search to payment while providing powerful management tools for travel providers.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/booking-reservation-systems.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Multi-Channel Booking Platforms",
        description: "We create integrated booking solutions that provide consistent, optimized experiences across web, mobile, voice, and partner channels. Our platforms ensure perfect synchronization of inventory, pricing, and customer data across all touchpoints."
      },
      {
        title: "Dynamic Packaging Systems",
        description: "Our dynamic packaging solutions enable travel providers to bundle flights, accommodations, activities, and transportation in real-time. These systems maximize revenue opportunities while delivering value and convenience to travelers."
      },
      {
        title: "Payment & Revenue Management",
        description: "We develop secure, flexible payment processing systems with support for multiple currencies, payment methods, and complex pricing models. Our solutions include advanced revenue management tools that optimize pricing based on demand, competition, and customer segmentation."
      }
    ]
  };

  const travelTechContent2 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal travel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Booking & Reservation Systems",
      "Travel Experience Platforms",
      "Intelligent Travel Assistance",
      "Operations Management Solutions"
    ],
    featuredService: "Travel Experience Platforms",
    featuredServiceDescription: "We build comprehensive digital platforms that enhance every aspect of the travel journey from inspiration to return. Our experience-focused solutions help travel brands create memorable, personalized moments that drive loyalty and advocacy.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/travel-experience-platforms.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Personalized Travel Planning",
        description: "Our intelligent planning solutions use AI and machine learning to analyze traveler preferences, past behavior, and contextual factors to create custom travel recommendations and itineraries. These platforms transform travel planning from a transaction to an engaging, personalized experience."
      },
      {
        title: "In-Destination Experience Apps",
        description: "We develop mobile applications that serve as digital companions throughout the travel journey, offering contactless check-in, local recommendations, wayfinding, activity booking, and digital concierge services. These apps enhance the guest experience while creating new revenue opportunities."
      },
      {
        title: "Loyalty & Engagement Systems",
        description: "Our loyalty platforms go beyond points and rewards to create emotional connections with travelers through personalized recognition, gamified experiences, and tailored communications. These systems drive repeat business and turn customers into brand advocates."
      }
    ]
  };

  const travelTechContent3 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal travel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Booking & Reservation Systems",
      "Travel Experience Platforms",
      "Intelligent Travel Assistance",
      "Operations Management Solutions"
    ],
    featuredService: "Intelligent Travel Assistance",
    featuredServiceDescription: "We create AI-powered assistance solutions that deliver personalized support to travelers throughout their journey. Our intelligent systems anticipate needs, solve problems, and enhance the travel experience through contextual, conversational interfaces.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/intelligent-travel-assistance.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "AI-Powered Travel Chatbots",
        description: "We develop intelligent virtual assistants that combine natural language processing, machine learning, and travel domain expertise to provide conversational support across channels. Our chatbots handle inquiries, bookings, changes, and personalized recommendations with human-like understanding."
      },
      {
        title: "Proactive Travel Alerts",
        description: "Our proactive notification systems monitor flight statuses, weather conditions, traffic patterns, and other factors to keep travelers informed of changes that may impact their journey. These solutions reduce stress and enable travelers to adjust plans quickly when disruptions occur."
      },
      {
        title: "Voice-Enabled Travel Services",
        description: "We create voice-first travel experiences for smart speakers, in-car systems, and mobile devices that allow hands-free booking, information retrieval, and service requests. Our voice solutions make travel planning and management more accessible and convenient."
      }
    ]
  };

  const travelTechContent4 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal travel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Booking & Reservation Systems",
      "Travel Experience Platforms",
      "Intelligent Travel Assistance",
      "Operations Management Solutions"
    ],
    featuredService: "Operations Management Solutions",
    featuredServiceDescription: "We develop comprehensive systems that optimize back-office operations for travel providers. Our solutions streamline workflows, enhance resource utilization, and provide actionable insights that improve efficiency and service quality.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/operations-management-solutions.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Inventory & Resource Management",
        description: "Our inventory management solutions enable travel providers to optimize the allocation and utilization of rooms, vehicles, seats, and other resources. These systems include forecasting tools, automated pricing updates, and distribution channel management to maximize revenue."
      },
      {
        title: "Staff Scheduling & Task Management",
        description: "We create workforce management solutions that optimize staff scheduling based on demand forecasts, skill requirements, and employee preferences. These platforms include mobile-first tools for task assignment, communication, and service delivery tracking."
      },
      {
        title: "Business Intelligence & Analytics",
        description: "Our analytics platforms transform travel operations data into actionable insights through interactive dashboards, automated reporting, and predictive models. These solutions help travel businesses identify opportunities for service improvement, cost reduction, and revenue growth."
      }
    ]
  };

  const faqItems = [
    {
      question: "What types of travel technology solutions do you offer?",
      answer: "We provide comprehensive travel technology services including booking and reservation systems, mobile travel apps, AI-powered traveler assistance, personalized experience platforms, operations management software, and business intelligence solutions. Our goal is to transform how travel is sold, managed, and experienced."
    },
    {
      question: "How do you integrate with travel industry systems and GDSs?",
      answer: "We have extensive experience integrating with all major Global Distribution Systems (GDSs), Online Travel Agencies (OTAs), payment gateways, and travel supplier APIs. Our solutions support industry standards like NDC and ONE Order while ensuring seamless data flow across the travel ecosystem."
    },
    {
      question: "Can you build custom booking engines for travel businesses?",
      answer: "Absolutely. We develop tailored booking solutions for hotels, airlines, cruise lines, tour operators, and travel agencies. Our booking engines feature responsive designs, multi-language support, dynamic pricing, customizable business rules, and integration with existing business systems."
    },
    {
      question: "How do you leverage AI in travel applications?",
      answer: "We implement AI for personalized recommendations, natural language chatbots, dynamic pricing optimization, demand forecasting, sentiment analysis, fraud detection, and disruption management. Our AI solutions enhance customer experiences while improving operational efficiency."
    },
    {
      question: "What mobile capabilities do your travel solutions offer?",
      answer: "Our mobile travel applications provide comprehensive functionality including inspirational content, booking capabilities, itinerary management, contactless check-in, digital room keys, in-destination services, real-time alerts, and loyalty program integration—all optimized for on-the-go usage."
    },
    {
      question: "How do you approach personalization in travel platforms?",
      answer: "We create personalization engines that analyze traveler profiles, past behavior, context, and preferences to deliver tailored recommendations, custom offers, dynamic content, and adaptive user interfaces. Our solutions balance personalization with privacy and security considerations."
    },
    {
      question: "Can you develop solutions for business travel management?",
      answer: "Yes, we build comprehensive corporate travel platforms featuring policy compliance, approval workflows, expense management, duty of care functionality, reporting tools, and traveler engagement features. Our solutions help organizations balance traveler satisfaction with cost control objectives."
    },
    {
      question: "What analytics capabilities do your travel solutions include?",
      answer: "Our platforms provide advanced analytics for booking conversion, pricing optimization, traveler behavior, operational performance, and market trends. We develop customized dashboards and reporting tools that transform complex travel data into actionable business insights."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Yes, we offer ongoing support, platform optimization, feature enhancements, security updates, and technology modernization. Our managed services ensure your travel solutions remain secure, scalable, and aligned with evolving industry trends and traveler expectations."
    },
    {
      question: "Why choose 10Pearls for travel technology development?",
      answer: "10Pearls combines deep travel industry expertise with technical excellence in emerging technologies. We understand the unique complexities of travel distribution, prioritize seamless user experiences, and deliver scalable solutions that advance digital transformation while driving business growth."
    }
  ];

  return (
    <div>
      <Hero {...heroContent} />
      <TextHighlight {...textHeroContent} />
      <BrandSlider />
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-6">
          <span className="bg-purple-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services we offer
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful travel solutions. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Booking & Reservation Systems",
            "Intelligent Travel Assistance",
            "Travel Experience Platforms",
            "Operations Management Solutions",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-purple-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <EdtechServices {...travelTechContent1} />
      <EdtechServices {...travelTechContent2} />
      <EdtechServices {...travelTechContent3} />
      <EdtechServices {...travelTechContent4} />
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      <TextHeroSection />
      {/* Rest of the page content would go here */}
    </div>
  );
};

export default Travel;