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

        // Helper function to close all dropdowns
        const closeAllDropdowns = () => {
            const allDropdowns = document.querySelectorAll('[data-dropdown-content]');
            allDropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
                dropdown.classList.remove('block');
            });
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
            let hoverDisabled = false; // Flag to temporarily disable hover
            
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

                    // Show dropdown on hover (only if hover is not disabled)
                    const showDropdown = () => {
                        if (hoverDisabled) return;
                        clearTimeout(timeoutId);
                        // Hide all other dropdowns first
                        closeAllDropdowns();
                        
                        dropdown.classList.remove('hidden');
                        dropdown.classList.add('block');
                    };

                    // Hide dropdown with delay
                    const hideDropdown = () => {
                        if (hoverDisabled) return;
                        timeoutId = setTimeout(() => {
                            dropdown.classList.add('hidden');
                            dropdown.classList.remove('block');
                        }, 150);
                    };

                    // Event listeners for hover
                    trigger.addEventListener('mouseenter', showDropdown);
                    trigger.addEventListener('mouseleave', hideDropdown);
                    dropdown.addEventListener('mouseenter', () => {
                        if (!hoverDisabled) clearTimeout(timeoutId);
                    });
                    dropdown.addEventListener('mouseleave', hideDropdown);

                    // Handle click events for trigger links
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
                                closeAllDropdowns();
                            }
                        } else {
                            // No valid href, just toggle dropdown
                            e.preventDefault();
                            
                            const isVisible = !dropdown.classList.contains('hidden');
                            
                            // Hide all dropdowns first
                            closeAllDropdowns();
                            
                            // Show this dropdown if it was hidden
                            if (!isVisible) {
                                dropdown.classList.remove('hidden');
                                dropdown.classList.add('block');
                            }
                        }
                    });
                }
            });

            // Use event delegation to handle all dropdown link clicks
            document.addEventListener('click', (e) => {
                // Check if clicked element is a link inside a dropdown
                const clickedLink = e.target.closest('[data-dropdown-content] a');
                if (clickedLink) {
                    // Temporarily disable hover effects
                    hoverDisabled = true;
                    
                    // Close all dropdowns immediately when any dropdown link is clicked
                    closeAllDropdowns();
                    
                    // Force full page reload for dropdown links
                    const href = clickedLink.getAttribute('href');
                    if (href && href !== '#' && href !== '') {
                        e.preventDefault();
                        window.location.href = href;
                        return;
                    }
                    
                    // Re-enable hover after a short delay (in case link doesn't navigate)
                    setTimeout(() => {
                        hoverDisabled = false;
                    }, 300);
                    return;
                }

                // Check if clicked outside dropdown area
                if (!e.target.closest('[data-dropdown-trigger]') && !e.target.closest('[data-dropdown-content]')) {
                    closeAllDropdowns();
                }
            });

            // Close dropdowns on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeAllDropdowns();
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