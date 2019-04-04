/*
작품 설명 :
관심분야인 AI를 직접 도형으로 그린 사람 옆모습 아이콘으로 
검은색 배경위에 표현했고, 
흰색 배경위에 ES를 그렸습니다. 
그리고 머리 주변을 맴도는 흰색 작은 원들은 
역동적으로 생각하는 모습을 표현하였습니다. 
ES와 AI의 융합을 생각하는 '저' 의 모습을 작품을 표현하였습니다.

마우스 커서로 사용한 2개의 패턴:
1. 위치에 따른 커서의 색 변화(빨강, 파랑, 주황, 흰색)
2. 위치에 따른 모양의 변화(원, 삼각형을 포함한 원)

마우스 클릭 시, 4가지 변화:
마우스 클릭 시 변화 : 옆모습 아이콘의 랜덤한 색변화(255*255*255가지 색), 
이전에 클릭한 좌표와 현재 클릭한 좌표를 잇는 선분,
x좌표에 따른 커서의 크기 변화, 
그림위의 도형들의 위치변화(흔들리는 효과)
*/


let nodeX = [];
let nodeY = [];
let length = 0;
let color_r = 255;
let color_g = 255;
let color_b = 255;

let w_width = 614
let w_height = 380

function setup() {
  createCanvas(w_width, w_height);
  //검은배경을 칠합니다.
  background(255);
}

function draw() {
  noStroke();
  d=dist(mouseX,mouseY,w_width/2,w_height/2)
  cursor('grab');
  //print(d)
	drawHead(color_r,color_g,color_b);
  if (mouseIsPressed){
    color_r=random(255);
    color_g=random(255);
    color_b=random(255);
    tx=mouseX,ty=mouseY
    tx_ratio=(tx/w_width)*100
    ty_ratio=(ty/w_height)*100
    check = parseInt(tx)
    //print(check)
    
    if(check%2==0){
      	fill(204, 0, 0);
  	}
    else if(check%3==0){
      fill(0, 51, 153);
    }
    else if(check%5==0){
      fill(255, 153, 0);
    }
    else {
      fill(255, 255, 255);
    }
    stroke(50);
    
    strokeWeight(3);
  	line(nodeX[length-1],nodeY[length-1],mouseX,mouseY);
    length+=1;
    noStroke()
    append(nodeX, mouseX);
    append(nodeY, mouseY);
    print(tx_ratio);
    traingle_size=(100-tx_ratio)*0.1
    ellipse(mouseX,mouseY,(100-tx_ratio)*0.39,(100-tx_ratio)*0.39);
    if (mouseX%2==0){
    fill(0,0,0);
    triangle(mouseX-traingle_size, mouseY+traingle_size, mouseX+traingle_size, mouseY+traingle_size, mouseX, mouseY-traingle_size);
    }
  }
  frameRate(10);
}

function drawHead(color_r,color_g,color_b){
  //검은 색상 설정
  fill(0, 0, 0);
  circle(290, 200, 200);
  //흰 색상 설정
  fill(color_r, color_g, color_b);
  noStroke();
  
  //머리부분을 그립니다.
  arc(300, 150, 200, 200, PI , TWO_PI);
  arc(340, 170, 130, 190, PI+HALF_PI, TWO_PI+PI);
  arc(290, 130, 200, 160, PI-HALF_PI, TWO_PI+PI);
  triangle(210, 140, 170, 210, 220, 220);
  quad(370, w_height, 330, 200 , 250, 200, 230, w_height);
  rect(200, 150, 55, 130, 20);
  
  
  //검은 색상 설정
  fill(0, 0, 0);
  
  // 입술 부분을 그립니다.
  noStroke()
  triangle(195, 240, 200, 245, 205, 240);
  
  stroke(0);
  strokeWeight(5);
  line(300, w_height, 300, 190);
  line(280, w_height, 280, 160);
  line(320, w_height, 320, 210);
  line(300, 190, 340, 150);
  line(320, 210, 360, 170);
  line(280, 160, 250, 130);
  line(340, 150, 340, 120);
  line(250, 130, 220, 130);
  line(340, 120, 340, 110);
  line(360, 170, 360, 150);
  line(360, 150, 370, 140);
  circle(370, 140, 3);
  circle(340, 110, 3);
  circle(220, 130, 3);
  
  line(250, 100, 300, 150);
  line(300, 150, 310, 140);
  circle(310, 140, 3);
  line(250, 100, 230, 100);
  circle(230, 100, 3);
  circle(210, 100, 3);
  line(210, 100, 230, 80);
  line(230, 80, 250, 80);
  line(250, 80, 300, 130);
  line(300, 130, 320, 110);
  line(320, 110, 320, 90);
  line(320, 90, 300, 70);
  circle(300, 70, 3);
  line(300, 100, 270, 70);
  circle(300, 100, 3);
  circle(270, 70, 3);
  
  rand_x = random(10);
  stroke(255);
  lx1=100 - rand_x
	lx2=140 - rand_x
	lx3=170 - rand_x
	lx4=210 - rand_x
	lx5=270 - rand_x
	lx6=310 - rand_x
	lx7=320 - rand_x
	lx8=330 - rand_x
	lx9=410 -rand_x 
	lx10=450 - rand_x
	lx11=470 - rand_x
	lx12=510 -rand_x 
	lx13=520 - rand_x
	rand_y = random(10);
	ly1=70 -rand_y 
	ly2=100 -rand_y 
	ly3=120 -rand_y
	ly4=140 - rand_y
	ly5=170 - rand_y
	ly6=220 - rand_y
	ly7=240 - rand_y
	ly8=310 - rand_y 
	ly9=350 - rand_y
	ly10=370 -rand_y
	
	
	
	
	circle(lx1,ly4,2);
	circle(lx2,ly2,3);
	circle(lx4,ly1,3);
	circle(lx6,ly1,3);
	circle(lx5,ly3,5);
	circle(lx7,ly4,7);
	circle(lx8,ly5,5);
	circle(lx9,ly5,2);
	
	circle(lx12,ly6,2);
	circle(lx10,ly7,3);
	circle(lx1,ly3,5);
	circle(lx8,ly4,7);
	circle(lx10,ly5,5);
	circle(lx3,ly5,2);
	
	circle(lx7,ly6,2);
	circle(lx3,ly7,3);
	
	circle(lx8,ly1,3);
	circle(lx10,ly2,4);
	circle(lx11,ly4,3);
	circle(lx12,ly5,2);
	
	circle(lx2,ly5,2);
	circle(lx6,ly5,4);
	circle(lx7,ly7,2);
	circle(lx9,ly3,2);
	circle(lx9,ly8,4);
  
  
}