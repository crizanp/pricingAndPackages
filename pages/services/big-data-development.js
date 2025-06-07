import Head from "next/head";
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
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Big Data Development Services",
    "description": "Professional big data development services including data architecture design, ETL/ELT pipelines, data warehouses, real-time analytics, data lakes, and business intelligence solutions. Expert big data developers with 18+ years experience.",
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Nepal"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-9810570201",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://facebook.com/foxbeep",
        "https://twitter.com/foxbeep",
        "https://linkedin.com/company/foxbeep"
      ]
    },
    "serviceType": "Big Data Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Big Data Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Architecture Design",
            "description": "Custom big data architectures designed for your specific data volume, variety, and velocity needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Pipeline Development",
            "description": "Robust ETL/ELT pipelines that efficiently collect, transform, and load data from multiple sources"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Warehouse Solutions",
            "description": "Scalable data warehouse implementations optimized for analytics and business intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real-time Analytics Systems",
            "description": "Stream processing solutions that analyze data in motion for immediate insights and actions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Lake Implementation",
            "description": "Centralized repositories that store structured and unstructured data at any scale"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Big Data Visualization",
            "description": "Interactive dashboards that make complex data accessible and actionable for decision makers"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "45",
      "bestRating": "5"
    }
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does big data development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Big data development costs vary based on data volume, complexity, and required functionality. Entry-level data pipelines may start around $30,000-$60,000, while comprehensive enterprise big data platforms typically range from $100,000-$500,000+. Factors affecting cost include data sources, processing requirements, real-time capabilities, and visualization needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the big data implementation process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Big data implementations typically require 3-9 months depending on scope and complexity. Basic data pipeline projects may be completed in 3-4 months, while enterprise-wide data platforms can take 6-9 months or longer. Timeline factors include data complexity, source system integration challenges, and the maturity of your existing data practices."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for big data projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement modern big data technologies tailored to your specific needs. Our technology stack includes Hadoop, Spark, Kafka, Snowflake, AWS EMR, Google BigQuery, Azure Synapse, MongoDB, Cassandra, Elasticsearch, Airflow, and various visualization tools like Tableau, Power BI, and custom dashboards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing big data support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive maintenance and optimization services for big data systems. Our support includes performance monitoring, pipeline maintenance, data quality management, system scaling, technology upgrades, and continuous improvement of analytical capabilities as your business needs evolve."
        }
      }
    ]
  };

  const serviceData = {
    title: "Big Data Development Services",
    description: "We build scalable big data solutions that transform raw information into business intelligence, enabling data-driven decision making and unlocking hidden insights from your enterprise data.",
    rating: "4.8",
    platform: "ON CLUTCH",
    reviewCount: "45",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included in Our Big Data Development Services?",
    services: [
      {
        title: "Data Architecture Design",
        description: "Custom big data architectures designed for your specific data volume, variety, and velocity needs with scalable infrastructure planning."
      },
      {
        title: "Data Pipeline Development",
        description: "Robust ETL/ELT pipelines that efficiently collect, transform, and load data from multiple sources with automated workflows."
      },
      {
        title: "Data Warehouse Solutions",
        description: "Scalable data warehouse implementations optimized for analytics and business intelligence with columnar storage optimization."
      },
      {
        title: "Real-time Analytics Systems",
        description: "Stream processing solutions that analyze data in motion for immediate insights and actions with low-latency processing."
      },
      {
        title: "Data Lake Implementation",
        description: "Centralized repositories that store structured and unstructured data at any scale with cost-effective storage solutions."
      },
      {
        title: "Big Data Visualization",
        description: "Interactive dashboards that make complex data accessible and actionable for decision makers with self-service analytics."
      }
    ]
  };

  const industrySliderData = {
    title: "Big Data Solutions for Every Industry",
    subtitle: "FoxBeep provides industry-leading big data technologies that transform how businesses harness their information assets for competitive advantage across all sectors.",
    industries: [
      {
        title: "Financial Services",
        description: "Risk analysis, fraud detection, algorithmic trading, and customer insight systems processing billions of transactions with real-time monitoring.",
      },
      {
        title: "Healthcare",
        description: "Patient data analytics, population health management, clinical research, and operational efficiency systems with HIPAA compliance.",
      },
      {
        title: "E-commerce",
        description: "Customer behavior analysis, inventory optimization, personalization engines, and real-time recommendation systems for enhanced shopping experiences.",
      },
      {
        title: "Manufacturing",
        description: "Predictive maintenance, quality control, supply chain optimization, and IoT data integration for smart manufacturing operations.",
      },
      {
        title: "Telecommunications",
        description: "Network performance analytics, customer churn prediction, service quality monitoring, and capacity planning systems.",
      },
      {
        title: "Energy & Utilities",
        description: "Smart grid optimization, consumption forecasting, resource allocation systems, and renewable energy management solutions.",
      }
    ]
  };

  const devProcessData = {
    title: "Our Big Data Development Process",
    description: "We follow a comprehensive approach to deliver high-performance big data solutions that effectively capture, process, store, and analyze your enterprise data at scale with proven methodologies.",
    processSteps: [
      {
        number: 1,
        title: "Data Discovery & Requirements",
        description: "Comprehensive analysis of your data sources, business objectives, and analytical needs to define clear requirements for your big data initiative."
      },
      {
        number: 2,
        title: "Architecture Design & Planning",
        description: "Design a scalable data architecture that addresses your current needs while providing flexibility for future growth and new data sources integration."
      },
      {
        number: 3,
        title: "Data Modeling & Schema Design",
        description: "Create optimal data models and schemas that support efficient storage, retrieval, and analysis of both structured and unstructured data assets."
      },
      {
        number: 4,
        title: "Infrastructure Setup & Configuration",
        description: "Deploy and configure the necessary big data technologies, whether on-premises, cloud-based, or hybrid environments with security best practices."
      },
      {
        number: 5,
        title: "ETL/ELT Pipeline Development",
        description: "Build robust data pipelines that extract data from various sources, transform it appropriately, and load it into your data repositories efficiently."
      },
      {
        number: 6,
        title: "Analytics & ML Implementation",
        description: "Develop analytical capabilities including batch processing, real-time analytics, and machine learning models tailored to your business requirements."
      },
      {
        number: 7,
        title: "Visualization & Reporting",
        description: "Create intuitive dashboards and reporting interfaces that enable stakeholders to derive actionable insights from complex data with self-service capabilities."
      }
    ]
  };

  const faqItems = [
    {
      question: "How much does big data development cost?",
      answer: "Big data development costs vary based on data volume, complexity, and required functionality. Entry-level data pipelines may start around $30,000-$60,000, while comprehensive enterprise big data platforms typically range from $100,000-$500,000+. Factors affecting cost include data sources, processing requirements, real-time capabilities, visualization needs, and infrastructure requirements."
    },
    {
      question: "How long does the big data implementation process take?",
      answer: "Big data implementations typically require 3-9 months depending on scope and complexity. Basic data pipeline projects may be completed in 3-4 months, while enterprise-wide data platforms can take 6-9 months or longer. Timeline factors include data complexity, source system integration challenges, team size, and the maturity of your existing data practices."
    },
    {
      question: "Why choose Foxbeep for big data development?",
      answer: "Clients choose Foxbeep for our proven expertise in building scalable big data solutions that deliver measurable business value. We offer deep technical knowledge across the big data ecosystem, industry-specific experience, certified data engineers, and a methodology that emphasizes data governance, quality, and security from day one."
    },
    {
      question: "What technologies do you use for big data projects?",
      answer: "We implement modern big data technologies tailored to your specific needs. Our technology stack includes Hadoop, Apache Spark, Kafka, Snowflake, AWS EMR, Google BigQuery, Azure Synapse, MongoDB, Cassandra, Elasticsearch, Apache Airflow, Databricks, and various visualization tools like Tableau, Power BI, Looker, and custom dashboards."
    },
    {
      question: "Do you provide ongoing big data support and maintenance?",
      answer: "Yes, we offer comprehensive maintenance and optimization services for big data systems. Our support includes 24/7 monitoring, performance optimization, pipeline maintenance, data quality management, system scaling, technology upgrades, security updates, and continuous improvement of analytical capabilities as your business needs evolve."
    },
    {
      question: "Can you migrate our existing data systems to modern big data platforms?",
      answer: "Absolutely! We specialize in data migration and modernization projects, including legacy system upgrades, cloud migration, data warehouse modernization, and platform consolidation. We ensure zero data loss, minimal downtime, and improved performance while maintaining data integrity throughout the migration process."
    },
    {
      question: "How do you ensure data security and compliance in big data projects?",
      answer: "We implement comprehensive security measures including data encryption at rest and in transit, role-based access controls, audit logging, and compliance frameworks for GDPR, HIPAA, SOX, and other regulations. Our security-first approach includes vulnerability assessments, penetration testing, and continuous monitoring."
    },
    {
      question: "What industries do you serve with big data solutions?",
      answer: "We serve diverse industries including financial services, healthcare, e-commerce, manufacturing, telecommunications, energy, retail, government, and education. Each industry solution is tailored with specific compliance requirements, use cases, and performance optimization for sector-specific challenges and opportunities."
    }
  ];

  const benefitsData = {
    title: "Key Benefits of Our Big Data Development Services",
    benefits: [
      "Scalable architecture that grows seamlessly with your data volume and business needs without performance degradation",
      "Unified view of data across your organization for better insights and comprehensive business intelligence",
      "Increased operational efficiency through data-driven process optimization and automated decision making",
      "Enhanced decision making with real-time analytics, predictive modeling, and actionable reporting dashboards",
      "Improved data quality, security, governance practices, and regulatory compliance across all data assets"
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
    ctaText: "Start Your Big Data Project"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Big Data Development?",
    features: [
      {
        id: "scalability",
        title: "Highly Scalable Solutions",
        content: "We design data systems that can seamlessly scale from gigabytes to petabytes, supporting your growth without architectural overhauls or performance bottlenecks."
      },
      {
        id: "reliability",
        title: "Enterprise-Grade Reliability",
        content: "Our big data implementations include robust fault tolerance, data redundancy, disaster recovery mechanisms, and 99.9% uptime SLA to ensure continuous data availability."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "We fine-tune every component of your data pipeline for maximum throughput, minimizing latency, optimizing resource consumption, and reducing operational costs."
      },
      {
        id: "dataQuality",
        title: "Built-in Data Quality",
        content: "Our solutions incorporate automated data quality checks, cleansing processes, validation rules, and governance frameworks to maintain high data integrity and trustworthiness."
      },
      {
        id: "flexibility",
        title: "Technology Flexibility",
        content: "We're not tied to specific vendors or technologies, allowing us to select the best tools for your specific requirements, existing investments, and future technology roadmap."
      },
      {
        id: "governance",
        title: "Comprehensive Data Governance",
        content: "We implement security, privacy, compliance controls, and data lineage tracking throughout your data lifecycle, meeting regulatory requirements like GDPR, HIPAA, and CCPA."
      }
    ]
  };

  const teamBannerData = {
    title: "Build a Big Data development",
    highlightedText: "Team",
    buttonText: "Start Your Big Data Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-orange-600",
    buttonGradientFrom: "from-orange-500",
    buttonGradientTo: "to-orange-600",
    buttonHoverFrom: "from-orange-600",
    buttonHoverTo: "to-orange-700"
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Big Data Development Services | Data Analytics & Business Intelligence | Foxbeep</title>
        <meta name="description" content="Professional big data development services with scalable data architecture, ETL/ELT pipelines, data warehouses, real-time analytics, and business intelligence solutions. Expert big data developers with 4.8★ rating and 18+ years experience." />
        <meta name="keywords" content="big data development, data analytics, business intelligence, data warehouse, ETL pipeline, data lake, real-time analytics, hadoop, spark, kafka, data visualization, data architecture, data engineering, big data consulting, enterprise data solutions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Big Data Development Services | Data Analytics & Business Intelligence | Foxbeep" />
        <meta property="og:description" content="Professional big data development with scalable architecture, ETL/ELT pipelines, data warehouses, and real-time analytics. 4.8★ rated developers with 18+ years experience." />
        <meta property="og:image" content="https://foxbeep.com/images/big-data-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/big-data-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Big Data Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Big Data Development Services | Data Analytics & BI Solutions" />
        <meta name="twitter:description" content="Professional big data development with scalable architecture, ETL pipelines, data warehouses. 4.8★ rated developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/big-data-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Big Data Development" />
        <meta name="expertise" content="Hadoop, Spark, Kafka, Snowflake, AWS, Data Warehousing, ETL/ELT, Real-time Analytics" />
        <meta name="rating" content="4.8/5 based on 45 reviews" />
        <meta name="experience" content="18+ Years" />
        <meta name="specialization" content="Enterprise Data Solutions, Data Architecture, Business Intelligence, Data Engineering" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industries" content="Financial Services, Healthcare, E-commerce, Manufacturing, Telecommunications, Energy" />
        <meta name="solutions" content="Data Lakes, Data Warehouses, Real-time Analytics, Business Intelligence, Data Visualization" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/big-data-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/big-data-development" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//aws.amazon.com" />
        <link rel="dns-prefetch" href="//cloud.google.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#FF6B35" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$30,000 - $500,000+" />
        <meta name="currency" content="USD" />
        
        {/* Data Processing Meta Tags */}
        <meta name="data-volume" content="Gigabytes to Petabytes" />
        <meta name="processing-types" content="Batch Processing, Real-time Analytics, Stream Processing" />
        <meta name="compliance" content="GDPR, HIPAA, SOX, CCPA Compliant" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Big Data Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen showcase image */}
        <section aria-label="Big Data Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/big-data.avif"
              alt="Big Data Development Services - Scalable Data Analytics and Business Intelligence Solutions"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Big Data Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Big Data Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Big Data Services Slider */}
        <section aria-label="Featured Big Data Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Data Lakes & Warehouses",
                description: "Scalable repositories for all your structured and unstructured data needs with optimized storage and retrieval capabilities.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-orange-500"
              },
              {
                id: 2,
                title: "ETL/ELT Pipelines",
                description: "Robust data integration flows that prepare data for analytics and business intelligence with automated processing workflows.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-yellow-500"
              },
              {
                id: 3,
                title: "Real-time Analytics",
                description: "Stream processing systems that deliver insights as events happen in your business with low-latency data processing.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-red-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="orange"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Big Data Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Big Data Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Big Data Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Solutions Section */}
        <section aria-label="Big Data Solutions for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Big Data Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Big Data Development"
            subtitle="Get answers to common questions about our big data development services, costs, timeline, and technologies"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Big Data Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}