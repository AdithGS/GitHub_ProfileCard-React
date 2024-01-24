import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import './App.css';
function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const onButtonClick = async () => {
    try {
      // setUsername(username?username:"AdithGs")
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error.message);
    }
    setUsername("");
  };
  return (
    <div>
      <div className="header">
        <h2>GitHub Profile Card Generator</h2>
      </div>
      <div className="flex flex-row justify-center items-center mt-8 ">
        <input className="w-80 h-10 rounded-full border-2 border-slate-400 pl-2   "
          type="text"
          value={username}
          placeholder="Enter Your User Name"
          onChange={(e) => setUsername(e.target.value)}
        />
      <button
      onClick={onButtonClick}
      className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
    >
      Get User Info
    </button>
        
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
      {userData && (
          <ProfileCard
            name={userData.login}
            // age={userData.followers_url.length}
            country={userData.location}
            avatarIcon={userData.avatar_url}
            followerCount={userData.followers}
            followingCount={userData.following}
            location={userData.location}
            publicRepos={userData.public_repos}
          />
        )}
      </div>
      
    </div>
  );
}

export default App;
