import { Segment, Header, Icon, Image } from "semantic-ui-react"
import AudioPlayer from "./AudioPlayer.js"
import "./SoundResource.css"
import {tConvert} from "./utils.js"

function SoundResource({ songInfo }) {
    let iconName = ""
    if (songInfo.weather === "Sunny") {
        iconName = "sun"
    }
    else if (songInfo.weather === "Rainy"){
        iconName = "rain"
    }

    else if (songInfo.weather === "Snowy"){
        iconName = "snowflake"
    }

    return (
        <Segment className="song-columns">
            {songInfo.image_uri ? <Image size="small" src={songInfo.image_uri}></Image>: <Icon size="huge" name={iconName}></Icon>}
            
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
        </Segment>
    )
}

export default SoundResource;