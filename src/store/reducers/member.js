import { ADD_TEAM_MEMBER,EDIT_TEAM_MEMBER, DELETE_MEMBER } from "../types";

const initialstate = {
  members:[
    {
      uniqueid:1,
      firstname:'srikanth',
      lastname:'gowda',
      email:'srikanthgowdae@gmail.com',
      phoneno:'9108608148',
      role:'admin'
    },
    {
      uniqueid:2,
      firstname:'bharath',
      lastname:'nagaraj',
      email:'baratyh@gmail.com',
      phoneno:'912354608148',
      role:'regular'
    },
  ],
  isEdit:''
}

const member = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return {
        ...this.state,
        members:state.members.concat(action.payload)
      };
    case EDIT_TEAM_MEMBER:
      return {
        ...this.state,
        members:action.payload
      };
      case DELETE_MEMBER:
      return {
        ...this.state,
        members:action.payload
      }
      default:
      return state;
  }
}

export default member;