import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaShare } from "react-icons/fa";
import { PiFilePdf } from "react-icons/pi";
import { SimpleGauge } from "react-gauges";
import jsPDF from "jspdf";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const attributeData = [
  {
    name: "redBloodCellCount",
    label: "Red Blood Cell Count",
    min: 4.5,
    max: 5.5,
    remedies: {
      low: [
        "Increase iron intake through foods like spinach, red meat, and lentils.",
        "Include vitamin B12-rich foods like fish, eggs, and dairy.",
        "Consider iron supplements if recommended by a doctor.",
        "Check for any gastrointestinal bleeding which may be causing low RBC count.",
        "Rule out chronic diseases or conditions that may affect RBC production.",
      ],
      high: [
        "Stay well-hydrated to help normalize blood volume.",
        "Avoid excessive iron intake from supplements or foods.",
        "Consult a doctor to rule out conditions like polycythemia vera.",
        "Monitor oxygen levels, as high RBC count may affect blood viscosity.",
        "Evaluate kidney function, as it can impact RBC production.",
      ],
    },
    causes: {
      low: [
        "Iron deficiency",
        "Vitamin B12 deficiency",
        "Folate deficiency",
        "Chronic diseases (e.g., kidney disease, rheumatoid arthritis)",
        "Bone marrow disorders",
        "Gastrointestinal bleeding",
        "Hemolysis (destruction of red blood cells)",
        "Nutritional deficiencies",
      ],
      high: [
        "Dehydration",
        "Chronic hypoxia (low oxygen levels)",
        "Smoking",
        "Polycythemia vera (a bone marrow disorder)",
        "Lung diseases (e.g., chronic obstructive pulmonary disease)",
        "Congenital heart disease",
        "Kidney tumors producing erythropoietin",
      ],
    },
  },
  {
    name: "hemoglobin",
    label: "Hemoglobin",
    min: 13.5,
    max: 17.5,
    remedies: {
      low: [
        "Increase iron-rich foods like lean meat, beans, and green leafy vegetables.",
        "Consume foods high in vitamin C to aid iron absorption.",
        "Consider iron supplements under medical guidance.",
        "Rule out gastrointestinal bleeding or menstrual blood loss.",
        "Check for any underlying chronic illnesses affecting hemoglobin production.",
      ],
      high: [
        "Stay well-hydrated by drinking plenty of water.",
        "Avoid excessive iron supplements or iron-rich foods.",
        "Monitor oxygen levels to ensure proper oxygenation of tissues.",
        "Consult a doctor for further evaluation of high hemoglobin levels.",
        "Consider therapeutic phlebotomy to reduce excess red blood cells.",
      ],
    },
    causes: {
      low: [
        "Iron deficiency anemia",
        "Vitamin B12 deficiency anemia",
        "Folate deficiency anemia",
        "Chronic diseases (e.g., kidney disease, inflammatory disorders)",
        "Hemolysis (destruction of red blood cells)",
        "Gastrointestinal bleeding",
        "Bone marrow disorders",
      ],
      high: [
        "Dehydration",
        "Chronic hypoxia (low oxygen levels)",
        "Smoking",
        "Polycythemia vera",
        "Lung diseases (e.g., chronic obstructive pulmonary disease)",
        "Congenital heart disease",
      ],
    },
  },
  {
    name: "hematocrit",
    label: "Hematocrit",
    min: 38.8,
    max: 50.0,
    remedies: {
      low: [
        "Focus on iron-rich foods and vitamin B6 to support red blood cell production.",
        "Consider a diet rich in folate, such as dark green vegetables.",
      ],
      high: [
        "Stay well-hydrated.",
        "Exercise regularly to improve blood flow.",
      ],
    },
    causes: {
      low: [
        "Iron deficiency anemia",
        "Vitamin B6 deficiency",
        "Folate deficiency",
        "Chronic diseases (e.g., kidney disease, inflammatory disorders)",
        "Hemolysis (destruction of red blood cells)",
        "Gastrointestinal bleeding",
        "Bone marrow disorders",
      ],
      high: [
        "Dehydration",
        "Chronic hypoxia (low oxygen levels)",
        "Polycythemia vera",
        "Lung diseases (e.g., chronic obstructive pulmonary disease)",
        "Congenital heart disease",
      ],
    },
  },
  {
    name: "meanCorpuscularVolume",
    label: "Mean Corpuscular Volume",
    min: 80.0,
    max: 100.0,
    remedies: {
      low: [
        "Consume more iron, B vitamins, and foods like whole grains and nuts.",
      ],
      high: [
        "Ensure a balanced diet with essential nutrients.",
        "Limit alcohol consumption.",
      ],
    },
    causes: {
      low: [
        "Iron deficiency anemia",
        "Thalassemia",
        "Lead poisoning",
        "Chronic diseases (e.g., chronic kidney disease)",
        "Sideroblastic anemia",
      ],
      high: [
        "Vitamin B12 deficiency",
        "Folate deficiency",
        "Liver disease",
        "Alcoholism",
        "Medication side effects (e.g., certain chemotherapy drugs)",
      ],
    },
  },
  {
    name: "meanCorpuscularHemoglobin",
    label: "Mean Corpuscular Hemoglobin",
    min: 27.0,
    max: 33.0,
    remedies: {
      low: ["Focus on iron-rich foods and vitamin B6."],
      high: ["Maintain a balanced diet with a variety of nutrients."],
    },
    causes: {
      low: [
        "Iron deficiency anemia",
        "Thalassemia",
        "Lead poisoning",
        "Sideroblastic anemia",
        "Chronic diseases (e.g., chronic kidney disease)",
      ],
      high: [
        "Hemolytic anemias",
        "Vitamin B12 deficiency",
        "Folate deficiency",
        "Liver disease",
        "Hypothyroidism",
      ],
    },
  },
  {
    name: "meanCorpuscularHemoglobinConcentration",
    label: "Mean Corpuscular Hemoglobin Concentration",
    min: 32.0,
    max: 36.0,
    remedies: {
      low: ["Focus on iron-rich foods and vitamin B6.", "Stay well-hydrated."],
      high: [
        "Consume a balanced diet with a variety of nutrients.",
        "Stay hydrated.",
      ],
    },
    causes: {
      low: [
        "Iron deficiency anemia",
        "Thalassemia",
        "Lead poisoning",
        "Sideroblastic anemia",
      ],
      high: [
        "Hereditary spherocytosis",
        "Autoimmune hemolytic anemia",
        "Burn injuries",
        "Dehydration",
        "Hemolytic anemias",
      ],
    },
  },
  {
    name: "whiteBloodCellCount",
    label: "White Blood Cell Count",
    min: 4000,
    max: 11000,
    remedies: {
      low: [
        "Include immune-boosting foods like garlic, ginger, and yogurt.",
        "Avoid exposure to sick individuals.",
      ],
      high: [
        "Rest and get adequate sleep.",
        "Avoid strenuous activities and stressful situations.",
      ],
    },
    causes: {
      low: [
        "Bone marrow disorders (e.g., aplastic anemia)",
        "Viral infections (e.g., HIV)",
        "Autoimmune disorders (e.g., lupus)",
        "Medication side effects (e.g., chemotherapy)",
        "Radiation therapy",
        "Malnutrition",
      ],
      high: [
        "Bacterial infections",
        "Viral infections (e.g., Epstein-Barr virus)",
        "Inflammatory disorders (e.g., rheumatoid arthritis)",
        "Leukemia",
        "Smoking",
        "Stress or trauma",
      ],
    },
  },
  {
    name: "plateletCount",
    label: "Platelet Count",
    min: 150000,
    max: 450000,
    remedies: {
      low: [
        "Consume foods rich in vitamin K, like leafy greens and broccoli.",
        "Avoid activities that may cause bleeding or injury.",
      ],
      high: [
        "Stay well-hydrated.",
        "Monitor and manage any underlying health conditions.",
      ],
    },
    causes: {
      low: [
        "Immune thrombocytopenia",
        "Medication side effects (e.g., chemotherapy)",
        "Bone marrow disorders (e.g., aplastic anemia)",
        "Viral infections (e.g., HIV)",
        "Cirrhosis (liver disease)",
      ],
      high: [
        "Essential thrombocythemia",
        "Reactive thrombocytosis (e.g., after surgery or trauma)",
        "Inflammatory disorders (e.g., rheumatoid arthritis)",
        "Infection",
        "Iron-deficiency anemia",
      ],
    },
  },
];

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [date,setDate] = useState('');
  const params = useParams();

  const generatePDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById("pdf-content");

    doc.html(element, {
      callback: function (pdf) {
        pdf.save("report.pdf");
      },
    });
  };

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setDate(data.createdAt.slice(0,10))
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main id="pdf-content" className="bg-gray-100 p-6">
      <h2 className="text-center text-2xl py-4 font-bold text-slate-700">
        <span className="text-slate-400">Name : </span>
        {listing?.name}
      </h2>
      <div className="flex justify-around align-middle">
        <h2 className="text-center py-4 text-xl font-bold text-slate-700">
          <span className="text-slate-400">Email : </span>
          {listing?.email}
        </h2>
        <h2 className="text-center py-4 text-xl font-bold text-slate-700">
          <span className="text-slate-400">Date : </span>
          {date}
        </h2>
      </div>

      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}

      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}

      {listing && !loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {attributeData.map((attribute) => (
            <div
              key={attribute.name}
              className="p-6 border border-gray-300 bg-white rounded-lg shadow"
            >
              <p className="text-xl font-bold text-blue-500 mb-4">
                {attribute.label}
              </p>

              <div className="mb-6">
                <Bar
                  data={{
                    labels: ["Value"],
                    datasets: [
                      {
                        label: attribute.label,
                        data: [listing[attribute.name]],
                        backgroundColor: [
                          listing[attribute.name] >= attribute.min &&
                          listing[attribute.name] <= attribute.max
                            ? "green" // In range (green)
                            : "red", // Out of range (red)
                        ],
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: attribute.max,
                      },
                    },
                  }}
                />
              </div>

              <div>
                <p className="font-bold text-blue-500 mb-2">Status:</p>
                <p
                  className={`
        ${
          listing[attribute.name] >= attribute.min &&
          listing[attribute.name] <= attribute.max
            ? "text-green-500"
            : "text-red-500"
        }
      `}
                >
                  {listing[attribute.name] >= attribute.min &&
                  listing[attribute.name] <= attribute.max
                    ? "In Range"
                    : listing[attribute.name] < attribute.min
                    ? "Low"
                    : "High"}
                </p>
              </div>

              {listing[attribute.name] < attribute.min && (
                <div>
                  <p className="font-bold text-blue-500 mb-2">
                    Remedies for Low:
                  </p>
                  <ul className="list-disc pl-6">
                    {attribute.remedies.low.map((remedy, index) => (
                      <li key={index}>{remedy}</li>
                    ))}
                  </ul>
                </div>
              )}

              {listing[attribute.name] > attribute.max && (
                <div>
                  <p className="font-bold text-blue-500 mb-2">
                    Remedies for High:
                  </p>
                  <ul className="list-disc pl-6">
                    {attribute.remedies.high.map((remedy, index) => (
                      <li key={index}>{remedy}</li>
                    ))}
                  </ul>
                </div>
              )}

              {listing[attribute.name] < attribute.min ||
                (listing[attribute.name] > attribute.max && (
                  <div className="mt-4">
                    <p className="font-bold text-blue-500 mb-2">Causes:</p>
                    <ul className="list-disc pl-6">
                      {attribute.causes.low.map((cause, index) => (
                        <li key={index}>{cause}</li>
                      ))}
                    </ul>

                    <ul className="list-disc pl-6 mt-4">
                      {attribute.causes.high.map((cause, index) => (
                        <li key={index}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}

      <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-blue-100 cursor-pointer">
        <FaShare
          className="text-blue-500"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        />

        {copied && (
          <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-blue-100 p-2">
            Link copied!
          </p>
        )}

        <button
          className="fixed top-[25%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-blue-100 cursor-pointer"
          onClick={generatePDF}
        >
          <PiFilePdf className="text-blue-500 text-xl" />
        </button>
      </div>
    </main>
  );
}
