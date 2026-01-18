import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';
import { useContactDrawer } from '../components/ContactDrawerProvider';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openDrawer } = useContactDrawer();

    // Updated navigation items to match the design reference
    const navigationItems = [
        { label: 'Services', path: '/services' },
        { label: 'Insights', path: '/insights' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (path) => {
        if (path === '/contact') {
            openDrawer();
            setIsMobileMenuOpen(false);
            return;
        }
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const isActivePath = (path) => {
        return location?.pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const headerBgClass = isScrolled || isMobileMenuOpen ? 'bg-[#063453]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Collabrah<span className="text-[#2FA4A9]">Tech</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigationItems?.map((item) => (
                            <button
                                key={item?.path}
                                onClick={() => handleNavigation(item?.path)}
                                className={`text-base font-medium transition-colors duration-200 ${isActivePath(item?.path)
                                    ? 'text-[#2FA4A9]'
                                    : 'text-white/80 hover:text-[#2FA4A9]'
                                    }`}
                            >
                                {item?.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            onClick={openDrawer}
                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-medium rounded-lg px-6 py-2.5 shadow-lg border-0"
                        >
                            Schedule a Call
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#2FA4A9] focus:outline-none"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#041B2E] border-t border-white/10 absolute w-full left-0 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navigationItems?.map((item) => (
                            <button
                                key={item?.path}
                                onClick={() => handleNavigation(item?.path)}
                                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${isActivePath(item?.path)
                                    ? 'text-[#2FA4A9] bg-white/5'
                                    : 'text-white hover:text-[#2FA4A9] hover:bg-white/5'
                                    }`}
                            >
                                {item?.label}
                            </button>
                        ))}
                        <div className="pt-4 px-3">
                            <Button
                                fullWidth
                                onClick={() => {
                                    openDrawer();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-medium justify-center py-3"
                            >
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
