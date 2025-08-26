import React from "react";

const UserCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div
      className="w-80 sm:w-96 p-6 rounded-2xl shadow-xl
                 bg-white/10 backdrop-blur-lg border border-white/20
                 flex flex-col items-center text-center text-white"
    >
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="w-28 h-28 rounded-full border-4 border-white/30 shadow-md"
      />

      <h2 className="mt-4 text-2xl font-bold">
        {profile.name || profile.login}
      </h2>
      <p className="text-sm text-white/80 italic">
        {profile.bio || "No bio available"}
      </p>

      <div className="flex justify-between gap-6 mt-6 w-full">
        <div>
          <p className="text-lg font-semibold">{profile.public_repos}</p>
          <span className="text-xs text-white/70">Repos</span>
        </div>
        <div>
          <p className="text-lg font-semibold">{profile.followers}</p>
          <span className="text-xs text-white/70">Followers</span>
        </div>
        <div>
          <p className="text-lg font-semibold">{profile.following}</p>
          <span className="text-xs text-white/70">Following</span>
        </div>
      </div>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 px-5 py-2 rounded-xl font-medium 
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600
                   hover:opacity-90 transition"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
