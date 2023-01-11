import './Stockinfo.css'
function Stockinfo(props){
    return (
        // <>
        // <div className="Stockinfo">Stockinfo</div>
        // <span>{props.ticker}   </span>
        // <span>{props.lastprice}</span>
        // </>
        <table className='stocktable' border='1'>
            <tr><th>Ticker</th><th>Price</th></tr>
            <tr><td>{props.Ticker}</td><td>{props.Lastprice}</td></tr>
        </table>
    );
}

export default Stockinfo;