import { useState, useEffect } from 'react'
import AssetListRow from './AssetListRow'

export default function AssetList(props) {
    return (
        <div>
            <p>Your Assets</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24H</th>
                        <th>Holdings</th>
                        <th>Avg. Buy Price</th>
                        <th>Profit/Loss</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.assets.map((asset, i) => <AssetListRow asset={asset} key={i}/>)}
                </tbody>
            </table>
        </div>
    )
}