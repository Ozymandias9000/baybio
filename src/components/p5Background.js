export default function p5Background(p) {
  // Toggle flowfield vectors on/off
  var debug = false;
  // Flowfield object
  var flowfield;
  // An ArrayList of vehicles
  var vehicles = [];
  var blue = {};
  var pink = {};

  blue.r = 0;
  blue.g = 191;
  blue.b = 255;

  pink.r = 255;
  pink.g = 182;
  pink.b = 193;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    // Make a new flow field with "resolution" of 16
    flowfield = new p.FlowField(20);
    p.populate(60, 0.5, 2, blue);
    p.populate(60, 0.5, 2, pink);
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    vehicles = [];
    p.populate(60, 0.5, 2, blue);
    p.populate(60, 0.5, 2, pink);
  };

  p.populate = function(howMany, minSpeed, maxSpeed, color) {
    for (var i = 0; i < howMany; i++) {
      vehicles.push(
        new p.Vehicle(
          p.random(p.windowWidth),
          p.random(p.windowHeight),
          p.random(minSpeed, maxSpeed),
          p.random(0.1, 0.5),
          color
        )
      );
    }
  };

  p.FlowField = function(r) {
    this.resolution = r;

    this.cols = p.windowWidth / this.resolution;
    this.rows = p.windowHeight / this.resolution;

    this.make2Darray = function(n) {
      var array = [];
      for (var i = 0; i < n; i++) {
        array[i] = [];
      }
      return array;
    };
    this.field = this.make2Darray(this.cols);

    this.init = function() {
      // Reseed noise so we get a new flow field every time
      // Need to get noise working
      p.noiseSeed(Math.floor(p.random(10000)));
      var xoff = 0;
      for (var i = 0; i < this.cols; i++) {
        var yoff = 0;
        for (var j = 0; j < this.rows; j++) {
          // Uncomment for rain-like effect
          var theta = p.PI / 2;

          // Comment out below to use other thetas
          // var theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
          // var theta = map(sin(xoff) + cos(yoff), -2, 2, 0, TWO_PI);
          // Polar to cartesian coordinate transformation to get x and y components of the vector
          this.field[i][j] = p.createVector(p.cos(theta), p.sin(theta));
          yoff += 0.1;
        }
        xoff += 0.1;
      }
    };
    this.init();

    this.display = function() {
      for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
          drawVector(
            this.field[i][j],
            i * this.resolution,
            j * this.resolution,
            this.resolution - 2
          );
        }
      }
    };

    this.lookup = function(lookup) {
      var column = Math.floor(
        p.constrain(lookup.x / this.resolution, 0, this.cols - 1)
      );
      var row = Math.floor(
        p.constrain(lookup.y / this.resolution, 0, this.rows - 1)
      );

      return this.field[column][row].copy();
    };

    var drawVector = function(v, x, y, scayl) {
      p.push();

      p.translate(x, y);
      p.stroke(200, 100);

      p.rotate(v.heading());

      var len = v.mag() * scayl;

      p.line(0, 0, len, 0);

      p.pop();
    };
  };

  p.draw = function() {
    p.background(250);
    // Display the flowfield in "debug" mode
    if (debug) flowfield.display();
    // Tell all the vehicles to follow the flow field
    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].follow(flowfield);
      vehicles[i].run();
    }
  };

  p.keyPressed = function() {
    if (p.key === " ") {
      debug = !debug;
    }
  };

  // Make a new flowfield
  p.mousePressed = function() {
    flowfield.init();
  };

  p.Vehicle = function(x, y, ms, mf, color) {
    this.position = p.createVector(x, y);
    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(0, 0);
    this.r = 4;
    this.maxspeed = ms || 4;
    this.maxforce = mf || 0.1;

    this.run = function() {
      this.update();
      this.borders();
      this.display();
    };

    // Implementing Reynolds' flow field following algorithm
    // http://www.red3d.com/cwr/steer/FlowFollow.html
    this.follow = function(flow) {
      // What is the vector at that spot in the flow field?
      var desired = flow.lookup(this.position);
      // Scale it up by maxspeed

      desired.mult(this.maxspeed);
      // Steering is desired minus velocity

      var steer = desired.sub(this.velocity);
      steer.limit(this.maxforce); // Limit to maximum steering force
      this.applyForce(steer);
    };

    this.applyForce = function(force) {
      // We could add mass here if we want A = F / M
      this.acceleration.add(force);
    };

    // Method to update location
    this.update = function() {
      // Update velocity
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset acceleration to 0 each cycle
      this.acceleration.mult(0);
    };

    // Wraparound
    this.borders = function() {
      if (this.position.x < -this.r) this.position.x = p.width + this.r;
      if (this.position.y < -this.r) this.position.y = p.height + this.r;
      if (this.position.x > p.width + this.r) this.position.x = -this.r;
      if (this.position.y > p.height + this.r) this.position.y = -this.r;
    };

    this.display = function() {
      p.fill(color.r, color.g, color.b);
      p.noStroke();
      // stroke(200);
      // strokeWeight(1);
      // Make droplet shape
      p.ellipse(this.position.x, this.position.y, 5, 5);
    };
  };
}
