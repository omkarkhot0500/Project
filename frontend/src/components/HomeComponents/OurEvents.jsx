import React from "react";
import { useNavigate } from "react-router-dom";
import { current, previous } from "../../TeamData/EventData";

const OurEvents = () => {
  const navigate = useNavigate();

  const handleSeeMore = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold mt-6 projectsAnim">Our Events</h1>
        <p className="w-[60%] text-gray-500 text-center mt-3 mb-10 projectsAnim">
          Explore our past events and workshops where we've brought together
          developers, innovators, and tech enthusiasts to learn, share, and
          build amazing projects together.
        </p>

        <button
          className="px-10 py-2 bg-gdsc-blue text-white rounded-3xl hover:opacity-90 transition-all projectsAnim mb-3.5"
          onClick={() => navigate("/events")}
        >
          All Events
        </button>

        {/* Desktop View Only */}
        <div className="lg:block hidden w-full overflow-hidden">
          <div className="grid grid-cols-3 mx-10 gap-10 projectsAnim1">
            {previous.slice(0, 3).map((event, index) => (
              <div
                key={event.id || index}
                className="card bg-gray-100 rounded-3xl p-5 flex flex-col h-80"
              >
                <div className="flex-grow">
                  <button className="px-6 py-2 bg-gdsc-blue rounded-3xl text-white" onClick={() => navigate("/events")}>
                    {event.category || event.department || "Event"}
                  </button>
                  <h2 className="font-bold mt-2">
                    {event.year || event.date || "2024"}
                  </h2>
                  <h1 className="font-bold text-3xl mt-2 line-clamp-2">
                    {event.name || event.title}
                  </h1>
                  <p className="text-gray-500 mt-2 line-clamp-3">
                    {event.description ||
                      event.summary ||
                      "Join us for an exciting event filled with learning and networking opportunities."}
                  </p>
                </div>
                <button
                  className="w-full bg-gdsc-blue text-white rounded-3xl py-2 mt-5 hover:opacity-90 transition-all"
                  onClick={() => navigate("/events")}
                >
                  See More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
