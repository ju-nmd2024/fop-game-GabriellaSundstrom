function setup() {
createCanvas(800,600);
}

function draw() {
}
function submarine(x,y) {
    // main shape
    fill(255,255,0);
    stroke(0,0,0);
    strokeWeight(3);
    rect(x-100,y-100,200,100,40);
    
    push();
    
    //windows
    fill(0,0,0);
    ellipse(x-30,y-60,30);
    ellipse(x-75,y-60,25,30);
    fill(255,255,255);
    ellipse(x-30,y-60,20);
    ellipse(x-75,y-60,15,20);
    
    //propeller
    strokeWeight(6);
    stroke(255,255,255);
    line(x + 120,y - 64,x + 150,y - 80);
    line(x + 120,y - 60,x + 150,y - 60);
    line(x + 120,y - 56,x + 150,y - 40);
    
    pop();
    
    //details and door 
    rect(x+40,y-50,25,40,20);
    ellipse(x+57,y-30,5,10);
    rect(x-60,y-120,30,20);
    rect(x+100,y-70,20,30);
    
    //bubbles
    stroke(0,0,255);
    noFill();
    ellipse(x-70,y-160,20);
    ellipse(x-50,y-135,10);
    ellipse(x-70,y-205,5);
    stroke(0,255,255);
    ellipse(x-40,y-160,10);
    ellipse(x-40,y-190,5);
    
    //bubbles highlights
    noStroke();
    fill(255,255,255);
    ellipse(x-67,y-162,5);
    ellipse(x-38,y-161,5);
    ellipse(x-46,y-135,5);
    ellipse(x-38,y-190,5);
    ellipse(x-67,y-206,5);
    
    }

    let x = 200;
    let y = 200;
    let speed = 1;

function startScreen(){
    //background and bubbles
    background(20,0,50);
    stroke(0,255,255);
    noFill();
    ellipse(130,150,50);
    ellipse(200,200,30);
    ellipse(500,300,20);
    ellipse(100,400,20);
    ellipse(300,600,40);
    ellipse(500,100,40);
    ellipse(150,500,30);
    ellipse(200,50,10);
    ellipse(500,200,10);
    //treasure
    //diamonds
    stroke(0,0,0);
    strokeWeight(1);
    fill(255,0,0);
    rect(130,625,30,30,10);
    line(133,629,160,651);
    line(157,629,132,651);
    ellipse(145,640,15);
    fill(255,255,0);
    rect(161,625,30,30,10);
    line(189,625,163,651);
    line(164,629,191,652);
    ellipse(176,639,15);
    fill(0,255,0);
    rect(192,625,30,30,10);
    line(194,625,222,651);
    line(222,625,194,652);
    ellipse(206,640,15);
    fill(0,0,255);
    rect(222,625,30,30,10);
    line(250,629,224,651);
    line(224,629,250,652);
    ellipse(237,640,15);
    fill(200,0,200);
    rect(252,625,30,30,10);
    line(252,630,280,652);
    line(280,630,252,652);
    ellipse(266,640,15);
    //case
    strokeWeight(4);
    fill(150,80,0);
    rect(100,650,200,100,10);
    line(100,675,300,675);
    line(140,677,140,700);
    line(250,677,250,700);
    stroke(255,255,0);
    noFill();
    ellipse(140,685,20);
    ellipse(250,685,20);

    //text
    fill(255);
    textSize(30);
    text("Submarine treasure hunt",300,400);
    textAlign(CENTER,CENTER); 
    textSize(50);
    text("START",300,300);
}

