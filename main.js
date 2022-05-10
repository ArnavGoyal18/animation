noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage("https://i.postimg.cc/YqtXdRgM/580b57fbd9996e24bc43bed5.png");
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
    image(clownNose, noseX, noseY, 30, 30);
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
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y - 13;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
