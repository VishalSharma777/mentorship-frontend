import React, { useEffect, useState } from 'react';
import { useGetSessionBySessionId , useUpdateSession} from '../../hooks/session';
import { useParams } from 'react-router-dom';

import { useCreateComment, useGetAllCommentBySessionId } from '../../hooks/comment';

const SessionView = () => {
    const { sessionId } = useParams();
    const {updateSession} = useUpdateSession();
    const { createComment } = useCreateComment();
    const { commentData , getAllCommentBySessionId} = useGetAllCommentBySessionId();
    const { sessionData, getSessionBySessionId } = useGetSessionBySessionId();
    const [commentFormData, setCommentFormData] = useState({
        commentData: ''
    });
    const [fetchComment, setFetchComment] = useState(false);

    useEffect(() => {
        getSessionBySessionId(sessionId);
        getAllCommentBySessionId(sessionId)
    }, [ ]);

    console.log(commentData, "commentData")

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCommentFormData({
            ...commentFormData,
            [name]: value
        });
    };

        
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        createComment(sessionId, commentFormData.commentData , setFetchComment(!fetchComment));
    };

    return (
        <div>
            <div className="blog-post bg-white shadow-md rounded-lg flex items-center space-x-10 my-10 p-10 relative ">
                <div className="w-96 h-72 relative">
                    <img src="" alt="Blog Post Image" className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute w-full h-full top-0 left-0 shadow-md bg-opacity-50 rounded-lg"></div>
                </div>
                <div className="flex-1">
                    <div className="mb-5">
                        <span className="block text-gray-700 text-sm font-semibold mb-1"></span>
                        <span className="block text-gray-700 text-sm font-semibold">gdfdfg</span>
                    </div>
                    <h1 className="text-2xl font-bold text-blue-500 mb-3 uppercase">dvs</h1>
                    <p className="text-sm text-gray-600 mb-5">lorem100</p>
                </div>
                <div className="absolute bottom-4 right-4">
                    <button className='bg-blue-500 text-white px-11 py-2 rounded-lg mr-1'>delete</button>
                    <button className="bg-blue-500 text-white px-11 py-2 rounded-lg mr-1">update</button>
                    <button onClick={()=>{updateSession(sessionId)}} className="bg-blue-500 text-white px-5 py-2 rounded-lg mr-1">Joinees {sessionData?.noOfMentees?.length}</button>
                    <button className="bg-gray-700 text-white px-5 py-2 rounded-lg mr-1">Comment</button>
                </div>
            </div>
            {/* Comment Form code is here */}
            <div className="p-5 m-5 border-2 rounded-lg shadow-md bg-white">
                <h1 className="text-2xl font-bold text-blue-500 mb-4">ADD A COMMENT</h1>
                <form className="mb-4" onSubmit={handleOnSubmit}>
                    <textarea
                        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Write your comment"
                        rows="4"
                        onChange={handleOnChange}
                        name="commentData"
                    ></textarea>
                    <button type="submit" className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                        Submit
                    </button>
                </form>
            </div>
            {/* Comment form code is here  */}

            {/* comment list code is here */}

            {
    commentData.comment?.length > 0 ? (
        commentData.comment.map((comment, index) => (
            <div key={index} className="w-full bg-white flex border-2 m-3">
                <div className="comment-text  m-2">
                    <p><strong>{comment.author.name} : </strong> {comment.comment}</p>
                </div>
            </div>
        ))
    ) : ("No comments found")
}

            


        </div>
    );
};

export default SessionView;
