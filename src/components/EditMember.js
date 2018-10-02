import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addTeamMember,editTeamMember,deleteTeamMember} from '../store/actions/member';
import uuid from 'uuid';
import _ from 'lodash';

class EditMember extends Component {

    constructor(props){
        super(props);
        this.state = {
            uniqueid:'',
            firstname:'',
            lastname:'',
            email:'',
            phoneno:'',
            regular:'',
            admin:''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.uniqueid+"";
        let mem = this.props.members.filter(m => m.uniqueid+"" === id);
        if(mem.length>0){
            if(mem[0].role === 'admin'){
                mem[0].admin = true;
                mem[0].regular = false;
            }else if(mem[0].role === 'regular'){
                mem[0].admin = false;
                mem[0].regular = true;
            }
            //console.log(mem)
            this.setState(mem[0],()=>{
                console.log(this.state);
            });
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
        let newObj = this.props.members.filter(m => m.uniqueid !== this.state.uniqueid);
        const editedmember = {
            uniqueid:this.state.uniqueid,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            phoneno:this.state.phoneno,
            role: rolenew
        };
        newObj.push(editedmember);
        this.props.editTeamMember(newObj);
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

    handleDelete = () => {
        const id = this.props.match.params.uniqueid+"";
        if(this.state.admin === true){
            let newObj = this.props.members.filter(m => m.uniqueid !== this.state.uniqueid);
            console.log(newObj);
            this.props.deleteTeamMember(newObj);
            this.props.history.push("/");
        }else{
            alert("not an admin")
        }
    }

    render() {
        
        return (
            <Container>
                 <div>
                        <h1 style={{display:'inline-block'}}>Edit member</h1>
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
                        value={this.state.firstname}
                        placeholder="Enter First Name" 
                        onChange={this.handleChange}

                         />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Last Name</Label>
                        <Input 
                         type="text"
                         value={this.state.lastname}
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
                        value={this.state.email}
                        placeholder="Enter Mail-id" 
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Phone Number</Label>
                        <Input 
                        type="text" 
                        name="phoneno"
                        value={this.state.phoneno}
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
                    <Button style={{float:'right',margin:'0px 10px'}} color="primary" type="submit">Save</Button>
                    <Button style={{float:'right'}} color="danger" type="button" onClick={this.handleDelete}>Delete</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return state.member;
}

const funcArr = {
    addTeamMember,editTeamMember,deleteTeamMember
}

export default connect(mapStateToProps,funcArr)(EditMember);