import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
export default class LoginAs extends Component {
    render() {
        return (
          <div className="LoginAs">
          <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Login As</Modal.Title>            
            <div className="closeButton">
              <Link to="/">X</Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li className="LoginAsListItems"><Link to='/AdminLogin'>Admin</Link></li>              
              <li className="LoginAsListItems"><Link to='/TeacherLogin'>Teacher</Link></li>
              <li className="LoginAsListItems"><Link to='/StudentLogin'>Student</Link></li>
            </ul>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        );
    }
}
