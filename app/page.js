"use client";

import React, { useState, useCallback } from 'react';
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
import { FaTrophy } from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdOutlineAutoGraph } from 'react-icons/md';
import Image from 'next/image';
import html from '../public/html_icon.svg';
import UpdateScore from '@/components/Form/UpdatePerformance';

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
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);

  const [lineChartData, setLineChartData] = useState({
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
  });

  const averagePercentile = lineChartData.datasets[0].data.reduce((a, b) => a + b, 0) / lineChartData.datasets[0].data.length;

  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: '# of 15 Questions',
        data: [10, 5],
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  });

  const syllabusData = [
    { label: 'HTML, Tools, Forms, History', value: 95, bg: 'bg-blue-500', overlay: 'bg-blue-100' },
    { label: 'Tags & References in HTML', value: 90, bg: 'bg-green-500', overlay: 'bg-green-100' },
    { label: 'Tables & References in HTML', value: 100, bg: 'bg-yellow-500', overlay: 'bg-yellow-100' },
    { label: 'HTML, Tools, Forms, History', value: 80, bg: 'bg-red-500', overlay: 'bg-red-100' },
  ];

  const openUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
  };

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      setRank(values.rank);
      setPercentile(values.percentile);
      setCurrentScore(values.currentScore);

      setLineChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [65, 59, 80, 81, 56, 55, 40, 70, 80, 90, 75, values.percentile],
          },
        ],
      }));

      const correctAnswers = values.currentScore;
      const incorrectAnswers = 15 - correctAnswers;

      setDoughnutChartData({
        labels: ['Correct', 'Incorrect'],
        datasets: [
          {
            label: '# of Votes',
            data: [correctAnswers, incorrectAnswers],
            backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      });

      setSubmitting(false);
      closeUpdateForm();
    }, 400);
  }, []);

  return (
    <section className='pt-16'>
       <h1 className="text-2xl font-semibold mb-4 dark:text-gray-100">Skill Test</h1>

       <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
            <article className="bg-white justify-between flex rounded-md shadow-md p-4 mb-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
              <article className="flex items-center space-x-4 mb-2">
                <Image src={html} alt="HTML Icon" width={10} height={10} className="w-10 h-10" />
                <article className='flex flex-col gap-2'>
                  <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Questions: 08 | Duration: 15 mins | Submitted on 4 February, 2025
                  </p>
                </article>
              </article>
              <button type="button" onClick={openUpdateForm} className="ml-auto bg-blue-500 hover:bg-blue-700 max-h-fit text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700">
                Update
              </button>
            </article>

            <article className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <article className="bg-white flex md:flex-col items-center md:items-start justify-between md:justify-normal gap-2 rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
                <article className="flex items-center space-x-2">
                    <span className="rounded-full border p-1 font-bold">
                      <FaTrophy className="text-xl p-1 md:text-2xl text-yellow-500" />
                    </span>
                    <span className="md:text-[2vw] font-bold">{rank}</span>
                </article>
                <p className="text-gray-500 dark:text-gray-400">YOUR RANK</p>
              </article>
              <article className="bg-white flex md:flex-col items-center md:items-start justify-between md:justify-normal gap-2 rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
                <article className="flex items-center space-x-2">
                    <span className="rounded-full border p-1 font-bold">
                      <TbReportAnalytics className="text-xl p-1 md:text-2xl text-blue-500" />
                    </span>
                    <span className="md:text-[2vw] font-bold">{percentile}</span>
                </article>
                <p className="text-gray-500 dark:text-gray-400">PERCENTILE</p>
              </article>
              <article className="bg-white flex md:flex-col items-center md:items-start justify-between md:justify-normal gap-2 rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
                <article className="flex items-center space-x-2">
                  <span className="rounded-full border p-1 font-bold">&#9989;</span>
                  <span className="md:text-[2vw] font-bold">{`${currentScore}/15`}</span>
                </article>
                <p className="text-gray-500 dark:text-gray-400">CORRECT ANSWERS</p>
              </article>
            </article>

            <article className="bg-white rounded-md shadow-md p-4 mb-4 dark:bg-gray-800 dark:border dark:border-gray-700">
              <article className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold dark:text-white">Comparison Graph</h2>
                  <span className="rounded-full border p-1 font-bold">
                    <MdOutlineAutoGraph className="text-xl md:text-2xl text-gray-600 dark:text-gray-400" />
                  </span>
              </article>
              <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">
                {`You scored ${percentile} percentile which is lower than the average percentile. ${averagePercentile} of all the engineers who
                took this assessment.`}
              </p>
              <article className="h-48">
                <Line data={lineChartData} />
              </article>
            </article>
          </article>

          <article className="grid grid-cols-1 gap-4">
            <article className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-2 dark:text-white">Syllabus Wise Analysis</h2>
              {syllabusData.map((item) => (
                  <article key={item.label} className="mb-2">
                    <article className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 dark:text-gray-400">{item.label}</span>
                      <span className="text-sm">{item.value}%</span>
                    </article>
                    <article className={`h-2 bg-gray-200 ${item.overlay} rounded-full dark:bg-gray-700`}>
                      <article
                        className={`h-2 rounded-full ${item.bg} dark:bg-gray-500`}	
                        style={{ width: `${item.value}%` }}
                      ></article>
                    </article>
                  </article>
              ))}
            </article>

            <article className="bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
              <article className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold dark:text-white">Question Analysis</h2>
                <p className="text-xl font-bold text-gray-800 dark:text-white">{`${currentScore}/15`}</p>
              </article>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {`You scored ${currentScore} questions correctly out of 15. It can be better`}
              </p>
              <article className="relative h-48 flex justify-center items-center">
                <Doughnut data={doughnutChartData} />
              </article>
            </article>
          </article>
          {showUpdateForm && (
            <section className="fixed z-10 inset-0 overflow-y-auto">
              <article className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>

                <article className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <article className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Update Scores</h3>
                    <article className="mt-2">
                      <UpdateScore
                        initialValues={{ rank, percentile, currentScore }}
                        onSubmit={handleSubmit}
                        onCancel={closeUpdateForm}
                      />
                    </article>
                  </article>
                </article>
              </article>
            </section>
          )}
        </section>
     </section>
  );
};

export default DashboardContent;
