import React, { useEffect, useState } from "react";
import FeedCard from "@/components/FeedCard";
import Navbar from "@/components/Navbar";
import axios from "axios";

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllAnnouncements",
      );
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <main className="h-screen">
      <Navbar />
      <div>
        {announcements.length === 0 ? (
          <div className="absolute top-[27.5rem] bottom-0 left-0 right-0 ml-auto mr-auto w-[300px]">
            <p className="text-xl text-gray-500 italic py-10">
              No further announcements
            </p>
          </div>
        ) : (
          announcements.map((announcement) => (
            <FeedCard key={announcement._id} announcement={announcement} />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
