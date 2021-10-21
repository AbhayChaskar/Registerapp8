import React, { Component } from 'react'
import {BrowserRouter as Link, NavLink} from 'react-router-dom';
import {Button,Container,Form} from 'react-bootstrap';

const regForEve =RegExp(/^(?!^ +$)^.+$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export class Loginn extends Component {
    constructor(props) {
        super(props)
        this.state = { errors:{
            email:'',
            password:''
        }
    }
    }

    handle = (event) => {
        const { name, value } = event.target
       // this.setState({ [name]: value })
        let errors=this.state.errors;
        switch(name){
            case 'email':
                errors.email=regForEmail.test(value)?'':'Enter Valid Email/Username';
                break;
            case 'password':
                errors.password=regForEve.test(value)?'':'Enter Password';
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
            alert("Login Successfull");
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
    render() {
        const {errors}=this.state;
        return (
            <Container className="pt-5">
                <Form className="pt-2">
                <h2 className="text-center">LOGIN</h2>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter Email ID/Username</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handle} placeholder="Email ID/username" />
                        {errors.email.length>0 && <span style={{color:'red'}}>{errors.email}</span>}<br/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handle} placeholder="Enter Password" />
                        {errors.password.length>0 && <span style={{color:'red'}}>{errors.password}</span>}<br/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <NavLink to="/registration">Not Registered yet?</NavLink>
                    </Form.Group>

                    <Button variant="primary" type="submit" href="/home" onSubmit={this.formSubmit}>Login</Button>
                </Form>
            </Container>
        )
    }
}

export default Loginn
