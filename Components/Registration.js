import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as useHistory, NavLink} from 'react-router-dom';
import {Button,Container,Form,Row,Col,InputGroup} from 'react-bootstrap';

const regForName =RegExp(/^[A-Za-z]/);
const regForEve =RegExp(/^(?!^ +$)^.+$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = { prodata: [], fname: '', lname: '', username: '',email:'',password:'',cpassword:'', errors:{
            fname:'',
            lname:'',
            username:'',
            email:'',
            password:'',
            cpassword:''
        }
    }
    }
    handle = (event) => {
        const { name, value } = event.target
       // this.setState({ [name]: value })
        let errors=this.state.errors;
        switch(name){
            case 'fname':
                errors.fname=regForName.test(value)?'':'Enter Valid first Name';
                break;
            case 'lname':
                errors.lname=regForName.test(value)?'':'Enter Valid Last Name';
                break;
            case 'username':
                errors.username=regForEve.test(value)?'':'Enter Username';
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Enter Valid Email';
                break;
            case 'password':
                errors.password=regForEve.test(value)?'':'Enter Password';
                break;
            case 'cpassword':
                errors.cpassword=regForEve.test(value)?'':'Confirm Your Password';
            break;
            
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        // let history=useHistory();

        if(this.validate(this.state.errors))
        {
            alert("Details Added Successfully !!!");
            this.add()
            // history.push("/home")
        }
        else {
            alert("Please Enter Valid Details");
        }
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    add = (event) => {
        // event.preventDefault()
        const URL = "http://localhost:3002/Data"
        axios.post(URL, {
            fname: this.state.fname, 
            lname:this.state.lname,
            username:this.state.username,
            email:this.state.email,
            password: this.state.password 
            })

            .catch(err => { console.log(err) })     
    }
    render() {
        const {errors}=this.state;
        return (
            <Container className="mt-5">
                <Form className="pt-2" onSubmit={this.formSubmit}>
                <h2 className="text-center">REGISTRATION FORM</h2>
                <Form.Label>Enter your Name</Form.Label>
                    <Row className="mb-3">
                        <Col>
                        <Form.Control name="fname" onChange={this.handle} placeholder="First name" />
                        {errors.fname.length>0 && <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                        </Col>
                        <Col>
                        <Form.Control name="lname" onChange={this.handle} placeholder="Last name" />
                        {errors.lname.length>0 && <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                        </Col>
                    </Row>

                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Any Username</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control id="inlineFormInputGroup" onChange={this.handle} name="username" placeholder="Username" />
                        {errors.username.length>0 && <span style={{color:'red'}}>{errors.username}</span>}<br/>
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handle} placeholder="Enter email ID" />
                        {errors.email.length>0 && <span style={{color:'red'}}>{errors.email}</span>}<br/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handle} placeholder="Enter Password" />
                        {errors.password.length>0 && <span style={{color:'red'}}>{errors.password}</span>}<br/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" onChange={this.handle} placeholder="Confirm Password" />
                        {errors.cpassword.length>0 && <span style={{color:'red'}}>{errors.cpassword}</span>}<br/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <NavLink to="/">Already Registered?</NavLink>
                    </Form.Group>

                    <Button variant="primary" type="submit" value="submit"> Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Registration
