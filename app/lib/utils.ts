export const formatDate = (milliseconds: number) => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayString = day < 10 ? `0${day}` : `${day}`;
    const monthString = month < 10 ? `0${month}` : `${month}`;

    return `${dayString}/${monthString}/${year}`;
};
