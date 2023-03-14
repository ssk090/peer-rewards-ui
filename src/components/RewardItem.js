import React from "react";

const RewardItem = ({ name, amount, message, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const avatarUrl = `https://source.unsplash.com/48x48/?${name}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">₹{amount.toFixed(2)}</p>
        </div>
        <p className="text-gray-800 w-full italic">{message}</p>
      </div>
    </div>
  );
};

export default RewardItem;
