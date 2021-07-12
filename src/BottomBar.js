import { Sidebar, Segment, Item, Icon, Header } from 'semantic-ui-react'
import AudioPlayer from "./AudioPlayer.js"
import { useContext } from 'react'
import BottombarContext from './context/bottombar.js'
import "./BottomBar.css"
import { getDate, capitalizeWords } from "./utils.js"
import { Link } from "react-router-dom"

function BottomBar() {
    const { visible, items } = useContext(BottombarContext)
    return (
        <Sidebar as={Segment} animation="push" direction="bottom" icon='labeled' vertical visible={visible} width='thin' style={{ backgroundColor: "white" }} >
            <Item.Group relaxed id="horizontalscroll">
                {items !== null ? items.map((e) => {
                    let iconName = ""
                    if (e.weather === "Sunny") {
                        iconName = "sun"
                    }
                    else if (e.weather === "Rainy") {
                        iconName = "rain"
                    }
                    else if (e.weather === "Snowy") {
                        iconName = "snowflake"
                    }
                    return (
                        <Link key={e.name["name-USen"] + e.id} to={{
                            pathname: e.path,
                            state: e.name["name-USen"]
                        }}>
                            <Item className="bar_image">
                                {e?.image_uri ? <Item.Image size='tiny' src={e?.icon_uri || e?.image_uri} className="imageCard" alt={e?.name} /> : <Icon size="huge" name={iconName}></Icon>}
                                <Item.Content>
                                    {e?.name ? <Item.Header>{capitalizeWords(e?.name["name-USen"])}</Item.Header> : null}
                                    <Item.Meta>{e?.availability?.rarity !== undefined ?
                                        <span className='date'>Rarity: {e?.availability?.rarity} {" "}<Icon name="diamond" /></span>
                                        : null}
                                        {e?.birthday !== undefined ?
                                            <p><Icon name="birthday cake"></Icon>Birthday: {e.birthday}</p> : null}
                                        {e?.personality !== undefined ?
                                            <p><Icon name="user"></Icon>Personality: {e.personality}</p> : null}
                                        {e?.hobby !== undefined ?
                                            <p><Icon name="clock"></Icon>Hobby: {e.hobby}</p> : null}
                                        {e?.isOrderable !== undefined ?
                                            <Icon name="shopping cart">Orderable?: {e.isOrderable ? "Yes" : "No"}</Icon> : null}
                                    </Item.Meta>
                                    <Item.Description className="itemDesc">
                                        {e?.availability !== undefined && "Availablity: " + getDate(e?.availability["month-array-northern"])}
                                    </Item.Description>
                                    <Item.Extra>
                                        {e?.price || e?.["sell-price"] ? <p className='date'>Sell Price: {e?.price || e?.["sell-price"]} {" "}<Icon name="star" /></p> : null}
                                    </Item.Extra>
                                </Item.Content>
                                {e?.music_uri ? <AudioPlayer music_uri={e?.music_uri}></AudioPlayer> : null}
                            </Item>
                        </Link>
                    )
                }) :
                    <Header id="noItems">You haven't added anything yet... Feel free to browse and add stuff to this list!</Header>
                }

            </Item.Group>
        </Sidebar >
    )
}

export default BottomBar;