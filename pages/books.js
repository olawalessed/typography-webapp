




export async function getStaticProps (context) {
    const res = await fetch(`https://dobook.herokuapp.com`)
    const data = await res.json()


    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { data }
    }
}


const Books = (data) => {
    console.log(data.message)


    return (
        <div>
            <h3>Book Lists</h3>
            <li>Book 1</li>
        </div>
    )
}

export default Books