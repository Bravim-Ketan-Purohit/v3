import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Pie } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
);
export default function App() {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekdata = {
    labels,
    datasets: [
      {
        label: "User Joined",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#87FF65",
      },
      {
        label: "Report Uploaded",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const weekoptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly User Report",
      },
    },
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" ,
      },
      title: {
        display: true,
        text: "Montly User Overview",
      },
    },
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "User Turnaround",
        data: [10, 10, 10, 60, 10, 20, 10, 10, 70, 10, 50, 10],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "New User Joined",
        data: [20, 20, 30, 40, 2, 50, 20, 20, 40, 100, 20, 10],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const Piedata = {
    labels: [
      "Blood Report",
      "Cancer Report",
      "Urine Report",
      "AIDS Report",
      "TB Report",
      "Corona Report",
    ],
    datasets: [
      {
        label: "Reports Classification",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full h-full p-5 flex flex-col justify-center ">
      <div className="flex justify-between">
        {/* daily data record */}
        <div className="w-1/3  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm p-5 m-2">
          <div className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-lg my-4 w-full px-5 py-2.5 text-center mr-2 mb-2">
            <h4 className="text-lg font-bold">Today's Analysis</h4>
            <table className="w-full mt-2">
              <tr className="py-2">
                <td className="text-left">New Clients :</td>
                <td className="text-right font-bold">150</td>
              </tr>

              <tr className="py-4">
                <td className="text-left">Report Tested :</td>
                <td className="text-right font-bold">150</td>
              </tr>
            </table>
          </div>
          <div class="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-lg my-4 w-full px-5 py-2.5 text-center mr-2 mb-2">
            <h4 className="text-lg font-bold mt-2">Revenue</h4>
            <table className="w-full mt-2">
              <tr className="py-2">
                <td className="text-left">User Registration :</td>
                <td className="text-right font-bold">1500 ₹</td>
              </tr>

              <tr className="py-4">
                <td className="text-left">Report Revenue:</td>
                <td className="text-right font-bold">1500 ₹</td>
              </tr>
            </table>
          </div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-sm text-lg my-4 w-full px-5 py-2.5 text-center mr-2 mb-2"
          >
            Apply Doctor Affilation
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-lg my-4 w-full px-5 py-2.5 text-center mr-2 mb-2"
          >
            Patient Data
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-sm text-lg my-4 w-full px-5 py-2.5 text-center mr-2 mb-2"
          >
            Request Detail
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 font-medium rounded-sm text-lg  w-full px-5 py-2.5 text-center mr-2 mb-2"
          >
            Settings
          </button>
        </div>

        {/* weekly data record */}
        <div className="w-full  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm p-5 m-2">
          <h4 className="text-lg font-bold">Weekly Analysis</h4>
          <Bar options={weekoptions} data={weekdata} />
        </div>
      </div>
      <div className="flex justify-between">
        {/* Monthly Record */}
        <div className="w-full  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm p-5 m-2">
          <h4 className="text-lg font-bold">Monthly Analysis Analysis 2023</h4>
          <Line options={options} data={data} />
        </div>
        {/* Pie Chart Record */}
        <div className="w-1/3  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm p-5 m-2">
          <h4 className="text-lg font-bold">Report Classification</h4>
          <Pie data={Piedata} />;
        </div>
      </div>
    </div>
  );
}