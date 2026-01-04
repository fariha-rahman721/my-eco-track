import React from "react";
import { NavLink } from "react-router";

const Privacy = () => {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-emerald-900 text-white p-4 flex justify-between items-center" style={{
                width: "100vw",
                maxWidth: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                backgroundColor: "#064e3b",
            }}>
                <div className="flex gap-2 items-center font-bold px-5">
                    <img className='w-10 h-10 rounded-full' src={`/logo.jpeg`} alt="" />
                    <span>Eco-Track</span>
                </div>
                <NavLink to="/">Home</NavLink>
            </div>
            <h1 className="text-3xl font-bold mt-10 mb-6 text-emerald-800 text-center">
                Privacy Policy
            </h1>

            <p className="mb-6 text-gray-700 text-justify">
                At <strong>Eco-Track</strong>, your privacy is important to us. This
                Privacy Policy explains how we collect, use, protect, and handle your
                personal information when you use our platform.
            </p>

            {/* Information We Collect */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                     Information We Collect
                </h2>
                <p className="text-gray-700 mb-2 text-justify">
                    We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-justify">
                    <li>
                        <strong>Personal Information:</strong> Name, email address, and
                        profile photo when you register or log in.
                    </li>
                    <li>
                        <strong>Activity Data:</strong> Information related to eco-challenges,
                        activities, and participation.
                    </li>
                    <li>
                        <strong>Technical Data:</strong> Browser type, device information,
                        IP address, and usage logs.
                    </li>
                </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                     How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-justify">
                    <li>To provide and maintain our services</li>
                    <li>To personalize your experience on Eco-Track</li>
                    <li>To track challenge participation and progress</li>
                    <li>To improve platform performance and usability</li>
                    <li>To communicate important updates or notifications</li>
                </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                    Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 text-justify">
                    Eco-Track may use cookies and similar technologies to enhance user
                    experience, analyze usage patterns, and improve our services. You can
                    control cookie preferences through your browser settings.
                </p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                     Data Security
                </h2>
                <p className="text-gray-700 text-justify">
                    We take reasonable technical and organizational measures to protect
                    your personal data from unauthorized access, alteration, disclosure,
                    or destruction. However, no online system is 100% secure.
                </p>
            </section>

            {/* Third Parties */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                    Third-Party Services
                </h2>
                <p className="text-gray-700 text-justify">
                    Eco-Track may use trusted third-party services (such as authentication
                    or analytics providers). These services have their own privacy
                    policies, and we are not responsible for their practices.
                </p>
            </section>

            {/* User Rights */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                     Your Rights
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-justify">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Request account deletion</li>
                </ul>
            </section>

            {/* Updates */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700 text-center">
                     Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 text-justify">
                    We may update this Privacy Policy from time to time. Any changes will
                    be posted on this page with an updated effective date.
                </p>
            </section>

            {/* Contact */}
            <section className="text-center">
                <h2 className="text-xl font-semibold mb-3 text-emerald-700">
                     Contact Us
                </h2>
                <p className="text-gray-700">
                    If you have any questions or concerns about this Privacy Policy, please
                    contact us at:
                </p>
                <p className="btn bg-green-600  mt-2 font-medium text-white hover:bg-green-800">
                    📞 1400 67 89 58
                </p>
            </section>

            <p className="mt-10 text-sm text-gray-500 text-center">
                Last updated: January 2026
            </p>

        </div>
    );
};

export default Privacy;
