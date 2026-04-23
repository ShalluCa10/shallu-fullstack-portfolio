import { useEffect, useState } from "react";
import API from "../api";

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          {profile.name}
        </h1>

        <h2 className="text-2xl text-blue-600 font-semibold mb-6">
          {profile.role}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {profile.bio}
        </p>
      </div>
    </section>
  );
}

export default Home;