import { useEffect, useRef, useState } from "react";
import { APIResponse, Definition, Meaning } from "~/types/api.types";
import { btnType } from "~/types/normalButton.types";
import { OutputTabType } from "~/types/outputTab.types";
import AudioPlayer from "./AudioPlayer";
import NormalButton from "./NormalButton";

export default function OutputTab({ result }: OutputTabType) {
  const [verbValueData, setVerbVAlueData] = useState<Definition[]>([]);
  const [dictionary, setDictionary] = useState<Boolean>(false);
  const [playing, setPlaying] = useState<Boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    !playing ? audioRef?.current?.play() : audioRef?.current?.pause();
    audioRef?.current?.addEventListener("ended", () => {
      setPlaying(false);
    });
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setPlaying(false);
    }
    const verbValue = result.map((data: APIResponse) =>
      data?.meanings?.find((verb: Meaning) =>
        dictionary ? verb.partOfSpeech === "verb" : verb.partOfSpeech === "noun"
      )
    );
    const definitions = verbValue[0]?.definitions || [];

    setVerbVAlueData(definitions);
  }, [result, dictionary, result[0]?.phonetics[0]?.audio]);

  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white w-[70%] min-h-[300px] flex rounded-xl p-6 shadow-md border border-gray-500 border-2">
        <div className="mt-4 flex flex-col">
          {result.length !== 0 && (
            <>
              <AudioPlayer
                playing={playing}
                audioRef={audioRef}
                toggleAudio={toggleAudio}
                result={result}
              />
              <div className="flex mt-5">
                <NormalButton
                  btnName="noun"
                  type={btnType.submit}
                  bgColor="bg-black"
                  textColor="text-white"
                  onClick={() => setDictionary(false)}
                />
                <NormalButton
                  btnName="verb"
                  type={btnType.submit}
                  bgColor="bg-gray-400"
                  textColor="black"
                  onClick={() => setDictionary(true)}
                />
              </div>
            </>
          )}
          {verbValueData?.map((verbData: Definition, index) => {
            return <p key={index}>{verbData?.definition}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
