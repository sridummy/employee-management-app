import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addTeamMember} from '../store/actions/member';
import uuid from 'uuid';

class AddTeamMember extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            phoneno:'',
            regular:true,
            admin:false
        }
    }

    handleChange = e => {
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        let rolenew = 'regular';
        if(this.state.regular === true && this.state.admin === false){
            rolenew = 'regular';
        }else if(this.state.admin === true && this.state.regular === false){
            rolenew = 'admin'
        }
        const newmember = {
            uniqueid:uuid(),
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            phoneno:this.state.phoneno,
            role: rolenew
        };
        this.props.addTeamMember(newmember);
        this.props.history.push("/");
    }

    handleClick = e => {
       var role = e.target.name;
       if(role === 'regular'){
           this.setState({...this.state, regular:true,admin:false});
       }else if(role === 'admin'){
           this.setState({...this.state, admin:true,regular:false});
       }
    }


  
    render() {
        return (
            <Container>
                 <div>
                        <h1 style={{display:'inline-block'}}>Add team Member</h1>
                        <Link to="/"
                        ><h1 style={{display:'inline-block',float:'right',cursor:'pointer',color:'blue',margin:'0px 5px',margin:'0px 10px'}} 
                        >X</h1></Link>
                    </div>
                <h5>Info:</h5>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="examplePassword">First Name</Label>
                        <Input 
                        type="text" 
                        name="firstname"
                         placeholder="Enter First Name" 
                         onChange={this.handleChange}

                         />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Last Name</Label>
                        <Input 
                        type="text"
                         name="lastname" 
                         placeholder="Enter Last Name" 
                         onChange={this.handleChange}
                         />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Email</Label>
                        <Input 
                        type="email"
                        name="email"
                        placeholder="Enter Mail-id" 
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Phone Number</Label>
                        <Input 
                        type="text" 
                        name="phoneno"
                         placeholder="Enter Phone Number"
                         onChange={this.handleChange}
                         />
                    </FormGroup>
                    <h5>Role:</h5>
                    <FormGroup check >
                        <Label check>
                            <Input type="radio" name="regular" checked={this.state.regular} onChange={this.handleClick} />{' '}
                            Regular - Can't delete members
                        </Label>
                    </FormGroup>
                    <FormGroup check >
                        <Label check style={{marginTop:'15px'}}>
                            <Input  type="radio" name="admin" checked={this.state.admin} onChange={this.handleClick} />{' '}
                           Admin - Can delete members
                        </Label>
                    </FormGroup><br/>
                    <Button color="primary" type="submit">Save</Button>
                </Form>
            </Container>
        );
    }
}

export default connect(null,{addTeamMember})(AddTeamMember);