import { useEffect, useContext } from "react"
import { Container, Grid, Placeholder, Segment, Item, Icon, Header, Button } from "semantic-ui-react"
import resourceContext from "../context/resource.js"
import { convertGender, findByName } from "../utils.js"
import "./Villagers.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ".././SoundResource.js"
import BottombarContext from '../context/bottombar.js'

function Villagers({location}) {
    const { resources, setResources, setFullList } = useContext(resourceContext)
    const { items, setItems } = useContext(BottombarContext)
    useEffect(() => {
        async function getVillagers() {
            const response = await fetch(`http://acnhapi.com/v1/villagers/`)
            const data = await response.json()
            let newResources = Object.values(data)
            let temp = newResources.map(e => {
                return {...e, path: location.pathname}
            })
            setResources(temp)
            setFullList(temp)
        }
        getVillagers()
    }, [setResources, setFullList, location.pathname])
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
                    resources?.map((villager ) => {
                        return (
                            <Grid.Column key={villager.id} stretched={true}>
                                <Item className="villagerInfo" id={villager?.name?.["name-USen"]} style={{ backgroundColor: villager["bubble-color"], color: villager["text-color"], border: `2px solid ${villager["text-color"]}` }}>
                                    <LazyLoadImage src={villager.image_uri} alt={villager?.name?.["name-USen"]} className="imageSize" />
                                    <Item.Content>
                                        <Header size="large" style={{ color: villager["text-color"] }}>{villager.name["name-USen"]}</Header>
                                        <Item.Meta>
                                            <p>Gender: <Icon name={convertGender(villager.gender)}></Icon></p>
                                            <p><Icon name="birthday cake"></Icon>Birthday: {villager.birthday}</p>
                                            <p><Icon name="user"></Icon>Personality: {villager.personality}</p>
                                            <p><Icon name="dna"></Icon>Species: {villager.species}</p>
                                            <p><Icon name="clock"></Icon>Hobby: {villager.hobby}</p>
                                        </Item.Meta>
                                        <Item.Description className="villagerQuote">"{villager.saying}"</Item.Description>
                                    </Item.Content>
                                    <Item.Content>
                                        <Button onClick={() => {
                                            if (items === null) {
                                                const copy = []
                                                copy.push(villager)
                                                setItems(copy)
                                            }
                                            else if (findByName(items, villager?.name["name-USen"]) === false) {
                                                const copy = items.slice()
                                                copy.push(villager)
                                                setItems(copy)
                                            }
                                        }
                                        }>Add to My List</Button>
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
