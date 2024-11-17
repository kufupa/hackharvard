import React, { useState } from 'react';

export default function Modal({ onClose }) {
  const handleSubmit = async ({ name, phoneNumber, goal }) => {
    const userData = {
      name: name,
      phone_number: phoneNumber,
      goal: goal,
    };
  
    try {
      const response = await fetch('https://discrete-deer-obliging.ngrok-free.app/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User added successfully:', data);
      } else {
        console.log('Failed to add user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    onClose();
  };

  const handleClick = (event) => {
    event.preventDefault();
    // Pass the name, phone, and goal from inputs
    handleSubmit({ name, phoneNumber, goal });
  };

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50`}
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-white rounded-lg p-8 w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-2xl font-bold mb-4">Patient Info</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Phone No:</label>
          <input
            type="tel"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Patient Name:</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter patient name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Goal:</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
