import { useState } from "react";
import { baseUrl } from "../../Url";

export function useCreateComment() {
    const createComment = async (sessionId, comment ) => {
        try {
            const authToken = localStorage.getItem('token');
            const response = await fetch(` ${baseUrll}/api/v1/comments/newComments/${sessionId}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment,
                }),
            });
            const responseData = await response.json();
            if (response.ok) {
                console.log(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { createComment };
}

export function useGetAllCommentBySessionId() {
    const [commentData, setCommentData] = useState([])
    const getAllCommentBySessionId = async (sessionId) => {
        try {
            const authToken = localStorage.getItem('token');
            const response = await fetch(` ${baseUrl}/api/v1/comments/getCommentById/${sessionId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            const responseData = await response.json();
            if (response.ok) {
                setCommentData(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { getAllCommentBySessionId, commentData };
}