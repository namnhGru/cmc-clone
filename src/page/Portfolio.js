import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
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

    const [showModal, setShowModal] = useState(false)

    function calculatePortfolioQty(asset) {
        return asset.txs.reduce((acc, txs) => {
            acc.qty+= txs.qty
            acc.currentValue+= txs.qty * asset.price
            return acc 
        }, { name: asset.name, qty: 0, currentValue: 0 })
    }

    function calculatePortfolioCurrentValue() {
        return portfolio.assets.reduce((result, asset) => {
            result+=calculatePortfolioQty(asset).currentValue
            return result
        }, 0)
    }

    function calculatePortfolioChangePercentage() {
        let assetsAndPortfolio = portfolio.assets.reduce((change, asset) => {
            // collect assets quantity, multiply by daily change
            let { qty }= calculatePortfolioQty(asset)
            change.total += qty * asset.price
            let assetPortfolio = qty * asset.price * asset.dayChange
            change.assets.push(assetPortfolio)
            return change
        }, {assets: [], total: 0})
        
        // divide above result to total portfolio to take out weighted change
        let { assets, total } = assetsAndPortfolio
        return assets.reduce((change, asset) => {
            change+= asset/ total
            return change
        }, 0)
    }

    function setPortfolioName(name) {
        setPortfolio( object => ({...object, name: name}))
    }

    return (
        <div>
           {/* <BreadCrumb />
           <BriefInfo /> */}
           <button>Create portfolio</button>
           <ActionBar portfolioChange={setPortfolioName} dayChange={calculatePortfolioChangePercentage()} currentValue= {calculatePortfolioCurrentValue()}/>
           {/* <ChartBar /> */}
           <AssetList />
           <button onClick={() => setShowModal(true)}>Show Modal</button>
           <Modal isShow={showModal} closeModal={() => setShowModal(false)}/>
        </div>
    )
}