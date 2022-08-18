import { useState } from "react";
import { audioClips } from "./Audio";
import Pad from "./Pad";

function App() {
  const audioID = (id) => {
    setCurrentAudio(id);
  };

  const [currentAudio, setCurrentAudio] = useState("");
  const [volume, setVolume] = useState(0.5);

  return (
    <>
      <div
        id="drum-machine"
        className="h-screen w-11/12 mx-auto flex justify-center items-center"
      >
        <main
          id="display"
          className="grid h-auto bg-slate-400 w-full md:w-11/12 lg:w-8/12 md:grid-cols-2"
        >
          <div className="pad-container bg-slate-900 text-white p-6 md:p-9 ">
            <div className="switches grid gap-4 grid-cols-3 grid-rows-3">
              {audioClips.map((clip) => {
                return (
                  <Pad
                    clip={clip}
                    key={clip.id}
                    clipID={audioID}
                    volume={volume}
                  />
                );
              })}
            </div>
          </div>
          <div className="buttons-container bg-slate-800 text-white p-6 md:p-9">
            <div className="volume-container">
              <h4 className="text-center mb-3">Volume</h4>
              <input
                id="small-range"
                type="range"
                value={volume}
                min="0"
                max="1"
                step="0.01"
                onChange={(e) => {
                  setVolume(e.target.value);
                  setCurrentAudio(`Volume: ${Math.floor(volume * 100)}`);
                }}
                className="mb-6 w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
              />
            </div>

            <div className="currentAudio_container rounded bg-zinc-400 p-6 text-center text-black text-lg font-[600]">
              {currentAudio}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
