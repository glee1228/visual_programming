
class Connection {
  constructor(from, to, w) {
    // Connection has a weight
    this.weight = w;
    // Connection is from Neuron A to B
    this.a = from;
    this.b = to;

    // Variables to track the animation
    this.sending = false;
    this.sender = createVector();

    // Need to store the output for when its time to pass along
    this.output = 0;
  }

  // Draw line and traveling circle
  show() {
    stroke(0);
    strokeWeight(this.weight * 4);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    if (this.sending) {
      fill(0);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }

  // The Connection is active
  feedforward(val) {
    this.output = val * this.weight; // Compute output
    this.sender = this.a.position.copy(); // Start animation at Neuron A
    this.sending = true; // Turn on sending
  }

  // Update traveling sender
  update() {
    if (this.sending) {
      // Use a simple interpolation
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
      let d = p5.Vector.dist(this.sender, this.b.position);
      // If we've reached the end
      if (d < 1) {
        // Pass along the output!
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }



}

class Network {
  constructor() {
    // The Network has a list of neurons
    this.neurons = [];
    // Also storing list of connections ("edges")
    this.connections = [];
  }

  // We can add a Neuron
  addNeuron(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  connect(a, b) {
    let c = new Connection(a, b, random(1));
    a.addConnection(c);
    this.connections.push(c);
  }


  // Sending an input to the first Neuron
  // We should do something better to track multiple inputs
  feedforward(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      let neuron = this.neurons[i];
      neuron.feedforward(inputs[i]);
    }
  }

  // Update the animation
  update() {
    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }

  // We can draw the network
  show() {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].show();
    }

  }
}

class Neuron {
  constructor(x, y) {
    // Neuron has a position
    this.position = createVector(x, y);
    // Neuron has a list of connections
    this.connections = [];

    // We now track the inputs and sum them
    this.sum = 0;

    // The Neuron's size can be animated
    this.r = 32;
  }


  // The Neuron fires
  fire() {
    this.r = 64; // It suddenly is bigger

    // We send the output through all connections
    for (let i = 0; i < this.connections.length; i++) {
      let c = this.connections[i];
      c.feedforward(this.sum);
    }
  }

  // Receive an input
  feedforward(input) {
    // Accumulate it
    this.sum += input;
    // Activate it?
    if (this.sum > 1) {
      this.fire();
      this.sum = 0; // Reset the sum to 0 if it fires
    }
  }


  // Add a Connection
  addConnection(c) {
    this.connections.push(c);
  }

  // Draw Neuron as a circle
  show() {
    stroke(0);
    strokeWeight(1);
    // Brightness is mapped to sum
    let b = map(this.sum, 0, 1, 0, 255);

    b += map(this.r, 32, 64, 0, 500);

    fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);

    // Size shrinks down back to original dimensions
    this.r = lerp(this.r, 32, 0.1);

    // Draw all its connections
    // for (let i = 0; i < this.connections.length; i++) {
    //   this.connections[i].display();
    // }
  }
}
let network;

function setup() {
  createCanvas(640, 360);
  // Create the Network object
  network = new Network();

  // Create a bunch of Neurons

  // Two inputs
  let x0 = new Neuron(-200, -75);
  let x1 = new Neuron(-200, 75);

  // Two hidden
  let h0 = new Neuron(0, -75);
  let h1 = new Neuron(0, 75);

  // One output
  let y = new Neuron(200, 0);

  // Connect them
  network.connect(x0, h0);
  network.connect(x0, h1);
  network.connect(x1, h0);
  network.connect(x1, h1);
  network.connect(h0, y);
  network.connect(h1, y);

  // Add them to the Network
  network.addNeuron(x0);
  network.addNeuron(x1);
  network.addNeuron(h0);
  network.addNeuron(h1);
  network.addNeuron(y);
}

function draw() {
  background(200);
  translate(width / 2, height / 2);
  // Draw the Network
  network.show();

  // Update the Network
  network.update();

  if (frameCount % 30 == 0) {
    let inputs = [random(1), random(1)]
    network.feedforward(inputs);
  }
}