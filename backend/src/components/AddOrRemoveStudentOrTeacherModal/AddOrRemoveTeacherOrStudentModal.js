import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './AddOrRemoveTeacherOrStudentModal.css'
export default class AddOrRemoveTeacehrOrStudentModal extends Component {
    render() {
        return (
          <div className="AddOrRemoveTeacehrOrStudentModal">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add/Remove Teaceher/Student</Modal.Title>            
            <div className="AddOrRemoveTeaceherOrStudentcloseButton">
              <Link to="/LoginAsAdmin">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>            
              <li className="AddOrRemoveTeacehrOrStudentModalListItems"><a href ="/AddTeacher" className="btn btn-danger">Add Teacher</a></li>           
              <li className="AddOrRemoveTeacehrOrStudentModalListItems"><a href ="/AddStudent" className="btn btn-danger">Add Student</a></li>          
              <li className="AddOrRemoveTeacehrOrStudentModalListItems"><a href ="/RemoveTeacher" className="btn btn-danger">Remove Teacher</a></li>          
              <li className="AddOrRemoveTeacehrOrStudentModalListItems"><a href ="/RemoveStudent" className="btn btn-danger">Remove Student</a></li>            
              </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
