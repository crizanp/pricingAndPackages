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

export default function AIDevelopment() {
  const serviceData = {
    title: "AI Development Services",
    description: "We build custom AI solutions that enhance decision-making, automation, and business intelligence while delivering scalable, ethical, and innovative technological experiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "48",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      {
        title: "Custom AI Solution Development",
        description: "Get tailor-made AI solutions aligned with your specific business challenges and goals."
      },
      {
        title: "Machine Learning Models",
        description: "Develop and deploy machine learning models that extract actionable insights from your data."
      },
      {
        title: "Natural Language Processing",
        description: "Implement NLP solutions for advanced text analysis, chatbots, and content generation."
      },
      {
        title: "Computer Vision Systems",
        description: "Create powerful image and video analysis systems for object detection and recognition."
      },
      {
        title: "AI Integration Services",
        description: "Seamlessly integrate AI capabilities into your existing software ecosystem and workflows."
      },
      {
        title: "AI Maintenance & Optimization",
        description: "Ensure your AI systems remain accurate, ethical, and optimized with ongoing support and retraining."
      }
    ]
  };
  const industrySliderData = {
    title: "Serving a variety of industries with AI Solutions",
    subtitle: "FoxBeep provides industry-leading AI technologies that transform how businesses operate and engage with customers.",
    industries: [
      {
        title: "Finance",
        description: "Fraud detection, algorithmic trading, and personalized financial advisory systems.",
      },
      {
        title: "Healthcare",
        description: "Diagnostic assistance, patient data analysis, and treatment recommendation systems.",
      },
      {
        title: "Retail",
        description: "Inventory optimization, customer behavior prediction, and personalized shopping experiences.",
      },
      {
        title: "Manufacturing",
        description: "Predictive maintenance, quality control automation, and supply chain optimization.",
      },
      {
        title: "Transportation",
        description: "Route optimization, demand forecasting, and autonomous system development.",
      },
      {
        title: "Marketing",
        description: "Customer segmentation, content generation, and campaign performance prediction.",
      }
    ]
  };
  const devProcessData = {
    title: "Our AI Development Process",
    description: "We follow a systematic approach to deliver high-quality AI solutions that are effective, ethical, and tailored to your specific business requirements.",
    processSteps: [
      {
        number: 1,
        title: "Problem Definition",
        description: "Clearly identify the business problem and determine if AI is the appropriate solution, defining specific goals, metrics, and expected outcomes."
      },
      {
        number: 2,
        title: "Data Assessment",
        description: "Evaluate available data sources, quality, and volume needed for training effective AI models while identifying data collection or preparation needs."
      },
      {
        number: 3,
        title: "Solution Architecture",
        description: "Design the technical architecture for your AI solution, selecting appropriate algorithms, frameworks, and infrastructure components."
      },
      {
        number: 4,
        title: "Model Development",
        description: "Build, train, and test AI models using best practices in machine learning development and optimization techniques."
      },
      {
        number: 5,
        title: "Integration & Deployment",
        description: "Seamlessly integrate the AI system with your existing technology stack and deploy to production environments."
      },
      {
        number: 6,
        title: "Testing & Validation",
        description: "Conduct comprehensive testing across various scenarios to ensure accuracy, reliability, and performance of your AI solution."
      },
      {
        number: 7,
        title: "Monitoring & Improvement",
        description: "Implement continuous monitoring systems and iterative improvement processes to maintain and enhance AI performance over time."
      }
    ]
  };
  const faqItems = [
    {
      question: "How much does AI development cost?",
      answer: "AI development costs vary widely based on project complexity, data requirements, and implementation scope. Basic AI implementations may range from $10,000-$30,000, while sophisticated AI systems with custom algorithms can cost $50,000-$300,000+. Enterprise-level AI solutions typically start at $100,000 and can exceed $500,000 depending on scale and complexity."
    },
    {
      question: "How long does the AI development process take?",
      answer: "The timeline for AI development typically ranges from 8-24 weeks depending on complexity. Simpler AI integrations may be completed in 8-12 weeks, while complex custom AI solutions can take 16-24 weeks or longer. Factors affecting timeline include data availability and quality, model complexity, integration requirements, and testing needs."
    },
    {
      question: "Why choose Foxbeep for AI development?",
      answer: "Clients choose Foxbeep for our proven track record of delivering high-quality AI solutions. We offer expert data scientists and AI engineers, transparent development processes, ethical AI practices, and ongoing optimization support. Our business-focused approach ensures your AI project delivers measurable ROI while solving real business problems."
    },
    {
      question: "What technologies do you use for AI development?",
      answer: "We utilize modern AI technologies including TensorFlow, PyTorch, and scikit-learn for model development. For natural language processing, we implement BERT, GPT, and custom transformers. Our computer vision solutions use OpenCV and deep learning frameworks. We deploy on scalable cloud infrastructure including AWS SageMaker, Google AI Platform, and Azure ML."
    },
    {
      question: "Do you provide ongoing AI maintenance?",
      answer: "Yes, we offer comprehensive AI maintenance packages to ensure your models remain accurate and effective. Our maintenance services include model retraining, performance monitoring, data pipeline management, algorithm updates, and continuous improvement based on real-world feedback and changing business requirements."
    }
  ]
  const benefitsData = {
    title: "Key benefits of our AI development services",
    benefits: [
      "Data-driven decision making to improve business outcomes.",
      "Automation of repetitive tasks to increase operational efficiency.",
      "Scalable AI solutions that grow with your business.",
      "Ethical AI implementation with transparency and accountability.",
      "Experienced data scientists and machine learning engineers."
    ],
    techIcons: [
      { name: "TensorFlow", isDark: true },
      { name: "PyTorch", isDark: false },
      { name: "Python", isDark: true },
      { name: "Scikit-learn", isDark: false },
      { name: "Keras", isDark: true },
      { name: "AWS", isDark: false },
      { name: "Azure ML", isDark: true },
      { name: "Docker", isDark: false },
      { name: "Kubernetes", isDark: true }
    ],
    ctaText: "Let's Discuss"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for AI Development",
    features: [
      {
        id: "customization",
        title: "Custom AI Solutions",
        content: "We build highly customized AI models tailored to your specific business challenges, ensuring relevant and actionable insights from your data."
      },
      {
        id: "security",
        title: "Ethical AI Practices",
        content: "Our AI development incorporates best-in-class security, privacy, and fairness measures to ensure responsible and trustworthy artificial intelligence."
      },
      {
        id: "userInterface",
        title: "Intuitive User Interfaces",
        content: "We design user-friendly interfaces that make complex AI outputs accessible and actionable for all stakeholders, regardless of technical expertise."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "Our AI systems are built for efficiency and accuracy, using advanced algorithms, model optimization, and scalable infrastructure to deliver reliable results."
      },
      {
        id: "integration",
        title: "Seamless Integration",
        content: "We integrate AI capabilities with your existing business systems, data sources, and workflows to maximize value and minimize disruption."
      },
      {
        id: "maintenance",
        title: "Continuous Improvement",
        content: "Get peace of mind with our ongoing support plans, including model retraining, performance monitoring, and algorithm updates to maintain accuracy."
      }
    ]
  };
  const teamBannerData = {
    title: "Build an AI development",
    highlightedText: "Team",
    buttonText: "Start Your Project",
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
          src="/images/pages/ai-dev.avif"
          alt="AI Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Machine Learning Models",
            description: "Custom ML models for prediction, classification, and anomaly detection.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "Natural Language Processing",
            description: "Advanced NLP solutions for text analysis, sentiment analysis, and chatbots.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-green-500"
          },
          {
            id: 3,
            title: "Computer Vision Systems",
            description: "Intelligent image and video analysis for object detection and recognition.",
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
        questionSize="text-2xl"
      />     
      <TextHeroSection />
    </div>
  );
}