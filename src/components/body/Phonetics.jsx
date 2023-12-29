import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiVolumeUp } from "react-icons/hi";
import AudioError from "../AudioError";

const Phonetics = () => {
  const phonetics = useSelector(
    (state) => state.search.search[0]?.phonetics[0]
  );
  const [isError, setIsError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsError(false);
  }, [phonetics]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    if (phonetics.audio === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {phonetics && (
        <>
          <button
            className="bg-sky-200 p-3 sm:p-5 rounded-full text-sky-900 hover:bg-sky-950 hover:text-stone-50"
            onClick={playAudio}
          >
            <HiVolumeUp />
          </button>
          {isError && <AudioError />}
          <audio ref={audioRef} src={phonetics.audio}></audio>
        </>
      )}
    </div>
  );
};

export default Phonetics;
