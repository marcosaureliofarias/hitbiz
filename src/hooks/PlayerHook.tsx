// Bibliotecas Externas

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IProps } from "../interface/data";

// Interface
interface PlayerContextData {
  queue: any[];
  playTrack(music: any[], trackQueuePosition?: number): void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  ref: any;
  currentMusic: any;
  playNextMusic: () => void;
  playPreviousMusic: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);

const PlayerProvider: React.FC<IProps> = ({ children }) => {
  const [queue, setQueue] = useState<any[]>([]);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [currentMusic, setCurrentMusic] = useState<any>();

  const ref: any = useRef<HTMLAudioElement>(null);

  // Funções
  const handleAddQueue = (music: any[], trackQueuePosition: number) => {
    setQueue(music);
    setCurrentMusic(music[trackQueuePosition]);
    setCurrentId(trackQueuePosition);

    ref.current.load();
    play();
  };

  const play = () => {
    ref.current.play();
    console.log("oba");
    setPlaying(true);
  };

  const pause = () => {
    console.log("obooobaoaoao");
    setPlaying(false);
  };

  const getDuration = () => {
    setDuration(ref.current.duration);
  };

  const playNextMusic = () => {
    if (currentId + 1 <= queue.length - 1) {
      setCurrentMusic(queue[currentId + 1]);
      setCurrentId(currentId + 1);

      ref.current.load();
      play();
    }

    // if (currentId + 1 > queue.length - 1) {
    //   setCurrentId(0)
    //   ref.current.load()
    //   play()
    // } else {
    //   setCurrentMusic(queue[currentId + 1])
    //   setCurrentId(currentId + 1)

    //   ref.current.load()
    //   play()
    // }
  };

  const playPreviousMusic = () => {
    if (currentId - 1 >= 0) {
      setCurrentMusic(queue[currentId - 1]);
      setCurrentId(currentId - 1);
      ref.current.load();
      play();
    }
  };

  // useEffect(() => {}, [queue, currentId])

  return (
    <PlayerContext.Provider
      value={{
        queue: queue,
        playTrack: handleAddQueue,
        play,
        pause,
        duration,
        currentTime,
        ref,
        isPlaying,
        currentMusic,
        hasNext: currentId < queue.length - 1,
        hasPrevious: currentId > 0,
        playNextMusic,
        playPreviousMusic,
      }}
    >
      {children}
      <audio
        onTimeUpdate={() => setCurrentTime(ref?.current?.currentTime)}
        onLoadedMetadata={() => getDuration()}
        ref={ref}
        onEnded={() => playNextMusic()}
      >
        <source src={currentMusic && currentMusic.url} type="audio/mpeg" />
      </audio>
    </PlayerContext.Provider>
  );
};

function usePlayer(): PlayerContextData {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be within an PlayerProvider");
  }

  return context;
}

export { PlayerProvider, usePlayer };
