Webcam.set({

    width: 340,
    height: 340,
    image_quality: 'png',
    png_quality: 100
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap(function(snapshot){
        document.getElementById("result").innerHTML = "<img id = 'picture' src = '" + snapshot + "'>";
    })
}

console.log(ml5.version)

    model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nS_YeUI9a/model.json',modelloded);
     function modelloded(){

        console.log("model loded successfully");
     }
