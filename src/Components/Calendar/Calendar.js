import React, { useState, useEffect } from "react"
import { generateDateMatrix } from "../../utilities/dateutils"
import Month from "./Month"
import axios from "axios"
import * as dateConstants from "../../utilities/global-constants"
import classes from "./Calender.module.scss"
import Tile from "./Tile"
import { postObject } from "../../utilities/postObject";

const Calendar = (props) => {
    const [postImg, setPostImg] = useState(null)
    const [postMonth, setPostMonth] = useState(null)
    const [postDay, setPostDay] = useState(null)
    const [postData, setPostData] = useState({})
    const [postText, setPostText] = useState(null)
    useEffect(() => {
        axios.post("https://quinncareapidev.azurewebsites.net/api/graph", postObject)
            .then(response => {
                // let imgUrls = []
                let fullTime = response.data.ResponseObjects[0].Posts[1].CalendarDateTime
                // response.data.ResponseObjects.map(res => {
                //     res.Posts.map(post => {
                //         imgUrls.push(post.Images[0].ImageUrl)
                //     })
                // })
                setPostMonth(+fullTime.substr(5, 2))
                setPostImg(response.data.ResponseObjects[0].Posts[1].Images[0].ImageUrl)
                setPostDay(+fullTime.substr(8, 2))
                setPostData({ ...response.data })
                setPostText(response.data.ResponseObjects[0].Posts[1].Text)
            })
    }, [])
    const calendarMatrix = generateDateMatrix(props.activeMonth)
    const firstDayOfMonth = []
    const weekRows = []
    let currentMonth = 1
    let monthRow = []

    for (let weekNumber = 0; weekNumber < dateConstants.WEEKSINYEAR; weekNumber++) {
        let weekRow = []
        for (let dayNumber = 0; dayNumber < dateConstants.DAYSINWEEK; dayNumber++) {
            if (calendarMatrix[weekNumber][dayNumber][0] === 1) {
                firstDayOfMonth.push(weekNumber)
            }
            weekRow.push(
                <Tile
                    postText={postText}
                    postMonth={postMonth}
                    postImg={postImg}
                    postDay={postDay}
                    postData={postData}
                    key={Math.random()}
                    value={calendarMatrix[weekNumber][dayNumber][0]}
                    day={dayNumber}
                    month={firstDayOfMonth.length}
                    activeMonth={calendarMatrix[weekNumber][dayNumber][1]} />
            )
        }
        weekRows.push(<div key={Math.random()} className={classes.Week}>{weekRow}</div>)
    }


    const monthRows = Array(dateConstants.WEEKSINYEAR)
        .fill(0)
        .map((_, index) => {
            if (index === firstDayOfMonth[currentMonth]) {
                const monthValue = (
                    <Month
                        key={Math.random()}
                        monthId={currentMonth - 1}
                        onVisible={props.setActiveMonth} >
                        {monthRow}
                    </Month>
                )
                currentMonth++
                monthRow = [weekRows[index]]
                return monthValue
            }
            else {
                monthRow.push(weekRows[index])
            }
            return true
        })

    return monthRows
}

export default Calendar