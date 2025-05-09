import React from 'react';
import { Target, Clock, CircleSlash2, Rocket } from 'lucide-react';

const DigitalMarketingProcess = () => {
    const processSteps = [
        {
            icon: <Target size={48} />,
            title: 'Workshops',
            color: 'text-purple-600',
            items: [
                'Business Analysis',
                'Campaign Objective',
                'Preparing Proposal',
                'Deciding Deliverables'
            ]
        },
        {
            icon: <Clock size={48} />,
            title: 'Planning',
            color: 'text-purple-600',
            items: [ 
                'Industry Research',
                'Competitor Research',
                'Selecting Marketing Channels',
                'Strategy Development'
            ]
        },
        {
            icon: <CircleSlash2 size={48} />,
            title: 'A/B Testing',
            color: 'text-purple-600',
            items: [
                'Experimenting with Ads',
                'Experimenting with Content',
                'Testing SEO Techniques',
                'Analyzing Audience Behavior'
            ]
        },
        {
            icon: <Rocket size={48} />,
            title: 'Execution',
            color: 'text-purple-600',
            items: [
                'Creating Campaign',
                'Content Production',
                'Strategy Optimization',
                'Analysis'
            ]
        }
    ];

    return (
        <div className='bg-white py-12'>
            <div className="max-w-7xl mx-auto p-6 text-gray-800">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold mb-8 text-gray-900">DIGITAL MARKETING PROCESS</h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-left w-full md:w-1/4 relative px-4">
                            {/* Icon Container */}
                            <div className="text-purple-600 mb-4">
                                {step.icon}
                            </div>

                            {/* Step Title */}
                            <h3 className={`${step.color} text-2xl font-medium mb-6`}>{step.title}</h3>

                            {/* Items List */}
                            <ul className="text-left w-full">
                                {step.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-3 flex items-start">
                                        <span className={`${step.color} mr-2 text-sm`}>▶</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Arrow connecting to next step (except last step) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-12 right-0 left-auto w-1/4 h-2 z-10">
                                    <div className="relative w-full">
                                        <hr className="w-full border-t-2 border-gray-300 border-dashed absolute top-1/2 transform -translate-y-1/2" />
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                                            ▶
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingProcess;