import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-emerald-900 text-white py-10 w-11/12 mx-auto mt-8">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                
                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold text-shadow-white mb-2">EcoTrack</h3>
                    <p className="text-white text-sm">
                        © 2025 EcoTrack. All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium">
                    <a href="/about" className="hover:text-green-400 transition-colors">About</a>
                    <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <a href="#" aria-label="Facebook" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                        <Facebook size={18} />
                    </a>
                    <a href="#" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                        <Twitter size={18} />
                    </a>
                    <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                        <Instagram size={18} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>

            {/* Accessibility & Privacy Note */}
            <div className="w-11/12 mx-auto mt-8 pt-6 border-t border-green-950 flex flex-col md:flex-row justify-between items-center text-xs text-white gap-4">
                <p className="text-center text-white md:text-left">
                    We are committed to ensuring digital accessibility for people with disabilities.
                </p>
                <div className="flex items-center gap-4">
                    <a href="/privacy" className="hover:text-gray-300 underline">Privacy Policy</a>
                    <span>|</span>
                    <a href="/terms" className="hover:text-gray-300 underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;