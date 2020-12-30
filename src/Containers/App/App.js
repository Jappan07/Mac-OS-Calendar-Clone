import React, { useState } from "react"
import classes from "./App.module.scss"
import { MONTHNAMES, DATE, DAYNAMES } from "../../utilities/global-constants"
import Calendar from "../../Components/Calendar/Calendar"
import Day from "../../Components/Calendar/Day";
import NavigationButtonControls from "../Navigation/NavigationButtonControls/NavigationButtonControls"

const App = () => {
    const [activeMonth, setActiveMonth] = useState(0)
    return (
        <div>
            <nav className={classes.Nav}>
                <div className={classes.FixedNavbarItems}>
                    <NavigationButtonControls currentMonth={activeMonth} setCurrentMonth={setActiveMonth} />
                    <h1 className={classes.Heading}>
                        {MONTHNAMES[activeMonth]}
                        <span className={classes.Span}>{" " + DATE.getFullYear()}</span>
                    </h1>
                </div>
                <div className={classes.Row}>
                    {
                        DAYNAMES.map((dayName, index) => {
                            return (
                                <Day className={classes.Day} key={index} day={dayName} />
                            )
                        })
                    }
                </div>
            </nav>
            <div className={classes.Calendar}>
                <Calendar setActiveMonth={setActiveMonth} activeMonth={activeMonth} />
            </div>

        </div>
    );
}

export default App;
