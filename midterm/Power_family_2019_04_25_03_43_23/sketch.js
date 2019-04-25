
var myWords;
var num;
var headline;
var x,y;
var bgcolor;
var img,img_b;
var input , button, greeting;
var img2;
var img3;
var myCanvas;

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
let num_of_clouds = 5;
let size_of_clouds = 20;
var describe=9;

let pSize = [30,30];
let noOfX, noOfY;
let newImage = [];
let colors=[[0,0,0],[252,234,96],[230,148,176],[255,255,255],[246,178,50]];

let move = 0;

var activateWork=0;

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
function drawCloud(x,y,size){
  fill(255);
  circle(x,y,size,size);
  circle(x+size,y+size*2/5,size*1.2,size*1.2);
  circle(x+size,y-size*3/7,size*1.3,size*1.3);
  circle(x+size*2.5,y+size*1/2,size*1.2,size*1.2);
  circle(x+size*2.3,y-1/2*size,size*1.4,size*1.4);
}


function setup() {
  frameRate(35);
  b1 = color(255);
  b2 = color(0);
  c1 = color(240, 240, 0);
  c2 = color(0, 102, 153);

  noOfX = 330/pSize[0];
  noOfY = 330/pSize[1];
  for (let i=0; i<noOfX;i++){
    newImage[i] = [];
  }

  if(activateWork=='2'){
    backgroundPixelColor(nImg, noX, noY);
  }


  var img = createImg('img1.png');
  img.position(0,50);
  img.size(500,400);


  img.mouseOver(imgShow);
  img.mouseOut(imgHide);


  describeDiv=createElement('h5','아래 빈칸에 보고싶은 작품 번호(1~3)를 입력하세요.');
  describeDiv.position(50,400);


  input = createInput();
  input.position(70,450);
  input.size(200,29);
  button = createButton('입력');
  button.position(70+input.width,450);
  button.mousePressed(showWork);

  title=createElement('h2', "Visualization of p5.js by DH");
  title.position(50,30);


  text = createP('위의 이미지에 마우스를 올리면 직접 만든 디자인한 이미지들이 나열 됩니다.');
  text.position(100,370);

  var copyright = createDiv('').size(1000, 100);
  copyright.position(300,900);
  copyright.html('2019.04.24 visual programming midterm Work by DH');

  x = 300;
  bgcolor = 100;
  pixelDensity(1);

}
function showWork(){
  if(input.value()=='1'){
    if(describe!='9'){
      describe.remove();
    }
    activateWork=0;
    myCanvas=createCanvas(600, 400);
    myCanvas.position(50,500);
    background(222);
    //첫번째 레이아웃입니다.
    showFirstWork();

    describe = createElement('h5','이 작품은 저의 꿈을 표현한 작품입니다. 훌륭한 인공지능(AI)을 만들고 싶은 마음을 담은 자화상을 집으로 표현하였습니다. 인간의 뇌를 닮은 집과 뉴런에서 에너지가 발화하는 모습을 표현하였습니다. 집이 하늘에 떠있는 모습은 규격과 틀을 벗어난 창의적 사고를 뜻합니다.');
    describe.position(700,500);

  }
  else if(input.value()=='2'){
    if(describe!='9'){
      describe.remove();
    }
    myCanvas=createCanvas(600, 600);
    myCanvas.position(50,500);
    activateWork=1;
    describe = createElement('h5','도로 위를 달리는 공을 표현한 작품입니다. 마우스로 클릭하면 공이 생성되어 앞으로 나아갑니다. 공의 움직임을 표현하는데 공을 들인 작품입니다. 공의 좌표와 x좌표 중점의 차이의 절대값에 log를 씌운 값을 일정한 x변화량에 더해주어 보다 자연스러운 움직임을 연출하고자 하였습니다.');
    describe.position(700,500);

  }
  else if(input.value()=='3'){
    if(describe!='9'){
      describe.remove();
    }
    myCanvas=createCanvas(600, 600);
    myCanvas.position(50,500);

    console.log('123123');
    activateWork=2;
    describe = createElement('h5','픽셀아트를 표현한 작품입니다. 밝게 웃는 모습을 표현하였습니다. 마우스로 작품을 클릭하면, 얼굴 색과 입 모양이 변하는 Event가 발생합니다.');
    describe.position(400,500);
  }
  else{
    activateWork=0;
    if(describe!='9'){
      describe.remove();
    }
    describe=9;

    myCanvas.remove();
  }
}
function imgHide(){
  img2.remove();
  img3.remove();
}
function imgShow(){
  img2 = createImg('img2.png')
  img3 = createImg('img3.jpg')
  img2.position(500,50);
  img2.size(700,400);
  img3.position(1100,50);
  img3.size(700,400);

}
function mousePressed(){
  //num = random(0,10);
  //createP("my favorite number" + num);
  //text.remove();
  //removeElements();  //p5.js 및 p5.dom으로 생성된 모든 요소를 제거함.
  //headline.html('Hedline clicked');
    brightness=255;
    ballX = mouseX;
    ballY = mouseY;

}


function draw() {

  noStroke();
  if(activateWork=='1'){
      showSecondWork();
  }
  else if(activateWork=='2'){
    showThirdWork();
  }
  console.log(activateWork);
    // 여기까지 레이아웃 1입니다.


}


function showThirdWork(){
  noOfX = 330/pSize[0];
  noOfY = 330/pSize[1];
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

  console.log(mouseX,mouseY)


  drawPixelImage(newImage, noOfX, noOfY);
}

function showSecondWork(){
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

  x_list=[120,240,50,350,430]
  y_list=[50,70,150,170,90]
  for(i=0;i<num_of_clouds;i++){
    drawCloud(x_list[i],y_list[i],size_of_clouds+i*3);
    }
}

