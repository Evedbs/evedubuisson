import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistre les éléments nécessaires de Chart.js pour le radar chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const data = {
    labels: [
      "React",
      "Typescript",
      "HTML",
      "JavaScript",
      "Bootstrap",
      "Material UI",
      "CSS",
      "Node",
      "Express",
      "SQL",
      "MongoDB",
      "Next",
      "Figma",
      "Git",
      "Vite",
    ],
    datasets: [
      {
        label: "Front-end",
        data: [85, 70, 70, 78, 60, 78, 85, 0, 0, 0, 0, 80, 0, 0, 0],
        backgroundColor: "rgba(10, 72, 72, 0.5)",
        borderColor: "rgba(10, 72, 72, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(10, 72, 72, 1)",
      },
      {
        label: "Back-end",
        data: [0, 0, 0, 0, 0, 0, 0, 70, 70, 70, 50, 30, 0, 0, 0],
        backgroundColor: "rgba(45, 106, 106, 0.2)",
        borderColor: "rgba(45, 106, 106, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(45, 106, 106, 1)",
      },
      {
        label: "Design",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0],
        backgroundColor: "rgba(242, 180, 0, 0.2)",
        borderColor: "rgba(242, 180, 0, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(242, 180, 0, 1)",
      },
      {
        label: "Other",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 50],
        backgroundColor: "rgba(212, 212, 212, 0.2)",
        borderColor: "rgba(212, 212, 212, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(212, 212, 212, 1)",
      },
    ],
  };

  const mobile = window.innerWidth < 400 ? "16" : "20";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        pointLabels: {
          font: {
            size: mobile,
          },
        },
      },
    },
  };

  return (
    <div className="containerRadarChart">
      <h2 className="titleChart">My Skills by Category</h2>
      <Radar
        data={data}
        options={options}
      />
    </div>
  );
};

export default RadarChart;
