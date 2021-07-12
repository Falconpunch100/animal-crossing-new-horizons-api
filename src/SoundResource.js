import { Segment, Header, Icon, Button } from "semantic-ui-react"
import AudioPlayer from "./AudioPlayer.js"
import "./SoundResource.css"
import { useContext } from "react"
import { tConvert, findByName } from "./utils.js"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BottombarContext from './context/bottombar.js'
import { useLocation } from "react-router-dom"

function SoundResource({ songInfo }) {
    const { items, setItems } = useContext(BottombarContext)
    const location = useLocation()
    let iconName = ""
    if (songInfo.weather === "Sunny") {
        iconName = "sun"
    }
    else if (songInfo.weather === "Rainy") {
        iconName = "rain"
    }
    else if (songInfo.weather === "Snowy") {
        iconName = "snowflake"
    }
    if (songInfo?.name === undefined) {
        songInfo.name = {
            "name-USen": songInfo.weather + " " + tConvert(songInfo.hour)
        }
    }
    songInfo.path = location.pathname
    return (
        <Segment className="song-columns" id={songInfo?.name?.["name-USen"]}>
            {songInfo.image_uri ? <LazyLoadImage alt={songInfo?.name?.["name-USen"]} className="imageSize" src={songInfo?.image_uri}></LazyLoadImage> : <Icon size="huge" name={iconName}></Icon>}

            <Header>
                {songInfo?.name?.["name-USen"] ? songInfo?.name?.["name-USen"] : "Weather: " + songInfo.weather}
            </Header>
            <h5>
                {typeof songInfo.hour === "number" ? "Hour: " + tConvert(songInfo.hour) : null}
            </h5>
            {songInfo.isOrderable ? <Header className="order" as="h6" icon>
                <Icon name="shopping cart">Orderable?: {songInfo.isOrderable ? "Yes" : "No"}</Icon>
            </Header> : null}
            <AudioPlayer music_uri={songInfo.music_uri}></AudioPlayer>
            <Button disabled={findByName(items, songInfo?.name?.["name-USen"])} onClick={e => {
                e.stopPropagation()
                if (items === null) {
                    const copy = []
                    copy.push(songInfo)
                    setItems(copy)
                }
                else if (findByName(items, songInfo?.name?.["name-USen"]) === false) {
                    const copy = items.slice()
                    copy.push(songInfo)
                    setItems(copy)
                }
            }} style={{ backgroundColor: "lightgreen" }}>Add To My List</Button>
        </Segment>
    )
}

export default SoundResource;