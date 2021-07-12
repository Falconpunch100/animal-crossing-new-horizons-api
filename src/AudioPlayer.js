function AudioPlayer({music_uri}) {
    return (
        <audio className="bottomBarMP3" controls style={{width: "47%"}}>
            <source src={music_uri}></source>
        </audio>
    )
}

export default AudioPlayer;