import { useState } from 'react';

export default function UniqueFeatures() {
  const [activeFeature, setActiveFeature] = useState("customization");
  
  const features = [
    {
      id: "customization",
      title: "Custom WordPress Solutions",
      content: "We build highly customized WordPress themes and plugins tailored to your specific business needs, ensuring a unique digital presence."
    },
    {
      id: "security",
      title: "Robust Security Practices",
      content: "Our WordPress development incorporates best-in-class security measures, including regular updates, malware scanning, and secure authentication to protect your website and user data."
    },
    {
      id: "userInterface",
      title: "User-Friendly Dashboard",
      content: "We design intuitive and easy-to-navigate admin interfaces, making content management seamless even for non-technical users."
    },
    {
      id: "performance",
      title: "Optimized Performance",
      content: "Our websites are built for speed and efficiency, using clean code, optimized images, and caching strategies to ensure fast load times and excellent SEO performance."
    },
    {
      id: "integration",
      title: "Third-Party Integration",
      content: "We integrate essential tools like payment gateways, CRMs, and marketing platforms, extending WordPress functionality to meet your business goals."
    },
    {
      id: "maintenance",
      title: "Ongoing Support & Maintenance",
      content: "Get peace of mind with our post-launch support plans, including backups, plugin updates, uptime monitoring, and issue resolution."
    }
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">Unique features of Foxbeep Wordpress development services</h1>
      
      <div className="border-t border-gray-200"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 pt-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`py-4 px-2 cursor-pointer ${
                activeFeature === feature.id ? "bg-gray-50 rounded-l-lg relative" : ""
              }`}
            >
              {activeFeature === feature.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-l"></div>
              )}
              <h3 className="text-2xl pl-3 font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="md:col-span-2 bg-gray-50 p-8 rounded-r-lg flex items-center">
          <p className="text-2xl">
            {features.find(f => f.id === activeFeature)?.content}
          </p>
        </div>
      </div>
    </div>
  );
}