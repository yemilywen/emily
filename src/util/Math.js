const isEven = (number) => {
    return number % 2 === 0;
}

const isOdd = (number) => {
    return number % 2 !== 0;
}

const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateCurrentTimeStamp = () => {
    const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = '';

    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }
    else {
        hours = hours === 0 ? 12 : hours;
        ampm = 'AM';
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    const finalDate = hours + ":" + minutes + " " + ampm + " - " + day + " " + dates[month] + " " + year;
    return finalDate;
}

export {
    isEven,
    isOdd,
    getRandomNumberBetween,
    generateCurrentTimeStamp
};