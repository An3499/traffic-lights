let circleArr=document.querySelectorAll('.circle')
let btnGreen=document.querySelector('.btn_green')
let btnRed=document.querySelector('.btn_red')

btnGreen.style='background-color:green;'
btnRed.style='background-color:red;'

let trafficLightInterval=0

btnGreen.onclick=function(){
btnGreen.setAttribute('disabled',true)
btnRed.removeAttribute('disabled')
    startTrafficLight()
}

btnRed.onclick=function(){
    for(let i=0;i<circleArr.length;i++){
        let circle=circleArr[i]
        clearStyles(circle)
        clearInterval(trafficLightInterval)
    }

    btnRed.setAttribute('disabled',true)
    btnGreen.removeAttribute('disabled')
    
}

function clearStyles(element){
element.style=''
}

let trrafficLightStatus=0

function startTrafficLight(){
    trafficLightInterval=setInterval(function(){
        colorizeCircleArr('grey')
        if(trrafficLightStatus==0){
            circleArr[0].style='background-color:red'
        } else if(trrafficLightStatus==1){
            circleArr[1].style='background-color:yellow'

        }else if(trrafficLightStatus==2){
            circleArr[2].style='background-color:green'
        }

        trrafficLightStatus++
        if(trrafficLightStatus>2){
            trrafficLightStatus=0
        }

    },3000)
}

function colorizeCircleArr(color){
    circleArr.forEach(function(element){
        element.style='background-color:'+color
    })
}