import SingleTypo from "../../../components/Typography/SingleTypo"
import allTypography from "../../../utils/typographySVG.json"

const fileLoader = () => {
    const content = allTypography.content
    return content
}


export default function Slug({item}) {
    
    // Return the length of all item
    const charLength = fileLoader().length

    return (
      <div>
        <SingleTypo character={item} charLength={charLength} />
      </div>
    );
}


export async function getStaticPaths() {
    // Get typography list
    const typographies = fileLoader()

    // get paths list
    const paths = typographies.map((character, index) => ({
        params: { slug: character.name, id: index },
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    
    const data = fileLoader()
    const index = data.findIndex(item => item.name === slug)
    // console.log(data[index])
    

    return {
        props: {
          item: data[index]
      }
    };
}