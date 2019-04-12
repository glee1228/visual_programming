/**
 * This sketch shows how to use the Waveform class to analyze a stream
 * of sound. Change the number of samples to extract and draw a longer/shorter
 * part of the waveform.
 */

import processing.sound.*;


// Declare the sound source and Waveform analyzer variables
SoundFile sample;
Waveform waveform;

// Define how many samples of the Waveform you want to be able to read at once
int samples = 110;
public void setup() {
  size(640, 360);
  background(255);

  // Load and play a soundfile and loop it.
  sample = new SoundFile(this, "../data/down.mp3");
  sample.loop();

  // Create the Waveform analyzer and connect the playing soundfile to it.
  waveform = new Waveform(this, samples);
  waveform.input(sample);
  
}

public void draw() {
  randomSeed(99);
  // Set background color, noFill and stroke style
  background(50,167,210);
  stroke(255);
  strokeWeight(2);
  noFill();
  // Perform the analysis
  waveform.analyze();

  beginShape();
    
 
  //print(waveform.data[1]);
  if(waveform.data[1]>0.12){
    background(244,167,50);
  }
  if(waveform.data[4]>0.2){
    fill(0,244,121);
  }
  

  for(int i = 0; i < samples; i++){
    // Draw current data of the waveform
    // Each sample in the data array is between -1 and +1 
    vertex(
      map(i, 0, samples, 0, width-3),
      map(waveform.data[i], -1, 1, 0, height-2)
    );
  }
  for(int i = 0; i < samples;i++ ){
    
    // Draw current data of the waveform
    // Each sample in the data array is between -1 and +1 
    vertex(
      map(i, 0, samples, 0, width),
      map(waveform.data[i], -1, 1, 0, height)
    );
  }
  for(int i = 0; i < samples; i++){
    // Draw current data of the waveform
    // Each sample in the data array is between -1 and +1 
    vertex(
      map(i, 0, samples, 0, width),
      map(waveform.data[i], -1, 1, 0, height)
    );
  }
   if(waveform.data[10]>0.13){
  for (int i = 0; i < width; i++) {
    float r = random(255);
    stroke(r);
    line(i, 0, i, 100);
  }
}
  endShape();
}
