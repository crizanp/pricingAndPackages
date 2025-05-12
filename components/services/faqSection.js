import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection({
  title = "Common questions about web development",
  faqItems = [
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
  ],
  backgroundColor = "bg-white",
  textColor = "text-gray-700",
  headingSize = "text-3xl md:text-5xl lg:text-6xl",
  questionSize = "text-lg sm:text-2xl md:text-3xl",
  answerSize = "text-lg sm:text-lg md:text-xl"
}) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className={`max-w-7xl mx-auto py-8 sm:py-12 md:py-16 ${backgroundColor} px-4 sm:px-6 md:px-8 text-black`}>
      <h1 className={`${headingSize} font-bold mb-8 sm:mb-12 md:mb-16 text-left`}>{title}</h1>
      
      <div className="space-y-4 sm:space-y-6">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border-t border-gray-200 pt-4 sm:pt-6 transition-all duration-300"
          >
            <button
              className="flex justify-between items-start w-full text-left focus:outline-none group"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h2 className={`${questionSize} cursor-pointer pr-4 sm:pr-6 md:pr-8 font-medium leading-tight`}>
                {item.question}
              </h2>
              <span className="ml-2 sm:ml-4 mt-1 sm:mt-0 flex-shrink-0 text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                {openIndex === index ? 
                  <Minus size={24} strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> :
                  <Plus size={24} strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                }
              </span>
            </button>
            
            <div 
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`mt-4 sm:mt-6 ${answerSize} ${textColor} pb-2 sm:pb-4 pr-4 sm:pr-8 md:pr-16`}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}