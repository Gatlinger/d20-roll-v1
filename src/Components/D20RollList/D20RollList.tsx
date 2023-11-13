import React from "react";
import {DiceSum} from "../DiceSum/DiceSum";
import c from "./D20RollList.module.css"

type RollListPropsType = {
    array: Array<number>
}

export const D20RollList = (props: RollListPropsType) => {
    return (
        <div>
            <div className={c.default}>
                {props.array.map((n, index) =>
                    <div>
                        <span>{index + 1} - </span>
                        <span>D20: </span>
                        <span className={c.number}>{n}</span>
                        {n===1 && <span className={c.one}> Критическая неудача </span>}
                        {n===20 && <span className={c.tweny}> Критическая удача </span>}
                    </div>)}
            </div>
            <div>
                SUM : <DiceSum array={props.array}/>
            </div>
        </div>
    )
}