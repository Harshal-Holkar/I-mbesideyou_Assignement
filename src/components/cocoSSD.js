import * as cocossd from "@tensorflow-models/coco-ssd";
import {draw} from "./draw"
import {useRef} from "react";


var webcam = useRef(null);
var canvas = useRef(null);

export const cocoSSD = async () => {
    const chk = await cocossd.load();
    setInterval(() => {detect(chk);}, 1000);
  };

  const detect = async (chk) => {
    if (typeof webcam.current !== "undefined" && webcam.current !== null && webcam.current.video.readyState === 4){
      
      const video = webcam.current.video;
      const videoWidth = webcam.current.video.videoWidth;
      const videoHeight = webcam.current.video.videoHeight;

      webcam.current.video.width = videoWidth;
      webcam.current.video.height = videoHeight;

      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      // Make Detections
      const obj = await chk.detect(video);

      console.log(obj);

      // Draw mesh
      const ctx = canvas.current.getContext("2d");
      draw(obj, ctx); 
    }
  };