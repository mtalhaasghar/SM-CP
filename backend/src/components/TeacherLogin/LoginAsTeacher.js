import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './LoginAsTeacher.css'
export default class Login extends Component {
    
    constructor (props){
        super(props)
        this.onChangeemail =   this.onChangeemail.bind(this)
        this.onChangepassword =  this.onChangepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            email:'',
            password:'',
            LoginAsTeacher: []
        }
    }
    componentDidMount(){
        this.setState({
            email:'i.e.razab2140@gmail.com',
            password:''
        })
    }
        onChangeemail(e){
            this.setState({
                email: e.target.value
            })
        }
        onChangepassword(e){
            this.setState({
                password:e.target.value
            })
        }
        onSubmit(e){
            e.preventDefault();
            const LoginAsTeacher = {
                email: this.state.email,
                password: this.state.password,
            }
            console.log(LoginAsTeacher)
        }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">                 
                    </Col>
                    <Col md="4" className="LoginTeacher">
                        <h3>Teacher Login</h3>
                    <div>                                
                        <form onSubmit={this.onSubmit}>                                                          
                            <div className="form-group">
                                <label for="Email">Email:</label>
                                <input type="text" className="form-control"
                                value={this.state.email} onChange={this.onChangeemail} /> 
                            </div>                                                    
                            <div className="form-group">
                                <label for="Password">Password:</label>
                                <input type="password" class="form-control"
                                value={this.state.password} onChange={this.onChangepassword} /> 
                            </div>
                            <div className="form-group">                                                                         
                            <input type="submit" value="Login" className="btn btn-primary  btn-block"/>                                          
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
