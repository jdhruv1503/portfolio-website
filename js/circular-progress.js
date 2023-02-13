let circularProgressAI = document.querySelector(".ai-progress"),
    circularProgressDesign = document.querySelector(".design-progress"),
    circularProgressDevops = document.querySelector(".devops-progress"),
    circularProgressPython = document.querySelector(".python-progress"),
    circularProgressSQL = document.querySelector(".sql-progress"),
    circularProgressWebdev = document.querySelector(".webdev-progress"),
    
    progressValueAI = circularProgressAI.children[0],
    progressValueDesign = circularProgressDesign.children[0],
    progressValueDevops = circularProgressDevops.children[0],
    progressValuePython = circularProgressPython.children[0],
    progressValueSQL = circularProgressSQL.children[0],
    progressValueWebdev = circularProgressWebdev.children[0],
    
    progressStartValue = 0,
    progressStartValueAI = 0,
    progressStartValueDesign = 0,
    progressStartValueDevops = 0,
    progressStartValuePython = 0,
    progressStartValueSQL = 0,
    progressStartValueWebdev = 0,

    progressEndValueAI = 50,
    progressEndValueDesign = 85,
    progressEndValueDevops = 75,
    progressEndValuePython = 70,
    progressEndValueSQL = 60,
    progressEndValueWebdev = 80,
    
    speed = 80;
    
let progress = setInterval(() => {
    progressStartValue++;

    if (progressStartValueAI  < progressEndValueAI){
        progressStartValueAI++;
    }
    if (progressStartValueDesign  < progressEndValueDesign){
        progressStartValueDesign++;
    }
    if (progressStartValueDevops  < progressEndValueDevops){
        progressStartValueDevops++;
    }
    if (progressStartValuePython  < progressEndValuePython){
        progressStartValuePython++;
    }
    if (progressStartValueSQL  < progressEndValueSQL){
        progressStartValueSQL++;
    }
    if (progressStartValueWebdev  < progressEndValueWebdev){
        progressStartValueWebdev++;
    }

    progressValueAI.textContent = `${progressStartValueAI}%`
    circularProgressAI.style.background = `conic-gradient(#f52525 ${progressStartValueAI * 3.6}deg, #000000 0deg)`

    progressValueDesign.textContent = `${progressStartValueDesign}%`
    circularProgressDesign.style.background = `conic-gradient(#f52525 ${progressStartValueDesign * 3.6}deg, #000000 0deg)`

    progressValueDevops.textContent = `${progressStartValueDevops}%`
    circularProgressDevops.style.background = `conic-gradient(#f52525 ${progressStartValueDevops * 3.6}deg, #000000 0deg)`

    progressValuePython.textContent = `${progressStartValuePython}%`
    circularProgressPython.style.background = `conic-gradient(#f52525 ${progressStartValuePython * 3.6}deg, #000000 0deg)`

    progressValueSQL.textContent = `${progressStartValueSQL}%`
    circularProgressSQL.style.background = `conic-gradient(#f52525 ${progressStartValueSQL * 3.6}deg, #000000 0deg)`

    progressValueWebdev.textContent = `${progressStartValueWebdev}%`
    circularProgressWebdev.style.background = `conic-gradient(#f52525 ${progressStartValueWebdev * 3.6}deg, #000000 0deg)`

    if(progressStartValue == 100){
        clearInterval(progress);
    }    
}, speed);