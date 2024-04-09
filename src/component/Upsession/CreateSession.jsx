import React, { useState } from 'react';
import './createsession.css';
import { useCreateSession } from '../../hooks/session';

const CreateSession = () => {
    const {createSession} = useCreateSession();
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        domain: '',
        topic: '',
        image: null,
        timeField: '',
        date: '',
        time: ''
    });
    const handleInputChange = (event) => {
        if (event.target.name === 'image') {
            setFormState(prevState => ({
                ...prevState,
                [event.target.name]: event.target.files[0]
            }));
        } else {
            setFormState(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createSession(formState);
    }

    return (
       <div className='create-session-form'>
            <h1>Create Session</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Domain</label>
                    <input type="text" name="domain" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Topic</label>
                    <input type="text" name="topic" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" name="image" onChange={handleInputChange} />
                </div>
               
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input type="time" name="time" onChange={handleInputChange} />
                </div>
                <button type="submit">Create Session</button>
            </form>
       </div>
    );
}

export default CreateSession;
