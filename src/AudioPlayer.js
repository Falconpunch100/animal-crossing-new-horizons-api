function AudioPlayer({music_uri}) {
    return (
        <audio controls>
            <source src={music_uri}></source>
        </audio>
    )
}

export default AudioPlayer;