function gameScreen() {
        //background
        background(20,0,50);
        stroke(0,255,255);
        noFill();
        ellipse(130,150,50);
        ellipse(200,200,30);
        ellipse(500,300,20);
        ellipse(100,400,20);
        ellipse(300,600,40);
        ellipse(500,100,40);
        ellipse(150,500,30);
        ellipse(200,50,10);
        ellipse(500,200,10);
        //treasure
        stroke(0,0,0);
        strokeWeight(1);
        fill(255,0,0);
        rect(130,625,30,30,10);
        line(133,629,160,651);
        line(157,629,132,651);
        ellipse(145,640,15);
        fill(255,255,0);
        rect(161,625,30,30,10);
        line(189,625,163,651);
        line(164,629,191,652);
        ellipse(176,639,15);
        fill(0,255,0);
        rect(192,625,30,30,10);
        line(194,625,222,651);
        line(222,625,194,652);
        ellipse(206,640,15);
        fill(0,0,255);
        rect(222,625,30,30,10);
        line(250,629,224,651);
        line(224,629,250,652);
        ellipse(237,640,15);
        fill(200,0,200);
        rect(252,625,30,30,10);
        line(252,630,280,652);
        line(280,630,252,652);
        ellipse(266,640,15);
    //case
    strokeWeight(4);
    fill(150,80,0);
    rect(100,650,200,100,10);
    line(100,675,300,675);
    line(140,677,140,700);
    line(250,677,250,700);
    stroke(255,255,0);
    noFill();
    ellipse(140,685,20);
    ellipse(250,685,20);

        //submarine
        submarine(200,y);
        
        if( y <= 700) {
            y = y + speed;
            speed = abs(speed);
            speed = speed*1.05;
            if (keyIsDown(32)) {
                speed = -1;
                //speed = speed * (-1.05);
            }
        }
        else {
            state = "result";
        }
        }

function resultScreen() {
    //background
    background(20,0,50);
    stroke(0,255,255);
    noFill();
    ellipse(130,150,50);
    ellipse(200,200,30);
    ellipse(500,300,20);
    ellipse(100,400,20);
    ellipse(300,600,40);
    ellipse(500,100,40);
    ellipse(150,500,30);
    ellipse(200,50,10);
    ellipse(500,200,10);
    //treasure
    stroke(0,0,0);
    strokeWeight(1);
    fill(255,0,0);
    rect(130,625,30,30,10);
    line(133,629,160,651);
    line(157,629,132,651);
    ellipse(145,640,15);
    fill(255,255,0);
    rect(161,625,30,30,10);
    line(189,625,163,651);
    line(164,629,191,652);
    ellipse(176,639,15);
    fill(0,255,0);
    rect(192,625,30,30,10);
    line(194,625,222,651);
    line(222,625,194,652);
    ellipse(206,640,15);
    fill(0,0,255);
    rect(222,625,30,30,10);
    line(250,629,224,651);
    line(224,629,250,652);
    ellipse(237,640,15);
    fill(200,0,200);
    rect(252,625,30,30,10);
    line(252,630,280,652);
    line(280,630,252,652);
    ellipse(266,640,15);
    //case
    strokeWeight(4);
    fill(150,80,0);
    rect(100,650,200,100,10);
    line(100,675,300,675);
    line(140,677,140,700);
    line(250,677,250,700);
    stroke(255,255,0);
    noFill();
    ellipse(140,685,20);
    ellipse(250,685,20);


    if(speed >= 5) {
    fill(255,0,0);
    textAlign(CENTER,CENTER);
    textSize(50);
    text("LOSE",300,300);
    fill(255);
    textSize(30);
    text("Try Again",300,400);
    }
    else {
        fill(0,255,0);
        textAlign(CENTER,CENTER);
        textSize(50);
    text("WIN",300,300);
    }
}


let state = "start";


function draw() {
    if( state === "start") {
        startScreen();
    } else if ( state === "game") {
        gameScreen();
    } else if ( state === "result") {
        resultScreen();
    }
}

function mouseClicked() {
    if (state === "start") {
       y=200;
       speed =1;
        state = "game";
    } else if (state === "game") {
       
        state = "result";
    } else if ( state === "result")
        state = "start";
}


