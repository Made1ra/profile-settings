import { Fragment, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
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
} from '../redux/teamsSlice';
import { formatDate } from '../lib/utils';
import ChevronUpDown from './icons/chevron-up-down';
import ChevronUp from './icons/chevron-up';
import ChevronDown from './icons/chevron-down';
import EllipsisVertical from './icons/ellipsis-vertical';
import Badge from './badge';
import Dropdown from './dropdown';
import MemberTable from './member-table';
import CreateTeamModal from './create-team-modal';
import InviteMemberModal from './invite-member-modal';

export default function Team() {
    const teams = useSelector((state: { teams: Team[] }) => state.teams);

    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const [inviteModalTeamId, setInviteModalTeamId] = useState('');
    const [selectedTeamId, setSelectedTeamId] = useState('');
    const [teamNameSortOrder, setTeamNameSortOrder] = useState('desc');
    const [membersSortOrder, setMembersSortOrder] = useState('desc');
    const [createdSortOrder, setCreatedSortOrder] = useState('desc');
    const [teamMemberSortOrder, setTeamMemberSortOrder] = useState('desc');
    const [dropdownVisibility, setDropdownVisibility] = useState<{ [key: string]: boolean }>({});

    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    function toggleWrap(id: string) {
        setSelectedTeamId(selectedTeamId === id ? '' : id);
    }

    function sortByTeamName() {
        setTeamNameSortOrder((previous) => (previous === 'asc' ? 'desc' : 'asc'));
        teamNameSortOrder === 'asc' ? dispatch(sortByTeamNameAsc()) : dispatch(sortByTeamNameDesc());
    }

    function sortByMembers() {
        setMembersSortOrder((previous) => (previous === 'asc' ? 'desc' : 'asc'));
        membersSortOrder === 'asc' ? dispatch(sortByMembersAsc()) : dispatch(sortByMembersDesc());
    }

    function sortByCreated() {
        setCreatedSortOrder((previous) => (previous === 'asc' ? 'desc' : 'asc'));
        createdSortOrder === 'asc' ? dispatch(sortByCreatedAsc()) : dispatch(sortByCreatedDesc());
    }

    function sortByTeamMember(id: string) {
        setTeamMemberSortOrder((previous) => (previous === 'asc' ? 'desc' : 'asc'));
        teamMemberSortOrder === 'asc' ? dispatch(sortByTeamMemberAsc({ id })) : dispatch(sortByTeamMemberDesc({ id }));
    }

    function handleSwitch(id: string) {
        dispatch(addMember({ id, email: 'alla.abrosimova@gmail.com', accounts: 5, name: 'Alla Abrosimova', isPending: true }));
    }

    function handleLeave(id: string) {
        dispatch(removeTeam({ id }));
    }

    function toggleDropdown(id: string) {
        setDropdownVisibility((previousVisibility) => {
            const newState = Object.keys(previousVisibility).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {} as { [key: string]: boolean });

            return {
                ...newState,
                [id]: !previousVisibility[id],
            };
        });
    }

    function openTeamModal() {
        setIsModal(true);
    }

    function closeTeamModal() {
        setIsModal(false);
    }

    function handleSaveTeam(name: string, members: number, teamOwner: string) {
        dispatch(addTeam({ name, members, teamOwner }));
    }

    function openInviteModal(id: string) {
        setInviteModalTeamId(id);
        setIsInviteModalOpen(true);
    }

    function handleInvite(email: string, accounts: number, name?: string) {
        dispatch(addMember({ id: inviteModalTeamId, email, accounts, name, isPending: true }));
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            Object.keys(dropdownRefs.current).forEach((id) => {
                if (dropdownRefs.current[id] && !dropdownRefs.current[id]!.contains(event.target as Node)) {
                    setDropdownVisibility((prev) => ({ ...prev, [id]: false }));
                }
            });
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="ml-8 mt-8 max-sm:ml-2 max-sm:mt-2 max-sm:max-w-xs">
            <h2 className="text-lg font-bold">Team</h2>
            <button
                onClick={openTeamModal}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow transition ease-in-out duration-150
            hover:bg-blue-600
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            max-sm:px-2 max-sm:py-1"
            >
                Create new team
            </button>
            <div className="m-4 w-full max-sm:overflow-x-auto max-sm:m-2">
                <table className="w-full table-auto border-collapse text-left">
                    <thead>
                        <tr>
                            <th />
                            <th className="p-4 text-gray-500 max-sm:p-2">
                                <div onClick={sortByTeamName} className="flex text-nowrap cursor-pointer">
                                    Team name
                                    <ChevronUpDown />
                                </div>
                            </th>
                            <th className="p-4 text-gray-500 max-sm:p-2">
                                <div onClick={sortByMembers} className="flex text-nowrap cursor-pointer">
                                    Members
                                    <ChevronUpDown />
                                </div>
                            </th>
                            <th className="p-4 text-gray-500 max-sm:p-2">Team owner</th>
                            <th className="p-4 text-gray-500 max-sm:p-2">
                                <div onClick={sortByCreated} className="flex text-nowrap cursor-pointer">
                                    Created
                                    <ChevronUpDown />
                                </div>
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team: Team) => (
                            <Fragment key={team.id}>
                                <tr className="bg-blue-50">
                                    <td onClick={() => toggleWrap(team.id)} className="cursor-pointer rounded hover:bg-blue-200">
                                        <div className="flex justify-center">
                                            {selectedTeamId === team.id ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                    </td>
                                    <td className="p-4 max-sm:p-2">
                                        <div className="flex items-center justify-center text-nowrap">
                                            {team.name}
                                            <Badge role={team.teamOwner === 'alla.abrosimova@gmail.com' ? 'Owner' : 'Member'} />
                                        </div>
                                    </td>
                                    <td className="p-4 max-sm:p-2">{team.members.length} {team.members.length === 1 ? 'member' : 'members'}</td>
                                    <td className="p-4 max-sm:p-2">{team.teamOwner}</td>
                                    <td className="p-4 max-sm:p-2">{formatDate(team.created)}</td>
                                    <td
                                        className="p-4 relative max-sm:p-2"
                                        onClick={() => toggleDropdown(team.id)}
                                        ref={(el) => { dropdownRefs.current[team.id] = el; }}
                                    >
                                        <EllipsisVertical />
                                        {dropdownVisibility[team.id] && (
                                            <div
                                                className="absolute left-4 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 transform translate-x-6 translate-y-2"
                                            >
                                                <Dropdown
                                                    role={team.teamOwner === 'alla.abrosimova@gmail.com' ? 'Owner' : 'Member'}
                                                    id={team.id}
                                                    openInviteModal={openInviteModal}
                                                    handleSwitch={handleSwitch}
                                                    handleLeave={handleLeave}
                                                />
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                {selectedTeamId === team.id && (
                                    <tr>
                                        <td colSpan={6}>
                                            <MemberTable
                                                teamId={selectedTeamId}
                                                sortByTeamMember={sortByTeamMember}
                                                members={team.members}
                                            />
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <CreateTeamModal
                isOpen={isModal}
                onClose={closeTeamModal}
                onSave={handleSaveTeam}
            />
            <InviteMemberModal
                id={inviteModalTeamId}
                isOpen={isInviteModalOpen}
                onClose={() => setIsInviteModalOpen(false)}
                onSave={handleInvite}
            />
        </div>
    );
}
