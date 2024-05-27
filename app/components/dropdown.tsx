import UserPlus from './icons/user-plus';
import ArrowsRightLeft from './icons/arrows-right-left';
import ArrowRightCircle from './icons/arrow-right-circle';

export default function Dropdown({
    role,
    id,
    openInviteModal,
    handleSwitch,
    handleLeave,
}: {
    role: 'Owner' | 'Member';
    id: string;
    openInviteModal: (id: string) => void;
    handleSwitch: (id: string) => void;
    handleLeave: (id: string) => void;
}) {
    function openModal() {
        openInviteModal(id);
    }

    return (
        <div className="flex flex-col bg-white rounded shadow-xl p-2">
            {role === 'Owner' && (
                <button
                    onClick={openModal}
                    className="flex flex-row m-2 gap-1 rounded hover:bg-blue-200 sm:p-2"
                >
                    <UserPlus />
                    Invite member
                </button>
            )}
            <button
                onClick={() => handleSwitch(id)}
                className="flex flex-row m-2 gap-1 rounded hover:bg-blue-200 sm:p-2"
            >
                <ArrowsRightLeft />
                Switch team
            </button>
            <button
                onClick={() => handleLeave(id)}
                className="whitespace-nowrap flex flex-row m-2 gap-1 rounded hover:bg-blue-200 sm:p-2"
            >
                <ArrowRightCircle />
                Leave the team
            </button>
        </div>
    );
}
