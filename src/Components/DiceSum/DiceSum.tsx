import React, {useState} from "react";
import c from './DiceSum.module.css'

type DiceSumPropsType = {
    array: Array<number>
}

export const DiceSum = (props: DiceSumPropsType) => {
    let sum = 0
    let maxSum = 0

    for (let i = 0; i < props.array.length; i++) {
        sum = sum + props.array[i]
        maxSum = maxSum + 20
    }


    return (
        <span>
            <span className={sum === 0 ? c.error : c.sum }>
            {sum}
            </span>
            {sum === 0 && <span className={c.error}> Roll more than 0 Dices</span>}
            {sum <= maxSum/4 && <span className={c.bad}>Bad</span>}
            {sum > maxSum/4 && sum <= maxSum/2 && <span className={c.soso}>So-So</span>}
            {sum > maxSum/2 && sum <= maxSum*3/4 && <span className={c.good}> GooD</span>}
            {sum > maxSum*3/4 && <span className={c.super}>SUPER!!!</span>}
        </span>
    )
}