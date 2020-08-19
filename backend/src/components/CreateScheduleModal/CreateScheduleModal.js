import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './CreateScheduleModal.css'
export default class ScheduleModal extends Component {
    render() {
        return (
          <div className="ScheduleModal">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Schedule</Modal.Title>            
            <div className="SchedulecloseButton">
              <Link to="/LoginAsAdmin">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>            
              <li className="ScheduleModalListItems"><a href ="/CreateSchedule" className="btn btn-danger">Create Schedule</a></li>              
              <li className="ScheduleModalListItems"><a href ="/ChangeSchedule" className="btn btn-danger">Change Schedule</a></li>            
            </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
