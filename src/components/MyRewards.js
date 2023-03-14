import React from "react";
import RewardItem from "./RewardItem";

const MyRewards = ({ rewards, currentUser }) => {
  // Filter rewards by current user
  const filteredRewards = rewards.filter(
    (reward) => reward.name === currentUser
  );

  return (
    <>
      <h1 className="text-2xl font-semibold">My Rewards</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {filteredRewards.map((reward) => (
          <RewardItem
            key={reward.id}
            name={reward.name}
            amount={reward.amount}
            message={reward.message}
            date={reward.date}
          />
        ))}
      </div>
    </>
  );
};

export default MyRewards;
