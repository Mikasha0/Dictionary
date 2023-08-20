import { APIResponse } from "./api.types";

export interface AudioPlayerTypes{
    playing:Boolean,
    toggleAudio:()=>void,
    audioRef:React.MutableRefObject<HTMLAudioElement | null>,
    result:APIResponse[]
}