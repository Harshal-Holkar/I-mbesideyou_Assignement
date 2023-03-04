import React from 'react';
import '../App.css'
export default function Content() {
  return (
    <div className="content">
    <h1>Welcome to the My Project</h1>
    <h3>In this project I have intergated Object detection model in React.JS</h3>
    <p>This project is about localize and identify multiple objects in a single image using tensorflow's coco-ssd</p>
    <p>I used @tensorflow-models/coco-ssd package to import the model and used the detect method to predict objects shown on screen</p>
    <p>This model not only predict the objects but also gives %accuracy of prediction</p>
  </div>
  );
}