import { Segment, Header, Icon } from "semantic-ui-react"
import AudioPlayer from "./AudioPlayer.js"
import "./SoundResource.css"
import {tConvert} from "./utils.js"
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <Segment className="song-columns" id={songInfo?.name?.["name-USen"]}>
            {songInfo.image_uri ? <LazyLoadImage alt={songInfo?.name?.["name-USen"]} className="imageSize" src={songInfo?.image_uri}></LazyLoadImage>: <Icon size="huge" name={iconName}></Icon>}
            
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