import pauseButton from "~/resources/pause-button.png";
import playButton from "~/resources/play-button.png";
import { AudioPlayerTypes } from "~/types/audioPlayer.types";

export default function AudioPlayer({playing,toggleAudio,audioRef,result}:AudioPlayerTypes) {
    
  return (
    <div className="mt-4 flex">
    <button type="button" onClick={toggleAudio}>
      <img
        className={`w-[61px] h-[61px]`}
        src={playing ? pauseButton : playButton}
        alt={playing ? "pause-button" : "play-button"}
      />
    </button>
    <audio ref={audioRef} style={{ display: "none" }}>
      <source
        src={`${result[0]?.phonetics[0].audio}`}
        type="audio/mpeg"
      />
    </audio>
    <p className="mt-4 ml-3">{result[0]?.phonetic}</p>
  </div>  )
}
