import { useState } from "react";
import { baseUrl } from "../../Url";

export function useCreateSession() {
  const createSession = async (sessionData) => {
    console.log(sessionData)
    try {
      const authToken = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', sessionData.title);
      formData.append('description', sessionData.description);
      formData.append('domain', sessionData.domain);
      formData.append('topic', sessionData.topic);
      formData.append('image', sessionData.image);
      formData.append('timeField', true);
      formData.append('date', sessionData.date);
      formData.append('time', sessionData.time);

      const response = await fetch(` ${baseUrl}/api/v1/session/createSession`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('session created successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { createSession };
}

export function useGetAllSession() {
    const [sessionData ,setSessionData ]= useState([]);

    const getAllSession = async () => {
        try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrll}/api/v1/session/getAllSession`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${authToken}`,
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log(responseData);
            setSessionData(responseData);
        }
        } catch (error) {
        console.log(error);
        }
    };
    return { getAllSession , sessionData };
}

export function useGetSessionBySessionId() {
    const [sessionData ,setSessionData ]= useState();
    console.log(sessionData , "sessionData")

    const getSessionBySessionId = async (sessionId) => {
        try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrl}/api/v1/session/getSessionById/${sessionId}`, {
           method: 'GET',
            headers: {
            Authorization: `Bearer ${authToken}`,
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log("responseData" , responseData);
            setSessionData(responseData);
        }
        } catch (error) {
        console.log(error);
        }
    };
    return { getSessionBySessionId , sessionData };
 }

 export function useGetSessionByMentorId() {
    const [sessionData ,setSessionData ]= useState([]);

    const getSessionByMentorId = async (mentorId) => {
        try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrl}/api/v1/session/getSessionByMentorId/${mentorId}`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${authToken}`,
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log(responseData);
            setSessionData(responseData);
        }
        } catch (error) {
        console.log(error);
        }
    };
    return { getSessionByMentorId , sessionData };
 }

 export function useUpdateSession() {
    const updateSession = async (sessionId, sessionData) => {
        try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrl}/api/v1/session/updateSession/${sessionId}`, {
            method: 'PUT',
            headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log('session updated successfully');
        }
        } catch (error) {
        console.log(error);
        }
    };
    return { updateSession };
  }