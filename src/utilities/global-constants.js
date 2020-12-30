import { getMonthsInYear } from "./dateutils"

export const MONTHSINYEAR = 12
export const WEEKSINYEAR = 54
export const DAYSINWEEK = 7
export const DATE = new Date()
export const DAYSINMONTH = getMonthsInYear(DATE.getFullYear())
export const DAYNAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
export const MONTHNAMES = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "Decemeber"
]