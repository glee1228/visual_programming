/*
제목 : 도로 위를 달리는 공

드로잉 활용기술 
1. 가운데 길 점선 & 그라데이션 색상표현 : for문을 활용하였습니다.
2. 그라데이션 표현 : 함수로 패턴을 구현하여 선을 여러개 그려 그라데이션을 표현하였습니다.
3. 마우스를 클릭한 지점에서 공이 발사됨=> 멀어질수록 원근법에 의해 크기가 점점 작아지고, 점점 투명도에 변화가 있습니다.
4. 공이 현재 지점에서 많이 떨어져있으면, 빠르게 가운데로 모이고 덜 떨어져있으면 천천히 가운데로 모임 => 공의 좌표와 x좌표 중점의 차이의 절대값에 log를 씌운 값을 일정한 x변화량에 더해주어 보다 자연스러운 움직임을 연출하고자 하였습니다.
*/

let w_width = 600;
let w_height = 600;
let startX ;
let startY ;
let endX = w_width/2
let endY = 0
let ballX ;
let ballY ;
let dx=0.1;
let dy=7;
let brightness;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
let num_of_lines=10;
let size_of_lines = 20;

function setup() {
  frameRate(20);
  createCanvas(w_width, w_height);
  b1 = color(255);
  b2 = color(0);
  c1 = color(240, 240, 0);
  c2 = color(0, 102, 153);
  
}

function mousePressed(){
  brightness=255;
   ballX = mouseX;
    ballY = mouseY;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
      
    }
  } 
  
}
function draw() {
  background(255, 255, 255);
  noStroke();
  
  
  setGradient(0, 0, w_width, w_height, c1, c2, Y_AXIS);
  strokeWeight(10);
  stroke(color(255, 255, 255));
  
  for(i=0;i<num_of_lines;i++){
    margin=w_height/num_of_lines;
    line(w_width/2,margin*i,w_width/2,(margin*i)+size_of_lines);
  }
  fill(0,0,0);
  noStroke();
  triangle(0,w_height,w_width/2-50,0,0,0);
  triangle(w_width,w_height,w_width/2+50,0,w_width,0);
  
  noStroke();
  
  //random_color=(ballX/w_height)*255-random(100)
  //fill(random_color,random_color,255);
  brightness-=2;
  fill(0,0,255,brightness);
  xplus=log(abs(((w_width/2)-ballX)));
  //print(xplus)
  
  if(endX<ballX&&ballX<=w_width){
    ballX-=xplus+dx;
  }
  else if(endX>=ballX && ballX>=0){
    ballX+=xplus+dx;
  }
  else {
    ballX=endX;
  }
  ballY-=dy;
  
  //print(ballX,ballY);
  
  circle(ballX, ballY, 110*(ballY/w_height)+sq(xplus), 110*(ballY/w_height)+sq(xplus));
  
}