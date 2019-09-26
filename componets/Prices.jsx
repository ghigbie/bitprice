class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render(){
        let listItem = ''
            if(this.state.currency === 'GBP'){
                listItem = (
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.GBP.description}:
                        &nbsp;
                        <span className="badge badge-primary">
                            {this.props.bpi.GBP.code}
                        </span>
                        &nbsp;
                        <strong>
                            {this.props.bpi.GBP.rate}
                        </strong>
                    </li>
                );
            }else if(this.state.currency == 'EUR'){
                listItem = (
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.EUR.description}:
                        &nbsp;
                        <span className="badge badge-primary">
                            {this.props.bpi.EUR.code}
                        </span>
                        &nbsp;
                        <strong>
                            {this.props.bpi.EUR.rate}
                        </strong>
                    </li>
                );
            }else{
                listItem = (
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.USD.description}:
                        &nbsp;
                        <span className="badge badge-primary">
                            {this.props.bpi.USD.code}
                        </span>
                        &nbsp;
                        <strong>
                            {this.props.bpi.USD.rate}
                        </strong>
                    </li>
                );
            }
        return (
            <div>
                <ul className="list-group">
                    {listItem}
                </ul>
                <br/>
                <select onChange={ e => this.setState({currency: e.target.value})}
                        className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Prices;