import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import MyRewards from "./components/MyRewards";
import RewardForm from "./components/RewardForm";
import { useState } from "react";

function App() {
  const [rewards, setRewards] = useState([
    {
      id: 1,
      name: "Shivananda Sai",
      amount: 1000,
      message: "Thank you for your hard work!",
      date: "2022-05-01T12:00:00.000Z",
    },
    {
      id: 2,
      name: "Jane Smith",
      amount: 1500,
      message: "Great job on meeting the deadline!",
      date: "2022-06-15T09:30:00.000Z",
    },
    {
      id: 3,
      name: "Bob Johnson",
      amount: 500,
      message: "Thanks for going above and beyond!",
      date: "2022-07-02T16:45:00.000Z",
    },
    {
      id: 4,
      name: "Sarah Lee",
      amount: 2000,
      message: "You're an invaluable member of the team!",
      date: "2022-08-10T11:20:00.000Z",
    },
    {
      id: 5,
      name: "Alex Kim",
      amount: 750,
      message: "Keep up the great work!",
      date: "2022-09-21T14:10:00.000Z",
    },
    {
      id: 6,
      name: "Shivananda Sai",
      amount: 2000,
      message: "Thank you for Everything!",
      date: "1997-10-05T12:00:00.000Z",
    },
    // ...
  ]);

  const addReward = (reward) => {
    setRewards((prevRewards) => [...prevRewards, reward]);
  };
  const currentUser = "Shivananda Sai"; //set current user here
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold"></h1>
              <RewardForm onRewardAdded={addReward} />
            </div>

            <Routes>
              <Route path="/" element={<Feed rewards={rewards} />} />
              <Route
                path="/my-rewards"
                element={
                  <MyRewards rewards={rewards} currentUser={currentUser} />
                }
              />
            </Routes>
          </div>
        </main>
        <footer className="bg-gray-900 text-white fixed bottom-0 left-0 w-full  ">
          <div className="flex flex-col items-center justify-center h-5">
            <p className="text-xs">&copy; 2023 Made by Shivananda Sai</p>
          </div>
        </footer>
      </div>

      <div id="modal-root"></div>
    </Router>
  );
}

export default App;
