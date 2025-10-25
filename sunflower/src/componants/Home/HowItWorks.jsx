import React from "react";

const steps = [
  { id: 1, title: "Choose a Skill", description: "Browse and select your favorite skill." },
  { id: 2, title: "Book a Slot", description: "Select a time and book your class." },
  { id: 3, title: "Learn & Enjoy", description: "Attend the session and improve your skill." },
];

const HowItWorks = () => (
  <div className="my-8 px-4 bg-gray-50 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">How It Works</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div key={step.id} className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
