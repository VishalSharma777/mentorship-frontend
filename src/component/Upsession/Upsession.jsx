import React, { useEffect } from "react";
import "./upsession.css"
import { useGetAllSession } from "../../hooks/session";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../Url";
const Upsession = () => {
  const {sessionData , getAllSession} = useGetAllSession()
  useEffect(() => {
    getAllSession()
  },[])
  
  return (
    <div className="session-container">
      <div className="session-sub-container">
        <h1>Upcoming Session</h1>
        {
          sessionData.length > 0 ? (sessionData.map((session , index)=>(
            <div className="session-card" key={index}>
              <Link to={`/sessionbyid/${session._id}`}>
          <div className="session-img">
          <img className="card-img-top" src={` ${baseUrl}/${session.image}`} alt="Card image cap" />
          </div>
          </Link>
          <div className="session-detail">
            <div className="card-top">
                <h2> Title :{session.title}</h2>
                <div className="time">
                        4pm - 6pm
                </div>
                
            </div>
            <div className="card-detail">
            <h3><span>Domain:</span> {session.domain}</h3>
              <h4><span>Topic:</span> {session.topic}</h4>
              <h5><span>Author:</span> author</h5>
              <p><span>Description:</span>{session.description}</p>



            </div>
            <div className="card-btn">
                <h3>{session.date}</h3>
            <button className="session-btn">Joined</button>
            </div>
          </div>
        </div>
          ))) : ("no session found")
        }
      </div>
    </div>
  );
};

export default Upsession;
