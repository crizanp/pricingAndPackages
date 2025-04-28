import { useState } from 'react';

// Updated data structure with enhanced pricing model and expanded to 8 packages
export const packagesData = {
  categories: [
    {
      "id": 1,
      "name": "Design Services",
      "hasSubcategories": true,
      "subcategories": [
        { "id": 101, "name": "Logo Design" },
        { "id": 102, "name": "Letterhead Design" },
        { "id": 103, "name": "Invoice Design" },
        { "id": 104, "name": "Business Card Design" }
      ]
    },
    {
      "id": 2,
      "name": "Website Services",
      "hasSubcategories": true,
      "subcategories": [
        { "id": 201, "name": "Websites" },
        { "id": 202, "name": "100 USD+ Websites" },
        { "id": 203, "name": "500 USD+ Websites" },
        { "id": 204, "name": "1000 USD+ Websites" }
      ]
    },
    {
      "id": 3,
      "name": "Website Maintenance",
      "hasSubcategories": false
    },
    {
      "id": 4,
      "name": "Digital Marketing",
      "hasSubcategories": false
    },
    {
      "id": 5,
      "name": "Social Media Management",
      "hasSubcategories": false
    }
  ],
  packages: [
    {
      "id": 1,
      "title": "Logo Design Basic",
      "subtitle": "Basic Logo Design in Dubai",
      "price": "From: 150.00 USD",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2022/01/corporate-2-750x430.jpg",
      "categoryId": 101,
      "description": "Choose a logo design package and place the order online. Your company logo softcopy will be ready within the time frame you choose! We will email you the logo design.",
      "longDescription": "<div><p>Our <strong>Logo Design Basic</strong> package is perfect for startups and small businesses looking to establish their brand identity. We create professional, unique logos that represent your business values and help you stand out in the market.</p><p>Our experienced designers will craft a logo that resonates with your target audience and communicates your brand message effectively. With this package, you'll receive multiple concepts to choose from and revision rounds to ensure your complete satisfaction.</p><p>All logos are delivered in various formats suitable for both print and digital applications, ensuring you can use your new brand identity across all marketing materials.</p></div>",
      "features": [
        "2 Initial Concepts",
        "2 Revision Rounds",
        "Vector File Format (AI, EPS)",
        "High Resolution JPG/PNG Files",
        "Original Source Files",
        "Social Media Ready Files"
      ],
      "faqs": [
        {
          "question": "How long does it take to complete a logo design?",
          "answer": "Standard delivery is 3 days. We also offer urgent (2 days) and super fast (1 day) options for additional fees."
        },
        {
          "question": "What files will I receive?",
          "answer": "You'll receive your logo in vector format (AI, EPS) and high-resolution raster formats (JPG, PNG)."
        },
        {
          "question": "Do I own the copyright to my logo?",
          "answer": "Yes, once the project is completed and paid for, you own full copyright to your logo design."
        }
      ],
      "pricing": [
        {
          "title": "Package Type",
          "options": [
            { "name": "Basic Package", "price": "150 USD" },
            { "name": "Standard Package", "price": "250 USD" },
            { "name": "Premium Package", "price": "350 USD" }
          ]
        },
        {
          "title": "Delivery Time",
          "options": [
            { "name": "Standard (3 days)", "price": "0 USD" },
            { "name": "Express (48 hours)", "price": "+30 USD" },
            { "name": "Rush (24 hours)", "price": "+50 USD" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Extra Revision Round", "price": "+25 USD" },
            { "name": "Brand Guidelines Basic", "price": "+75 USD" },
            { "name": "Social Media Kit", "price": "+100 USD" }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Business Card Design",
      "subtitle": "Professional Business Card Design",
      "price": "From: 99.00 USD",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2022/01/basic-1-750x430.jpg",
      "categoryId": 104,
      "description": "Make a lasting impression with professionally designed business cards that reflect your brand identity. Our designers create eye-catching business cards tailored to your company's style.",
      "longDescription": "<div><p>A well-designed business card is an essential marketing tool that creates a lasting first impression. Our <strong>Business Card Design</strong> package provides you with professionally crafted business cards that effectively represent your brand and help you network confidently.</p><p>Working with our experienced design team, you'll receive custom business card designs that stand out from the competition while maintaining professional standards. We focus on creating cards that not only look great but also communicate your business values and contact information clearly.</p><p>All designs are delivered in print-ready formats so you can easily get them produced at your preferred printing service.</p></div>",
      "features": [
        "2 Unique Design Concepts",
        "2 Revision Rounds",
        "Front and Back Design",
        "Print-Ready Files",
        "High-Resolution PDFs",
        "CMYK Color Profile for Printing"
      ],
      "faqs": [
        {
          "question": "What size business cards do you design?",
          "answer": "We design standard size business cards (3.5\" x 2\") by default, but can accommodate custom sizes upon request."
        },
        {
          "question": "Can I get business cards in different languages?",
          "answer": "Yes, we can design bilingual or multilingual business cards with text in Arabic, English, and other languages."
        },
        {
          "question": "Do you offer printing services?",
          "answer": "No, we provide design services only, but we can recommend quality printing services in Dubai."
        }
      ],
      "pricing": [
        {
          "title": "Package Type",
          "options": [
            { "name": "Basic Design", "price": "99 USD" },
            { "name": "Premium Design", "price": "149 USD" },
            { "name": "Luxury Design", "price": "199 USD" }
          ]
        },
        {
          "title": "Delivery Time",
          "options": [
            { "name": "Standard (2 days)", "price": "0 USD" },
            { "name": "Express (24 hours)", "price": "+30 USD" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Extra Design Concept", "price": "+40 USD" },
            { "name": "QR Code Integration", "price": "+15 USD" },
            { "name": "Special Finishes Design", "price": "+50 USD" }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Basic Website Package",
      "subtitle": "Simple Website Solution",
      "price": "From: 399.00 USD",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2022/01/Profile-Demo-min-1-750x430.png",
      "categoryId": 201,
      "description": "Get your business online with our affordable Basic Website Package. Perfect for small businesses and startups looking to establish their digital presence quickly.",
      "longDescription": "<div><h2>Professional Personal Profile / Online Resume Website Design</h2><p>This elegant and modern personal website design is ideal for showcasing your resume, creative portfolio, or personal brand. It is perfectly suited for artists, designers, freelancers, and professionals who want a sleek online presence. The layout is also flexible enough to be adapted for similar profile websites.</p><p>Click the <strong>‘Live Preview’</strong> button above to view how your finished website will look. Read the <strong>‘FAQ’</strong> section to understand more about the design process, customization options, and what’s included.</p><p>Once your order is placed, we will install the pre-built WordPress website on your domain and replace the demo content with your images and text. The color scheme and font style can be customized to match your brand, while the overall layout remains consistent with the demo. If you provide your own content and images, they will be used in place of the defaults. Be sure to select the right content-creation option during checkout.</p><p>After placing your order, please send the following within 3 to 4 hours as a reply to the order confirmation email: your logo (or name/business name), domain login details (if already registered), available images and text content (if any). If you don't have a logo, you can order our logo design service separately.</p><p>We provide up to 2 rounds of revisions before the final website is launched, and the site will be completed within the timeframe selected during the order.</p><h3>Features:</h3><ul><li>Single-page sliding website in English</li><li>Up to 6 customizable navigation tabs (e.g., Home, About, Achievements, Works, Skills, Contact)</li><li>Optional 3 sliding banners using Slider Revolution</li><li>Portfolio/Gallery section (up to 12 items)</li><li>12 months free website hosting</li><li>Lifetime free SSL certificate (if hosted with us)</li><li>6 months free maintenance and content updates</li><li>Dynamic and fully mobile-responsive design</li><li>WhatsApp and Google Maps integration</li><li>Powered by WordPress, compatible with Elementor</li><li>Easy content editing — no coding required</li></ul><p>We will email you all website admin login credentials, allowing you to manage and update the site independently. If you’d like to learn how to edit your WordPress site, you can book our online training service and gain hands-on skills in managing your content.</p><h3>Website Package Includes:</h3><ul><li>Premium WordPress Theme</li><li>All required plugins</li><li>One IMAP email (20 MB storage)</li><li>Basic on-page SEO (meta tags and meta descriptions)</li><li>Up to 2 revisions within project timeline</li><li>24/7 online support</li></ul><h3>Yearly Renewal Fees:</h3><p>Renewal fees only apply if hosting and services continue with us beyond the first year. You will receive an annual invoice for renewal payments. Services can be canceled at any time.</p><ul><li>Free hosting for the first year</li><li>150 AED/year hosting fee from the second year</li><li>100 AED/year for .com/.net domain renewal</li><li>200 AED/year for .ae domain renewal</li></ul><p><strong>Note:</strong> A copy of this product and service description will be shared with you as an official website contract at the end of the project. All support is provided online only.</p></div>",
      "features": [
        "5-Page Responsive Website",
        "Mobile-Friendly Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "Social Media Integration",
        "Content Management System",
        "3 Months Free Hosting"
      ],
      "faqs": [
        {
          "question": "How long does it take to build my website?",
          "answer": "Our standard delivery time is 7 business days after receiving all required content and information."
        },
        {
          "question": "Can I update the website myself?",
          "answer": "Yes, we provide a user-friendly content management system that allows you to make basic updates without technical knowledge."
        },
        {
          "question": "Do you provide domain name registration?",
          "answer": "Domain registration is not included in the package, but we can assist you with purchasing and setting up your domain for an additional fee."
        }
      ],
      "pricing": [
        {
          "title": "How much pages website you want?",
          "options": [
            { "name": "Basic (5 Pages)", "price": "399 USD" },
            { "name": "Standard (8 Pages)", "price": "599 USD" },
            { "name": "Premium (12 Pages)", "price": "799 USD" }
          ]
        },
        {
          "title": "When should be delivered?",
          "options": [
            { "name": "Standard (7 days)", "price": "0 USD" },
            { "name": "Express (5 days)", "price": "+100 USD" },
            { "name": "Rush (3 days)", "price": "+200 USD" }
          ]
        },
        {
          "title": "Domain Status",
          "options": [
            { "name": "I have a domain", "price": "0 USD" },
            { "name": "I need Domain (.com)", "price": "+13 USD" },
          ]
        },
        {
          "title": "additional features?",
          "options": [
            { "name": "Additional Page", "price": "+50 USD" },
            { "name": "Blog Setup", "price": "+100 USD" },
            { "name": "Newsletter Integration", "price": "+75 USD" }
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "E-Commerce Website",
      "subtitle": "Complete Online Store Solution",
      "price": "From: 899.00 USD",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2023/06/hero-image-750x430.png",
      "categoryId": 203,
      "description": "Launch your online store with our comprehensive E-Commerce Website package. Sell products or services online with a secure, user-friendly, and fully-featured online store.",
      "longDescription": "<div><p>Our <strong>E-Commerce Website</strong> package provides everything you need to start selling products or services online. We create custom, secure, and user-friendly online stores that help you reach customers worldwide.</p><p>This comprehensive solution includes product catalog management, secure payment gateway integration, inventory management, and order processing capabilities. The responsive design ensures your store looks and works great on all devices, maximizing your potential customer base.</p><p>With built-in SEO features and marketing tools, we help you attract customers and grow your online sales efficiently.</p></div>",
      "features": [
        "Responsive E-Commerce Website",
        "Up to 100 Products Setup",
        "Secure Payment Gateway Integration",
        "Order Management System",
        "Customer Account Management",
        "Product Categories and Filters",
        "Inventory Management",
        "SEO-Friendly Structure",
        "6 Months Free Hosting"
      ],
      "faqs": [
        {
          "question": "Which payment gateways do you support?",
          "answer": "We support major payment gateways including PayPal, Stripe, and local UAE payment processors like Network International."
        },
        {
          "question": "Can I add more products later?",
          "answer": "Yes, you can easily add more products yourself or we can help you with batch product uploads for an additional fee."
        },
        {
          "question": "Do you offer training on managing the online store?",
          "answer": "Yes, our package includes a 1-hour training session on managing your online store, with additional training available if needed."
        }
      ],
      "pricing": [
        {
          "title": "Package Type",
          "options": [
            { "name": "Starter Store", "price": "899 USD" },
            { "name": "Business Store", "price": "1299 USD" },
            { "name": "Enterprise Store", "price": "1799 USD" }
          ]
        },
        {
          "title": "Delivery Time",
          "options": [
            { "name": "Standard (14 days)", "price": "0 USD" },
            { "name": "Express (10 days)", "price": "+200 USD" },
            { "name": "Rush (7 days)", "price": "+350 USD" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Additional 100 Products Setup", "price": "+150 USD" },
            { "name": "Multi-language Support", "price": "+250 USD" },
            { "name": "Product Import from Existing Store", "price": "+200 USD" }
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Website Maintenance",
      "subtitle": "Keep Your Website Running Smoothly",
      "price": "From: 99.00 USD/month",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2022/01/web-maintenance.jpg",
      "categoryId": 3,
      "description": "Ensure your website stays secure, updated, and performing optimally with our comprehensive Website Maintenance package. Let us handle the technical aspects while you focus on your business.",
      "longDescription": "<div><p>Our <strong>Website Maintenance</strong> package provides peace of mind by ensuring your website remains secure, up-to-date, and functioning properly at all times. Regular maintenance is essential for preventing security breaches, maintaining performance, and providing the best user experience for your visitors.</p><p>We handle all technical aspects including security updates, plugin maintenance, performance optimization, and regular backups. Our team monitors your website for issues and resolves them promptly to minimize downtime.</p><p>With different plans available, you can choose the level of support that best fits your website's needs and your budget.</p></div>",
      "features": [
        "Regular Software Updates",
        "Security Monitoring",
        "Weekly Backups",
        "Uptime Monitoring",
        "Performance Optimization",
        "Technical Support",
        "Monthly Reports"
      ],
      "faqs": [
        {
          "question": "What happens if my website goes down?",
          "answer": "We monitor your website's uptime and will work to restore service as quickly as possible if any issues occur."
        },
        {
          "question": "Do you make content updates as part of maintenance?",
          "answer": "Basic content updates are included in our Premium plan. For other plans, content updates are available at additional hourly rates."
        },
        {
          "question": "Can I upgrade or downgrade my plan?",
          "answer": "Yes, you can change your maintenance plan with 30 days' notice before the next billing cycle."
        }
      ],
      "pricing": [
        {
          "title": "Plan Type",
          "options": [
            { "name": "Basic Maintenance", "price": "99 USD/month" },
            { "name": "Standard Maintenance", "price": "149 USD/month" },
            { "name": "Premium Maintenance", "price": "249 USD/month" }
          ]
        },
        {
          "title": "Contract Length",
          "options": [
            { "name": "Monthly (No Commitment)", "price": "0 USD" },
            { "name": "6 Months", "price": "-5% discount" },
            { "name": "12 Months", "price": "-10% discount" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Daily Backups", "price": "+30 USD/month" },
            { "name": "Content Updates (2 hours)", "price": "+75 USD/month" },
            { "name": "Performance Audit", "price": "+150 USD/quarter" }
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "SEO Package",
      "subtitle": "Improve Your Website's Search Engine Rankings",
      "price": "From: 299.00 USD/month",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2024/01/basic-seo-750x430.jpg",
      "categoryId": 4,
      "description": "Enhance your website's visibility in search engines with our comprehensive SEO package. Drive more organic traffic and increase your online presence with proven optimization strategies.",
      "longDescription": "<div><p>Our <strong>SEO Package</strong> is designed to improve your website's visibility in search engine results, driving more organic traffic to your business. We implement proven strategies to optimize your website structure, content, and online presence to help you rank higher for relevant search terms.</p><p>Our comprehensive approach includes thorough keyword research, on-page optimization, technical SEO improvements, and content strategy development. We continuously monitor your website's performance and adapt our strategy to achieve the best possible results in your industry.</p><p>Regular reporting keeps you informed about your progress and the impact of our optimization efforts on your business's online visibility.</p></div>",
      "features": [
        "Keyword Research & Analysis",
        "Competitor Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audit & Fixes",
        "Content Optimization",
        "Monthly Performance Reports",
        "Local SEO Optimization",
        "Google Business Profile Management"
      ],
      "faqs": [
        {
          "question": "How long does it take to see results from SEO?",
          "answer": "SEO is a long-term strategy. Initial improvements may be visible within 2-3 months, but significant results typically take 4-6 months or longer."
        },
        {
          "question": "Do you guarantee first page rankings?",
          "answer": "No reputable SEO company can guarantee specific rankings, as search algorithms are constantly changing. We focus on sustainable improvements and best practices."
        },
        {
          "question": "Do I need to sign a long-term contract?",
          "answer": "We recommend a minimum 6-month commitment for SEO services to see meaningful results, but we offer flexible contract options."
        }
      ],
      "pricing": [
        {
          "title": "Package Level",
          "options": [
            { "name": "Basic SEO", "price": "299 USD/month" },
            { "name": "Business SEO", "price": "499 USD/month" },
            { "name": "Premium SEO", "price": "799 USD/month" }
          ]
        },
        {
          "title": "Contract Length",
          "options": [
            { "name": "Monthly (No Commitment)", "price": "0 USD" },
            { "name": "6 Months", "price": "-5% discount" },
            { "name": "12 Months", "price": "-10% discount" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Competitor Analysis Report", "price": "+150 USD" },
            { "name": "Content Creation (4 articles)", "price": "+200 USD/month" },
            { "name": "Link Building Campaign", "price": "+300 USD/month" }
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "Social Media Management",
      "subtitle": "Professional Social Media Marketing",
      "price": "From: 349.00 USD/month",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2024/02/google-ads-service-provider-dubai-750x430.jpg",
      "categoryId": 5,
      "description": "Build and maintain a strong social media presence with our comprehensive Social Media Management package. We handle content creation, posting, and engagement to grow your online community.",
      "longDescription": "<div><p>Our <strong>Social Media Management</strong> package helps businesses establish and grow their presence across major social media platforms. We develop a tailored strategy that aligns with your business goals and target audience, creating engaging content that resonates with your followers.</p><p>Our team handles everything from content creation and scheduling to community management and engagement, ensuring consistent activity and growth across your social channels. We monitor performance metrics and adjust strategies to maximize reach and engagement.</p><p>Let us manage your social media presence professionally, allowing you to focus on running your business while building your online community.</p></div>",
      "features": [
        "Social Media Strategy Development",
        "Content Calendar Creation",
        "Custom Graphics Design",
        "Regular Post Scheduling",
        "Community Management",
        "Audience Engagement",
        "Monthly Performance Reports",
        "Hashtag Research & Strategy"
      ],
      "faqs": [
        {
          "question": "Which social media platforms do you manage?",
          "answer": "We manage all major platforms including Instagram, Facebook, Twitter, LinkedIn, and TikTok. Platform selection depends on your package and business needs."
        },
        {
          "question": "How many posts per week are included?",
          "answer": "This varies by package. Basic includes 3 posts per week, Business includes 5 posts per week, and Premium includes daily posts."
        },
        {
          "question": "Who creates the content for social media posts?",
          "answer": "Our team creates custom content based on your brand guidelines. You can also provide content ideas or materials for us to adapt."
        }
      ],
      "pricing": [
        {
          "title": "Package Level",
          "options": [
            { "name": "Basic (2 platforms)", "price": "349 USD/month" },
            { "name": "Business (3 platforms)", "price": "549 USD/month" },
            { "name": "Premium (4 platforms)", "price": "849 USD/month" }
          ]
        },
        {
          "title": "Contract Length",
          "options": [
            { "name": "Monthly (No Commitment)", "price": "0 USD" },
            { "name": "6 Months", "price": "-5% discount" },
            { "name": "12 Months", "price": "-10% discount" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "Paid Social Ads Management", "price": "+200 USD/month" },
            { "name": "Additional Platform", "price": "+150 USD/month" },
            { "name": "Monthly Strategy Meeting", "price": "+100 USD/month" }
          ]
        }
      ]
    },
    {
      "id": 8,
      "title": "Letterhead & Invoice Design",
      "subtitle": "Professional Business Stationery Design",
      "price": "From: 120.00 USD",
      "image": "https://www.dubaiwebsitecompany.com/mediaz/2022/01/1-1-750x430.jpg",
      "categoryId": 102,
      "description": "Create a professional business image with our custom letterhead and invoice design. Maintain brand consistency across all your business communications.",
      "longDescription": "<div><p>Our <strong>Letterhead & Invoice Design</strong> package helps businesses maintain a consistent and professional brand image across all written communications. Well-designed stationery enhances your business credibility and reinforces your brand identity with every interaction.</p><p>Our experienced designers create custom letterheads and invoice templates that reflect your company's visual identity while maintaining professional standards. All designs are created with both digital and print use in mind, ensuring versatility for all your business needs.</p><p>We provide files in multiple formats so you can easily use your new stationery for both electronic communications and professional printing.</p></div>",
      "features": [
        "Custom Letterhead Design",
        "Matching Invoice Design",
        "Brand Color Integration",
        "Logo Incorporation",
        "Print-Ready Files",
        "Digital-Use Files",
        "2 Revision Rounds"
      ],
      "faqs": [
        {
          "question": "Can I edit the text on the letterhead and invoice myself?",
          "answer": "Yes, we provide editable versions (usually Word or PDF templates) that allow you to customize text while maintaining the design."
        },
        {
          "question": "Do you provide envelope designs to match?",
          "answer": "Envelope design is available as an add-on service or included in our Premium package."
        },
        {
          "question": "Can you match the design to my existing logo?",
          "answer": "Yes, we design all stationery to complement your existing brand identity, including your logo and color scheme."
        }
      ],
      "pricing": [
        {
          "title": "Package Type",
          "options": [
            { "name": "Basic (Letterhead & Invoice)", "price": "120 USD" },
            { "name": "Standard (+ Email Signature)", "price": "180 USD" },
            { "name": "Premium (+ Envelope & Folder)", "price": "250 USD" }
          ]
        },
        {
          "title": "Delivery Time",
          "options": [
            { "name": "Standard (3 days)", "price": "0 USD" },
            { "name": "Express (48 hours)", "price": "+25 USD" },
            { "name": "Rush (24 hours)", "price": "+40 USD" }
          ]
        },
        {
          "title": "Additional Services",
          "options": [
            { "name": "MS Word Template", "price": "+30 USD" },
            { "name": "Additional Revision Round", "price": "+20 USD" },
            { "name": "Complete Stationery Guidelines", "price": "+75 USD" }
          ]
        }
      ]
    }
  ]
};