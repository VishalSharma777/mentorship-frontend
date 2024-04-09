import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';
import Profile from "./component/MenteeProfile/Profile";
import MenteesCard from "./component/MenteeCard/MenteesCard";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import DetailsPage from "./component/detailsPage/DetailsPage";
import MessagingContainer from "./component/Messages/MessageContainer";
import Inbox from "./component/Messages/Inbox";

import Dashboard from "./component/Dashboard/Dashboard";
import Navbar from "./component/navbar/Navbar";
import Upsession from "./component/Upsession/Upsession";



import MentorCard from "./component/MenteeCard/MentorCard";
import CreateSession from "./component/Upsession/CreateSession";
import SessionView from "./component/SessionView/SessionView";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>

          <Route path="/message" element={<Inbox />} />

          <Route path="/messages/:userId" element={<MessagingContainer />} />



          <Route path='/login' element={<Login1 /> } />
            <Route path='/signup' element={<Signup /> } />
            <Route path='/profile' element={<Profile /> } />
            <Route path='/card' element={<MenteesCard /> } />
            <Route path='/cards' element={<MentorCard /> } />

            <Route path='/detail' element={<DetailsPage /> } />
            <Route path='/dashboard/:mentorId' element={<Dashboard /> } />
            <Route path='/nav' element={<Navbar /> } />

            <Route path='/session' element={<Upsession/> } />
            <Route path='/createsession' element={<CreateSession/> } />
            <Route path='/sessionbyid/:sessionId' element={<SessionView/> } />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
