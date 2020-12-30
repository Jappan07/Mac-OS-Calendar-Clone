import * as dateConstants from "./global-constants"

const checkLeapYear = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
export const getMonthsInYear = (year) => {
    return [31, checkLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

// using zeller's formula ===> F = K + [(13xM – 1) /5] + D + [D/4] + [C/4] – 2C

const generateFirstDayOfYear = (year, K = 1, m = 0) => {
    const M = ((m + 10) % 12) + 1;
    const D = (year % 100) - (m > 10 ? 1 : 0)
    const C = Math.floor(year / 100)
    const F = (K + Math.floor((13 * M - 1) / 5) + D + Math.floor(D / 4) + Math.floor(C / 4) - 2 * C)
    const day = F > 0 ? F : (F - (Math.floor(F) + 2) * 7) % 7
    return day % 7 - 2
}

export const generateDateMatrix = (activeMonth) => {
    const matrix = Array.from({ length: dateConstants.WEEKSINYEAR }, (_) => {
        return (
            Array.from({ length: dateConstants.DAYSINWEEK }, (_) => [0, false])
        )
    })
    const startingDayOfTheYear = generateFirstDayOfYear(dateConstants.DATE.getFullYear())

    //fill the first week
    for (let i = 0; i < startingDayOfTheYear; i++) {
        matrix[0][i][0] = dateConstants.DAYSINMONTH[11] - (startingDayOfTheYear - 1) + i
    }
    let week = 0, k = startingDayOfTheYear;
    for (let i = 0; i < dateConstants.MONTHSINYEAR; i++) {
        for (let j = 0; j < dateConstants.DAYSINMONTH[i]; j++) {
            matrix[week][k][0] = j + 1
            matrix[week][k][1] = i === activeMonth
            k++
            if (k === dateConstants.DAYSINWEEK) {
                k = 0
                week++
            }
        }
    }
    for (let i = k; i < dateConstants.DAYSINWEEK; i++) {
        matrix[week][i][0] = i - k + 1;

    }
    return matrix
}

