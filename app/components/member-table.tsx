import ChevronUpDown from './icons/chevron-up-down';
import Member from './member';

export default function MemberTable({
    teamId,
    sortByTeamMember,
    members,
}: {
    teamId: string;
    sortByTeamMember: (teamId: string) => void;
    members: Member[];
}) {
    return (
        <div className="m-4 w-full max-sm:overflow-x-auto max-sm:m-2">
            <table className="w-full table-auto border-collapse text-left">
                <thead>
                    <tr>
                        <th className="p-4 text-gray-500 max-sm:p-2">
                            <div
                                onClick={() => sortByTeamMember(teamId)}
                                className="flex cursor-pointer"
                            >
                                Team member
                                <ChevronUpDown />
                            </div>
                        </th>
                        <th className="p-4 text-gray-500 max-sm:p-2">Role</th>
                        <th className="p-4 text-gray-500 text-nowrap max-sm:p-2">Product features</th>
                        <th className="p-4 text-gray-500 max-sm:p-2">Accounts</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member: Member) => (
                        <Member
                            key={member.email}
                            name={member.name}
                            email={member.email}
                            role={member.role}
                            accounts={member.accounts}
                            isPending={member.isPending}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
