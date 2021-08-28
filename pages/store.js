
import {
    Card,
    Input,
    Header,
    Container,
    Grid
} from 'semantic-ui-react'
import Layout from '../components/Layout'
import Contents from '../components/Contents'


export default async function getStaticProps () {
    const res = fetch(`https://dobook.herokuapp.com/login`)
}

const Store = () => {

    return (
        <>
    <Layout>

        <Container text textAlign='center'
        style={{
            paddingTop: '5em',
            paddingBottom: '1em'
        }}
        >        
            <h2>Check latest items from the Buckle market</h2>
            <Input action='Search' placeholder='Books, Magazines...' />

        <Contents />
        </Container>



    </Layout>
    </>
    )
}



export default Store