import React, { useRef, useState } from "react"
import classes from "./Calender.module.scss"
import { DATE, MONTHNAMES } from "../../utilities/global-constants"
import PopUp from "../UI/PopUp/PopUp"

const Tile = (props) => {
    const [seen, setSeen] = useState(false)

    const styleDateClasses = [classes.Tile]
    const styleSpanClasses = [classes.Text]
    const scrollRef = useRef(null)
    let span = (
        <span className={styleSpanClasses.join(" ")} >
            {props.value}
        </span>
    )
    let postEntry = null
    if (props.postMonth === props.month && props.postDay === props.value) {
        postEntry = (
            <div>
                <img className={classes.PostImg} src={props.postImg} alt="postimage" />
                {seen ? <PopUp
                    imgSrc={props.postImg}
                    popUpClosed={props.popUpHandler}
                    postText={props.postText}
                    postMonth={props.month}
                    postDay={props.postDay} /> : null}
            </div>

        )
    }
    if (props.day === 0) {
        styleDateClasses.push(classes.Sunday)
    }
    if (props.activeMonth) {
        styleDateClasses.push(classes.ActiveMonth)
    }
    if (props.value === DATE.getDate() - 20) {
        if ((props.value === 1 && (props.month - 1) === DATE.getMonth()) || (props.value !== 1 && (props.month - 1) === DATE.getMonth())) {
            styleSpanClasses.push(classes.Active)
            span = (
                <span id="scrollTo" ref={scrollRef} className={styleSpanClasses.join(" ")} >
                    {props.value}
                </span>
            )
        }
    }
    const popUpHandler = () => {
        setSeen(seen => !seen)
    }
    return (
        <div className={styleDateClasses.join(" ")} onClick={popUpHandler}>
            {props.value === 1 ? <div className={classes.Month}>{MONTHNAMES[props.month - 1].substr(0, 3)}</div> : null}
            {span}
            {postEntry}
        </div>
    )
}


export default Tile