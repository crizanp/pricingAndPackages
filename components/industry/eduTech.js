import { ArrowBigRight } from 'lucide-react';
import React from 'react';

export const EdtechServices = ({
  mainHeading,
  introText,
  companyName,
  servicesList,
  featuredService,
  featuredServiceDescription,
  featureDetails,
  highlightColor = 'bg-blue-600'
}) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 xl:px-8 bg-white">
      <div className="mx-auto">


        {/* Featured service section */}
        {featuredService && (
          <div className="mb-20">
            {/* Featured service header with professional styling */}
            <div className="relative mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-8 flex items-center gap-2">
                <ArrowBigRight />{featuredService}
              </h2>
            </div>

            {/* Featured service description */}
            {featuredServiceDescription && (
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                  {featuredServiceDescription}
                </p>
              </div>
            )}
          </div>
        )}


        {/* Professional divider */}
        <div className="flex items-center my-16">
          <div className="flex-grow h-px bg-gray-200"></div>
          <div className={`${highlightColor} w-12 h-px mx-4`}></div>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Feature details in professional grid */}
        {featureDetails && featureDetails.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featureDetails.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
                  <div className={`${highlightColor} w-12 h-1 mb-6 group-hover:w-16 transition-all duration-300`}></div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </div>
  );
};

// Example usage with sample data
export default function Demo() {
  const sampleData = {
    mainHeading: "Transform Education with Technology",
    introText: "We provide cutting-edge educational technology solutions that empower institutions and learners to achieve their full potential through innovative digital experiences.",
    companyName: "EduTech Solutions",
    servicesList: [
      { name: "Learning Management Systems", description: "Comprehensive platforms for course delivery and student engagement" },
      { name: "Virtual Classrooms", description: "Interactive online learning environments with real-time collaboration" },
      { name: "Assessment Tools", description: "Advanced evaluation systems with automated grading and analytics" },
      { name: "Content Creation", description: "Professional multimedia educational content development" },
      { name: "Data Analytics", description: "Insights and reporting for educational performance optimization" },
      { name: "Mobile Learning", description: "Cross-platform mobile applications for learning on the go" }
    ],
    featuredService: "AI-Powered Learning Analytics",
    featuredServiceDescription: "Our flagship service combines artificial intelligence with educational data to provide personalized learning experiences. We analyze student behavior, performance patterns, and engagement metrics to deliver actionable insights that improve learning outcomes and institutional effectiveness.",
    featureDetails: [
      {
        title: "Personalized Learning Paths",
        description: "AI algorithms create customized learning journeys based on individual student needs, learning styles, and progress patterns."
      },
      {
        title: "Real-time Performance Monitoring",
        description: "Track student engagement and academic progress with comprehensive dashboards and automated alerts for early intervention."
      },
      {
        title: "Institutional Insights",
        description: "Generate detailed reports on course effectiveness, resource utilization, and institutional performance metrics."
      }
    ],
    highlightColor: "bg-blue-600"
  };

  return <EdtechServices {...sampleData} />;
}