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
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 bg-white">
      <div className="mx-auto">
        {/* Featured service section */}
        {featuredService && (
          <div className="mb-10">
            {/* Featured service header with professional styling */}
            <div className="relative mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4 flex items-center gap-2">
                <ArrowBigRight className="text-blue-600" size={28} />
                {featuredService}
              </h2>
            </div>

            {/* Featured service description */}
            {featuredServiceDescription && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {featuredServiceDescription}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Professional divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className={`${highlightColor} w-8 h-0.5 mx-3 rounded-full`}></div>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Feature details in professional grid */}
        {featureDetails && featureDetails.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureDetails.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl border border-gray-200 h-full hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`${highlightColor} w-8 h-0.5 mb-4 group-hover:w-12 transition-all duration-300 rounded-full`}></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
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