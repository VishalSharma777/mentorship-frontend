import React, { useEffect } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useGetSessionByMentorId } from "../../hooks/session";

function Dashboard() { 
  const params = useParams()

  const {mentorId} = params;
  console.log(mentorId)
  const { sessionData , getSessionByMentorId } = useGetSessionByMentorId();
  useEffect(() =>{
    getSessionByMentorId(mentorId)
},[])
  console.log(sessionData)
  
  return (
    <>
      <div className="dash-main-container">
      <div className="dashboard-container">
        
     
        <div className="dashboard-sub-container">
          <div className="dashbord-deatil">
            <div className="img"></div>
            <div className="name-detail">
              <h1>Vishal Sharma</h1>
              <h3>Education</h3>

              <div className="mobile-number">
                <FontAwesomeIcon icon={faMobileAlt} />
                <span className="number">+8928922992</span>
              </div>

              <div className="email-address">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="email">example@example.com</span>
              </div>
            </div>
            <div className="other-detail">
              
            </div>
          </div>
        
        {/* below detail */}
        <div className="dashboard-card">
          
          <div className="count-of-mentee">
            <h2>count of mentee</h2>
            <p>3</p>
          </div>
          <div className="experience-level">
          <h2>experience level</h2>
            <p>intermediate</p>
          </div>
          <div className="count-of-mentee">
          <h2>count of mentee</h2>
            <p>3</p>
          </div>
          <div className="rating">
          <h2>rating</h2>
            <p>3</p>
          </div>
        </div>
        </div>
      </div>
      <div>
      {
        sessionData.map((session) => (
          <div className="blog-post bg-white  shadow-md rounded-lg flex items-center space-x-10 my-10 p-10 relative ">
            <Link to="/sessionbyid">
            <div className="w-96 h-72 relative">
                <img src={`https://mentorship-2.onrender.com/}/${session.image}`} alt="Blog Post Image" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute w-full h-full top-0 left-0 shadow-md bg-opacity-50 rounded-lg"></div>
            </div>
            </Link>
            <div className="flex-1  ">
                <div className="mb-5">
                    <span className="block text-gray-700 text-2xl font-semibold mb-1">Title: {session.title}</span>
                    <span className="block text-xl text-gray-700  font-semibold">Topic:</span>
                </div>
                <h1 className="text-xl font-bold text-blue-500 mb-3 uppercase">Domain:{session.domain}</h1>
                <p className="text-xl text-gray-600 mb-5">Description: {session.description}</p>
            </div>
            
            <div className="absolute bottom-4 right-4  ">
            <button  className='bg-blue-500 text-white px-11 py-2 rounded-lg mr-1'>delete</button>

            <button className="bg-gray-700 text-white px-5 py-2 rounded-lg mr-1">join</button>

                <button className="bg-gray-700 text-white px-5 py-2 rounded-lg mr-1">Comment</button>
            </div>
        </div>
        ))
      }
        


        </div>
      </div>
     
    </>
  );
}

export default Dashboard;