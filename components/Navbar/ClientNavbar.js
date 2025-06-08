// components/Navbar/ClientNavbarEnhancer.js
"use client";
import { useEffect, useState } from 'react';

const ClientNavbarEnhancer = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        // Fixed setupMobileMenu function
        const setupMobileMenu = () => {
            const button = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');

            if (!button || !menu) {
                console.log('Mobile menu elements not found, retrying...');
                // Retry after a short delay if elements aren't found
                setTimeout(setupMobileMenu, 100);
                return;
            }

            const menuIcon = button.querySelector('svg');
            if (!menuIcon) {
                console.log('Menu icon not found');
                return;
            }

            // Remove any existing event listeners to prevent duplicates
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            const updatedButton = document.getElementById('mobile-menu-button');
            const updatedMenuIcon = updatedButton.querySelector('svg');

            // Add click event listener with proper event handling
            const handleButtonClick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Mobile menu button clicked'); // Debug log
                
                const isCurrentlyHidden = menu.classList.contains('hidden');
                console.log('Menu is currently hidden:', isCurrentlyHidden); // Debug log

                if (isCurrentlyHidden) {
                    // Show menu
                    menu.classList.remove('hidden');
                    menu.classList.add('block');
                    setIsMobileMenuOpen(true);
                    // Change to X icon
                    updatedMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                } else {
                    // Hide menu
                    menu.classList.add('hidden');
                    menu.classList.remove('block');
                    setIsMobileMenuOpen(false);
                    // Change back to hamburger icon
                    updatedMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            };

            // Add event listener
            updatedButton.addEventListener('click', handleButtonClick);
            updatedButton.addEventListener('touchstart', handleButtonClick); // Add touch support for mobile

            // Close mobile menu when clicking on links
            const mobileLinks = menu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    menu.classList.remove('block');
                    setIsMobileMenuOpen(false);
                    updatedMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                });
            });

            // Close mobile menu when clicking outside
            const handleOutsideClick = (e) => {
                if (!updatedButton.contains(e.target) && !menu.contains(e.target)) {
                    if (!menu.classList.contains('hidden')) {
                        menu.classList.add('hidden');
                        menu.classList.remove('block');
                        setIsMobileMenuOpen(false);
                        updatedMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                    }
                }
            };

            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('touchstart', handleOutsideClick);

            // Return cleanup function
            return () => {
                updatedButton.removeEventListener('click', handleButtonClick);
                updatedButton.removeEventListener('touchstart', handleButtonClick);
                document.removeEventListener('click', handleOutsideClick);
                document.removeEventListener('touchstart', handleOutsideClick);
            };
        };

        // Enhanced dropdown behavior for desktop
        const setupDesktopDropdowns = () => {
            const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
            let hoverDisabled = false;

            dropdownTriggers.forEach((trigger) => {
                const triggerIndex = trigger.getAttribute('data-dropdown-trigger');
                const dropdown = document.querySelector(`[data-dropdown-content="${triggerIndex}"]`);
                const triggerLink = trigger.querySelector('a');

                if (dropdown && triggerLink) {
                    let timeoutId;

                    const hasValidHref = triggerLink.getAttribute('href') &&
                        triggerLink.getAttribute('href') !== '#' &&
                        triggerLink.getAttribute('href') !== '';

                    const showDropdown = () => {
                        if (hoverDisabled) return;
                        clearTimeout(timeoutId);
                        closeAllDropdowns();
                        dropdown.classList.remove('hidden');
                        dropdown.classList.add('block');
                    };

                    const hideDropdown = () => {
                        if (hoverDisabled) return;
                        timeoutId = setTimeout(() => {
                            dropdown.classList.add('hidden');
                            dropdown.classList.remove('block');
                        }, 150);
                    };

                    trigger.addEventListener('mouseenter', showDropdown);
                    trigger.addEventListener('mouseleave', hideDropdown);
                    dropdown.addEventListener('mouseenter', () => {
                        if (!hoverDisabled) clearTimeout(timeoutId);
                    });
                    dropdown.addEventListener('mouseleave', hideDropdown);

                    triggerLink.addEventListener('click', (e) => {
                        if (hasValidHref) {
                            const isDropdownVisible = !dropdown.classList.contains('hidden');
                            if (!isDropdownVisible) {
                                return;
                            } else {
                                e.preventDefault();
                                closeAllDropdowns();
                            }
                        } else {
                            e.preventDefault();
                            const isVisible = !dropdown.classList.contains('hidden');
                            closeAllDropdowns();
                            if (!isVisible) {
                                dropdown.classList.remove('hidden');
                                dropdown.classList.add('block');
                            }
                        }
                    });
                }
            });

            document.addEventListener('click', (e) => {
                const clickedLink = e.target.closest('[data-dropdown-content] a');
                if (clickedLink) {
                    hoverDisabled = true;
                    closeAllDropdowns();
                    const href = clickedLink.getAttribute('href');
                    if (href && href !== '#' && href !== '') {
                        e.preventDefault();
                        window.location.href = href;
                        return;
                    }
                    setTimeout(() => {
                        hoverDisabled = false;
                    }, 300);
                    return;
                }

                if (!e.target.closest('[data-dropdown-trigger]') && !e.target.closest('[data-dropdown-content]')) {
                    closeAllDropdowns();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeAllDropdowns();
                }
            });
        };

        // Initialize with a small delay to ensure DOM is ready
        const initializeEnhancements = () => {
            handleScroll();
            const mobileCleanup = setupMobileMenu();
            setupDesktopDropdowns();
            return mobileCleanup;
        };

        // Wait for DOM to be fully ready
        let cleanup;
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                cleanup = initializeEnhancements();
            });
        } else {
            cleanup = initializeEnhancements();
        }

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (cleanup && typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    // Sync state with DOM for mobile menu
    useEffect(() => {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('mobile-menu-button');
        const menuIcon = button?.querySelector('svg');

        if (menu && menuIcon) {
            if (isMobileMenuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('block');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('block');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    }, [isMobileMenuOpen]);

    return null;
};

export default ClientNavbarEnhancer;