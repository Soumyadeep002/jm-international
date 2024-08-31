import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export class Overview extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <header className="flex justify-between p-4 bg-white shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800">Overview</h1>
          <div className="flex items-center space-x-4">
            <select className="p-2 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <select className="p-2 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </header>

        <main className="flex flex-col md:flex-row flex-wrap justify-center p-6 gap-6">
          <div className="bg-white shadow-lg p-6 w-full md:w-80 rounded-lg border border-gray-200">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Total Sales</h2>
            <p className="text-2xl font-semibold text-gray-600">$100,000</p>
          </div>
          <div className="bg-white shadow-lg p-6 w-full md:w-80 rounded-lg border border-gray-200">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Total Active Products</h2>
            <p className="text-2xl font-semibold text-gray-600">100</p>
          </div>
          <div className="bg-white shadow-lg p-6 w-full md:w-80 rounded-lg border border-gray-200">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Total Inactive Products</h2>
            <p className="text-2xl font-semibold text-gray-600">50</p>
          </div>
        </main>

        <section className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Last 6 Months Sales Report</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
            <Bar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    label: 'Sales',
                    data: [65, 59, 80, 81, 56, 55],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        return `Sales: $${tooltipItem.raw}`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Overview;
