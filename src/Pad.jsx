import { useEffect, useState } from "react";

const Pad = ({ clip, clipID, volume }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  function playSound() {
    const audioBtn = document.getElementById(clip.keyTrigger);
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 100);

    clipID(clip.id);

    audioBtn.volume = volume;
    audioBtn.currentTime = 0;
    audioBtn.play();
  }

  return (
    <div
      onClick={playSound}
      id={clip.id}
      className={`drum-pad p-7 text-xl font-[900] shadow-md shadow-white rounded-md text-black flex items-center justify-center cursor-pointer bg-zinc-200 select-none ${
        active && "bg-zinc-400 translate-y-px shadow-sm"
      }`}
    >
      <audio className="clip" id={clip.keyTrigger} src={clip.url}></audio>
      {clip.keyTrigger}
    </div>
  );
};

export default Pad;
