let count = 0;
document.getElementById("reverse").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });

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

    if(count >= MAX_RETURNS){
        returned.innerHTML += `<p><b> Full! Please hit "Clear". </b></p>`;
        alert('Full! Please hit "Clear".');
    }
    if(count < MAX_RETURNS && s != ""){
        console.log(output);
        returned.innerHTML += 
        `
            <p>
                >\t${output}\t
                <button class = "remove" onclick = "setup();">[X]</button>
            </p>
        `
        console.log("Success");
    }
}
function clearR(){
    returned.innerHTML = "";
    count = 0;
    console.log("Results have been cleared.")
}

function setup() {
    var els = document.getElementsByClassName("remove");
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('p').remove();
        });
    }
}
setup();