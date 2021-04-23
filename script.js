let count = 0;
function reverse(){
    let s = document.querySelector("input").value;
    let output = "";
    for(let i = s.length; i > 0; i--){
        if (count >= 6)
            break;
        output += s.substring(i - 1, i);
    }
    if(s != "")
        count++;
    if(count === 6){
        returned.innerHTML += `<p> Full! Please hit "Clear". </p>`;
        alert('Full! Please hit "Clear".');
    }
    if(count < 6 && s != ""){
        console.log(output);
        returned.innerHTML += `<p id='para${count}'> ${output} </p>`;
    }
}
function clearR(){
    returned.innerHTML = "";
    count = 0;
}