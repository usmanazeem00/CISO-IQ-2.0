import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // State to manage chart data
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56, 55, 40], // Sample data points
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  });

  // Configuration options for the chart
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // Function to update chart data
  const updateChartData = () => {
    // Example of updating chart data
    const newData = {
      labels: ['August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'New Data',
          data: [45, 50, 55, 60, 65],
          fill: false,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
        },
      ],
    };
    setChartData(newData);
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <button onClick={updateChartData}>Update Chart Data</button>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
