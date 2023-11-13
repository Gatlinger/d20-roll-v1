import React, {useState} from 'react';
import './App.css';
import {Button} from './Components/Button';
import {D20RollList} from "./Components/D20RollList/D20RollList";

function App() {
    let [ammountD20, setAmmountD20] = useState<number>(0)
    let [arrayD20, setArrayD20] = useState<Array<number>>([])

    let a = 0
    const plusOne = () => {
        setAmmountD20(ammountD20 + 1)
    }
    const minusOne = () => {
        setAmmountD20(ammountD20 - 1)
    }
    const rollD20Dice = () => {
        let a = Math.floor(Math.random() * 20 + 1)
        setArrayD20([a])
    }
    const rollD20Many = () => {
        setArrayD20([])
        for (let i = 0; i < ammountD20; i++) {
            let a = Math.floor(Math.random() * 20 + 1)
            // setArrayD20([...arrayD20, a])
            setArrayD20(prevState => [...prevState, a])
        }
    }

    return (
        <div>
            <span>D20 Ammount: {ammountD20}</span>
            <span><Button name={'+1'} callBack={plusOne}/></span>
            <span><Button name={'-1'} callBack={minusOne}/></span>
            <div>
                <span><Button name={'ROLL 1'} callBack={rollD20Dice}/></span>
                <span><Button name={'ROLL AMMOUNT'} callBack={rollD20Many}/></span>
            </div>
            <D20RollList array={arrayD20}/>
        </div>
    )
}

export default App;
