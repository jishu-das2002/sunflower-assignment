import React from "react";

const providers = [
  { id: 1, name: "Alex Martin", skill: "Guitar", rating: 4.9 },
  { id: 2, name: "Sara Hossain", skill: "English", rating: 4.8 },
  { id: 3, name: "Liam Cooper", skill: "Photoshop", rating: 4.7 },
];

const TopRatedProviders = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Top Rated Providers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">{p.name}</h3>
            <p>{p.skill}</p>
            <p>⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
