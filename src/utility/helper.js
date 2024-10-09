export function generateRandomId(max = 999999, min = 100000) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function getDateString() {
    return new Date().toString().substr(4, 20)
}