import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './ViewRecordsModal.css'
export default class ViewRecordsModal extends Component {
    render() {
        return (
          <div className="ViewRecordsModal">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>View Records</Modal.Title>            
            <div className="ViewRecordsModalCloseButton">
              <Link to="/LoginAsAdmin">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>            
              <li className="ViewRecordsModalListItems"><a href ="/ViewTeacherRecords" className="btn btn-danger">View Teacher Records</a></li>           
              <li className="ViewRecordsModalListItems"><a href ="/ViewStudentRecords" className="btn btn-danger">View Student Records</a></li>         
              </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
