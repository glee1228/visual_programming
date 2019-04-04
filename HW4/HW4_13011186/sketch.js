let pSize = [30,30];
let noOfX, noOfY;
let newImage = [];
let colors=[[0,0,0],[243,170,71],[241,156,56],[252,234,96],[248,234,231],[230,148,176],[255,255,255]]
function setup(){
  createCanvas(600,600);
  noOfX = width/pSize[0];
  noOfY = height/pSize[1];

  for (let i=0; i<noOfX;i++){
    newImage[i] = [];
  }
  backgroundPixelColor(newImage, noOfX, noOfY, 0);
  frameRate(10);
}

function draw(){
  if(mouseIsPressed){
    assignPixelColor(newImage,pSize,colors[1]);
  }
  drawPixelImage(newImage, noOfX, noOfY);
}
function backgroundPixelColor(nImg, noX, noY, bc) {
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {
      if((i+j)%2==0){
        nImg[i][j] = 123;
      }
      else{
        nImg[i][j]=255;
      }
    }
  }
}

function assignPixelColor(nImg, pSize,n_color) {
  let i = int (mouseX / pSize[0]);
  let j = int (mouseY / pSize[1]);
  nImg[i][j] = color(n_color[0], n_color[1], n_color[2]);
  print(i,j)
}

function drawPixelImage(nImg, noX, noY) {
  //noStroke();
  //StrokeWeight(1);
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {
      fill(nImg[i][j]);
      rect(i * pSize[0], j * pSize[1], pSize[0], pSize[1]);
    }
  }
}
