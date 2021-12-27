export default function AssetListRow(props) {
    return (
        <tr>
            <td>{props.asset.name}</td>
            <td>{props.asset.price}</td>
            <td>{props.asset.twentyfour}</td>
            <td>{props.asset.holding}</td>
            <td>{props.asset.avgBuyPrice}</td>
            <td>{props.asset.pnl}</td>
            <td>
                <button>Add</button>
                <button>...</button>
            </td>
        </tr> 
    )
}