import React, { useEffect, useState } from "react";
import "./menteecard.css";
import { useGetAllUser } from "../../hooks/menteesHooks";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../Url";

const MentorCard = ({ data }) => {
  const { getAllUser, allUser } = useGetAllUser();
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllUser();
  }, []);

  const mentor = allUser.filter((user) => user.typeOfUser === "mentor");

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);
  };

  const filteredData = mentor.filter(
    (item) =>
      item.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.qualification?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.skillLevel?.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div className="max-w-md mx-auto fixed mt-82 search-bar">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={filterText}
            onChange={handleFilterChange}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {mentor.length === 0 ? (
        <div>
          <h1>No mentors found</h1>
        </div>
      ) : (
        <div className="menteecard-main-div">
          {filteredData.length > 0 ? (
            filteredData.map((user, index) => (
              <div key={index} className="meenteecard-container">
                <div className="image">
                  <img src={` ${baseUrl}/${user.image}`} alt="" />
                </div>
                <div className="mentee-name">{user.name}</div>
                <div className="m-qualification">
                  Qualification : <span>{user.qualification}</span>
                </div>
                <div className="m-interest">
                  <div className="m-interest-1">Interest :</div>
                  <div className="m-interest-2">{user.areaOfInterest}</div>
                </div>
                <hr />
                <div className="m-bio">
                  <div className="m-goal-1">Goal : </div>
                  <div className="m-goal-2">{user.goal}</div>
                </div>
                <div className="message-button">
                  <button
                    onClick={() => {
                      navigate(`/messages/${user._id}`);
                    }}
                  >
                    Message
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No mentors match your search criteria.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MentorCard;