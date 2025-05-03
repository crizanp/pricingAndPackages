import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does web development cost?",
      answer: "Web development costs vary widely based on project complexity, features required, and design needs. Simple informational websites may range from $3,000-$10,000, while e-commerce sites or web applications with custom functionality can cost $10,000-$50,000+. Enterprise solutions typically start at $50,000 and can exceed $200,000."
    },
    {
      question: "How long does the development process take?",
      answer: "The timeline for web development typically ranges from 4-16 weeks depending on complexity. Simple websites may be completed in 4-8 weeks, while complex web applications can take 12-16 weeks or longer. Factors affecting timeline include project scope, features required, client feedback cycles, and testing needs."
    },
    {
      question: "Why choose Foxbeep?",
      answer: "Clients choose Foxbeep for our proven track record of delivering high-quality web solutions. We offer expert development teams, transparent communication, competitive pricing, and ongoing support. Our client-centered approach ensures your project meets business objectives while providing exceptional user experiences."
    },
    {
      question: "What technologies do you use?",
      answer: "We utilize modern web technologies including React, Angular, Vue.js for frontend development, and Node.js, Python, PHP for backend solutions. Our database expertise includes MongoDB, PostgreSQL, and MySQL. We also implement responsive design, progressive web apps (PWAs), and serverless architectures when appropriate."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance services include security updates, performance optimization, content updates, technical support, and regular backups."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 bg-white px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold mb-16">Common questions about web development</h1>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="border-t border-gray-200 pt-6">
            <button 
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-4xl cursor-pointer">{item.question}</h2>
              <span className="ml-4">
                {openIndex === index ? 
                  <Minus size={28} strokeWidth={2} /> : 
                  <Plus size={28} strokeWidth={2} />
                }
              </span>
            </button>
            
            {openIndex === index && (
              <div className="mt-6 text-2xl text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}