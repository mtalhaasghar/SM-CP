import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './LoginAsAdmin.css'
export default class Login extends Component {

    
    constructor (props){
        super(props)
        this.onChangeemail =   this.onChangeemail.bind(this)
        this.onChangepassword =  this.onChangepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            email:'',
            password:'',
            LoginAsAdmin: []
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
            const LoginAsAdmin = {
                email: this.state.email,
                password: this.state.password,
            }
            console.log(LoginAsAdmin)
        }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">                 
                    </Col>
                    <Col md="4" className="LoginAdmin">
                        <h3>Admin Login</h3>
                    <div>                                
                        <form onSubmit={this.onSubmit}>                                                          
                            <div className="form-group">
                                <label for="Email">Email:</label>
                                <input type="text" class="form-control"
                                value={this.state.email} onChange={this.onChangeemail} /> 
                            </div>                                                    
                            <div class="form-group">
                                <label for="Password">Password:</label>
                                <input type="password" class="form-control"
                                value={this.state.password} onChange={this.onChangepassword} /> 
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
