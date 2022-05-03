function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export default (time) => {
    const date = new Date(time);
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}