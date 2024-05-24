import { useState } from 'react';

export default function CreateTeamModal({
    isOpen,
    onClose,
    onSave,
}: {
    isOpen: boolean;
    onClose: () => void;
    onSave: (name: string, members: number, teamOwner: string) => void;
}) {
    const [name, setName] = useState('');
    const [members, setMembers] = useState(1);
    const [teamOwner, setTeamOwner] = useState('');

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleChangeMembers(e: React.ChangeEvent<HTMLInputElement>) {
        setMembers(+e.target.value);
    }

    function handleChangeTeamOwner(e: React.ChangeEvent<HTMLInputElement>) {
        setTeamOwner(e.target.value);
    }

    function handleSave() {
        if (!name || !members || !teamOwner) {
            return;
        }
        onSave(name, members, teamOwner);
        onClose();
        setName('');
        setMembers(1);
        setTeamOwner('');
    }

    if (!isOpen) {
        return null;
    }

    return (
        <form className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-sm:m-2">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Members:
                        <input
                            type="number"
                            value={members}
                            onChange={handleChangeMembers}
                            required
                            min={1}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Team owner:
                        <input
                            type="email"
                            value={teamOwner}
                            onChange={handleChangeTeamOwner}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </label>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}
