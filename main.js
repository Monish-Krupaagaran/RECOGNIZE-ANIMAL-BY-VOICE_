function start() {

    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/M5b-8TgPr/model.json",modelready)
}

function modelready() {

    classifier.classify(gotresult)
}

function gotresult(error, result) {

   if(error) {

     console.error(error)
   }
   else {

     console.log(result)
     document.getElementById("Detected_id_1").innerHTML="i can hear - " + result[0].label
     document.getElementById("Accuracy").innerHTML="Accuracy - " + (result[0].confidence*100).toFixed(2) + " %"

     img_1=document.getElementById("A_1")
     img_2=document.getElementById("A_2")
     img_3=document.getElementById("A_3")
     img_4=document.getElementById("A_4")


     if(result[0].label == "Background Noise") {

       img_1.src="aliens-01.gif"
       img_2.src="aliens-02.png"
       img_3.src="aliens-03.png"
       img_4.src="aliens-04.png"
     }

     else if(result[0].label == "Bell") {

        img_1.src="aliens-01.png"
        img_2.src="aliens-02.gif"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.png"
      }

      else if(result[0].label == "Clapping") {

        img_1.src="aliens-01.png"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.gif"
        img_4.src="aliens-04.png"
      }

      else if(result[0].label == "Snapping") {

        img_1.src="aliens-01.png"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.gif"
      }
     
    }
}

