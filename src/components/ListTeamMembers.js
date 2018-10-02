import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText,Container ,Row,Col} from 'reactstrap';
import sri from './sri.jpg';
import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { editTeamMember } from '../store/actions/member';

class ListTeamMembers extends Component {

    render() {
        //console.log(this.props.member);
        const memberlist = this.props.members.map((member,index) => {
            return (
                
                <Card body key={index} >
                <Row>
                    <Col xs="2" sm="4">
                        <img style={{borderRadius:'50px',marginLeft:isMobile ? '0px' : '100px'}} height={isMobile ? "50px" : "100px"} width={isMobile ? "50px":"100px"} src={sri}/>
                    </Col>
                    <Col xs="10" sm="4">
                    <CardTitle style={{textAlign:'left'}}>{member.firstname+" "+member.lastname}
                    </CardTitle>
                    <p >{member.phoneno}</p>
                    <p >{member.email}</p>
                    </Col>
                    <Col sm="3">
                    <Link to={"/editMember/"+member.uniqueid} key={index} >
                    <Button style={{float:'right',color:'#fff',display:'inline-block'}} color="warning">Edit</Button>                    
                    </Link>
                    </Col>
                </Row>
                </Card>
                
            );
        })
        return (
            <React.Fragment >
                <Container>
                    <div>
                        <h1 style={{display:'inline-block'}}>Team Members</h1>
                        <Link to="/addTeamMember"><h1 style={{display:'inline-block',float:'right',cursor:'pointer',color:'blue',margin:'0px 5px',margin:'0px 10px'}}>+</h1></Link>
                    </div>
                    <h6>You have {this.props.members.length} Team Members</h6>
                   {memberlist}
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state.member;
}

export default connect(mapStateToProps,{editTeamMember})(ListTeamMembers);