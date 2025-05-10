import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const Education = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Empowering Learning Through Innovating Technologies",
    subtitle: "Revolutionizing the learning experience by empowering learners to explore, create, and excel in an ever-evolving digital landscape.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://10pearls.com/wp-content/uploads/2025/01/education-banner-2Her0-Image.png",
    imageAlt: "Students using technology in a library"
  };
  const textHeroContent = {
    headingText: "TECHNOLOGY IS RESHAPING EDUCATION BY REVOLUTIONIZING",
    highlightWord: "REVOLUTIONIZING",
    descriptionText: "Technology is reshaping education by revolutionizing how information is accessed, facilitating personalized learning experiences, and fostering global connectivity among learners and educators alike. From augmented and virtual reality to artificial intelligence, each emerging technology is poised to transform educational paradigms. {brandName} aids enterprises in enhancing learning experiences and academic achievements via an innovative, collaborative educational ecosystem.",
    brandName: "10Pearls",
    highlightColor: "bg-yellow-300"
  };
  const edtechContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "we have a unique approach to developing your ideal Foxbeep software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Learning Management Systems (LMS)",
      "Educational Content Creation and Delivery",
      "Emerging Tech Experiences",
      "Artificial Intelligence"
    ],
    featuredService: "Learning management systems (LMS)",
    featuredServiceDescription: "Collaborative, self-paced learning solutions are the need of the hour. We empower forward-thinking educational institutions to reach students across various channels and integrate innovative learning methods transforming learning.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/learning-management-systems.jpg",
    highlightColor: "bg-lime-300" // You can use any Tailwind color class
  };
  const MoreedtechContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal Foxbeep software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Learning Management Systems (LMS)",
      "Educational Content Creation and Delivery",
      "Emerging Tech Experiences",
      "Artificial Intelligence"
    ],
    featuredService: "Learning management systems (LMS)",
    featuredServiceDescription: "Collaborative, self-paced learning solutions are the need of the hour. We empower forward-thinking educational institutions to reach students across various channels and integrate innovative learning methods transforming learning.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/learning-management-systems.jpg",
    highlightColor: "bg-lime-300",
    featureDetails: [
      {
        title: "Intelligent e-learning platforms",
        description: "We develop e-learning solutions incorporating AI tutoring, empowering every student to embark on personalized educational journeys with self-paced learning options. Our platforms feature seamless progress tracking, customized reporting dashboards, and interactive e-learning content accessibility."
      },
      {
        title: "Platform integration",
        description: "Our forward-looking teams leverage cutting-edge technologies to enrich learning experiences and elevate academic achievements. By integrating customized, feature-rich e-learning platforms, we optimize academic outcomes, streamline operations, and foster a collaborative learning environment."
      },
      {
        title: "Learning analytics and reporting",
        description: "We transform extensive learning data into visually intuitive, actionable insights for all stakeholders and develop analytics tools to monitor learner progress, engagement, and performance."
      }
    ]
  };
  const Moreed2techContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal Foxbeep software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Learning Management Systems (LMS)",
      "Educational Content Creation and Delivery",
      "Emerging Tech Experiences",
      "Artificial Intelligence"
    ],
    featuredService: "Educational Content Creation and Delivery",
    featuredServiceDescription: "We create digital educational content, including interactive multimedia resources, e-books, videos, and online courses. We develop platforms and tools for content creation, delivery, and distribution, making educational resources more accessible and engaging for learners.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/educational-content-creation-and-delivery.jpg", // Replace with actual image URL if needed
    highlightColor: "bg-lime-300",
    featureDetails: [
      {
        title: "Content Management System (CMS)",
        description: "We facilitate custom content creation by providing intuitive content management tools, robust templates, and seamless integration capabilities within our CMS platform. Our customized CMS solutions manage authoring, storage, publishing, and content analytics and streamline content creation."
      },
      {
        title: "Virtual Classroom Solutions",
        description: "We specialize in designing and developing robust virtual classroom platforms and software tailored to facilitate engaging live online learning sessions, lectures, and interactive discussions."
      },
      {
        title: "Mobile Learning App Development",
        description: "We specialize in the design and development of mobile applications offering intuitive interfaces, interactive content, and offline access, ensuring seamless learning opportunities that align with modern learners’ needs and preferences."
      }
    ]
  };

  const Moreed3techContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal Foxbeep software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Learning Management Systems (LMS)",
      "Educational Content Creation and Delivery",
      "Emerging Tech Experiences",
      "Artificial Intelligence"
    ],
    featuredService: "Emerging Tech Experiences",
    featuredServiceDescription: "We revolutionize learning for tech-forward institutions by designing and developing immersive mixed-reality and 3D simulation solutions. Our solutions allow students to grasp complex concepts in an engaging manner.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/emerging-tech-experiences.jpg", // Replace with an actual image if available
    highlightColor: "bg-lime-300",
    featureDetails: [
      {
        title: "AR/VR Content Creation",
        description: "We specialize in creating immersive e-learning solutions utilizing AR/VR and customized multi-dimensional technologies into educational content to provide immersive and interactive learning experiences."
      },
      {
        title: "Metaverse",
        description: "With extensive expertise, we craft interconnected metaverse and 3D layer solutions, transforming learning and student experiences. Our teams utilize innovative technologies to create visually captivating 3D simulations, immersing students in virtual learning environments."
      },
      {
        title: "Gamification",
        description: "At 10Pearls, we specialize in developing educational games to infuse enjoyment into learning experiences. Incorporating gamification elements into learning platforms serves to elevate learner engagement and enhance motivation."
      }
    ]
  };
  const Moreed4techContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal Foxbeep software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Learning Management Systems (LMS)",
      "Educational Content Creation and Delivery",
      "Emerging Tech Experiences",
      "Artificial Intelligence"
    ],
    featuredService: "Artificial Intelligence",
    featuredServiceDescription: "We specialize in the development and deployment of AI technologies to tailor learning experiences, streamline assessment and feedback processes, identify opportunities for growth, and promote universal access to high-quality education.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/artificial-intelligence.jpg", // Replace with actual image if needed
    highlightColor: "bg-lime-300",
    featureDetails: [
      {
        title: "Personalized Recommendations",
        description: "We leverage AI/ML algorithms to monitor student interests, activities, and performance metrics. This enables educators to offer tailored educational content, course suggestions, and career advancement opportunities."
      },
      {
        title: "Virtual Assistants",
        description: "Offer round-the-clock support to students through our bespoke AI chatbots and virtual assistants. These intelligent systems address inquiries on admissions, enrollment, schedules, and more, delivering tailored assistance."
      },
      {
        title: "Assessment and Testing Tools",
        description: "We specialize in the creation of AI-driven assessment and testing tools designed to conduct quizzes, exams, and evaluations within online or virtual learning environments."
      }
    ]
  };
  const faqItems = [
    {
      question: "What types of EdTech solutions do you offer?",
      answer: "We offer end-to-end EdTech development services, including Learning Management Systems (LMS), mobile learning apps, AI-driven tutoring platforms, virtual classroom software, AR/VR immersive learning solutions, and personalized learning analytics tools. Our goal is to reshape the way education is delivered and experienced."
    },
    {
      question: "How do you use AI in education platforms?",
      answer: "We leverage artificial intelligence to deliver personalized learning experiences, real-time feedback, intelligent assessments, and career-aligned content recommendations. Our AI-driven virtual assistants also provide 24/7 support for students and educators across platforms."
    },
    {
      question: "Can you build a customized Learning Management System (LMS)?",
      answer: "Absolutely. We specialize in developing scalable, feature-rich LMS platforms tailored to your institution’s needs. These systems support blended learning, track learner progress, integrate with third-party tools, and ensure a collaborative, engaging user experience."
    },
    {
      question: "How do immersive technologies like AR/VR enhance learning?",
      answer: "AR/VR transforms education by offering interactive and immersive experiences that help students visualize complex concepts, conduct virtual experiments, and explore virtual environments. These tools increase engagement and retention, especially in STEM and medical education."
    },
    {
      question: "Do you provide mobile learning solutions?",
      answer: "Yes. We design mobile-first learning apps with intuitive interfaces, offline capabilities, gamified features, and real-time performance tracking. These apps ensure learners can access educational content anytime, anywhere, on any device."
    },
    {
      question: "How do you ensure content accessibility and inclusivity?",
      answer: "We develop accessible digital content and platforms that follow WCAG guidelines, support multiple languages, and offer customizable experiences. From interactive multimedia to voice navigation, our solutions cater to diverse learning needs and abilities."
    },
    {
      question: "What kind of analytics do your platforms offer?",
      answer: "Our systems provide real-time insights on learner engagement, performance, completion rates, and content effectiveness. Dashboards and reporting tools empower educators and administrators to make data-driven decisions that enhance learning outcomes."
    },
    {
      question: "Can your platforms integrate with existing school systems?",
      answer: "Yes, we offer seamless platform integration with SIS, ERP, CRM, video conferencing tools, and third-party educational apps. This ensures unified data flow, smooth operations, and improved learning continuity."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Definitely. We offer continuous support, platform optimization, new feature rollouts, and technology updates to keep your EdTech solution scalable, secure, and aligned with evolving education trends."
    },
    {
      question: "Why choose 10Pearls for educational technology development?",
      answer: "10Pearls stands out for its deep expertise in emerging technologies, user-centric design, and proven success in the education sector. We deliver secure, scalable, and future-ready solutions that empower educators and learners alike."
    }
  ];

  return (
    <div>
      <Hero {...heroContent} />
      <TextHighlight {...textHeroContent} />;
      <BrandSlider />
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-6">
          <span className="bg-lime-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services we offer
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful Foxbeep software. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Learning Management Systems (LMS)",
            "Emerging Tech Experiences",
            "Educational Content Creation and Delivery",
            "Artificial Intelligence",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-lime-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <EdtechServices {...MoreedtechContent} />;
      <EdtechServices {...Moreed2techContent} />;
      <EdtechServices {...Moreed3techContent} />;
      <EdtechServices {...Moreed4techContent} />;
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

export default Education;