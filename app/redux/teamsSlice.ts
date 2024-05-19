import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initialState } from '../lib/data';

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        addTeam: (state, action) => {
            const { name, members, teamOwner } = action.payload;
            const id = nanoid();
            state.teams.push({
                id,
                name,
                teamOwner,
                members: new Array(members),
                created: new Date().getTime(),
            });
            state.teams[state.teams.length - 1].members[0] = {
                name: teamOwner,
                role: 'Owner',
                email: '',
                accounts: 1,
            };
        },
        removeTeam: (state, action) => {
            const { id } = action.payload;
            const team = state.teams.find((team) => team.id === id);
            if (team) {
                state.teams = state.teams.filter((team) => team.id !== id);
            }
        },
        sortByTeamNameAsc: (state) => {
            state.teams.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortByTeamNameDesc: (state) => {
            state.teams.sort((a, b) => b.name.localeCompare(a.name));
        },
        sortByMembersAsc: (state) => {
            state.teams.sort((a, b) => a.members.length - b.members.length);
        },
        sortByMembersDesc: (state) => {
            state.teams.sort((a, b) => b.members.length - a.members.length);
        },
        sortByCreatedAsc: (state) => {
            state.teams.sort((a, b) => a.created - b.created);
        },
        sortByCreatedDesc: (state) => {
            state.teams.sort((a, b) => b.created - a.created);
        },
        sortByTeamMemberAsc: (state, action) => {
            const { id } = action.payload;
            const team = state.teams.find(team => team.id === id);
            if (team) {
                team.members.sort((a, b) => a.name.localeCompare(b.name));
            }
        },
        sortByTeamMemberDesc: (state, action) => {
            const { id } = action.payload;
            const team = state.teams.find(team => team.id === id);
            if (team) {
                team.members.sort((a, b) => b.name.localeCompare(a.name));
            }
        },
        addMember: (state, action) => { 
            const { id, email, accounts, name, isPending } = action.payload;
            const team = state.teams.find(team => team.id === id);
            const member = team?.members.find((member) => member.email === email);
            if (team && !member) {
                team.members.push({ name: name || '', email, role: 'Member', accounts, isPending: isPending || false });
            }
        },
    },
});

export const {
    addTeam,
    removeTeam,
    sortByTeamNameAsc,
    sortByTeamNameDesc,
    sortByMembersAsc,
    sortByMembersDesc,
    sortByCreatedAsc,
    sortByCreatedDesc,
    sortByTeamMemberAsc,
    sortByTeamMemberDesc,
    addMember,
} = teamsSlice.actions;
export default teamsSlice.reducer;
