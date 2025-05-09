import React from 'react';

const DigitalMarketingShowcase = () => {
    const services = [
        {
          id: '01',
          color: 'text-orange-500',
          icon: '📢',
          title: 'SEO SERVICES',
          description: 'Improve Rankings & Drive Organic Traffic'
        },
        {
          id: '02',
          color: 'text-blue-500',
          icon: '🔍',
          title: 'PPC ADVERTISING',
          description: 'Instant Traffic, Leads, Sales, Brand Awareness'
        },
        {
          id: '03',
          color: 'text-blue-800',
          icon: '📱',
          title: 'SOCIAL MEDIA MARKETING',
          description: 'Engage Audiences & Build Brand Loyalty'
        },
        {
          id: '04',
          color: 'text-gray-500',
          icon: '📧',
          title: 'EMAIL MARKETING',
          description: 'Nurture Leads & Drive Conversions'
        },
        {
          id: '05',
          color: 'text-teal-500',
          icon: '📊',
          title: 'ANALYTICS & REPORTING',
          description: 'Track Performance & Optimize Campaigns'
        },
        {
          id: '06',
          color: 'text-yellow-500',
          icon: '✏️',
          title: 'CONTENT MARKETING',
          description: 'High Quality Content to Drive Traffic & Engagement'
        },
        {
          id: '07',
          color: 'text-red-500',
          icon: '📈',
          title: 'CONVERSION OPTIMIZATION',
          description: 'Increase Conversion Rates & Maximize ROI'
        },
        {
          id: '08',
          color: 'text-yellow-700',
          icon: '🔎',
          title: 'LOCAL SEO',
          description: 'Dominate Local Search Results & Get Found Locally'
        }]

    return (
        <div className="max-w-7xl mx-auto p-6 py-16">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">
                    <span className="text-black">RESULT DRIVEN</span> <span className="text-black">DIGITAL MARKETING COMPANY</span>
                </h1>
                <h3 className="text-3xl text-black font-medium">Our Expertise</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="relative">
                    <div className={`absolute top-0 left-0 right-0 mx-auto w-16 h-16 flex items-center justify-center text-gray-800 font-bold text-3xl`}>
                      {service.id}
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 pt-16 pb-10 h-64 shadow-md border-l-4 text-center flex flex-col items-center justify-center" style={{ borderLeftColor: service.color === 'text-orange-500' ? '#f97316' : 
                                                                        service.color === 'text-blue-500' ? '#3b82f6' : 
                                                                        service.color === 'text-blue-800' ? '#1e40af' : 
                                                                        service.color === 'text-gray-500' ? '#6b7280' : 
                                                                        service.color === 'text-teal-500' ? '#14b8a6' : 
                                                                        service.color === 'text-yellow-500' ? '#eab308' : 
                                                                        service.color === 'text-red-500' ? '#ef4444' : 
                                                                        '#b45309' }}>
                      <div className="text-gray-400 text-4xl mb-4">{service.icon}</div>
                      <h4 className={`text-black font-bold text-lg mb-2`}>{service.title}</h4>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
};

export default DigitalMarketingShowcase;