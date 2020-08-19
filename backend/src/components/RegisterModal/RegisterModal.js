import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
export default class Register extends Component {
    render() {
        return (
          <div className="RegisterPopup">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Register As</Modal.Title>            
            <div className="closeButton">
              <Link to="/">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li className="RegisterAsListItems"><Link to='/RegisterAsTeacher'>Teacher</Link></li>
              <li className="RegisterAsListItems"><Link to='/RegisterAsStudent'>Student</Link></li>
            </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
