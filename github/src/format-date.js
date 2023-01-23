import {DIVISIONS} from "./config.js";

export function formatDate(date) {
    const formatter = new Intl.DateTimeFormat();

    return formatter.format(new Date(date))
}

const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: 'auto'
})

export function formatTimeAgo(date) {
    let duration = (new Date(date) - new Date()) / 1000

    for (let i = 0; i <= DIVISIONS.length; i++) {
        const division = DIVISIONS[i];

        if (Math.abs(duration) < division?.amount) {
            return formatter.format(Math.round(duration), division.name)
        }
        duration /= division?.amount
    }
}
