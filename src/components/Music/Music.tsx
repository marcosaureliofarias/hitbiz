import {
  HeartIcon,
  PauseIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline'
import { FastForwardIcon, RewindIcon } from '@heroicons/react/solid'

import { useRef, useState, useEffect, ChangeEvent } from 'react'
import Bandolero from '../../assets/bandolero.mp3'
import Sorries from '../../assets/$orries.mp3'
import LoFi from '../../assets/532pm.mp3'
import LoFi2 from '../../assets/88Keys.mp3'
import NextButton from './Next-Button/NextButton'
import PlayButton from './Play-Button/PlayButton'
import PreviusButton from './Previus-Button/PreviusButton'
import PauseButton from './Puase-Button/PauseButton'
import muiscNote from '../../assets/music_note.jpg'
import ImageSong from '../../assets/$orries_Cover.jpg'
import ImageSong2 from '../../assets/532pmImage.jpg'
import ImageSong3 from '../../assets/88Keys_Cover.jpg'
import Volume from './VolumeSvg/Volume'
import './MusicBar.css'

const songsdata = [
  {
    title: '$orries',
    artist: 'Peachy!',
    img_src: ImageSong,
    url: Sorries,
  },
  {
    title: '5:32pm',
    artist: 'The Deli',

    img_src: ImageSong2,
    url: LoFi,
  },
  {
    title: '88 Keys',
    artist: 'Oatmello',
    album: 'Snapshots',
    track: '3',
    year: '',
    img_src: ImageSong3,
    url: LoFi2,
  },
]

function SecondsToHms(totalSeconds: number): string {
  totalSeconds = parseInt(totalSeconds.toString(), 10)
  let hours = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600
  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds % 60

  minutes = Number(String(minutes).padStart(2, '0'))
  hours = Number(String(hours).padStart(2, '0'))
  seconds = Number(String(seconds).padStart(2, '0'))

  const hoursString = hours < 10 ? '0' + hours : hours.toString()
  const minutesString = minutes < 10 ? '0' + minutes : minutes.toString()
  const secondsString = seconds < 10 ? '0' + seconds : seconds.toString()

  return hoursString + ':' + minutesString + ':' + secondsString
}

export default function Music() {
  const musicRef: any = useRef<HTMLAudioElement>(null)

  const [musicInfo] = useState({
    title: 'Apathy',
    artist: 'New Day Rising',
    price: '89',
  })
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [songs, setSongs] = useState(songsdata)
  const [volumeBar, setVolumeBar] = useState(50)

  const [currentSong, setCurrentSong] = useState(songsdata[1])

  const handlePlay = () => {
    if (isPlaying) {
      musicRef.current.pause()
    } else {
      musicRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const onChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const audio: any = musicRef.current
    audio.volume = Number(event.target.value) / 100

    setVolumeBar(Number(event.target.value))
  }

  const onChangeMusicTime = (event: ChangeEvent<HTMLInputElement>) => {
    const audio: any = musicRef.current
    audio.currentTime = (audio.duration / 100) * Number(event.target.value)

    setPercentage(Number(event.target.value))
  }

  const getCurrentTime = (event: ChangeEvent<HTMLAudioElement>) => {
    const percent: number =
      (event.currentTarget.currentTime / event.currentTarget.duration) * 100
    const duration = event.currentTarget.duration
    const time = event.currentTarget.currentTime

    if (isNaN(+percent)) {
      setPercentage(0)
    } else {
      setPercentage(+percent)
    }

    if (percent === 100) {
      skiptoNext()
    }

    setCurrentTime(Number(time.toFixed(2)))
    setDuration(Number(duration.toFixed(2)))
  }

  const skiptoNext = async () => {
    const index = songs.findIndex(
      (x: { title: any }) => x.title == currentSong.title
    )

    if (index == songs.length - 1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[index + 1])
    }
    musicRef.current.currentTime = 0

    setTimeout(() => {
      musicRef.current.play()
    }, 150)
  }

  const skiptoBack = () => {
    const index = songs.findIndex(
      (x: { title: any }) => x.title == currentSong.title
    )

    if (index == 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[index - 1])
    }
    musicRef.current.currentTime = 0

    setTimeout(() => {
      musicRef.current.play()
    }, 150)
  }

  return (
    <>
      <div className="sticky bottom-0 z-50">
        <input
          step="0.01"
          type="range"
          value={percentage}
          onChange={onChangeMusicTime}
          className="w-full h-2  bg-gray-300 range range-primary range-xs"
        />
        <div className="navbar lg:h-1 bg-black w-full ">
          <div className="navbar-start gap-2 lg:gap-5">
            <button className="lg:flex ">
              <img
                className=" object-scale-down h-20 w-20 rounded-lg lg:h-14 lg:w-14"
                src={currentSong.img_src}
                alt=""
              />
            </button>
            <audio
              ref={musicRef}
              controls={false}
              preload="auto"
              loop={false}
              onTimeUpdate={getCurrentTime}
              src={currentSong.url}
            ></audio>
            <ul className="gap-5 menu-horizontal p-0 lg:flex hidden">
              <li>
                <p>{SecondsToHms(currentTime)}</p>
              </li>
              <li>
                <p>{currentSong.title}</p>
              </li>
              <button className="items-center">
                <HeartIcon className="w-7 h-7" aria-hidden="true" />
              </button>
              <li>
                <p className="  normal-case text-base font-bold text-green-500">
                  R$ 1.5000,00
                </p>
              </li>
            </ul>
          </div>

          <div className="navbar-center">
            <button className="" onClick={skiptoBack}>
              <PreviusButton />
            </button>

            <button className="" onClick={() => handlePlay()}>
              {!isPlaying ? <PlayButton /> : <PauseButton />}
            </button>

            <button className="" onClick={skiptoNext}>
              <NextButton />
            </button>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3 ">
              <div className="hidden lg:flex flex-row items-center">
                {volumeBar === 0 ? (
                  <VolumeOffIcon className="w-5 h-5 mr-2" />
                ) : (
                  <VolumeUpIcon className="w-5 h-5 mr-2" />
                )}

                <input
                  className="h-2  bg-gray-300 range range-primary range-xs"
                  type="range"
                  min="0"
                  max="100"
                  value={volumeBar}
                  onChange={onChangeVolume}
                />
              </div>
              <button className="btn text rounded-lg text-white font-medium bg-gradient-to-r from-purple-1 to-purple-2">
                Liberação
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
