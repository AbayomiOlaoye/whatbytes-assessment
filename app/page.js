"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import Image from 'next/image';
import html from '../public/html_icon.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardContent = () => {
  const lineChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Your Percentile',
        data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 80, 90, 75],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 5],
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const syllabusData = [
    { label: 'HTML, Tools, Forms, History', value: 95 },
    { label: 'Tags & References in HTML', value: 90 },
    { label: 'Tables & References in HTML', value: 100 },
    { label: 'HTML, Tools, Forms, History', value: 80 },
  ];

  return (
    <section className='pt-16'>
       <h1 className="text-2xl font-semibold mb-4 dark:text-gray-100">Skill Test</h1>

       <div className="bg-white rounded-md shadow-md p-4 mb-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
         <div className="flex items-center space-x-4 mb-2">
           <Image src={html} alt="HTML Icon" width={10} height={10} className="w-10 h-10" />
           <div>
             <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Questions: 08 | Duration: 15 mins | Submitted on 4 February, 2025
             </p>
           </div>
           <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700">
             Update
           </button>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
         <div className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
           <div className="flex items-center space-x-2">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-yellow-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M12 6.042A8.967 8.967 0 006 3.426m12 0a8.967 8.967 0 01-6 2.616m-6 4.034a3 3 0 100-6 3 3 0 000 6zm6.212 7.617A2.201 2.201 0 0018 18.022m-6.212 1.121A2.201 2.201 0 016 18.022"
               />
             </svg>
             <span className="text-3xl font-bold">1</span>
           </div>
           <p className="text-gray-500 dark:text-gray-400">YOUR RANK</p>
         </div>
         <div className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
           <div className="flex items-center space-x-2">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-gray-500 dark:text-gray-400"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M9 5l7 7-7 7M5 6a1 1 0 011-1h13a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6z"
               />
             </svg>
             <span className="text-3xl font-bold">30%</span>
           </div>
           <p className="text-gray-500 dark:text-gray-400">PERCENTILE</p>
         </div>
         <div className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
           <div className="flex items-center space-x-2">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-green-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M5 13l4 4L19 7"
               />
             </svg>
             <span className="text-3xl font-bold">10/15</span>
           </div>
           <p className="text-gray-500 dark:text-gray-400">CORRECT ANSWERS</p>
         </div>
       </div>

       <div className="bg-white rounded-md shadow-md p-4 mb-4 dark:bg-gray-800 dark:border dark:border-gray-700">
         <div className="flex justify-between items-center mb-2">
           <h2 className="text-lg font-semibold dark:text-white">Comparison Graph</h2>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6 text-gray-400 cursor-pointer"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M4 6h16M4 12h16M4 18h7"
             />
           </svg>
         </div>
         <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">
           You scored 30% percentile which is lower than the average percentile. 72% of all the engineers who
           took this assessment.
         </p>
         <div className="h-48">
           <Line data={lineChartData} />
         </div>
       </div>

       {/* Syllabus Wise Analysis & Question Analysis (Grid) */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {/* Syllabus Wise Analysis */}
         <div className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
           <h2 className="text-lg font-semibold mb-2 dark:text-white">Syllabus Wise Analysis</h2>
           {syllabusData.map((item) => (
             <div key={item.label} className="mb-2">
               <div className="flex justify-between items-center">
                 <span className="text-sm text-gray-700 dark:text-gray-400">{item.label}</span>
                 <span className="text-sm">{item.value}%</span>
               </div>
               <div className="bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                 <div
                   className="bg-blue-500 rounded-full h-2"
                   style={{ width: `${item.value}%` }}
                 ></div>
               </div>
             </div>
           ))}
         </div>

         {/* Question Analysis */}
         <div className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
           <h2 className="text-lg font-semibold mb-2 dark:text-white">Question Analysis</h2>
           <p className="text-sm text-gray-700 dark:text-gray-400">
             You scored 10 questions correctly out of 15. It can be better
           </p>
           <div className="relative h-48 flex justify-center items-center">
             <Doughnut data={doughnutChartData} />
             <span className="absolute text-xl font-bold text-gray-800 dark:text-white">10/15</span>
           </div>
         </div>
       </div>
     </section>
  );
};

export default DashboardContent;
