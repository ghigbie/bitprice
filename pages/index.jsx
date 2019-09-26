import Fetch  from 'isomorphic-unfetch';
import Layout from './../componets/Layout';
import Prices from './../componets/Prices';


const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcom to Bitprice</h1>
            <Prices bpi={props.bpi} />
            { console.log(props.bpi) }
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    console.log("@@@@Initial@@@@")
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log(data);
    return {
        bpi: data.bpi
    }
}

export default Index;