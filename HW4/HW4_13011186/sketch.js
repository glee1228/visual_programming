/*인터랙티브한 픽셀아트 캐릭터 만들기
스마일맨 캐릭터를 픽셀아트로 표현해 보았습니다.
1. colors 변수에 컬러값 배열 선언
2. 반복문 활용하여 11x11격자구조로 만들었습니다.
3. 외곽선을 없애고 격자구조로 만들었습니다.
4. 마우스 클릭시, 입의 위치가 변하고, 볼의 색상이 변합니다.
*/

let pSize = [30,30];
let noOfX, noOfY;
let newImage = [];
let colors=[[0,0,0],[252,234,96],[230,148,176],[255,255,255],[246,178,50]]

let move = 0;
function setup(){
  createCanvas(330,330);
  noOfX = width/pSize[0];
  noOfY = height/pSize[1];

  for (let i=0; i<noOfX;i++){
    newImage[i] = [];
  }
  backgroundPixelColor(newImage, noOfX, noOfY, 0);
  frameRate(13);
}

function draw(){

  noOfX = width/pSize[0];
  noOfY = height/pSize[1];
  if(mouseIsPressed){
    if(move==0){
      move=1;
      fc=[246,178,50]
    }else{
      move=0;
      fc=[252,234,96];
    }
    //assignPixelColor(newImage,pSize,colors[3]);
    moveMouse(newImage, noOfX, noOfY, move,fc);
  }
  drawPixelImage(newImage, noOfX, noOfY);
}
function backgroundPixelColor(nImg, noX, noY) {
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {

      if((i==0&&j>=2&&j<=8)||(i==10&&j>=2&&j<=8)||(j==0&&i>=2&&i<=8)||(j==10&&i>=2&&i<=8)||(j==4&&i==2)||(j==3&&i==3)||(j==4&&i==4)||(j==4&&i==6)||(j==3&&i==7)||(j==4&&i==8)){
          nImg[i][j]=color(colors[0])
      }
      else if((j==1&&i==1)||(j==1&&i==9)||(j==9&&i==1)||(j==9&&i==9)){
        nImg[i][j]=color(colors[0])
      }
      else if(j==0||i==0||j==10||i==10){
        nImg[i][j]=color(colors[3])
      }
      else if((j==8&&i>=3&&i<=7)||(j==7&&i==2)||(j==7&&i==8)){
        nImg[i][j]=color(colors[2])
      }
      else{
        nImg[i][j]=color(colors[1]);
      }
    }
  }
}
function moveMouse(nImg, noX, noY,move) {
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {

      if((i==0&&j>=2&&j<=8)||(i==10&&j>=2&&j<=8)||(j==0&&i>=2&&i<=8)||(j==10&&i>=2&&i<=8)||(j==4&&i==2)||(j==3&&i==3)||(j==4&&i==4)||(j==4&&i==6)||(j==3&&i==7)||(j==4&&i==8)){
          nImg[i][j]=color(colors[0])
      }
      else if((j==1&&i==1)||(j==1&&i==9)||(j==9&&i==1)||(j==9&&i==9)){
        nImg[i][j]=color(colors[0])
      }
      else if(j==0||i==0||j==10||i==10){
        nImg[i][j]=color(colors[3])
      }
      else if((j==8-move&&i>=3&&i<=7)||(j==7-move&&i==2)||(j==7-move&&i==8)){
        nImg[i][j]=color(colors[2])
      }
      else{
        nImg[i][j]=color(fc);
      }
      console.log(i,j)
    }

  }
}



function drawPixelImage(nImg, noX, noY) {
  noStroke();
  //StrokeWeight(1);
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {
      fill(nImg[i][j]);
      rect(i * pSize[0], j * pSize[1], pSize[0], pSize[1]);
    }
  }
}
