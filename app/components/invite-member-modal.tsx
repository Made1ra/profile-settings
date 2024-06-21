import { useState } from "react";

export default function InviteMemberModal({
  id,
  isOpen,
  onClose,
  onSave,
}: {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (email: string, accounts: number, name?: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState(1);

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleChangeAccounts(e: React.ChangeEvent<HTMLInputElement>) {
    setAccounts(+e.target.value);
  }

  function handleSave() {
    if (!email || !accounts) {
      return;
    }
    onSave(email, accounts, name);
    onClose();
    setEmail("");
    setName("");
    setAccounts(1);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <form className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-sm:m-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
            <input
              type="text"
              value={email}
              onChange={handleChangeEmail}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
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
            Accounts:
            <input
              type="number"
              value={accounts}
              onChange={handleChangeAccounts}
              required
              min={1}
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
