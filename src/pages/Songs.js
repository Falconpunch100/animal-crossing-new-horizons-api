import { Container, Grid, Placeholder, Segment } from "semantic-ui-react"
import { useEffect, useContext } from "react"
import SoundResource from ".././SoundResource.js"
import "../SoundResource.css"
import resourceContext from "../context/resource.js"

function Songs({ page }) {
    const { resources, setResources, setFullList } = useContext(resourceContext)
    useEffect(() => {
        async function getSongs() {
            const response = await fetch(`http://acnhapi.com/v1/${page}/`)
            const data = await response.json()
            setResources(Object.values(data))
            setFullList(Object.values(data))
        }
        getSongs()
    }, [setResources, setFullList, page])
    return (

        <Container fluid>
            <Grid columns="3" id="song-grid">
                {resources === null ?
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                        return (
                            <Grid.Column key={num} stretched={true}>
                                <Segment>
                                    <Placeholder fluid>
                                        <Placeholder.Image>
                                        </Placeholder.Image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder>
                                </Segment>
                            </Grid.Column>
                        )
                    }) :
                    resources?.map((song) => {
                        return (
                            <Grid.Column key={song.id} stretched={true}>
                                <SoundResource songInfo={song}></SoundResource>
                            </Grid.Column>
                        )
                    })}
            </Grid>
        </Container>

    )
}

export default Songs;