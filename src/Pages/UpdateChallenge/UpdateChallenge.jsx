import React, { useEffect, useState, useContext } from "react";
import {
    ArrowLeft,
    Calendar,
    Leaf,
    Target,
    Image as ImageIcon,
    Clock,
    Save,
    Info,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import { Link, useParams } from "react-router";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const CATEGORIES = [
    "Waste Reduction",
    "Sustainable Transport",
    "Green Living",
    "Energy Conservation",
    "Water Conservation",
    "Biodiversity",
];

const UpdateChallenge = ({ onBack }) => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        category: CATEGORIES[0],
        description: "",
        duration: 7,
        target: "",
        impactMetric: "",
        startDate: "",
        endDate: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (!user || !id) return;

        fetch(`https://eco-track-server-two.vercel.app/cards/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    title: data.title || "",
                    category: data.category || CATEGORIES[0],
                    description: data.description || "",
                    duration: data.duration || 7,
                    target: data.target || "",
                    impactMetric: data.impactMetric || "",
                    startDate: data.startDate || "",
                    endDate: data.endDate || "",
                    imageUrl: data.imageUrl || "",
                });
            })
            .catch((err) => console.error(err));
    }, [user, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "duration" ? Number(value) : value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (
            !formData.title ||
            !formData.category ||
            !formData.description ||
            !formData.duration ||
            !formData.impactMetric ||
            !formData.imageUrl ||
            !formData.startDate ||
            !formData.endDate
        ) {
            toast.error("Please fill in all required fields!");
            return;
        }

        fetch(`https://eco-track-server-two.vercel.app/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user?.accessToken}`,   // ✅ FIXED
            },
            body: JSON.stringify(formData),  // ✅ FIXED
        })
            .then(res => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Challenge updated Successfully!");
                } else {
                    toast.error("Update failed!");
                }
            })
            .catch(() => {
                toast.error("Something went wrong!");
            });
    };


    return (
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            <Navbar />
            <div className="min-h-screen w-full pt-24 pb-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
                    <Link
                        to="/"
                        onClick={onBack}
                        className="flex items-center text-gray-500 hover:text-emerald-600 font-medium mb-6 text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                        <div className="bg-emerald-900 px-6 sm:px-8 py-4 sm:py-6 text-white flex justify-between items-center">
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                    Update Challenge
                                </h1>
                                <p className="text-emerald-200 text-xs sm:text-sm mt-1">
                                    Modify the details of your sustainability challenge
                                </p>
                            </div>
                            <div className="bg-white/10 p-3 rounded-full">
                                <Leaf className="w-6 h-6 text-emerald-300" />
                            </div>
                        </div>

                        <form onSubmit={handleUpdate} className="p-4 sm:p-6 md:p-8 space-y-8">
                            {/* Basic Info */}
                            <section className="space-y-6">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-emerald-600" /> Basic Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="font-bold text-gray-700 mb-2 block">Challenge Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                        >
                                            {CATEGORIES.map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Image URL</label>
                                        <div className="relative">
                                            <input
                                                type="url"
                                                name="imageUrl"
                                                value={formData.imageUrl}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pl-10 rounded-lg border"
                                            />
                                            <ImageIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="font-bold text-gray-700 mb-2 block">Description</label>
                                        <textarea
                                            name="description"
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border resize-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Goals */}
                            <section className="space-y-6">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-emerald-600" /> Goals & Metrics
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Target Goal</label>
                                        <input
                                            type="text"
                                            name="target"
                                            value={formData.target}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Impact Metric</label>
                                        <input
                                            type="text"
                                            name="impactMetric"
                                            value={formData.impactMetric}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Timeline */}
                            <section className="space-y-6">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-emerald-600" /> Timeline
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Start Date</label>
                                        <input
                                            type="date"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">End Date</label>
                                        <input
                                            type="date"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-bold text-gray-700 mb-2 block">Duration (Days)</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="duration"
                                                min="1"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pl-10 rounded-lg border"
                                            />
                                            <Clock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t">
                                <button
                                    type="button"
                                    onClick={onBack}
                                    className="px-6 py-3 rounded-lg font-bold text-gray-600 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-8 py-3 rounded-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg flex items-center gap-2"
                                >
                                    <Save className="w-4 h-4" /> Update Challenge
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster />
            </div>
            <Footer />
        </div>
    );
};

export default UpdateChallenge;
