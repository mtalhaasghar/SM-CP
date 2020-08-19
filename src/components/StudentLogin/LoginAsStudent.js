import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './LoginAsStudent.css'
export default class Login extends Component {

    
    constructor (props){
        super(props)
        this.onChangeRollNumber = this.onChangeRollNumber.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
                rollnumber: '',
                password: '',
                LoginAsStudent: []
        }
    }
    componentDidMount(){
        this.setState({
                rollnumber: 'i.e. bsf1601515',
                password: ''
        })
    }
        onChangePassword(e){
            this.setState ({
                password: e.target.value 
            })
        }
        onChangeRollNumber(e){
            this.setState ({
                rollnumber: e.target.value 
            })
        }
        onSubmit(e){
            e.preventDefault();
            const LoginAsStudent ={
                rollnumber: this.state.rollnumber,
                password: this.state.password,
            }
            
            console.log(LoginAsStudent);
        }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">                 
                    </Col>
                    <Col md="4" className="LoginStudent">
                        <h3>Student Login</h3>
                    <div>                                
                        <form onSubmit={this.onSubmit}>                                                          
                            <div class="form-group">
                                <label for="RollNo.">Roll No.:</label>
                                <input type="text" class="form-control"
                                value={this.state.rollnumber} onChange={this.onChangeRollNumber} /> 
                            </div>                                                    
                            <div class="form-group">
                                <label for="Password">Password:</label>
                                <input type="password" class="form-control"
                                value={this.state.password} onChange={this.onChangePassword} /> 
                            </div>
                            <div class="form-group">                                                                         
                            <input type="submit" value="Login" class="btn btn-primary  btn-block"/>                                          
                            </div>                                                                     
                            </form>                                
                    </div>
                    </Col>
                    <Col md="4">
                    </Col>
                </Row>
            </Container>
        )
    }
}
