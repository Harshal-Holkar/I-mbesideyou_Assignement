import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { draw } from "../src/components/draw";
import { Button } from 'antd';
import Content from './components/content';
import './App.css'

function App() {
  const webcam = useRef(null);
  const canvas = useRef(null);

  const runcocoSSD = async () => {
    const chk = await cocossd.load();
    setInterval(() => { detect(chk); }, 1000);
  };

  const detect = async (chk) => {
    if (typeof webcam.current !== "undefined" && webcam.current !== null && webcam.current.video.readyState === 4) {

      const video = webcam.current.video;
      const videoWidth = webcam.current.video.videoWidth;
      const videoHeight = webcam.current.video.videoHeight;

      webcam.current.video.width = videoWidth;
      webcam.current.video.height = videoHeight;

      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      const obj = await chk.detect(video);

      console.log(obj);

      const ctx = canvas.current.getContext("2d");
      draw(obj, ctx);
    }
  };

  function handdleClick(e) {
    e.preventDefault();

  }

  useEffect(() => { runcocoSSD() }, []);

  return (
    <div className="App">
      <Content/>
      <div className='model'>
        <Webcam ref={webcam} muted={true} className = "imgArea"/>
        <canvas ref={canvas} className = "imgArea"/>
      </div>
    </div>
  );
}

export default App;
