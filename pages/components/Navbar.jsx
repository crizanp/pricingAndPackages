// components/Navbar.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Handle scroll effect for navbar
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

    // Navigation items with dropdowns
    const navItems = [
        {
            name: 'Services',
            href: '/services',
            // active: true,
            hasDropdown: true,
            sections: [
                {
                    title: 'Mobile Application',
                    items: [
                        { name: 'iOS App Development', href: '/services/ios-app-development' },
                        { name: 'Android App Development', href: '/services/android-app-development' },
                        { name: 'Ecommerce App Development', href: '/services/ecommerce-app-development' },
                        { name: 'visionOS Development', href: '/services/visionos-development' },
                        { name: 'Enterprise App Development', href: '/services/enterprise-app-development' },
                    ]
                },
                {
                    title: 'Game Development',
                    items: [
                        { name: '2D Game Development', href: '/services/2d-game-development' },
                        { name: '3D Game Development', href: '/services/3d-game-development' },
                        { name: 'NFT Game Development', href: '/services/nft-game-development' },
                        { name: 'Unity Game Development', href: '/services/unity-game-development' },
                    ]
                },
                {
                    title: 'AR/VR',
                    items: [
                        { name: 'AR Development', href: '/services/ar-development' },
                        { name: 'VR Development', href: '/services/vr-development' },
                        { name: 'Metaverse Development', href: '/services/metaverse-development' },
                    ]
                },
                {
                    title: 'AI and Big Data',
                    items: [
                        { name: 'AI Development', href: '/services/ai-development' },
                        { name: 'Big Data Development', href: '/services/big-data-development' },
                    ]
                },
                {
                    title: 'Blockchain Development',
                    items: [
                        { name: 'NFT Marketplace Development', href: '/services/nft-marketplace-development' },
                        { name: 'DApp Development', href: '/services/dapp-development' },
                        { name: 'Web3 Development', href: '/services/web3-development' },
                    ]
                },
                {
                    title: 'Web and MVP',
                    items: [
                        { name: 'MVP Development', href: '/services/mvp-development' },
                        { name: 'Website Development', href: '/services/website-development' },
                    ]
                },
                {
                    title: 'SharePoint',
                    items: [
                        { name: 'SharePoint Development', href: '/services/sharepoint-development' },
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
            name: 'Solutions',
            href: '/solutions',
            hasDropdown: true,
            flatMenu: true,
            items: [
                { name: 'Beep HappyForce', href: '/solutions/Beep-happyforce' },
                { name: 'Beep Hero', href: '/solutions/Beep-hero' },
                { name: 'Beep Shop', href: '/solutions/Beep-shop' },
                { name: 'Beep Messenger', href: '/solutions/Beep-messenger' },
                { name: 'On-Demand Delivery', href: '/solutions/on-demand-delivery' },
                { name: 'Chat Bot', href: '/solutions/chat-bot' },
                { name: 'Beep Chain', href: '/solutions/Beep-chain' },
                { name: 'Social Platform', href: '/solutions/social-platform' },
                { name: 'Beep Insight Machine', href: '/solutions/Beep-insight-machine' },
                { name: 'Event Management', href: '/solutions/event-management' },
            ]
        },
        { name: 'Work', href: '/work', hasDropdown: false },
        {
            name: 'Company',
            href: '/company',
            hasDropdown: true,
            flatMenu: true,
            items: [
                { name: 'About', href: '/company/about' },
                { name: 'Process', href: '/company/process' },
                { name: 'Careers', href: '/company/careers' },
                { name: 'Clients', href: '/company/clients' },
                { name: 'University', href: '/company/university' },
                { name: 'Testimonials', href: '/company/testimonials' },
                { name: 'Manifesto', href: '/company/manifesto' },
                { name: 'Blog', href: '/resources/blog' },
                { name: 'News & Updates', href: '/resources/news-updates' },
                { name: 'Press Release', href: '/resources/press-release' },
                { name: 'Events', href: '/resources/events' },
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
            className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
            onMouseLeave={closeAllDropdowns}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center" onClick={closeAllDropdowns}>
                            <div className="relative w-30 h-20">
                                <Image
                                    src="/logo.png"
                                    alt="FoxBeep Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`font-medium text-lg hover:text-purple-500 transition-colors duration-200 flex items-center ${item.active ? 'text-purple-500' : 'text-gray-800'}`}
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                                >
                                    {item.name}
                                    {item.hasDropdown && (
                                        <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180 duration-200" />
                                    )}
                                </Link>

                                {item.hasDropdown && activeDropdown === index && (
                                    <div className="fixed left-0 w-full bg-white border-t border-gray-100 shadow-lg z-20"
                                        style={{ top: '5rem' }}>
                                        <div className="container mx-auto py-8">
                                            {/* Industries/Solutions/Company Style Menu */}
                                            {item.flatMenu && (
                                                <div className="flex">
                                                    {/* Left side title */}
                                                    <div className="w-108 pr-8 border-r border-gray-200 flex justify-center items-center">
                                                        <h2 className="text-3xl font-bold flex items-center text-black">
                                                            {item.name}
                                                            <ArrowRight size={24} className="ml-2 text-purple-500" />
                                                        </h2>
                                                    </div>

                                                    {/* Right side grid of items */}
                                                    <div className="flex-1 pl-12">
                                                        <div className="grid grid-cols-4 gap-y-6 gap-x-8">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    className="text-gray-700 hover:text-purple-500 transition-colors duration-200"
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
                                                <div className="flex">
                                                    {/* Left side title */}
                                                    <div className="w-108 pr-8 border-r border-gray-200 flex justify-center items-center">
                                                        <h2 className="text-3xl font-bold flex items-center text-black">
                                                            {item.name}
                                                            <ArrowRight size={24} className="ml-2 text-purple-500" />
                                                        </h2>
                                                    </div>


                                                    {/* Right side sections */}
                                                    <div className="flex-1 pl-12">
                                                        <div className="grid grid-cols-3 gap-y-8 gap-x-8">
                                                            {item.sections.map((section, sectionIndex) => (
                                                                <div key={sectionIndex}>
                                                                    <h3 className="font-semibold text-lg mb-4">
                                                                        {section.title}
                                                                    </h3>
                                                                    <div className="space-y-3">
                                                                        {section.items && section.items.map((subItem, subIndex) => (
                                                                            <Link
                                                                                key={subIndex}
                                                                                href={subItem.href}
                                                                                className="block text-gray-700 hover:text-purple-500 transition-colors duration-200"
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
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="tel:977-9810570201" className="flex items-center text-gray-800 hover:text-purple-600 transition-colors">
                            <Phone size={18} className="mr-2" />
                            <span>+977-9810570201</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-gray-600 hover:text-purple-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 overflow-hidden max-h-screen overflow-y-auto">
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
                                                    {/* Flat menu mobile display */}
                                                    {item.flatMenu && (
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
                                                                    <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
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