NoseX = 0;
NoseY = 0;

function preload() {
    Mustache = loadImage("https://i.postimg.cc/pVjmgjcq/m-1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", Getposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Mustache, NoseX, NoseY, 30, 30);
}

function take_snapshot() {
    save("summer.png");
}

function modelLoaded() {
    console.log("poseNet is loaded");
}

function Getposes(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x - 13;
        NoseY = results[0].pose.nose.y - 13;
        console.log("Mustache x = " + NoseX);
        console.log("Mustache y = " + NoseY);
    }
}
