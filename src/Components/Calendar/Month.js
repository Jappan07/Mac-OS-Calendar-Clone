import React, { useRef, useEffect } from "react"
import { MONTHNAMES } from "../../utilities/global-constants"
import classes from "./Calender.module.scss"

let obs;
const Month = (props) => {
    const monthRef = useRef()
    useEffect(() => {
        obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.75) {
                    props.onVisible(props.monthId)
                }
            })
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 1
        })
        obs.observe(monthRef.current)
    })
    return (
        <div className={classes.Months} id={MONTHNAMES[props.monthId]} ref={monthRef}>
            {props.children}
        </div>
    )
}

export default Month