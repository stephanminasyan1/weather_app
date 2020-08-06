export const substractDays = (num: number) => {
    const now = new Date();
    const subtracted = now.setDate(now.getDate() - num);
    const year = new Date(subtracted).getFullYear();
    const month = new Date(subtracted).getMonth();
    const day = new Date(subtracted).getDate();
    return `${year}-${month}-${day}`;
};

export const fahrenheitToCelsius = (tempFMax: number, tempFMin: number) => {
    if (!tempFMax && !tempFMin) {
        return `Provided data is invalid`;
    } else if (!tempFMin) {
        return `${Math.ceil(((tempFMax - 32) * 5) / 9)} C`;
    } else if (!tempFMax) {
        return `${Math.ceil(((tempFMin - 32) * 5) / 9)} C`;
    } else {
        const tempF = (tempFMax + tempFMin) / 2;
        return `${Math.ceil(((tempF - 32) * 5) / 9)} C`;
    }
};
