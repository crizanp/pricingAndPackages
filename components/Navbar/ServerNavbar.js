// components/Navbar/ServerNavbar.js (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';
import ClientNavbarEnhancer from './ClientNavbar';

const Navbar = () => {
    const navItems = [
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            sections: [
                {
                    title: 'Website Development',
                    href: null,
                    items: [
                        { name: 'WordPress Development', href: '/services/wordpress-development' },
                        { name: 'Ecommerce Development', href: '/services/ecommerce-development' },
                        { name: 'Business Website', href: '/services/business-website' },
                        { name: 'Educational Website', href: '/services/educational-website' },
                        { name: 'Healthcare Website', href: '/services/healthcare-website' },
                        { name: 'News and Media Website', href: '/services/news-media-website' },
                        { name: 'Manufacturing Website', href: '/services/manufacturing-website' },
                    ]
                },
                {
                    title: 'Video Editing',
                    href: '/services/video-editing',
                    items: [
                        { name: 'YouTube Video Editing', href: '/services/video-editing#youtube-video-editing' },
                        { name: 'Ads & Commercial Editing', href: '/services/video-editing#ads-and-commercial' },
                        { name: 'Social Media Video Editing', href: '/services/video-editing#social-media-video-editing' },
                        { name: 'Corporate Video Editing', href: '/services/video-editing#corporate-video-editing' },
                        { name: 'Event Video Editing', href: '/services/video-editing#event-video-editing' },
                        { name: 'Whiteboard Animation', href: '/services/video-editing#whiteboard-video-editing' }
                    ]
                },
                {
                    title: 'Digital Marketing',
                    href: '/services/digital-marketing',
                    items: [
                        { name: 'Facebook Ads', href: '/services/digital-marketing#facebook-ads' },
                        { name: 'Instagram Marketing', href: '/services/digital-marketing#instagram-marketing' },
                        { name: 'Google & YouTube Ads', href: '/services/digital-marketing#google-youtube-ads' },
                        { name: 'SEO', href: '/services/digital-marketing#seo' },
                        { name: 'Telegram Promotion', href: '/services/digital-marketing#telegram-promotion' },
                        { name: 'Social Media Management', href: '/services/digital-marketing#social-media-management' },
                        { name: 'Email Marketing', href: '/services/digital-marketing#email-marketing' }
                    ]
                },
                {
                    title: 'Blockchain Development',
                    href: null,
                    items: [
                        { name: 'NFT Marketplace Development', href: '/services/nft-marketplace-development' },
                        { name: 'DApp Development', href: '/services/dapp-development' },
                        { name: 'Web3 Development', href: '/services/web3-development' },
                        { name: 'Telegram Mini Apps', href: '/services/telegram-mini-apps-development' },
                    ]
                },
                {
                    title: 'Mobile Application',
                    href: null,
                    items: [
                        { name: 'iOS App Development', href: '/services/ios-app-development' },
                        { name: 'Android App Development', href: '/services/android-app-development' },
                    ]
                },
                {
                    title: 'AI and Big Data',
                    href: null,
                    items: [
                        { name: 'AI Development', href: '/services/ai-development' },
                        { name: 'Big Data Development', href: '/services/big-data-development' },
                    ]
                },
            ]
        },
        {
            name: 'Industries',
            href: '/industries',
            hasDropdown: true,
            flatMenu: true,
            items: [
                { name: 'Automotive', href: '/industries/automotive' },
                { name: 'B2B Software', href: '/industries/b2b-software' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'Education', href: '/industries/education' },
                { name: 'Ecommerce', href: '/industries/ecommerce' },
                { name: 'Food', href: '/industries/food' },
                { name: 'Travel', href: '/industries/travel' },
                { name: 'Fashion and Apparel', href: '/industries/fashion-apparel' },
                { name: 'CRM Development', href: '/industries/crm-development' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'Manufacturing', href: '/industries/manufacturing' },
                { name: 'Legal', href: '/industries/legal' },
                { name: 'Agriculture', href: '/industries/agriculture' },
            ]
        },
        {
            name: 'Pricing',
            href: 'https://shop.foxbeep.com',
            hasDropdown: false,
        },
        { 
            name: 'Tools', 
            href: '#', 
            hasDropdown: true,
            items: [
                { name: 'Video Converter', href: 'https://tools.foxbeep.com' }
            ]
        },
        {
            name: 'Company',
            href: '/company',
            hasDropdown: true,
            flatMenu: true,
            compactMenu: true,
            items: [
                { name: 'About', href: '/company/about' },
                { name: 'Process', href: '/company/process' },
                { name: 'Careers', href: '/company/careers' },
                { name: 'University', href: '/company/university' },
                { name: 'Testimonials', href: '/company/testimonials' },
                { name: 'Manifesto', href: '/company/manifesto' },
            ]
        },
        { name: 'Contact', href: '/contact', hasDropdown: false },
    ];

    return (
        <>
            {/* Server-rendered navbar structure */}
            <nav className="fixed top-0 left-0 px-0 lg:px-4 w-full bg-white z-50 text-black border-b border-gray-100" id="main-navbar">
                <div className="container mx-auto pr-8 xl:px-8 2xl:max-w-7xl">
                    <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <div className="relative w-40 h-16 md:w-40 md:h-16 lg:w-40 lg:h-16 ml-[-14] lg:ml-[-36px]">
                                    <Image
                                        src="/logo.png"
                                        alt="FoxBeep - Professional Software Development Services"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>
{/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
                            {navItems.map((item, index) => {
                                // Create a unique identifier for dropdown items
                                const dropdownId = item.hasDropdown ? `dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}` : undefined;
                                
                                return (
                                    <div key={index} className="relative group" data-dropdown-trigger={dropdownId}>
                                        <Link
                                            href={item.href}
                                            className="font-medium text-sm lg:text-base xl:text-lg hover:text-purple-500 transition-colors duration-200 flex items-center text-gray-800"
                                        >
                                            {item.name}
                                            {item.hasDropdown && (
                                                <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180 duration-200" />
                                            )}
                                        </Link>

                                        {/* Dropdown menus - initially hidden, enhanced by client component */}
                                        {item.hasDropdown && (
                                            <div className="hidden group-hover:block fixed left-0 w-full bg-white border-t border-gray-100 shadow-lg z-20" style={{ top: '4rem' }} data-dropdown-content={dropdownId}>
                                                <div className="container mx-auto py-4 md:py-6 lg:py-8 px-4">
                                                    {/* Services Menu */}
                                                    {item.name === 'Services' && item.sections && (
                                                        <div className="max-h-[80vh] overflow-y-auto">
                                                            <div className="flex flex-col md:flex-row">
                                                                <div className="md:w-32 lg:w-40 xl:w-48 pr-0 md:pr-4 lg:pr-8 border-b md:border-b-0 border-gray-200 flex justify-start md:justify-center items-center pb-4 md:pb-0">
                                                                    {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                                                                        Services
                                                                    </h2> */}
                                                                </div>
                                                                <div className="flex-1 pt-4 md:pt-0 md:pl-4 lg:pl-8 xl:pl-12">
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-8 gap-x-4 lg:gap-x-8">
                                                                        {item.sections.map((section, sectionIndex) => (
                                                                            <div key={sectionIndex}>
                                                                                {section.href ? (
                                                                                    <Link
                                                                                        href={section.href}
                                                                                        className="font-semibold text-sm lg:text-base xl:text-lg mb-2 lg:mb-4 block hover:text-purple-500 transition-colors duration-200"
                                                                                    >
                                                                                        {section.title}
                                                                                    </Link>
                                                                                ) : (
                                                                                    <h3 className="font-semibold text-sm lg:text-base xl:text-lg mb-2 lg:mb-4">
                                                                                        {section.title}
                                                                                    </h3>
                                                                                )}
                                                                                <div className="space-y-2 lg:space-y-3">
                                                                                    {section.items && section.items.map((subItem, subIndex) => (
                                                                                        <Link
                                                                                            key={subIndex}
                                                                                            href={subItem.href}
                                                                                            className="block text-xs lg:text-sm text-gray-700 hover:text-purple-500 transition-colors duration-200"
                                                                                        >
                                                                                            {subItem.name}
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Other dropdown menus */}
                                                    {item.flatMenu && (
                                                        <div className="flex flex-col md:flex-row">
                                                            <div className="md:w-32 lg:w-40 xl:w-48 pr-0 md:pr-4 lg:pr-8 border-b md:border-b-0 border-gray-200 flex justify-start md:justify-center items-center pb-4 md:pb-0">
                                                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                                                                    {/* {item.name} */}
                                                                </h2>
                                                            </div>
                                                            <div className="flex-1 pt-4 md:pt-0 md:pl-4 lg:pl-8 xl:pl-12">
                                                                <div className={`grid gap-y-3 lg:gap-y-6 gap-x-4 lg:gap-x-8 ${item.compactMenu ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                                                                    {item.items && item.items.map((subItem, subIndex) => (
                                                                        <Link
                                                                            key={subIndex}
                                                                            href={subItem.href}
                                                                            className="text-sm lg:text-base text-gray-700 hover:text-purple-500 transition-colors duration-200"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Simple dropdown */}
                                                    {!item.flatMenu && item.name !== 'Services' && item.items && (
                                                        <div className="py-4">
                                                            <div className="flex flex-col space-y-2 max-w-xs">
                                                                {item.items.map((subItem, subIndex) => (
                                                                    <Link
                                                                        key={subIndex}
                                                                        href={subItem.href}
                                                                        className="text-sm lg:text-base text-gray-700 hover:text-purple-500 transition-colors duration-200 px-4 py-2 rounded hover:bg-gray-50"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Contact & CTA */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                            <Link href="tel:977-9810570201" className="flex items-center text-xs lg:text-sm text-gray-800 hover:text-purple-600 transition-colors">
                                <Phone size={14} className="mr-1 lg:mr-2" />
                                <span className="hidden lg:inline">+977-9810570201</span>
                                <span className="lg:hidden">Call</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-black text-white px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-gray-600 hover:text-purple-500 focus:outline-none"
                                id="mobile-menu-button"
                                aria-label="Toggle mobile menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Server rendered structure */}
                <div className="md:hidden bg-white border-t border-gray-200 hidden" id="mobile-menu">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
                            {navItems.map((item, index) => (
                                <div key={index} className="py-1">
                                    {item.hasDropdown ? (
                                        <details className="group">
                                            <summary className="flex items-center justify-between w-full py-2 font-medium text-gray-800 hover:text-purple-500 cursor-pointer list-none">
                                                {item.name}
                                                <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
                                            </summary>
                                            <div className="pl-4 mt-2 border-l-2 border-purple-500">
                                                {/* Mobile dropdown content */}
                                                {item.sections ? (
                                                    <div className="space-y-4 py-2">
                                                        {item.sections.map((section, sectionIndex) => (
                                                            <div key={sectionIndex}>
                                                                {section.href ? (
                                                                    <Link
                                                                        href={section.href}
                                                                        className="font-semibold text-sm mb-2 block hover:text-purple-500"
                                                                    >
                                                                        {section.title}
                                                                    </Link>
                                                                ) : (
                                                                    <h4 className="font-semibold text-sm mb-2">
                                                                        {section.title}
                                                                    </h4>
                                                                )}
                                                                <div className="grid grid-cols-1 gap-y-1 pl-2">
                                                                    {section.items && section.items.map((subItem, subIndex) => (
                                                                        <Link
                                                                            key={subIndex}
                                                                            href={subItem.href}
                                                                            className="text-sm text-gray-700 hover:text-purple-500"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 py-2">
                                                        {item.items && item.items.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                className="text-gray-700 hover:text-purple-500 py-1"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </details>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block py-2 font-medium text-gray-800 hover:text-purple-500"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-6 space-y-3">
                            <Link href="tel:977-9810570201" className="flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-md">
                                <Phone size={16} />
                                <span>+977-9810570201</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="block w-full text-center py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Client-side enhancement */}
            <ClientNavbarEnhancer />
        </>
    );
};

export default Navbar;