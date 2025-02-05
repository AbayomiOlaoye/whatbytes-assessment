"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  rank: Yup.number().required('Rank is required').positive('Rank must be a positive number'),
  percentile: Yup.number()
    .required('Percentile is required')
    .min(0, 'Percentile must be at least 0')
    .max(100, 'Percentile must be at most 100'),
  currentScore: Yup.number()
    .required('Current Score is required')
    .min(0, 'Current Score must be at least 0')
    .max(15, 'Current Score must be at most 15'),
});


const UpdateScore = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label htmlFor="rank" className="flex items-center gap-2 text-gray-700 text-sm font-bold mb-2">
              <span className="bg-blue-700 p-2 px-4 rounded-full text-white">1</span> Update your Rank
            </label>
            <article className="flex flex-col gap-1 relative">
              <Field
                type="number"
                id="rank"
                name="rank"
                placeholder="Enter Rank"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="rank"
                component="div"
                className="text-red-500 top-10 absolute text-xs italic"
              />
            </article>
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="percentile" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="bg-blue-700 p-2 px-4 rounded-full text-white">2</span> Update your Percentile
            </label>
            <article className="flex flex-col gap-1 relative">
              <Field
                type="number"
                id="percentile"
                name="percentile"
                placeholder="Enter Percentile"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="percentile"
                component="div"
                className="text-red-500 top-10 absolute text-xs italic"
              />
            </article>
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="currentScore" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="bg-blue-700 p-2 px-4 rounded-full text-white">3</span> Update your Current Score (out of 15)
            </label>
            <article className="flex flex-col gap-1 relative">
              <Field
                type="number"
                id="currentScore"
                name="currentScore"
                placeholder="Enter Current Score"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="currentScore"
                component="div"
                className="text-red-500 top-10 absolute text-xs italic"
              />
            </article>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateScore;