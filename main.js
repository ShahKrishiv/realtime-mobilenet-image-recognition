function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 300, 300)
  classsifier.classify(video, capture)
}

function preload() {
  classsifier = ml5.imageClassifier('MobileNet', modelloaded)
}

function modelloaded() {
  console.log("modelloaded")
}

function capture(error, results) {
  if (error) {
    console.error(error)
  } else {
    console.log(results)
    document.getElementById("order").innerHTML=results[0].label;
    document.getElementById("pheonix").innerHTML=results[0].confidence;
  }
}