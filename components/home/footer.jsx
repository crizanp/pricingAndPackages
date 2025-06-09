import { useState } from 'react';
import { Linkedin, Twitter, Facebook, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    // State for mobile menu toggling
    const [menuOpen, setMenuOpen] = useState({
        company: false,
        resources: false,
        services: false,
        insights: false,
        locations: false
    });

    const toggleMenu = (section) => {
        setMenuOpen({
            ...menuOpen,
            [section]: !menuOpen[section]
        });
    };

    return (
        <footer className="bg-black text-white py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto  py-8 px-4 md:px-6 xl:px-8">
                {/* Main Navigation - Desktop version */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
                    {/* Company Links */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                            <h3 className="text-gray-400 text-sm">Company</h3>
                        </div>
                        <ul className="space-y-4">
                            <li><a href="/company/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
                            <li><a href="/company/testimonials" className="hover:text-gray-300 transition-colors">Testimonials</a></li>
                            <li><a href="/company/process" className="hover:text-gray-300 transition-colors">Process</a></li>
                            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                            <h3 className="text-gray-400 text-sm">Resources and Tools</h3>
                        </div>
                        <ul className="space-y-4">
                            <li><a href="/blog" className="hover:text-gray-300 transition-colors">Blog</a></li>
                            <li><a href="https://tools.foxbeep.com" className="hover:text-gray-300 transition-colors">Video Converter</a></li>
                            <li><a href="https://shop.foxbeep.com" className="hover:text-gray-300 transition-colors">Shop</a></li>
                            <li><a href="/work" className="hover:text-gray-300 transition-colors">Work</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                            <h3 className="text-gray-400 text-sm">Services</h3>
                        </div>
                        <ul className="space-y-4">
                            <li><a href="/services/android-app-development" className="hover:text-gray-300 transition-colors">Mobile App</a></li>
                            <li><a href="/services/telegram-mini-apps-development" className="hover:text-gray-300 transition-colors">Telegram Mini Apps</a></li>
                            <li><a href="/services/dapp-development" className="hover:text-gray-300 transition-colors">Blockchain Development</a></li>
                            <li><a href="/services/ai-development" className="hover:text-gray-300 transition-colors">AI Development</a></li>
                        </ul>
                    </div>

                    {/* Insights Links */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                            <h3 className="text-gray-400 text-sm">Insights</h3>
                        </div>
                        <ul className="space-y-4">
                            <li><a href="/company/university" className="hover:text-gray-300 transition-colors">University</a></li>
                            <li><a href="/company/careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
                            <li><a href="/company/manifesto" className="hover:text-gray-300 transition-colors">Manifesto</a></li>
                            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Foxbeep</a></li>
                        </ul>
                    </div>
                </div>

                {/* Main Navigation - Mobile accordion version */}
                <div className="md:hidden mb-8">
                    {/* Company Section */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleMenu('company')}
                            className="w-full py-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                                <h3 className="text-gray-400 text-sm">Company</h3>
                            </div>
                            {menuOpen.company ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {menuOpen.company && (
                            <ul className="space-y-3 pb-4">
                                <li><a href="/company/university" className="hover:text-gray-300 transition-colors">University</a></li>
                            <li><a href="/company/careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
                            <li><a href="/company/manifesto" className="hover:text-gray-300 transition-colors">Manifesto</a></li>
                            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Foxbeep</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Resources Section */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleMenu('resources')}
                            className="w-full py-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                                <h3 className="text-gray-400 text-sm">Resources</h3>
                            </div>
                            {menuOpen.resources ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {menuOpen.resources && (
                            <ul className="space-y-3 pb-4">
                                <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                                <li><a href="https://tools.foxbeep.com" className="hover:text-gray-300">Video Converter</a></li>
                                <li><a href="https://shop.foxbeep.com" className="hover:text-gray-300">Shop</a></li>
                                <li><a href="/work" className="hover:text-gray-300">Work</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Services Section */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleMenu('services')}
                            className="w-full py-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                                <h3 className="text-gray-400 text-sm">Services</h3>
                            </div>
                            {menuOpen.services ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {menuOpen.services && (
                            <ul className="space-y-3 pb-4">
                                 <li><a href="/services/android-app-development" className="hover:text-gray-300 transition-colors">Mobile App</a></li>
                            <li><a href="/services/telegram-mini-apps-development" className="hover:text-gray-300 transition-colors">Telegram Mini Apps</a></li>
                            <li><a href="/services/dapp-development" className="hover:text-gray-300 transition-colors">Blockchain Development</a></li>
                            <li><a href="/services/ai-development" className="hover:text-gray-300 transition-colors">AI Development</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Insights Section */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleMenu('insights')}
                            className="w-full py-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                                <h3 className="text-gray-400 text-sm">Insights</h3>
                            </div>
                            {menuOpen.insights ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {menuOpen.insights && (
                            <ul className="space-y-3 pb-4">
                                 <li><a href="/company/university" className="hover:text-gray-300 transition-colors">University</a></li>
                            <li><a href="/company/careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
                            <li><a href="/company/manifesto" className="hover:text-gray-300 transition-colors">Manifesto</a></li>
                            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Foxbeep</a></li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="border-t border-gray-800 mb-8"></div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Contact */}
                    <div className="col-span-1 mb-6 md:mb-0">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                            <h3 className="text-gray-400 text-sm">Contact</h3>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-bold">+977-9810570201</p>
                            <p className="text-lg font-bold">info@foxbeep.com</p>
                        </div>
                    </div>

                    {/* Logo & Copyright */}
                    <div className="col-span-1 flex flex-col items-center text-center mb-6 md:mb-0">
                        <div className="mb-2 relative w-34 h-14">
                            <Image
                                src="/transparentLogo.png"
                                alt="FoxBeep Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-xs">© 2025 Foxbeep. All Rights Reserved</p>
                        {/* <div className="flex items-center mt-3 text-xs text-gray-400">
        <span>Content protected by</span>
        <a href="https://DMCA.com" className="ml-1 hover:text-white">DMCA.com</a>
        <div className="ml-2 bg-white text-black px-2 py-1 rounded text-xs flex items-center">
            DMCA PROTECTED
        </div>
    </div> */}
                    </div>

                    {/* Social Links & Legal */}
                    <div className="col-span-1">
                        <div className="flex justify-center md:justify-end space-x-4 mb-4">
                            <a href="https://np.linkedin.com/company/foxbeep" className="hover:text-gray-300 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/foxbeeptech" className="hover:text-gray-300 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.facebook.com/foxbeeptech" className="hover:text-gray-300 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://foxbeep.com" className="hover:text-gray-300 transition-colors">
                                <Globe size={20} />
                            </a>
                        </div>
                        <div className="flex justify-center md:justify-end text-gray-400 text-xs">
                            <a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a>
                            <span className="mx-2">|</span>
                            <a href="/termsandcondition" className="hover:text-white transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}