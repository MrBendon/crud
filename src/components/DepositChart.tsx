import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { DataType } from "./Table";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "個人每收入與年支出",
    },
  },
};

interface PropsType {
  activeData: DataType[];
}

const DepositChart = ({ activeData }: PropsType) => {
  const labels = activeData.map((el) => el.HeroName);
  const income = activeData.map((el) => el.AnnuaIncome);
  const expenditure = activeData.map((el) => el.AnnualExpenditure);
  const data = {
    labels,
    datasets: [
      {
        label: "年收入",
        data: income,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "年支出",
        data: expenditure,
        backgroundColor: "rgba(240, 86, 148, 0.5)",
      },
    ],
  };
  return (
    <div className="w-[50%] h-80">
      <Bar options={options} data={data} />
    </div>
  );
};

export default DepositChart;