function showFirstWork(){
  x1=150;
	x2=170;
	x3=200;
	x4=220;
	x5=240;
	x6=280;
	x7=310;
	x8=340;
	x9=360;
	x10=380;
	x11=410;
	x12=430;
	x13=460;
	x14=490;
	x15=510;


	y1=100;
	y2=130;
	y3=140;
	y4=160;
	y5=220;
	y6=250;
	y7=280;
	y8=300;

	let c1 = color(120, 120, 120); // Define color 'c'
	fill(c1); // Use color variable 'c' as fill color
	strokeWeight(2);
	stroke(80);


	//두뇌를 그리는 부분
	triangle(x1, y4, x2, y2, x2, y5);
	triangle(x2, y2, x4, y1, x5, y3);
	triangle(x4, y1, x6, y1, x5, y3);
	triangle(x6, y1, x5, y3, x7, y4);
	triangle(x5, y3, x7, y4, x8, y5);
	triangle(x7, y4, x8, y5, x9, y5);
	triangle(x8, y5, x9, y5, x12, y6);
	triangle(x6, y1, x8, y1, x7, y4);
  triangle(x8, y1, x9, y3, x7, y4);
	triangle(x8, y1, x9, y3, x10, y2);
	triangle(x9, y3, x11, y4, x10, y2);
	triangle(x9, y3, x11, y4, x7, y4);
	triangle(x7, y4, x11, y4, x9, y5);
	triangle(x11,y4, x12, y6, x9, y5);
	triangle(x2, y2, x2, y5, x6, y5);
	triangle(x5, y3, x2, y2, x6, y5);
	triangle(x5, y3, x6, y5, x8, y5);
	triangle(x6, y5, x8, y5, x7, y7);
	triangle(x8, y5, x9, y8, x7, y7);
	triangle(x9, y8, x10, y7, x8, y5);
	triangle(x10, y7, x8, y5, x12, y6);
	triangle(x12, y6, x12, y5, x11, y4);
	triangle(x10, y7, x12, y6, x9, y8);
	triangle(x3, y5, 295, 250, x7, y5);

  //문의 좌표
  door_x = 180;
	door_y = 180;

	//문을 그립니다.
	let c2 = color(255, 255, 255); // Define color 'c'
	fill(c2); // Use color variable 'c' as fill color
	strokeWeight(2);

	rect(door_x,door_y,40,40);

	//문 손잡이를 그립니다.
  door_handle_x = 210;
	door_handle_y = 200;

	circle(door_handle_x,door_handle_y,2);





	//두뇌처럼 뉴런이 발화하는 지점을 circle로 표현합니다.
	let c3 = color(255, 255, 255); // Define color 'c'
	fill(c3); // Use color variable 'c' as fill color
	noStroke();

	circle(x1,y4,2);
	circle(x2,y2,3);
	circle(x4,y1,3);
	circle(x6,y1,3);
	circle(x5,y3,5);
	circle(x7,y4,7);
	circle(x8,y5,5);
	circle(x9,y5,2);

	circle(x12,y6,2);
	circle(x10,y7,3);


	circle(x8,y1,3);
	circle(x10,y2,4);
	circle(x11,y4,3);
	circle(x12,y5,2);

	circle(x2,y5,2);
	circle(x6,y5,4);
	circle(x7,y7,2);
	circle(x9,y3,2);
	circle(x9,y8,4);

	//집 주변 빛이 나는 포인트좌표를 그린다.
	lx1=100
	lx2=140
	lx3=170
	lx4=210
	lx5=270
	lx6=310
	lx7=320
	lx8=330
	lx9=410
	lx10=450
	lx11=470
	lx12=510
	lx13=520

	ly1=70
	ly2=100
	ly3=120
	ly4=140
	ly5=170
	ly6=220
	ly7=240
	ly8=310
	ly9=350
	ly10=370




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

	//집의 그림자를 그려준다.
	let c4 = color(100, 100, 100); // Define color 'c'
	fill(c4); // Use color variable 'c' as fill color
	noStroke();
	sx1= 290
	sy1= 350
	s_width = 250
	s_height = 55

	ellipse(sx1,sy1,s_width,s_height);

	//나무를 그려준다.

	tx1=490
	tx2=550

	ty1= 360
	ty2= 275
	ty3= 230

	t_width = 50
	t_height = 100


	strokeWeight(3);
	stroke(70);

	line(tx1,ty1,tx1,ty2);
	line(tx2,ty1,tx2,ty2);
	noStroke();

	ellipse(tx1,ty3,t_width,t_height);
	ellipse(tx2,ty3,t_width,t_height);

}
function backgroundPixelColor(nImg, noX, noY) {
  for (let i = 0; i < noX; i++) {
    for (let j = 0; j < noY; j++) {
      if((i==0&&j>=2&&j<=8)||(i==10&&j>=2&&j<=8)||(j==0&&i>=2&&i<=8)||(j==10&&i>=2&&i<=8)||(j==4&&i==2)||(j==3&&i==3)||(j==4&&i==4)||(j==4&&i==6)||(j==3&&i==7)||(j==4&&i==8)){
          nImg[i][j]=color(colors[0]);
      }
      else if((j==1&&i==1)||(j==1&&i==9)||(j==9&&i==1)||(j==9&&i==9)){
        nImg[i][j]=color(colors[0]);
      }
      else if(j==0||i==0||j==10||i==10){
        nImg[i][j]=color(colors[3]);
      }
      else if((j==8&&i>=3&&i<=7)||(j==7&&i==2)||(j==7&&i==8)){
        nImg[i][j]=color(colors[2]);
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
