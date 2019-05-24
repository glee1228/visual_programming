var imgTimeline;
var layer1;
var layer2;
var layer3;
//var slider;
//var visibleLayer;

//var slider; //shows/hides image


function preload() {
	// load image
	imgTimeline = loadImage("timeline.png");
	layer1 = createImg('img1.png');
	layer1.position(0, 40);
	layer1.hide();

	layer2 = createImg('img2.png');
	layer2.position(0, 40);
	layer2.hide();

	layer3 = createImg('img3.png');
	layer3.position(0, 40);
	layer3.hide();
}

function setup() {


	createCanvas(800, 600);
	background(0);

	slider = createSlider(0, 300, 0);
	slider.position(100, 320);
	slider.style('width', '590px');


}

function draw() {

	//var visibleLayer = slider.value();
	image(imgTimeline, 60, 250);
	//tint(255,255,255,a);
	changeBehavior();


}

function changeBehavior() {

	if (slider.value()  < 30) {

		layer1.hide();
		layer2.hide();
		layer3.hide();

	}

  	else if (slider.value() < 100) {

		layer1.show();
		layer2.hide();
		layer3.hide();


	}

	else if (slider.value() < 200) {

		layer1.hide();
		layer2.show();
		layer3.hide();


	}

	else if(slider.value() < 300) {

		layer1.hide();
		layer2.hide();
		layer3.show();


	}

}
