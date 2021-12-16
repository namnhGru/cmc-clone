import { useState, useEffect } from 'react'

export default function ActionBar(props) {
    return (
        <div>
            <div>
                <p>Current Balance</p>
                <button>Show/hide Balance</button>
            </div>
            <div>
                <p>$10,000.00</p>
                <p>{props.change}</p>
            </div>
            <div>
                <p>+$1000.00</p>
                <p>24h</p>
            </div>
            <button>...More</button>
            <button>Add New Txs</button>
        </div>
    )
}