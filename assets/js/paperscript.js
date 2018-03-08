//Create an array for every circle we make.
//This enables shriking and color change.
var circles = [];

//When key is pressed, let's create circle and play a sound.
function onKeyDown(event) {
    if(keyData[event.key]) {
        //Define max/last point where circle will be created.
        var maxPoint = new Point(view.size.width, view.size.height);
        //Create a random point at (0->0,9999.. , 0->0,9999..)
        var randomPoint = Point.random();
        //Multiple the random point with maxium point to get the coordinates of the new circle.
        var point = maxPoint * randomPoint;
        //Create the circle.
        var newCircle = new Path.Circle(point, 500);
        //Choose the right color from keyData object and fill the circle with it.
        newCircle.fillColor = keyData[event.key].color;
        //Play the key's sound.
        keyData[event.key].sound.play();
        //Add the circle for the array of circles.
        circles.push(newCircle);
    } //if()
} //function onKeyDown()

//Scale and change color of each circle each frame.
function onFrame(event) {
    for(var i = 0; i < circles.length; i++) {
        // Each frame, change the fill color of the path slightly by adding 0.2 to its hue:
        circles[i].fillColor.hue += 2;
        //Each frame also multiple the size of circle by .9, making it eventually disappear.
        circles[i].scale(.90)
        //Check if circle has less area than 1.
        //If so, delete the circle from array and canvas.
        if(circles[i].area < 1){
            //Remove the circle from the canvas.
            circles[i].remove();
            //Remove the circle from the array.
            circles.splice(i, 1);
             // decrement i so that the loop doesn't skip a circle because of .splice()
            i--;
            //Log the state of circles array.
            console.log(circles);
          }
    }
}

//Assign every alphabet key a sound and a color.
var keyData = {
    q: {
    sound: new Howl({
      src: ['assets/sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
    },
    w: {
    sound: new Howl({
      src: ['assets/sounds/clay.mp3']
    }),
    color: '#2ecc71'
    },
    e: {
    sound: new Howl({
      src: ['assets/sounds/confetti.mp3']
    }),
    color: '#3498db'
    },
    r: {
    sound: new Howl({
      src: ['assets/sounds/corona.mp3']
    }),
    color: '#9b59b6'
    },
    t: {
    sound: new Howl({
      src: ['assets/sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
    },
    y: {
    sound: new Howl({
      src: ['assets/sounds/flash-1.mp3']
    }),
    color: '#16a085'
    },
    u: {
    sound: new Howl({
      src: ['assets/sounds/flash-2.mp3']
    }),
    color: '#27ae60'
    },
    i: {
    sound: new Howl({
      src: ['assets/sounds/flash-3.mp3']
    }),
    color: '#2980b9'
    },
    o: {
    sound: new Howl({
    src: ['assets/sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
    },
    p: {
    sound: new Howl({
      src: ['assets/sounds/moon.mp3']
    }),
    color: '#2c3e50'
    },
    a: {
    sound: new Howl({
      src: ['assets/sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
    },
    s: {
    sound: new Howl({
      src: ['assets/sounds/piston-1.mp3']
    }),
    color: '#e67e22'
    },
    d: {
    sound: new Howl({
      src: ['assets/sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
    },
    f: {
    sound: new Howl({
      src: ['assets/sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
    },
    g: {
    sound: new Howl({
      src: ['assets/sounds/prism-2.mp3']
    }),
    color: '#f39c12'
    },
    h: {
    sound: new Howl({
      src: ['assets/sounds/prism-3.mp3']
    }),
    color: '#d35400'
    },
    j: {
    sound: new Howl({
      src: ['assets/sounds/splits.mp3']
    }),
    color: '#1abc9c'
    },
    k: {
    sound: new Howl({
      src: ['assets/sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
    },
    l: {
    sound: new Howl({
      src: ['assets/sounds/strike.mp3']
    }),
    color: '#3498db'
    },
    z: {
    sound: new Howl({
      src: ['assets/sounds/suspension.mp3']
    }),
    color: '#9b59b6'
    },
    x: {
    sound: new Howl({
      src: ['assets/sounds/timer.mp3']
    }),
    color: '#34495e'
    },
    c: {
    sound: new Howl({
      src: ['assets/sounds/ufo.mp3']
    }),
    color: '#16a085'
    },
    v: {
    sound: new Howl({
      src: ['assets/sounds/veil.mp3']
    }),
    color: '#27ae60'
    },
    b: {
    sound: new Howl({
      src: ['assets/sounds/wipe.mp3']
    }),
    color: '#2980b9'
    },
    n: {
    sound: new Howl({
    src: ['assets/sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
    },
    m: {
    sound: new Howl({
      src: ['assets/sounds/moon.mp3']
    }),
    color: '#2c3e50'
    }
} //var keyData