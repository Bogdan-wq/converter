const date = () => {
    const d = new Date();

    const day = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`

    const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`

    return {
        day,
        month,
        year:d.getFullYear(),
    }
}

export default date;