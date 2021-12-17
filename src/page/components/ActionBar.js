import { useState } from "react"
import Dropdown from "../../components/Dropdown"

export default function ActionBar(props) {
    const [isShownBalance, setIsShownBalance] = useState(true)
    const [isShownMore, setIsShownMore] = useState(false)
    return (
        <div>
            <div>
                <p>Current Balance</p>
                <button onClick={() => setIsShownBalance(!isShownBalance)}>Show/hide Balance</button>
            </div>
            <div>
                <p>${ isShownBalance ? props.currentValue : "-.-"}</p>
                <p>{props.dayChange}</p>
            </div>
            <div>
                <p>${props.dayChange * props.currentValue / 100}</p>
                <p>24h</p>
            </div>
            <button onClick={() => setIsShownMore(true)}>...More</button>
            <Dropdown isShown={isShownMore} onClose={() => setIsShownMore(false)} isButton={true} list={[{text: "Edit Portfolio"}]}>
                <div>
                    <div>
                        <h4>Edit portfolio</h4>
                    </div>
                    <div>
                        <p>Portfolio name</p>
                        <input type="text" onChange={e => props.portfolioChange(e.target.value)}></input>
                        <p>Number of characters</p>
                    </div>
                </div>
            </Dropdown>
            <button>Add New Txs</button>
        </div>
    )
}