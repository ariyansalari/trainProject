'use client'
import { useEffect, useReducer, useRef } from "react";

interface VideoState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isFinished: boolean;
  progress: number;
  isVideoLoaded: boolean;
  isVideoWaited: boolean;
}
type VideoAction =
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "TIME_UPDATE"; currentTime: number }
  | { type: "DURATION_CHANGE"; duration: number }
  | { type: "SET_FINISHED"; isFinished: boolean }
  | { type: "SET_PROGRESS"; progress: number }
  | { type: "SET_VIDEO_LOADED"; isVideoLoaded: boolean }
  | { type: "SET_VIDEO_WAITED"; isVideoWaited: boolean };

  const videoReducer =(state:VideoState,action:VideoAction):VideoState=>{
switch(action.type){
    case 'PLAY':return {...state,isPlaying:true,isFinished:false,isVideoWaited:false};
    case 'PAUSE':return {...state,isPlaying:false};
    case "TIME_UPDATE":
        return { ...state, currentTime: action.currentTime };
    case "DURATION_CHANGE":
        return { ...state, duration: action.duration };
    case "SET_FINISHED":
        return { ...state, isFinished: action.isFinished };
    case "SET_PROGRESS":
        return { ...state, progress: action.progress };
    case "SET_VIDEO_LOADED":
        return { ...state, isVideoLoaded: action.isVideoLoaded };
    case "SET_VIDEO_WAITED":
        return { ...state, isVideoWaited: action.isVideoWaited };
    default:
        return state;
}
  }

  export const useVideo =(src:string)=>{
    const videoRef=useRef<HTMLVideoElement>(null)
    const [state,dispatch]=useReducer(videoReducer,{
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        isFinished: false,
        progress: 0,
        isVideoLoaded: false,
        isVideoWaited: false
    })
    useEffect(() => {
        const video = videoRef.current!;

        video.src = src;

        const updateProgress = () => {
            const { currentTime, duration } = videoRef.current!;
            const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
            dispatch({ type: "SET_PROGRESS", progress });
        };

        const handleTimeUpdate = () => {
            dispatch({
                type: "TIME_UPDATE",
                currentTime: videoRef.current!.currentTime,
            });
            updateProgress();
        };

        const handleDurationChange = () => {
            dispatch({
                type: "DURATION_CHANGE",
                duration: videoRef.current!.duration,
            });
            updateProgress();
        };

        const handlePlay = () => {
            dispatch({ type: "PLAY" });
        };

        const handlePause = () => {
            dispatch({ type: "PAUSE" });
        };

        const handleEnded = () => {
            dispatch({ type: "SET_FINISHED", isFinished: true });
        };

        const handleLoadedData = () => {
            dispatch({ type: "SET_VIDEO_LOADED", isVideoLoaded: true });
        };

        const handleWaiting = () => {
            dispatch({ type: "SET_VIDEO_WAITED", isVideoWaited: true });
        };
        const handlePlaying = () => {
            dispatch({ type: "SET_VIDEO_WAITED", isVideoWaited: false });
        };

        const handleEvent = (eventName: string, handler: () => void) => {
            const video = videoRef.current!;
            video.addEventListener(eventName, handler);

            return () => video.removeEventListener(eventName, handler);
        }


        const cleanupTimeUpdate = handleEvent('timeupdate', handleTimeUpdate);
        const cleanupDurationChange = handleEvent("durationchange", handleDurationChange)
        const cleanupPlay = handleEvent("play", handlePlay);
        const cleanupPause = handleEvent("pause", handlePause);
        const cleanupEnded = handleEvent("ended", handleEnded);
        const cleanupLoadedData = handleEvent("loadeddata", handleLoadedData);
        const cleanupWaiting = handleEvent('waiting', handleWaiting);
        const cleanupPlaying = handleEvent('playing', handlePlaying);

        return () => {
            cleanupTimeUpdate();
            cleanupDurationChange();
            cleanupPlay();
            cleanupPause();
            cleanupEnded();
            cleanupLoadedData();
            cleanupWaiting();
            cleanupPlaying();
        };
    }, [src]);

    const play = () => videoRef.current!.play();
    const pause = () => videoRef.current!.pause();
    const fullScreen = () => videoRef.current!.requestFullscreen();

    return {
        videoRef,
        ...state,
        play,
        pause,
        fullScreen,
    };
  }