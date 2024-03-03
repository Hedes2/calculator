
const display=document.getElementById("display-bar")

function show(x){
    display.value+=x;
}

function clearTodisplay(){
    display.value=  " "
}

function Delte(){
    display.value=display.value.slice(0,-1)

}

function calculate(){
    try{
        display.value=eval(display.value);
    }

    catch(error){
        display.value="Error"

    }
    
}
