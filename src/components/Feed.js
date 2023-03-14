import React from "react";
import RewardItem from "./RewardItem";

const Feed = ({ rewards }) => {
  const sortedRewards = rewards.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold ">Feeds</h1>
      {sortedRewards.map((reward) => (
        <RewardItem
          key={reward.id}
          name={reward.name}
          amount={reward.amount}
          message={reward.message}
          date={reward.date}
        />
      ))}
    </div>
  );
};

export default Feed;
