let count = 0;
const MAX_RETURNS = 20;

function reverse(){
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
    if(count <= MAX_RETURNS && s != ""){
        console.log(output);
        returned.innerHTML += 
        `
            <p>
                >\t${output}\t
                <button class = "remove" onclick = "setup();">X</button>
            </p>
        `
        console.log("Success (reverse)");
    }
}

function clearR(){
    returned.innerHTML = "";
    count = 0;
    console.log("Results have been cleared.")
}

function shuffleLetters(){
    let s = document.querySelector("input").value;
    let output = "";
    if(s != "")
        count++;

    if(count >= MAX_RETURNS){
        returned.innerHTML += `<p><b> Full! Please hit "Clear". </b></p>`;
        alert('Full! Please hit "Clear".');
    }
     output = shuffle(s);

    if(count <= MAX_RETURNS && s != ""){
        console.log(output);
        returned.innerHTML += 
        `
            <p>
                >\t${output}\t
                <button class = "remove" onclick = "setup();">X</button>
            </p>
        `
        console.log("Success (shuffle)");
    }
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
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