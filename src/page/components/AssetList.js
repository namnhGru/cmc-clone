import { useState, useEffect } from 'react'

export default function AssetList() {
    return (
        <div>
            <p>Your Assets</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24H</th>
                    <th>Holdings</th>
                    <th>Avg. Buy Price</th>
                    <th>Profit/Loss</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>Add</button>
                        <button>...</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}