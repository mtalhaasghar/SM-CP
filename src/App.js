import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Matches from './components/Matches/Match';
import About from './components/About/index';
import Contact from './components/Contact/ContactUs';
import RegisterAs from './components/RegisterModal/RegisterModal'
import RegisterAsTeacher from './components/RegistrationAsTeacher/RegisterAsTeacherMain'
import RegisterAsStudent from './components/RegistrationAsStudent/RegisterAsStudentMain'
import LoginAs from './components/LoginAsModal/LoginModal'
import AdminLogin from './components/AdminLogin/AdminLogin'
import TeacherLogin from './components/TeacherLogin/TeacherLogin'
import StudentLogin from './components/StudentLogin/StudentLogin'
import AdminDashboard from './components/AdminDashboard/main'
import AddRemoveEvent from './components/AddRemoveEvent/Remove'
import AddEvent from './components/AddRemoveEvent/AddEvent'
import TeacherDashboard from './components/TeacherDashboard/main'
import StudentDashboard from './components/StudentDashboard/main'
import ViewResultsAsAdmin from './components/ViewResults/ViewResultsAdmin'
import ViewResultsAsTeacher from './components/ViewResults/ViewResultsAsTeacher'
import ViewResultsAsStudent from './components/ViewResults/ViewResultAsStudent'
import CreateSchedule from './components/CreateSchedule/CreateSchedule'
import CreateScheduleModal from './components/CreateScheduleModal/CreateScheduleModal'
import AddOrRemoveTeaceherOrStudentModal from './components/AddOrRemoveStudentOrTeacherModal/AddOrRemoveTeacherOrStudentModal'
import AddTeacher from './components/AddTeacher/AddTeacher'
import AddStudent from './components/AddStudent/AddStudent'
import RemoveTeacher from './components/RemoveTeacher/RemoveTeacher'
import RemoveStudent from './components/RemoveStudent/RemoveStudent'
import AddTeacherModal from './components/AddTeacherModal/AddTeacherModal'
import ChangeSchedule from './components/ChangeSchedule/ChangeSchedule'
import ViewScheduleAsAdmin from './components/ViewSchedule/ViewScheduleMainAsAdmin'
import ViewScheduleAsTeacher from './components/ViewSchedule/ViewScheduleAsTeacher'
import ViewScheduleAsStudent from './components/ViewSchedule/ViewScheduleAsStudent'
import ViewRecords from './components/ViewRecordsModal/ViewRecordsModal'
import ViewTeacherRecords from './components/ViewRecordsModal/ViewTeacherRecord'
import ViewStudentRecords from './components/ViewRecordsModal/ViewStudentRecord'
import ViewAdminProfile from './components/ViewProfile/ViewProfile'
import ViewStudentTeacherProfileModal from './components/ViewStudentTeacherProfileModal/ViewStudentTeacherProfileModal'
import ViewTeacher from './components/ViewTeacher/ViewTeacher'
import StudentProfileAsAdmin from './components/StudentProfile/ViewStudentProfileAsAdmin'
import StudentProfileAsStudent from './components/StudentProfile/ViewStudentProfileAsStudent'
import TeacherProfile from './components/TeacherProfile/ViewTeacherProfileAsAdmin'
import TeacherProfileAsTeacher from './components/TeacherProfile/ViewTeacherProfileAsTeacher'
import Messages from './components/Messages/Messages'
import Compose from './components/Messages/Compose'
import onlineAttendance from './components/OnlineAttendance/OnlineAttendance'
import AddResults from './components/AddResult/AddResultMain'
import ViewStudentsAsAdmin from './components/ViewStudent/ViewStudentsAsAdmin'
import ViewStudentAsTeacher from './components/ViewStudent/ViewStudentsAsTeacherMain'
import ViewStudentProfileAsTeacher from './components/StudentProfile/ViewStudentProfileAsTeacher'
import StudentMessage from './components/StudentMesssages/Messages'
import StudentComposeMessage from './components/StudentMesssages/Compose'
import TeacherMessage from './components/TeacherMeassages/Messages'
import TeacherComposeMessage from './components/TeacherMeassages/Compose'
import UpcomingEventMatch1 from './components/UpcomingMatchDetails/Match1'
import UpcomingEventMatch2 from './components/UpcomingMatchDetails/Match2'
import UpcomingEventMatch3 from './components/UpcomingMatchDetails/Match3'
function App() {
  return (
    <Router> 
      <div>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/match' component={Matches}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/RegisterAs' component={RegisterAs}/>
        <Route path ='/RegisterAsTeacher' component={RegisterAsTeacher}/>
        <Route path='/RegisterAsStudent' component={RegisterAsStudent}/>
        <Route path='/LoginAs' component={LoginAs}/>
        <Route path='/AdminLogin' component={AdminLogin}/>
        <Route path='/TeacherLogin' component={TeacherLogin}/>
        <Route path='/StudentLogin' component={StudentLogin}/>
        <Route path='/AdminDashboard' component={AdminDashboard}/>
        <Route path= '/TeacherDashboard' component={TeacherDashboard}/>
        <Route path='/StudentDashboard' component={StudentDashboard}/>
        <Route path='/RemoveEvent' component={AddRemoveEvent}/>
        <Route path='/AddEvent' component={AddEvent}/>
        <Route path='/ViewResultsAsAdmin' component={ViewResultsAsAdmin}/>
        <Route path='/ViewResultsAsTeacher' component={ViewResultsAsTeacher}/>
        <Route path='/CreateSchedule' component={CreateSchedule}/>
        <Route path='/CreateScheduleModal' component={CreateScheduleModal}/>
        <Route path='/CreateScheduleModal' component={CreateScheduleModal}/>
        <Route path='/AddOrRemoveTeaceherOrStudentModal' component={AddOrRemoveTeaceherOrStudentModal}/>
        <Route path='/AddTeacher' component={AddTeacher}/>
        <Route path='/AddStudent' component={AddStudent}/>
        <Route path='/RemoveTeacher' component={RemoveTeacher}/>
        <Route path='/RemoveStudent' component={RemoveStudent}/>
        <Route path='/AddTeacherModal' component={AddTeacherModal}/>
        <Route path='/ChangeSchedule' component={ChangeSchedule}/>
        <Route path='/ViewScheduleAsAdmin' component={ViewScheduleAsAdmin}/>
        <Route path='/ViewScheduleAsTeacher' component={ViewScheduleAsTeacher}/>
        <Route path='/ViewRecords' component={ViewRecords}/>
        <Route path='/ViewTeacherRecords' component={ViewTeacherRecords}/>
        <Route path='/ViewStudentRecords' component={ViewStudentRecords}/>
        <Route path='/ViewAdminProfile' component={ViewAdminProfile}/>
        <Route path='/ViewStudentTeacherProfileModal' component={ViewStudentTeacherProfileModal}/>
        <Route path='/ViewStudentAsAdmin' component={ViewStudentsAsAdmin}/>
        <Route path='/ViewStudentAsTeacher' component={ViewStudentAsTeacher}/>
        <Route path='/ViewTeacher' component={ViewTeacher}/>
        <Route path='/ViewStudentProfileAsAdmin' component={StudentProfileAsAdmin}/>
        <Route path='/ViewStudentProfileAsTeacher' component={ViewStudentProfileAsTeacher}/>
        <Route path='/StudentProfileAsStudent' component={StudentProfileAsStudent}/>
        <Route path='/TeacherProfileAsAdmin' component={TeacherProfile}/>
        <Route path='/ViewTeacherProfileAsTeacher' component={TeacherProfileAsTeacher}/>
        <Route path='/Messages' component={Messages}/>
        <Route path='/Compose' component={Compose}/>
        <Route path='/OnlineAttendance' component={onlineAttendance}/>
        <Route path='/AddResult' component={AddResults}/>
        <Route path='/ViewResultsAsStudent' component={ViewResultsAsStudent}/>
        <Route path='/ViewScheduleAsStudent' component={ViewScheduleAsStudent}/>
        <Route path='/StudentMessages' component={StudentMessage}/>
        <Route path='/StudentComposeMessage' component={StudentComposeMessage}/>
        <Route path='/TeacherMessages' component={TeacherMessage}/>
        <Route path='/TeacherComposeMessage' component={TeacherComposeMessage}/>
        <Route path='/Readmore1' component={UpcomingEventMatch1}/>
        <Route path='/Readmore2' component={UpcomingEventMatch2}/>
        <Route path='/Readmore3' component={UpcomingEventMatch3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
