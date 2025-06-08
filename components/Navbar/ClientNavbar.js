// components/Navbar/ClientNavbarEnhancer.js
"use client";
import { useEffect } from 'react';

const ClientNavbarEnhancer = () => {
    useEffect(() => {
        // Scroll effect for navbar shadow
        const handleScroll = () => {
            const navbar = document.getElementById('main-navbar');
            if (navbar) {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-md');
                    navbar.classList.remove('border-b', 'border-gray-100');
                } else {
                    navbar.classList.remove('shadow-md');
                    navbar.classList.add('border-b', 'border-gray-100');
                }
            }
        };

        // Mobile menu toggle
        const setupMobileMenu = () => {
            const button = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');
            const menuIcon = button?.querySelector('svg');

            if (button && menu && menuIcon) {
                button.addEventListener('click', () => {
                    const isHidden = menu.classList.contains('hidden');
                    
                    if (isHidden) {
                        menu.classList.remove('hidden');
                        // Change to X icon
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                    } else {
                        menu.classList.add('hidden');
                        // Change back to hamburger icon
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                    }
                });

                // Close mobile menu when clicking on links
                const mobileLinks = menu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        menu.classList.add('hidden');
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                    });
                });
            }
        };

        // Enhanced dropdown behavior for desktop
        const setupDesktopDropdowns = () => {
            const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
            
            dropdownTriggers.forEach((trigger, index) => {
                const dropdown = document.querySelector(`[data-dropdown-content="${index}"]`);
                
                if (dropdown) {
                    let timeoutId;

                    // Show dropdown on hover
                    trigger.addEventListener('mouseenter', () => {
                        clearTimeout(timeoutId);
                        dropdown.classList.remove('hidden');
                        dropdown.classList.add('block');
                    });

                    // Hide dropdown with delay
                    const hideDropdown = () => {
                        timeoutId = setTimeout(() => {
                            dropdown.classList.add('hidden');
                            dropdown.classList.remove('block');
                        }, 100);
                    };

                    trigger.addEventListener('mouseleave', hideDropdown);
                    dropdown.addEventListener('mouseenter', () => clearTimeout(timeoutId));
                    dropdown.addEventListener('mouseleave', hideDropdown);
                }
            });

            // Close all dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('[data-dropdown-trigger]') && !e.target.closest('[data-dropdown-content]')) {
                    const allDropdowns = document.querySelectorAll('[data-dropdown-content]');
                    allDropdowns.forEach(dropdown => {
                        dropdown.classList.add('hidden');
                        dropdown.classList.remove('block');
                    });
                }
            });
        };

        // Initialize all enhancements
        handleScroll(); // Set initial state
        setupMobileMenu();
        setupDesktopDropdowns();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // This component renders nothing - it only adds behavior
    return null;
};

export default ClientNavbarEnhancer;