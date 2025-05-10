import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const Healthcare = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Transforming Healthcare Through Digital Innovation",
    subtitle: "Revolutionizing patient care and operational efficiency with cutting-edge technology solutions designed for the evolving healthcare landscape.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2l3t5r0qa5HGrgwanWd43L2qcTBqa-2n-w&s",
    imageAlt: "Modern healthcare facility with digital technology"
  };

  const textHeroContent = {
    headingText: "TECHNOLOGY IS TRANSFORMING HEALTHCARE BY ENABLING",
    highlightWord: "ENABLING",
    descriptionText: "Technology is transforming healthcare by enabling more personalized, efficient, and accessible care through digital innovation. From telemedicine platforms to AI-powered diagnostics, emerging technologies are reshaping how healthcare is delivered and experienced. {brandName} helps healthcare organizations enhance patient outcomes and operational efficiency through an integrated, secure digital healthcare ecosystem.",
    brandName: "10Pearls",
    highlightColor: "bg-blue-300"
  };

  const healthTechContent1 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal healthcare solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Patient Engagement Solutions",
      "Healthcare Analytics & AI",
      "Digital Health Platforms",
      "Medical IoT & Wearables"
    ],
    featuredService: "Patient Engagement Solutions",
    featuredServiceDescription: "We develop comprehensive patient engagement platforms that empower patients with self-service tools, personalized health information, and seamless communication channels with providers. Our solutions enhance the patient experience while improving health outcomes.",
    featuredServiceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_n0amMeJTei1ezzpcuQndvZf4mAja8CB-uw&s",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Patient Portals & Mobile Apps",
        description: "We create intuitive digital portals and mobile applications that give patients 24/7 access to their health records, appointment scheduling, medication management, and secure provider messaging. Our solutions prioritize user experience while ensuring compliance with healthcare regulations."
      },
      {
        title: "Telemedicine Platforms",
        description: "Our custom telemedicine solutions bridge the gap between patients and providers through secure video consultations, remote monitoring, and integrated EHR systems. We design platforms that make virtual care as effective and personal as in-person visits."
      },
      {
        title: "Patient Education Systems",
        description: "We develop personalized health education platforms that deliver condition-specific information, treatment guidance, and preventive care resources to patients. These systems improve health literacy and empower patients to actively participate in their care journey."
      }
    ]
  };

  const healthTechContent2 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal healthcare solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Patient Engagement Solutions",
      "Healthcare Analytics & AI",
      "Digital Health Platforms",
      "Medical IoT & Wearables"
    ],
    featuredService: "Healthcare Analytics & AI",
    featuredServiceDescription: "We harness the power of data and artificial intelligence to transform healthcare delivery, clinical decision-making, and operational efficiency. Our analytics and AI solutions turn complex healthcare data into actionable insights that improve patient outcomes and reduce costs.",
    featuredServiceImage: "https://cloudinary.hbs.edu/hbsit/image/upload/s--rIH56VDY--/f_auto,c_fill,h_375,w_750,/v20200101/46F1F1D3646E19918F869DBF930C3E5C.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Predictive Analytics",
        description: "Our predictive analytics solutions leverage machine learning algorithms to identify patients at risk for specific conditions, predict treatment outcomes, and recommend preventive interventions. These tools enable proactive care that improves health outcomes while reducing costs."
      },
      {
        title: "Clinical Decision Support",
        description: "We develop AI-powered systems that assist healthcare providers with evidence-based decision-making at the point of care. Our solutions analyze patient data, medical literature, and clinical guidelines to offer personalized treatment recommendations and alerts."
      },
      {
        title: "Healthcare Business Intelligence",
        description: "We create comprehensive analytics dashboards and reporting tools that transform healthcare data into visual insights for administrators and clinicians. These solutions optimize resource allocation, improve operational efficiency, and enhance quality measurement."
      }
    ]
  };

  const healthTechContent3 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal healthcare solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Patient Engagement Solutions",
      "Healthcare Analytics & AI",
      "Digital Health Platforms",
      "Medical IoT & Wearables"
    ],
    featuredService: "Digital Health Platforms",
    featuredServiceDescription: "We build comprehensive digital health ecosystems that integrate electronic health records, care management tools, and patient engagement features. Our platforms streamline clinical workflows while ensuring seamless data exchange between all healthcare stakeholders.",
    featuredServiceImage: "https://www.healthtechdigital.com/wp-content/uploads/Home-Instead-debuts-Birdies-home-healthcare-tech-platform-to-deliver-person-centred-care-at-home-min.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Electronic Health Record (EHR) Integration",
        description: "We specialize in developing solutions that seamlessly integrate with existing EHR systems, enabling interoperability and data exchange. Our integration services ensure that clinical information flows securely across the healthcare ecosystem."
      },
      {
        title: "Care Coordination Platforms",
        description: "Our care coordination solutions enable multidisciplinary teams to collaborate effectively across care settings. These platforms support care planning, task management, secure messaging, and progress tracking to ensure patients receive coordinated, high-quality care."
      },
      {
        title: "Population Health Management",
        description: "We develop comprehensive systems for managing the health of patient populations through risk stratification, care gap identification, and targeted intervention programs. These platforms help healthcare organizations succeed in value-based care models."
      }
    ]
  };

  const healthTechContent4 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal healthcare solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Patient Engagement Solutions",
      "Healthcare Analytics & AI",
      "Digital Health Platforms",
      "Medical IoT & Wearables"
    ],
    featuredService: "Medical IoT & Wearables",
    featuredServiceDescription: "We create innovative connected health solutions that leverage IoT technology to monitor patient health, collect real-time data, and enable remote care. Our medical IoT and wearable solutions extend care beyond traditional settings into daily life.",
    featuredServiceImage: "https://cdn.sanity.io/images/14xthjfi/prod/92c270efd13ca098937e3f4ed2f16762aa6a257a-1254x836.jpg?w=1600&q=75&fit=clip&auto=format",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Remote Patient Monitoring",
        description: "We develop comprehensive remote monitoring systems that collect and analyze patient health data from connected devices. These solutions enable early intervention, reduce hospital readmissions, and support chronic disease management in home settings."
      },
      {
        title: "Medical Device Connectivity",
        description: "Our solutions connect medical devices to healthcare IT systems, ensuring seamless data flow from the point of care to electronic health records. We prioritize security, reliability, and standards compliance in all medical device integration projects."
      },
      {
        title: "Smart Hospital Solutions",
        description: "We create IoT-enabled systems that optimize hospital operations through asset tracking, environmental monitoring, and workflow automation. These smart hospital solutions improve efficiency, enhance patient safety, and reduce operational costs."
      }
    ]
  };

  const faqItems = [
    {
      question: "What types of healthcare technology solutions do you offer?",
      answer: "We provide end-to-end healthcare technology development services, including patient engagement platforms, telemedicine systems, healthcare analytics and AI solutions, digital health platforms, medical IoT applications, and interoperability solutions. Our goal is to transform healthcare delivery through innovative technology."
    },
    {
      question: "How do you ensure HIPAA compliance in your healthcare solutions?",
      answer: "We implement comprehensive security measures including encryption, access controls, audit logging, and secure authentication. Our development processes incorporate HIPAA requirements from design through deployment, and we conduct regular security assessments to maintain compliance."
    },
    {
      question: "Can you integrate with existing electronic health record (EHR) systems?",
      answer: "Yes, we specialize in EHR integration using industry standards like FHIR, HL7, and SMART on FHIR. Our solutions seamlessly connect with major EHR platforms while ensuring data integrity, security, and complete interoperability across healthcare systems."
    },
    {
      question: "How do you leverage AI in healthcare solutions?",
      answer: "We implement AI for predictive analytics, clinical decision support, medical image analysis, natural language processing of clinical notes, patient risk stratification, and personalized treatment recommendations. Our AI solutions are designed to augment clinical expertise and improve patient outcomes."
    },
    {
      question: "What remote patient monitoring capabilities do you offer?",
      answer: "Our remote monitoring solutions support continuous data collection from medical devices and wearables, real-time analytics, automated alerts, patient engagement tools, and integration with clinical workflows. These systems enable proactive care management outside traditional healthcare settings."
    },
    {
      question: "How do you approach the user experience for healthcare applications?",
      answer: "We design healthcare interfaces with accessibility, clinical workflows, and varying tech literacy in mind. Our human-centered design process involves extensive user research, iterative testing with clinicians and patients, and optimization for both efficiency and ease of use."
    },
    {
      question: "Can you develop custom telehealth platforms?",
      answer: "Absolutely. We build comprehensive telehealth solutions featuring secure video consultations, scheduling systems, virtual waiting rooms, EHR integration, e-prescribing capabilities, and remote monitoring. Our telehealth platforms are designed to deliver engaging, effective virtual care experiences."
    },
    {
      question: "What analytics capabilities do your healthcare solutions offer?",
      answer: "Our platforms provide advanced analytics for clinical outcomes, operational efficiency, patient engagement, population health, and financial performance. We develop customized dashboards and reporting tools that transform complex healthcare data into actionable insights."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Yes, we offer ongoing support, platform optimization, feature enhancements, compliance updates, and technology modernization. Our managed services ensure your healthcare solutions remain secure, compliant, and aligned with evolving clinical and business requirements."
    },
    {
      question: "Why choose 10Pearls for healthcare technology development?",
      answer: "10Pearls combines deep healthcare domain expertise with technical excellence in emerging technologies. We understand the unique challenges of healthcare IT, prioritize security and compliance, and deliver scalable solutions that advance digital transformation while improving patient outcomes."
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
          <span className="bg-blue-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services we offer
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful healthcare solutions. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Patient Engagement Solutions",
            "Digital Health Platforms",
            "Healthcare Analytics & AI",
            "Medical IoT & Wearables",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <EdtechServices {...healthTechContent1} />
      <EdtechServices {...healthTechContent2} />
      <EdtechServices {...healthTechContent3} />
      <EdtechServices {...healthTechContent4} />
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

export default Healthcare;