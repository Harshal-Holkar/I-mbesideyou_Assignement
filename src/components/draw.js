export const draw = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox']; 
      var value = Math.floor(prediction['score']*100); 
      const text = prediction['class'] + ' - with '+ value + '% accuracy'; 

      ctx.font = '2rem serif';
      ctx.strokeStyle = 'green'
      ctx.lineWidth = 10%
      ctx.beginPath();   
      ctx.fillStyle = 'red'
      ctx.fillText(text  , x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();
    });
  };