import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './AddTeacherModal.css'
export default class AddTeacherModal extends Component {
    render() {
        return (
          <div className="AddTeacherModal">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Select Department</Modal.Title>            
            <div className="AddTeacherModalcloseButton">
              <Link to="/AddTeacher">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>            
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">IT</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">Zoology</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">Chemistry</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">Physics</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">Math</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">B Ed</a></li>           
                          
              <li className="AddTeacherModalListItems"><a href ="/AddTeacher" className="btn btn-danger">English</a></li>           
              </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
