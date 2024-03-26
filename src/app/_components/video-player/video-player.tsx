"use client";
import { Button } from "../button/button";
import Image from "next/image";
import { Loading } from "../loading";
import { VideoProps } from "./video-player.type";
import { useVideo } from ".";
import { ProgressBar } from "..";
import { secondsToHHMMSS } from "@/utils";
export const VideoPlayer:React.FC<VideoProps> = ({src,poster=''}) => {
    const {currentTime,duration,progress,isPlaying,isVideoLoaded,isVideoWaited,pause,play,videoRef,fullScreen}=useVideo(src)
  return (
    <div className="relative">
    {
    isVideoWaited && <Loading className="absolute inset-0 m-auto" variant="neutral" size="large"/>
}
    <video
        className="w-full"
        ref={videoRef}
        src={src}
        poster={poster}
    />
    <div
        className={`${
            !isVideoLoaded || isVideoWaited
                ? "animate-pulse opacity-40 pointer-events-none"
                : ""
        } h-12 dark:bg-base-50 rounded-lg  p-2 flex items-center mt-2 gap-5`}
        lang="en"
        dir="ltr"
    >
        <Image
            className="hidden lg:block relative top-[-0.15rem]"
            src="/images/logo-en-light.svg"
            width={100}
            height={20}
            alt=""
        />

        <Button
            size="tiny"
            variant={isPlaying ? undefined : "primary"}
            className="font-semibold tracking-widest w-32"
            onClick={!isPlaying ? play : pause}
        >
            {isVideoWaited
                ? "loading..."
                : !isPlaying
                ? "play"
                : "pause"}
        </Button>

        <ProgressBar value={progress} variant="primary" />
        <div className="flex gap-1 font-semibold text-sm *:w-16">
            <span>{secondsToHHMMSS(currentTime)}</span> /
            <span>{secondsToHHMMSS(duration)}</span>
        </div>
        <Button
            size="tiny"
            className="hidden lg:inline-flex font-semibold tracking-widest w-44"
            onClick={fullScreen}
        >
            full screen
        </Button>
    </div>
</div>
  )
}
