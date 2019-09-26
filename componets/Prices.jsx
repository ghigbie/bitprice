class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render(){
        return (
            <div>
                Prices
                <div>USD { this.props.bpi.USD.rate_float }</div>
                <div>GBP { this.props.bpi.GBP.rate_float }</div>
                <div>EUR { this.props.bpi.EUR.rate_float }</div>
            </div>
        );
    }
}

export default Prices;