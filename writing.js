function displayText(){
    inptext = document.getElementById('userinput').value;
    document.getElementById("userinput").style.display = "none";
    document.getElementById("copy").style.display = "inline-block";
    document.getElementById("display").innerText = inptext;
    document.getElementById("start_writing").innerText = "All Done!";
    document.getElementById("timer").style.display ="none";
    document.getElementById("start").style.display = "none";
}

function countdown(){
    time_left--;
    document.getElementById('timer').innerText = time_left;
    time_left == 0 ? clearInterval(timer) : timer;

    
}

async function copy(){
    try{
        await navigator.clipboard.writeText(inptext);
    }
    catch(error){
        console.error(error.message);
    }

}

async function start_timer(){
    document.getElementById("userinput").disabled = false;
    let timer = setInterval(countdown, 1000);
    setTimeout(displayText, max_time*1000);

}


const max_time = 3;
var time_left = 3;
var inptext;
