let count = 0;
function reverse(){
    const MAX_RETURNS = 20;
    let s = document.querySelector("input").value;
    let output = "";
    for(let i = s.length; i > 0; i--){
        if (count >= MAX_RETURNS)
            break;
        output += s.substring(i - 1, i);
    }
    if(s != "")
        count++;
    if(count === MAX_RETURNS){
        returned.innerHTML += `<p><b> Full! Please hit "Clear". </b></p>`;
        alert('Full! Please hit "Clear".');
    }
    if(count < MAX_RETURNS && s != ""){
        console.log(output);
        returned.innerHTML += `<p id='para${count}'>${count}.) ${output} </p>`;
        console.log("Success");
    }
}
function clearR(){
    returned.innerHTML = "";
    count = 0;
    console.log("Results have been reset.")
}