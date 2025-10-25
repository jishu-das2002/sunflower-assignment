import React from "react";
import { useLoaderData } from "react-router";

const Course = () => {
  const skills = useLoaderData();
  const topSix = skills.slice(0, 6);

  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topSix.map((skill) => (
          <div
            key={skill.skillId}
            className="card bg-base-100 shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="font-semibold mt-2 text-lg">{skill.skillName}</h3>
            <p className="text-sm text-gray-600">⭐ {skill.rating}</p>
            <p className="text-sm text-gray-700">💰 ${skill.price}</p>
            <button className="btn btn-primary mt-2 w-full">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
