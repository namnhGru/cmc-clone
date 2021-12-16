import { useState, useEffect } from 'react'
import ActionBar from './components/ActionBar'
import AssetList from './components/AssetList'

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState({
        name: "My Main Portfolio",
        assets: [
            {
                name: "Ethereum",
                tick: "ETH",
                price: 4000.00,
                dayChange: 5.37,
                txs: [
                    {
                        type: "buy",
                        date: new Date(),
                        tPrice: 5000,
                        qty: 0.05,
                        fee: 0,
                        note: ''
                    },
                    {
                        type: "buy",
                        date: new Date(),
                        tPrice: 5000,
                        qty: 0.05,
                        fee: 0,
                        note: ''
                    },
                ]
            }
        ]
    })

    function calculatePortfolioChange() {
        return portfolio.assets.reduce((change, asset) => {
            let assetWithOty = asset.txs.reduce((acc, txs) => {
                acc.qty+= txs.qty
                return acc 
            }, { name: asset.name, qty: 0 })
            change = assetWithOty.qty * asset.price * asset.dayChange / 100

            return change
        }, 0)
    }

    return (
        <div>
           {/* <BreadCrumb />
           <BriefInfo /> */}
           <button>Create portfolio</button>
           <ActionBar change={calculatePortfolioChange()}/>
           {/* <ChartBar /> */}
           <AssetList />
        </div>
    )
}