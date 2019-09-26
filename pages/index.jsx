import Fetch  from 'isomorphic-unfetch';
import Layout from './../componets/Layout';
import Prices from './../componets/Prices';


const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcom to Bitprice</h1>
            <Prices bpi={this.props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index;