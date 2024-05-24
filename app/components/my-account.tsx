import Avatar from './avatar';

export default function MyAccount() {
    return (
        <div className="ml-8 mt-8 p-8 flex flex-col flex-center items-center justify-center">
            <Avatar />
            <h2 className="whitespace-nowrap">Alla Abrosimova</h2>
            <h3>alla.abrosimova@gmail.com</h3>
            <h4>Accounts: 5</h4>
        </div>
    );
}
