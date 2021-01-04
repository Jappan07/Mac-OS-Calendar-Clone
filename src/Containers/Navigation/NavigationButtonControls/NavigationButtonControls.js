import React, { useState } from "react"
import classes, { button } from "./NavigationButtonControls.module.css"
import { MONTHNAMES } from "../../../utilities/global-constants"

const NavigationButtonControls = (props) => {
    const [currentMonth, setCurrentMonth] = useState(0)

    const executeScrollToday = () => {
        const element = document.getElementById("scrollTo")
        const yOffset = -500;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // element.scrollIntoView()
        console.log("This is " + element)
    }

    const executeScrollNext = () => {
        if (currentMonth >= 12) {
            setCurrentMonth(11)
        }
        else if (currentMonth < 0) {
            return null
        }
        else {
            setCurrentMonth(currentMonth => currentMonth + 1)
            const element = document.getElementById(MONTHNAMES[currentMonth])
            element.scrollIntoView()
        }
    }

    const executeScrollPrev = () => {
        if (currentMonth <= -1) {
            setCurrentMonth(0)
        }
        else if (currentMonth > 11) {
            return null
        }
        else {
            setCurrentMonth(currentMonth => currentMonth - 1)
            const element = document.getElementById(MONTHNAMES[currentMonth])
            element.scrollIntoView()
        }

    }

    return (
        <div className={classes.ButtonControls}>
            <button className={classes.ButtonPrev} onClick={executeScrollPrev}>&lt;</button>
            <button className={classes.ButtonToday} onClick={executeScrollToday}>Today</button>
            <button className={classes.ButtonNext} onClick={executeScrollNext}>&gt;</button>
        </div>
    )
}

export default NavigationButtonControls