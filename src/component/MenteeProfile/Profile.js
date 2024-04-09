import React, { useEffect } from 'react'
import './profile.css'
import { useLoggedInUser } from '../../hooks/menteesHooks'
import { baseUrl } from '../../../Url'

const Profile = () => {
  const {loggedInUser , loggedUser} = useLoggedInUser()
  useEffect(()=>{
    loggedInUser()
  },[])
  return (
    <div className='main-container'>
            <div className="ScriptTop">
        <div className="rt-container">
            
        </div>
    </div>

    

    <section>
        <div className="rt-container">
            <div className="col-rt-12">
                <div className="Scriptcontent">

                    <div className="student-profile py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card shadow-sm">
                                        <div className="card-header bg-transparent text-center">
                                            <img className="profile_img"
                                                src={` ${baseUrl}/${loggedUser.image}`}
                                                alt="student dp" />
                                            <h3>{loggedUser.name}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 info"><strong className="pr-1">qualification : </strong>{loggedUser.qualification}</p>
                                            <p className="mb-0 info"><strong className="pr-1">Area of Interest :</strong>{loggedUser.areaOfInterest ? loggedUser.areaOfInterest.map(item => item.trim()).join(' | ') : ''}</p>
                                            {loggedUser.typeOfUser==='mentor'?(<p className="mb-0 info"><strong className="pr-1">Experience : </strong>{loggedUser.experience}</p>
                                                ):(<p className="mb-0 info"><strong className="pr-1">Skill Level : </strong>{loggedUser.skillLevel}</p>
                                                )}
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <tr>
                                                    <th width="30%">phone</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.phoneNumber}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">email</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.email}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Address</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.address}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Gender</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.gender}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Known Language</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.language}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Availability</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.availability}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">goal</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.goal}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Bio</th>
                                                    <td width="2%">:</td>
                                                    <td>{loggedUser.bio}</td>
                                                </tr>
                                                
                                            </table>
                                        </div>
                                    </div>
                                    <div style={{height: "26px"}}></div>
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h3 className=""><i className="far fa-clone "></i>Other Information</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>{loggedUser.additionalInfo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Profile