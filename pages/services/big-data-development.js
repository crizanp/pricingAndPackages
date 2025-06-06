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

export default function BigDataDevelopment() {
  const serviceData = {
    title: "Big Data Development Services",
    description: "We build scalable big data solutions that transform raw information into business intelligence, enabling data-driven decision making and unlocking hidden insights from your enterprise data.",
    rating: "4.8",
    platform: "ON CLUTCH",
    reviewCount: "45",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      {
        title: "Data Architecture Design",
        description: "Custom big data architectures designed for your specific data volume, variety, and velocity needs."
      },
      {
        title: "Data Pipeline Development",
        description: "Robust ETL/ELT pipelines that efficiently collect, transform, and load data from multiple sources."
      },
      {
        title: "Data Warehouse Solutions",
        description: "Scalable data warehouse implementations optimized for analytics and business intelligence."
      },
      {
        title: "Real-time Analytics Systems",
        description: "Stream processing solutions that analyze data in motion for immediate insights and actions."
      },
      {
        title: "Data Lake Implementation",
        description: "Centralized repositories that store structured and unstructured data at any scale."
      },
      {
        title: "Big Data Visualization",
        description: "Interactive dashboards that make complex data accessible and actionable for decision makers."
      }
    ]
  };
  const industrySliderData = {
    title: "Serving a variety of industries with Big Data Solutions",
    subtitle: "FoxBeep provides industry-leading big data technologies that transform how businesses harness their information assets for competitive advantage.",
    industries: [
      {
        title: "Financial Services",
        description: "Risk analysis, fraud detection, and customer insight systems processing billions of transactions.",
      },
      {
        title: "Healthcare",
        description: "Patient data analytics, population health management, and operational efficiency systems.",
      },
      {
        title: "E-commerce",
        description: "Customer behavior analysis, inventory optimization, and real-time recommendation engines.",
      },
      {
        title: "Manufacturing",
        description: "Predictive maintenance, quality control, and supply chain optimization through IoT data integration.",
      },
      {
        title: "Telecommunications",
        description: "Network performance analytics, customer churn prediction, and service quality monitoring.",
      },
      {
        title: "Energy",
        description: "Smart grid optimization, consumption forecasting, and resource allocation systems.",
      }
    ]
  };
  const devProcessData = {
    title: "Our Big Data Development Process",
    description: "We follow a comprehensive approach to deliver high-performance big data solutions that effectively capture, process, store, and analyze your enterprise data at scale.",
    processSteps: [
      {
        number: 1,
        title: "Data Discovery & Requirements",
        description: "Analyze your data sources, business objectives, and analytical needs to define clear requirements for your big data initiative."
      },
      {
        number: 2,
        title: "Architecture Design",
        description: "Design a scalable data architecture that addresses your current needs while providing flexibility for future growth and new data sources."
      },
      {
        number: 3,
        title: "Data Modeling",
        description: "Create optimal data models and schemas that support efficient storage, retrieval, and analysis of both structured and unstructured data."
      },
      {
        number: 4,
        title: "Infrastructure Setup",
        description: "Deploy and configure the necessary big data technologies, whether on-premises, cloud-based, or hybrid environments."
      },
      {
        number: 5,
        title: "ETL/ELT Development",
        description: "Build robust data pipelines that extract data from various sources, transform it appropriately, and load it into your data repositories."
      },
      {
        number: 6,
        title: "Analytics Implementation",
        description: "Develop analytical capabilities including batch processing, real-time analytics, and machine learning models as required."
      },
      {
        number: 7,
        title: "Visualization & Reporting",
        description: "Create intuitive dashboards and reporting interfaces that enable stakeholders to derive actionable insights from complex data."
      }
    ]
  };
  const faqItems = [
    {
      question: "How much does big data development cost?",
      answer: "Big data development costs vary based on data volume, complexity, and required functionality. Entry-level data pipelines may start around $30,000-$60,000, while comprehensive enterprise big data platforms typically range from $100,000-$500,000+. Factors affecting cost include data sources, processing requirements, real-time capabilities, and visualization needs."
    },
    {
      question: "How long does the big data implementation process take?",
      answer: "Big data implementations typically require 3-9 months depending on scope and complexity. Basic data pipeline projects may be completed in 3-4 months, while enterprise-wide data platforms can take 6-9 months or longer. Timeline factors include data complexity, source system integration challenges, and the maturity of your existing data practices."
    },
    {
      question: "Why choose Foxbeep for big data development?",
      answer: "Clients choose Foxbeep for our proven expertise in building scalable big data solutions that deliver measurable business value. We offer deep technical knowledge across the big data ecosystem, industry-specific experience, and a methodology that emphasizes data governance, quality, and security from day one."
    },
    {
      question: "What technologies do you use for big data projects?",
      answer: "We implement modern big data technologies tailored to your specific needs. Our technology stack includes Hadoop, Spark, Kafka, Snowflake, AWS EMR, Google BigQuery, Azure Synapse, MongoDB, Cassandra, Elasticsearch, Airflow, and various visualization tools like Tableau, Power BI, and custom dashboards."
    },
    {
      question: "Do you provide ongoing big data support?",
      answer: "Yes, we offer comprehensive maintenance and optimization services for big data systems. Our support includes performance monitoring, pipeline maintenance, data quality management, system scaling, technology upgrades, and continuous improvement of analytical capabilities as your business needs evolve."
    }
  ]
  const benefitsData = {
    title: "Key benefits of our big data development services",
    benefits: [
      "Scalable architecture that grows with your data volume and business needs.",
      "Unified view of data across your organization for better insights.",
      "Increased operational efficiency through data-driven process optimization.",
      "Enhanced decision making with real-time analytics and reporting.",
      "Improved data quality, security, and governance practices."
    ],
    techIcons: [
      { name: "Hadoop", isDark: true },
      { name: "Spark", isDark: false },
      { name: "Kafka", isDark: true },
      { name: "MongoDB", isDark: false },
      { name: "Cassandra", isDark: true },
      { name: "Snowflake", isDark: false },
      { name: "Tableau", isDark: true },
      { name: "Airflow", isDark: false },
      { name: "AWS", isDark: true }
    ],
    ctaText: "Let's Discuss"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Big Data Development",
    features: [
      {
        id: "scalability",
        title: "Highly Scalable Solutions",
        content: "We design data systems that can seamlessly scale from gigabytes to petabytes, supporting your growth without architectural overhauls."
      },
      {
        id: "reliability",
        title: "Enterprise-Grade Reliability",
        content: "Our big data implementations include robust fault tolerance, data redundancy, and recovery mechanisms to ensure continuous data availability."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "We fine-tune every component of your data pipeline for maximum throughput, minimizing latency and resource consumption."
      },
      {
        id: "dataQuality",
        title: "Built-in Data Quality",
        content: "Our solutions incorporate automated data quality checks, cleansing processes, and governance frameworks to maintain high data integrity."
      },
      {
        id: "flexibility",
        title: "Technology Flexibility",
        content: "We're not tied to specific vendors or technologies, allowing us to select the best tools for your specific requirements and existing investments."
      },
      {
        id: "governance",
        title: "Comprehensive Data Governance",
        content: "We implement security, privacy, and compliance controls throughout your data lifecycle, meeting regulatory requirements like GDPR, HIPAA, and CCPA."
      }
    ]
  };
  const teamBannerData = {
    title: "Build a Big Data development",
    highlightedText: "Team",
    buttonText: "Start Your Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-orange-600",
    buttonGradientFrom: "from-orange-500",
    buttonGradientTo: "to-orange-600",
    buttonHoverFrom: "from-orange-600",
    buttonHoverTo: "to-orange-700"
  };
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="/images/pages/big-data.avif"
          alt="Big Data Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Data Lakes & Warehouses",
            description: "Scalable repositories for all your structured and unstructured data needs.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-orange-500"
          },
          {
            id: 2,
            title: "ETL/ELT Pipelines",
            description: "Robust data integration flows that prepare data for analytics and business intelligence.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-yellow-500"
          },
          {
            id: 3,
            title: "Real-time Analytics",
            description: "Stream processing systems that deliver insights as events happen in your business.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-red-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="orange"
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