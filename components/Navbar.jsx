"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useSmoothScroll, handleHashScroll } from '../hook/scrolling';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    useSmoothScroll();
    handleHashScroll();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        { name: 'YouTube Video Editing', href: '/services/video-editing/youtube-video-editing' },
                        { name: 'Ads & Commercial Editing', href: '/services/video-editing/ads-commercial-editing' },
                        { name: 'Social Media Video Editing', href: '/services/video-editing/social-media-video-editing' },
                        { name: 'Corporate Video Editing', href: '/services/video-editing/corporate-video-editing' },
                        { name: 'Event Video Editing', href: '/services/video-editing/events-video-editing' },
                        { name: 'Whiteboard Animation', href: '/services/video-editing/whiteboard-editing' }
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
                { name: 'Real Estate', href: '/industries/realestate' },
                 { name: 'Finance', href: '/industries/finance' },
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
            flatMenu: true,
            items: [
                { name: 'Web Development', href: '/solutions/Beep-happyforce' },
                { name: 'Android Development', href: '/solutions/Beep-hero' },
                { name: 'Graphics Design', href: '/solutions/Beep-shop' },
                { name: 'Blockchain', href: '/solutions/Beep-messenger' },
                { name: 'Digital Marketing', href: '/solutions/on-demand-delivery' },
            ]
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
            href: '#',
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

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
    };

    return (
        <nav
            className={`fixed top-0 left-0 px-0 lg:px-4 w-full bg-white z-50 text-black transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
            onMouseLeave={closeAllDropdowns}
        >
            <div className="container mx-auto pr-8 xl:px-8 2xl:max-w-7xl">
                <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center" onClick={closeAllDropdowns}>
                            <div className="relative w-40 h-16 md:w-40 md:h-16 lg:w-40	 lg:h-16 ml-[-14] lg:ml-[-36px]">
                                <Image
                                    src="/logo.png"
                                    alt="FoxBeep Logo"
                                    fill
                                    className="object-contain "
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - hidden on mobile, shown on medium and up */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`font-medium text-sm lg:text-base xl:text-lg hover:text-purple-500 transition-colors duration-200 flex items-center ${item.active ? 'text-purple-500' : 'text-gray-800'}`}
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                                >
                                    {item.name}
                                    {item.hasDropdown && (
                                        <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180 duration-200" />
                                    )}
                                </Link>

                                {item.hasDropdown && activeDropdown === index && (
                                    <div className="fixed left-0 w-full bg-white border-t border-gray-100 shadow-lg z-20"
                                        style={{ top: '4rem' }}>
                                        <div className="container mx-auto py-4 md:py-6 lg:py-8 px-4">
                                            {/* Company menu with compact layout */}
                                            {item.flatMenu && item.compactMenu && (
                                                <div className="flex flex-col md:flex-row">
                                                    {/* Left side title */}
                                                    <div className="md:w-32 lg:w-40 xl:w-48 pr-0 md:pr-4 lg:pr-8 border-b md:border-b-0 border-gray-200 flex justify-start md:justify-center items-center pb-4 md:pb-0">
                                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center text-black">
                                                            {/* {item.name}
                                                            <ArrowRight size={20} className="ml-2 text-purple-500" /> */}
                                                        </h2>
                                                    </div>

                                                    {/* Right side compact grid with 3 columns for just 6 items */}
                                                    <div className="flex-1 pt-4 md:pt-0 md:pl-4 lg:pl-8 xl:pl-12">
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="text-sm lg:text-base text-gray-700 hover:text-purple-500 transition-colors duration-200"
                                                                    onClick={closeAllDropdowns}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Industries/Solutions Style Menu */}
                                            {item.flatMenu && !item.compactMenu && (
                                                <div className="flex flex-col md:flex-row">
                                                    {/* Left side title */}
                                                    <div className="md:w-32 lg:w-40 xl:w-48 pr-0 md:pr-4 lg:pr-8 border-b md:border-b-0  border-gray-200 flex justify-start md:justify-center items-center pb-4 md:pb-0">
                                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center text-black">
                                                            {/* {item.name}
                                                            <ArrowRight size={20} className="ml-2 text-purple-500" /> */}
                                                        </h2>
                                                    </div>

                                                    {/* Right side grid of items */}
                                                    <div className="flex-1 pt-4 md:pt-0 md:pl-4 lg:pl-8 xl:pl-12">
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 lg:gap-y-6 gap-x-4 lg:gap-x-8">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="text-sm lg:text-base text-gray-700 hover:text-purple-500 transition-colors duration-200"
                                                                    onClick={closeAllDropdowns}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Services Style Menu */}
                                            {!item.flatMenu && item.name === 'Services' && (
                                                <div className="max-h-[80vh] overflow-y-auto hide-scrollbar">
                                                    <div className="flex flex-col md:flex-row">
                                                        {/* Left side title */}
                                                        <div className="md:w-32 lg:w-40 xl:w-48 pr-0 md:pr-4 lg:pr-8 border-b md:border-b-0 border-gray-200 flex justify-start md:justify-center items-center pb-4 md:pb-0">
                                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center text-black">
                                                                {/* {item.name}
                    <ArrowRight size={20} className="ml-2 text-purple-500" /> */}
                                                            </h2>
                                                        </div>

                                                        {/* Right side sections */}
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
                                                                                    onClick={closeAllDropdowns}
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

                                            {/* Simple dropdown for Tools and other basic menus */}
                                            {!item.flatMenu && item.name !== 'Services' && (
                                                <div className="py-4">
                                                    <div className="flex flex-col space-y-2 max-w-xs">
                                                        {item.items.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                className="text-sm lg:text-base text-gray-700 hover:text-purple-500 transition-colors duration-200 px-4 py-2 rounded hover:bg-gray-50"
                                                                onClick={closeAllDropdowns}
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
                        ))}
                    </div>

                    {/* Contact & CTA - hidden on mobile, visible on medium screens and up */}
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

                    {/* Mobile menu button - visible on mobile, hidden on medium screens and up */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-600 hover:text-purple-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Only visible on mobile */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 overflow-hidden max-h-screen overflow-y-auto">
                    <div className="container mx-auto px-4 py-3">
                        <ul className="space-y-1">
                            {navItems.map((item, index) => (
                                <li key={index} className="py-1">
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                className={`flex items-center justify-between w-full py-2 font-medium hover:text-purple-500 focus:outline-none ${item.active ? 'text-purple-500' : 'text-gray-800'}`}
                                                onClick={() => toggleDropdown(index)}
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 ease-in-out ${activeDropdown === index ? 'transform rotate-180' : ''}`}
                                                />
                                            </button>
                                            {activeDropdown === index && (
                                                <div className="pl-4 mt-2 border-l-2 border-purple-500">
                                                    {/* Company menu mobile layout (compact) */}
                                                    {item.flatMenu && item.compactMenu && (
                                                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 py-2">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="text-gray-700 hover:text-purple-500 py-1"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Other flat menus mobile display */}
                                                    {item.flatMenu && !item.compactMenu && (
                                                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 py-2">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="text-gray-700 hover:text-purple-500 py-1"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Services menu mobile display */}
                                                    {!item.flatMenu && item.sections && (
                                                        <div className="space-y-4 py-2">
                                                            {item.sections.map((section, sectionIndex) => (
                                                                <div key={sectionIndex}>
                                                                    {section.href ? (
                                                                        <Link
                                                                            href={section.href}
                                                                            className="font-semibold text-sm mb-2 block hover:text-purple-500"
                                                                            onClick={() => setIsOpen(false)}
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
                                                                                onClick={() => setIsOpen(false)}
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Simple menu mobile display (for Tools) */}
                                                    {!item.flatMenu && !item.sections && (
                                                        <div className="py-2">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="block text-sm text-gray-700 hover:text-purple-500 py-1"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block py-2 font-medium hover:text-purple-500 ${item.active ? 'text-purple-500' : 'text-gray-800'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 space-y-3">
                            <Link href="tel:977-9810570201" className="flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-md">
                                <Phone size={16} />
                                <span>+977-9810570201</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="block w-full text-center py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;