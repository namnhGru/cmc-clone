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
                price: 5000.00,
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

    function calculatePortfolioChangePercentage() {
        let assetsAndPortfolio = portfolio.assets.reduce((change, asset) => {
            let assetWithOty = asset.txs.reduce((acc, txs) => {
                acc.qty+= txs.qty
                return acc 
            }, { name: asset.name, qty: 0 })
            change.total += assetWithOty.qty * asset.price
            let assetPortfolio = assetWithOty.qty * asset.price * asset.dayChange
            change.assets.push(assetPortfolio)
            return change
        }, {assets: [], total: 0})
        
        let { assets, total } = assetsAndPortfolio
        return assets.reduce((change, asset) => {
            change+= asset/ total
            return change
        }, 0)
    }

    return (
        <div>
           {/* <BreadCrumb />
           <BriefInfo /> */}
           <button>Create portfolio</button>
           <ActionBar change={calculatePortfolioChangePercentage()}/>
           {/* <ChartBar /> */}
           <AssetList />
        </div>
    )
}