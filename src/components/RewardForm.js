import React, { useState } from "react";
import Modal from "./Modal";

const RewardForm = ({ onRewardAdded }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reward = {
      id: new Date().getTime(),
      name,
      amount: parseFloat(amount),
      message,
      date: new Date().toISOString(),
    };

    onRewardAdded(reward);

    setName("");
    setAmount(0);
    setMessage("");
    setShowModal(false);
  };

  return (
    <>
      <button
        className="px-4 my-3 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={() => setShowModal(true)}
      >
        Add Reward
      </button>

      {showModal && (
        <Modal>
          <div className="bg-white p-6 w-full sm:w-96 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Reward A Person</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Person to Reward
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-400 border-2 px-3 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Amount in ₹
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  step="0.01"
                  min="0"
                  required
                  className="border-gray-400 border-2 px-3 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter a message for the person"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  required
                  className="border-gray-400 border-2 px-3 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Reward
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default RewardForm;
