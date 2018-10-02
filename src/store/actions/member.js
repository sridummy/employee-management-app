import { ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER,DELETE_MEMBER } from "../types";

export const addTeamMember = (member) => {
    const add = {
        type: ADD_TEAM_MEMBER,
        payload:member
    }
    return add;
};

export const editTeamMember = (member) => {
    const edit = {
        type: EDIT_TEAM_MEMBER,
        payload:member
    }
    return edit;
};

export const deleteTeamMember = (member) => {
    const deletemember = {
        type: DELETE_MEMBER,
        payload: member
    }
    return deletemember;
}