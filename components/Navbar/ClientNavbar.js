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
            
            dropdownTriggers.forEach((trigger) => {
                const triggerIndex = trigger.getAttribute('data-dropdown-trigger');
                const dropdown = document.querySelector(`[data-dropdown-content="${triggerIndex}"]`);
                const triggerLink = trigger.querySelector('a');
                
                if (dropdown && triggerLink) {
                    let timeoutId;

                    // Check if the link has a valid href (not just '#' or empty)
                    const hasValidHref = triggerLink.getAttribute('href') && 
                                       triggerLink.getAttribute('href') !== '#' && 
                                       triggerLink.getAttribute('href') !== '';

                    // Show dropdown on hover
                    const showDropdown = () => {
                        clearTimeout(timeoutId);
                        // Hide all other dropdowns first
                        const allDropdowns = document.querySelectorAll('[data-dropdown-content]');
                        allDropdowns.forEach(dd => {
                            if (dd !== dropdown) {
                                dd.classList.add('hidden');
                                dd.classList.remove('block');
                            }
                        });
                        
                        dropdown.classList.remove('hidden');
                        dropdown.classList.add('block');
                    };

                    // Hide dropdown with delay
                    const hideDropdown = () => {
                        timeoutId = setTimeout(() => {
                            dropdown.classList.add('hidden');
                            dropdown.classList.remove('block');
                        }, 150);
                    };

                    // Event listeners for hover
                    trigger.addEventListener('mouseenter', showDropdown);
                    trigger.addEventListener('mouseleave', hideDropdown);
                    dropdown.addEventListener('mouseenter', () => clearTimeout(timeoutId));
                    dropdown.addEventListener('mouseleave', hideDropdown);

                    // Handle click events
                    triggerLink.addEventListener('click', (e) => {
                        // If it has a valid href and no dropdown is visible, allow normal navigation
                        if (hasValidHref) {
                            const isDropdownVisible = !dropdown.classList.contains('hidden');
                            
                            // If dropdown is not visible, allow the link to work normally
                            if (!isDropdownVisible) {
                                return; // Allow normal link navigation
                            } else {
                                // If dropdown is visible, hide it and prevent navigation
                                e.preventDefault();
                                dropdown.classList.add('hidden');
                                dropdown.classList.remove('block');
                            }
                        } else {
                            // No valid href, just toggle dropdown
                            e.preventDefault();
                            
                            const isVisible = !dropdown.classList.contains('hidden');
                            
                            // Hide all dropdowns
                            const allDropdowns = document.querySelectorAll('[data-dropdown-content]');
                            allDropdowns.forEach(dd => {
                                dd.classList.add('hidden');
                                dd.classList.remove('block');
                            });
                            
                            // Show this dropdown if it was hidden
                            if (!isVisible) {
                                dropdown.classList.remove('hidden');
                                dropdown.classList.add('block');
                            }
                        }
                    });
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

            // Close dropdowns on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
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