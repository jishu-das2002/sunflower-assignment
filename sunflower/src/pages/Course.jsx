import React from "react";
import { useLoaderData } from "react-router";

const Course = () => {
  const skills = useLoaderData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">OUR COURSES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{skill.skillName}</h2>
            <p className="text-sm text-gray-600">By {skill.providerName}</p>
            <p className="text-sm mt-1">{skill.description}</p>
            <p className="text-sm mt-2">💰 Price: ${skill.price}</p>
            <p className="text-sm">⭐ Rating: {skill.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
