import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaShareAlt, FaFilePdf } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-500">
        {icon}
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to="/details"
        className="text-blue-500 hover:underline font-semibold"
      >
        Learn More
      </Link>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Smart Report Analyzer
      </h1>
      <h2 className="text-2xl font-semibold mb-8 text-center text-blue-500">
        You test it, We got it
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/admin"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 w-full md:w-auto transition duration-300"
        >
          Admin Dashboard
        </Link>
        <Link
          to="/create-listing"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 w-full md:w-auto transition duration-300"
        >
          Generate Report
        </Link>
        <Link
          to="/report-bug"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 w-full md:w-auto transition duration-300"
        >
          Report a Bug
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <FeatureCard
          icon={<FaChartLine size={48} />}
          title="Smart Report Analysis"
          description="Get a detailed analysis of your health report data with personalized insights. Understand your health like never before."
        />
        <FeatureCard
          icon={<FaShareAlt size={48} />}
          title="Share Live Reports"
          description="Effortlessly share your live reports with healthcare providers for instant consultations. Collaborate seamlessly for better healthcare."
        />
        <FeatureCard
          icon={<FaFilePdf size={48} />}
          title="Generate PDF Reports"
          description="Download a professional PDF report for easy storage, printing, and sharing. Keep your health records organized and accessible."
        />
      </div>
    </div>
  );
};

export default LandingPage;
