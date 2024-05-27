import Avatar from './avatar';

export default function MyAccount() {
    return (
        <div className="p-8 flex items-center justify-start
        max-sm:pl-8 max-sm:flex-col">
            <Avatar />
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-xl">Alla Abrosimova</h1>
                <h3>alla.abrosimova@gmail.com</h3>
                <h4>Accounts: 5</h4>
            </div>
        </div>
    );
}
