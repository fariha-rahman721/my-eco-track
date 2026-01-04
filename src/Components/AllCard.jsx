import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const AllCard = ({ card }) => {
  const {
    _id,
    title,
    category,
    description,
    imageUrl,
    impactMetric,
    target,
  } = card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <div
        className="
          bg-white
          rounded-2xl
          overflow-hidden
          border border-gray-200
          shadow-sm
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
          h-full flex flex-col
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="
              w-full
              h-48 sm:h-52
              object-cover
              transition-transform duration-700
              hover:scale-105
            "
          />

          {/* Category */}
          <span
            className="
              absolute top-4 left-4
              bg-white/90 backdrop-blur
              px-3 py-1
              rounded-full
              text-xs font-semibold
              uppercase tracking-wider
              text-gray-700
            "
          >
            {category}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between flex-1 p-5 text-center">
          <div>
            <p
              className="
                text-xs uppercase tracking-widest
                text-emerald-600 font-semibold
                mb-2
              "
            >
              {target}
            </p>

            <h2
              className="
                text-lg md:text-xl
                font-semibold
                text-gray-900
                mb-3
              "
            >
              {title}
            </h2>

            <p
              className="
                text-sm text-gray-600
                leading-relaxed
                line-clamp-3
              "
            >
              {description}
            </p>

            <p className="mt-4 text-sm font-medium text-emerald-700">
              {impactMetric}
            </p>
          </div>

          {/* ACTION */}
          <div className="mt-5 flex justify-end">
            <Link
              to={`/challengeDetails/${_id}`}
              className="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-emerald-700
                hover:text-emerald-900
                transition-colors
              "
            >
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllCard;
