import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function CreateListing() {
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);
      const { currentUser } = useSelector((state) => state.user);
      const navigate = useNavigate();
        const [files, setFiles] = useState([]);
        const [formData, setFormData] = useState({
          name: "",
          tel: "",
          email: "",
          redBloodCellCount: '',
          hemoglobin: '',
          hematocrit: '',
          meanCorpuscularVolume: '',
          meanCorpuscularHemoglobin: '',
          meanCorpuscularHemoglobinConcentration: '',
          whiteBloodCellCount: '',
          plateletCount: '',
        });

        const handleChange = (e) => {
            setFormData({
                ...formData,
            })
        }

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            setLoading(true);
            setError(false);
            const res = await fetch("/api/listing/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...formData,
                userRef: currentUser._id,
              }),
            });
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
              setError(data.message);
            }
            navigate(`/listing/${data._id}`);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
        console.log(formData);
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Generate New Report
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            value={formData.name}
          />
          <input
            type="Number"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
            id="tel"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                tel: e.target.value,
              })
            }
            value={formData.tel}
          />
          <input
            type="email"
            placeholder="EmailId"
            className="border p-3 rounded-lg"
            id="email"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            value={formData.email}
          />
          <input
            type="number"
            placeholder="redBloodCellCount"
            className="border p-3 rounded-lg"
            id="redBloodCellCount"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                redBloodCellCount: e.target.value,
              })
            }
            value={formData.redBloodCellCount}
          />
          <input
            type="number"
            placeholder="hemoglobin"
            className="border p-3 rounded-lg"
            id="hemoglobin"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                hemoglobin: e.target.value,
              })
            }
            value={formData.hemoglobin}
          />
          <input
            type="number"
            placeholder="hematocrit"
            className="border p-3 rounded-lg"
            id="hematocrit"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                hematocrit: e.target.value,
              })
            }
            value={formData.hematocrit}
          />
          <input
            type="number"
            placeholder="meanCorpuscularVolume"
            className="border p-3 rounded-lg"
            id="meanCorpuscularVolume"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                meanCorpuscularVolume: e.target.value,
              })
            }
            value={formData.meanCorpuscularVolume}
          />
          <input
            type="number"
            placeholder="meanCorpuscularHemoglobin"
            className="border p-3 rounded-lg"
            id="meanCorpuscularHemoglobin"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                meanCorpuscularHemoglobin: e.target.value,
              })
            }
            value={formData.meanCorpuscularHemoglobin}
          />
          <input
            type="number"
            placeholder="meanCorpuscularHemoglobinConcentration"
            className="border p-3 rounded-lg"
            id="meanCorpuscularHemoglobinConcentration"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                meanCorpuscularHemoglobinConcentration: e.target.value,
              })
            }
            value={formData.meanCorpuscularHemoglobinConcentration}
          />
          <input
            type="number"
            placeholder="whiteBloodCellCount"
            className="border p-3 rounded-lg"
            id="whiteBloodCellCount"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                whiteBloodCellCount: e.target.value,
              })
            }
            value={formData.whiteBloodCellCount}
          />
          <input
            type="number"
            placeholder="plateletCount"
            className="border p-3 rounded-lg"
            id="plateletCount"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                plateletCount: e.target.value,
              })
            }
            value={formData.plateletCount}
          />

          {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-= */}

          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
