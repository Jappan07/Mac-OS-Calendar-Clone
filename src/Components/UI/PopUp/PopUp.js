import React from "react"
import Backdrop from "../Backdrop/Backdrop"
import "./PopUp.css"
import { MONTHNAMES } from "../../../utilities/global-constants"

const PopUp = (props) => {
    return (
        <div className="PopUp">
            <Backdrop show={props.show} clicked={props.popUpClosed} />
            <img className="Img" src={props.imgSrc} alt="postimage"></img>
            <div className="legendsRatings">
                <div className="legends">
                    <span className="circle">M</span>
                    <span className="circle">H</span>
                    <span className="circle">C</span>
                    <span className="circle">DR</span>
                </div>
                <div className="ratings">
                    <a href="#5" title="Give 5 stars">★</a>
                    <a href="#4" title="Give 4 stars">★</a>
                    <a href="#3" title="Give 3 stars">★</a>
                    <a href="#2" title="Give 2 stars">★</a>
                    <a href="#1" title="Give 1 star">★</a>
                </div>
            </div>
            <div className="content">
                <h5>{props.postDay} {MONTHNAMES[props.postMonth - 1]} 2020</h5>
                <p>{props.postText}</p>
            </div>
        </div>
    )
}

export default PopUp