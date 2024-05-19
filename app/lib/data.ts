export const initialState = {
    teams: [
        {
            id: 'dsa212',
            name: 'My cool team',
            teamOwner: 'alla.abrosimova@gmail.com',
            members: [
                { name: 'Alla Abrosimova', email: 'alla.abrosimova@gmail.com', role: 'Owner', accounts: 5 },
                { name: 'Mia Wallace', email: 'mia.wallace@gmail.com', role: 'Member', accounts: 4 },
                { name: 'Joey Tribbiani', email: 'joey.tribbiani@gmail.com', role: 'Member', accounts: 3 },
                { name: 'Vincent Vega', email: 'vincent.vega@gmail.com', role: 'Member', accounts: 2 },
            ],
            created: new Date(2023, 10, 23).getTime(),
        },
        {
            id: 'sda123',
            name: 'My team 123',
            teamOwner: 'oksana.abrosimova@gmail.com',
            members: [
                { name: 'Oksana Abrosimova', email: 'oks.abr@gmail.com', role: 'Owner', accounts: 5 },
                { name: 'Mario Koss', email: 'Mario.Koss@hotmail.com', role: 'Member', accounts: 2 },
                { name: '', email: 'allaAbr@gmail.com', role: 'Member', accounts: 5, isPending: true },
                { name: 'John Doe', email: 'johnDoe@gmail.com', role: 'Member', accounts: 4 },
            ],
            created: new Date(2023, 10, 14).getTime(),
        },
    ],
};
