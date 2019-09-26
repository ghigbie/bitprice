class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render(){
        return (
            <div>
                Prices
                {props.bpi}
            </div>
        );
    }
}

export default Prices;