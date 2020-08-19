import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './RegistrationAsTeacher.css'
export default class Registration extends Component {
    constructor (props){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangelastnam =  this.onChangelastnam.bind(this)
        this.onChangeemail =   this.onChangeemail.bind(this)
        this.onChangepassword =  this.onChangepassword.bind(this)
        this.onChangephonenumber =  this.onChangephonenumber.bind(this)
        this.onChangefielofsports = this.onChangefielofsports.bind(this)
        this.onChangeDepartments =  this.onChangeDepartments.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            firstname: '',
            lastname: '',
            email:'',
            password:'',
            phonenumber:'',
            fieldofsports:'',
            Departments:'',
            RegisterAsTeacher: []
        }
    }
    componentDidMount(){
        this.setState({
            firstname: 'i.e. raza',
            lastname: 'i.e ali',
            email:'i.e.razab2140@gmail.com',
            password:'',
            phonenumber:'03******391',
            fieldofsports:'Field Of Sports',
            Departments:'Departments'
        })
    }
        onChangeFirstName(e){
            this.setState({
                firstname:e.target.value
            })
        }
        onChangelastnam(e){
            this.setState({
                lastname: e.target.value
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
        onChangephonenumber(e){
            this.setState({
                phonenumber:e.target.value
            })
        }
        onChangefielofsports(e){
            this.setState({
                fieldofsports:e.target.value
            })
        }
        onChangeDepartments(e){
            this.setState({
                Departments:e.target.value
            })
        }
        onSubmit(e){
            e.preventDefault();
            const TeacherRegistration = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                phonenumber:this.state.phonenumber,
                fieldofsports: this.state.fieldofsports,
                Departments: this.state.Departments
            }
            console.log(TeacherRegistration)
        }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">                    
                    </Col>
                    <Col md="4" className="TeacherRegister">
                        <h3>Teacher Registration</h3>
                    <div>                                
                        <form onSubmit={this.onSubmit}>                                 
                            <div className="form-group">
                                <label for="FirstName">First Name:</label>
                                    <input type="text" className="form-control"
                                    value={this.state.firstname} onChange={this.onChangeFirstName}/> 
                            </div>                                                             
                            <div className="form-group">
                                <label for="LastName">Last Name:</label>
                                    <input type="text" className="form-control"
                                     value={this.state.lastname} onChange={this.onChangelastnam}/> 
                            </div>
                            <div className="form-group">
                                <label for="Email">Email:</label>
                                    <input type="text" className="form-control"
                                     value={this.state.email} onChange={this.onChangeemail}/> 
                            </div>                                                    
                            <div className="form-group">
                                <label for="Password">Password:</label>
                                    <input type="password" className="form-control"
                                    value={this.state.password} onChange={this.onChangepassword}/>
                            </div>                                                                                
                            <div className="form-group">
                                <label for="Phone">Phone No.:</label>
                                    <input type="text" className="form-control"
                                     value={this.state.phonenumber} onChange={this.onChangephonenumber}/> 
                            </div>
                            <div className="form-group">                                                                               
                              <div className="input-group mb-3">
                             <select className="custom-select" id="inputGroupSelect02" 
                             value={this.state.fieldofsports} onChange={this.onChangefielofsports}>                                    <option selected>Choose...</option>
                                         <option value="Cricket">Cricket</option>
                                          <option value="Football">Football</option>
                                         <option value="Wali ball">Wali ball</option>
                                            <option value="Table Tennis">Table Tennis</option>
                                            <option value="Hockey">Hockey</option>
                                            <option value="Bedmintion">Bedmintion</option>
                              </select>
                                         <div className="input-group-append">
                               <label className="input-group-text" for="inputGroupSelect02">Field of sports</label>
                                         </div>
                                        </div>
                                        <div className="input-group mb-3">
                                <select className="custom-select" id="inputGroupSelect02"
                                
                             value={this.state.Departments} onChange={this.onChangeDepartments}>
                                    <option selected>Choose...</option>
                                    <option value="IT">IT</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="English">English</option>
                                    <option value="Physics">Physics</option>
                                    <option value="BED">BED</option>
                                    <option value="Math">Math</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text" for="inputGroupSelect02">Departments</label>
                                </div>
                                        </div>
                                        <button type = "submit" className="btn btn-primary  btn-block" >Register</button>                                          
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
