import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import axios from "axios";
import UserCard from "./components/UserCard";

const App = () => {
  const [username, setUsername] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleSearch = async () => {
    console.log("Searching for:", username);
    try {
      if (!username) return;
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
      console.log(profile);
    } catch (error) {
      console.log(error.message);
      alert("User not found");
      setProfile(null);
    }
  };

  return (
    <section
      className={`min-h-screen w-full flex flex-col items-center px-5 transition-colors duration-300
        ${
          isDark
            ? "bg-zinc-900"
            : "bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600"
        }`}
    >
      <div className=" fixed top-3 right-3 sm:top-5 sm:right-5 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-3 py-2 rounded-lg bg-white/20 text-white text-sm hover:bg-white/30"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h1
        className={`text-7xl mt-10 font-semibold drop-shadow-lg
          ${
            isDark
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text text-transparent"
              : "text-white"
          }`}
      >
        CodeLens
      </h1>

      <p
        className={`text-lg font-normal italic mt-2
        ${isDark ? "text-gray-400" : "text-white/90"}`}
      >
        like putting a lens on a dev’s GitHub.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <InputField
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button label="Search" onClick={handleSearch} />
      </div>
      {profile && (
        <div className="my-12">
          <UserCard profile={profile} />
        </div>
      )}
    </section>
  );
};

export default App;
