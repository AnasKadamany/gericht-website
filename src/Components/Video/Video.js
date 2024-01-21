import React, { useState, useRef } from "react";
import "../Video/Video.css"; // You can import your additional styles here
import video from "../Video/meal.mp4";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Video() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setVideoPlaying(!isVideoPlaying);

    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div style={{ position: "relative" }} className="VideoContainer">
      <video
        ref={videoRef}
        src={video}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loop
      ></video>
      <div
        className="centering"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div onClick={handleButtonClick} className="MiddleButtonDiv centering">
          {isVideoPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </div>
      </div>
    </div>
  );
}
