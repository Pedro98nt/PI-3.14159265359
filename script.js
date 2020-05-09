window.addEventListener("mousemove", e => {
    let width = (event.pageX / document.body.clientWidth) * 360;
    let hue = 180 + width;
  
    document.body.style.backgroundColor = "hsl(" + hue.toString() + ",85%,60%)";
    document.getElementsByClassName('pi')[0].style.color = "hsl(" + hue.toString() + ",85%,40%)";
  });