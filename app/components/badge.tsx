export default function Badge({ role }: { role: 'Owner' | 'Member' }) {
    return (
        <span className={`inline-flex items-center ml-2 px-3 py-1 rounded-full text-xs font-medium leading-4
        ${role === 'Owner' ? 'bg-blue-200 text-blue-500' : 'bg-gray-200 text-gray-800'}`}>
            {role}
        </span>
    );
}
