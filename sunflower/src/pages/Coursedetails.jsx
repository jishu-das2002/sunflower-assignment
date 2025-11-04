import React from "react";
import { useLoaderData, Link } from "react-router"; // react-router-dom

const CourseDetails = () => {
  const { course, id } = useLoaderData(); // loader থেকে destructure

  // Ensure course is an array before using .find()
  if (!Array.isArray(course)) {
    return <h2 className="text-center mt-6">Invalid course data!</h2>;
  }

  const selected = course.find((item) => item.skillId == id);

  if (!selected) {
    return <h2 className="text-center mt-6">Course not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={selected.image}
        alt={selected.skillName}
        className="w-full h-64 object-cover rounded-xl shadow-md"
      />

      <h1 className="text-3xl font-bold mt-4">{selected.skillName}</h1>
      <p className="text-gray-600 text-lg mb-3">Provider: {selected.providerName}</p>

      <p className="text-gray-700 leading-7">{selected.description}</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <p className="text-lg font-medium">💰 Price: ${selected.price}</p>
        <p className="text-lg font-medium">⭐ Rating: {selected.rating}</p>
      </div>

      <Link
        to="/course"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back
      </Link>
    </div>
  );
};

export default CourseDetails;
