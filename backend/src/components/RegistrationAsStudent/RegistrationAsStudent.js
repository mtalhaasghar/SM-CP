import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './RegisterAsStudent.css'
export default class Registration extends Component {
    constructor (props){
        super(props)
        this.onChangefirstName =this.onChangefirstName.bind(this)
        this.onChangeLasttName = this.onChangeLasttName.bind(this)
        this.onChangeemail = this.onChangeemail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeregistrationNumber = this.onChangeregistrationNumber.bind(this)
        this.onChangerollNumber = this.onChangerollNumber.bind(this)
        this.onChangephoneNumber = this.onChangephoneNumber.bind(this)
        this.onChangeDepartment = this.onChangeDepartment.bind(this)
        this.onChangefieldSports = this.onChangefieldSports.bind(this)
        this.onChangecategory = this.onChangecategory.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                registrationNumber: '',
                rollNumber: '',
                phoneNumber: '',
                department: '',
                fieldSports: '',
                category: '',
                RegisterAsStudent: []
        }
    }
    componentDidMount(){
        this.setState({
                firstName: 'i.e. Sumeed',
                lastName: 'i.e. Javed',
                email: 'i.e. sjsheikh@gmail.com',
                password: '',
                registrationNumber: 'i.e. 16-UE-2094',
                rollNumber: 'i.e. bsf1601515',
                phoneNumber: 'i.e. 03******391'
        })
    }
        onChangefirstName(e){
            this.setState ({
                firstName: e.target.value 
            })
        }
        onChangeLasttName(e){
            this.setState ({
                lastName: e.target.value 
            })
        }
        onChangeemail(e){
            this.setState ({
                email: e.target.value 
            })
        }
        onChangePassword(e){
            this.setState ({
                password: e.target.value 
            })
        }
        onChangeregistrationNumber(e){
            this.setState ({
                registrationNumber: e.target.value 
            })
        }
        onChangerollNumber(e){
            this.setState ({
                rollNumber: e.target.value 
            })
        }
        onChangephoneNumber(e){
            this.setState ({
                phoneNumber: e.target.value 
            })
        }
        onChangeDepartment(e){
            this.setState ({
                department: e.target.value 
            })
        }
        onChangefieldSports(e){
            this.setState ({
                fieldSports: e.target.value 
            })
        }
        onChangecategory(e){
            this.setState ({
                category: e.target.value 
            })
        }
        onSubmit(e){
            e.preventDefault();
            const Studentregistration ={
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                rollNumber: this.state.rollNumber,
                registrationNumber: this.state.registrationNumber,
                phoneNumber: this.state.phoneNumber,
                department: this.state.department,
                fieldSports: this.state.fieldSports,
                category: this.state.category
            }
            
            console.log(Studentregistration);
        }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4" className="StudentRegister">
                            
                        <div>   <h3>Student Registeration</h3>                             
                                <form onSubmit={this.onSubmit}>                                 
                                    <div className="form-group">
                                        <label for="firstName">First Name:</label>
                                        <input type="text" required class="form-control" 
                                        value={this.state.firstName} onChange={this.onChangefirstName}/> 
                                    </div>
                                    <div class="form-group">
                                        <label for="lastName">Last Name:</label>
                                        <input type="text" class="form-control" 
                                        value={this.state.lastName} onChange={this.onChangeLasttName}/> 
                                    </div>
                                    <div class="form-group">
                                        <label for="email">email:</label>
                                        <input type="text" class="form-control"
                                        value={this.state.email} onChange={this.onChangeemail} /> 
                                    </div> 
                                    <div class="form-group">
                                        <label for="Password">Password:</label>
                                        <input type="password" class="form-control"
                                        value={this.state.password} onChange={this.onChangePassword} /> 
                                    </div>
                                    <div class="form-group">
                                        <label for="registrationNumber No">registrationNumber No:</label>
                                        <input type="text" class="form-control"
                                        value={this.state.registrationNumber} onChange={this.onChangeregistrationNumber} /> 
                                    </div>
                                    <div class="form-group">
                                        <label for="Roll No">Roll No:</label>
                                        <input type="text" class="form-control"
                                        value={this.state.rollNumber} onChange={this.onChangerollNumber} /> 
                                    </div>
                                    <div class="form-group">
                                        <label for="Phone No">Phone No:</label>
                                        <input type="text" class="form-control"
                                        value={this.state.phoneNumber} onChange={this.onChangephoneNumber} /> 
                                    </div>
                                    <div class="form-group">  
                                    
                                        <div class="input-group mb-3">
                                            <select class="custom-select" id="inputGroupSelect02"
                                            value={this.state.department} onChange={this.onChangeDepartment} >
                                                <option selected>Choose...</option>
                                                <option value="IT">IT</option>
                                                <option value="Zoology">Zoology</option>
                                                <option value="Chemistry">Chemistry</option>
                                                <option value="Physics">Physics</option>
                                                <option value="Math">Math</option>
                                                <option value="B Ed">B Ed</option>
                                                <option value="English">English</option>
                                            </select>
                                            <div class="input-group-append">
                                                <label class="input-group-text" for="inputGroupSelect02">Department</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <select class="custom-select" id="inputGroupSelect02"
                                            value={this.state.fieldSports} onChange={this.onChangefieldSports} >
                                                <option selected>Choose...</option>
                                                <option value="Cricket">Cricket</option>
                                                <option value="Football">Football</option>
                                                <option value="Waliball">Waliball</option>
                                                <option value="Hockey">Hockey</option>
                                                <option value="Badminton">Badminton</option>
                                            </select>
                                            <div class="input-group-append">
                                                <label class="input-group-text" for="inputGroupSelect02">Field of Sports</label>
                                            </div>
                                        </div><div class="input-group mb-3">
                                            <select class="custom-select" id="inputGroupSelect02" 
                                            value={this.state.category} onChange={this.onChangecategory}>
                                                <option selected>Choose...</option>
                                                <option value="Batsman">Batsman</option>
                                                <option value="Baller">Baller</option>
                                                <option value="Fielder">Fielder</option>
                                                <option value="Alrounder">Alrounder</option>
                                                <option value="Front Player">front player</option>
                                                <option value="Defender">Defender</option>
                                                <option value="Goal Keeper">Goal Keeper</option>
                                                <option value="General">General</option>
                                            </select>
                                            <div class="input-group-append">
                                                <label class="input-group-text" for="inputGroupSelect02">category</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Register" className="btn btn-primary"/>                                    
                                        </div>
                                    </div>                                                                                               
                                </form>                                
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
