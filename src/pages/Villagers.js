import { useEffect, useContext } from "react"
import { Container, Grid, Placeholder, Segment, Item, Icon, Header} from "semantic-ui-react"
import resourceContext from "../context/resource.js"
import { convertGender } from "../utils.js"
import "./Villagers.css"

function Villagers() {
    const { resources, setResources, setFullList } = useContext(resourceContext)
    useEffect(() => {
        async function getVillagers() {
            const response = await fetch(`http://acnhapi.com/v1/villagers/`)
            const data = await response.json()
            setResources(Object.values(data))
            setFullList(Object.values(data))
        }
        getVillagers()
    }, [setResources, setFullList])

    return (
        <Container>
            <Grid columns="4" id="song-grid" relaxed="very">
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
                    resources?.map((villager) => {
                        return (
                            <Grid.Column key={villager.id} stretched={true}>
                                <Item className="villagerInfo" style={{backgroundColor: villager["bubble-color"], color: villager["text-color"], border: `2px solid ${villager["text-color"]}`}}>
                                    <Item.Image size='tiny' src={villager.image_uri} />

                                    <Item.Content>
                                        <Header size="large" style={{color: villager["text-color"]}}>{villager.name["name-USen"]}</Header>
                                        <Item.Meta>
                                            <p>Gender: <Icon name={convertGender(villager.gender)}></Icon></p>
                                            <p><Icon name="birthday cake"></Icon>Birthday: {villager.birthday}</p>
                                            <p><Icon name="user"></Icon>Personality: {villager.personality}</p>
                                            <p><Icon name="dna"></Icon>Species: {villager.species}</p>
                                            <p><Icon name="clock"></Icon>Hobby: {villager.hobby}</p>
                                        </Item.Meta>
                                        <Item.Description className="villagerQuote">"{villager.saying}"</Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                        )
                    })}
            </Grid>
        </Container>
    )
}

export default Villagers;

//bubble-color (change the style of the border and background color)
//text-color (change the style of the border and background color)
