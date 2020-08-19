import React, { Component } from 'react'
import {Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
export default class ViewStudentTeacherProfileModal extends Component {
    render() {
        return (
          <div className="ViewStudentTeacherProfileModal">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>View Student/Teacher Profile</Modal.Title>            
            <div className="ViewStudentTeacherProfilecloseButton">
              <Link to="/LoginAsAdmin">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>            
              <li className="ViewStudentTeacherProfileModalListItems"><a href ="/ViewStudentAsAdmin" className="btn btn-danger">View Student Profile</a></li>              
              <li className="ViewStudentTeacherProfileModalListItems"><a href ="/ViewTeacher" className="btn btn-danger">View Teacher Profile</a></li>            
            </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
