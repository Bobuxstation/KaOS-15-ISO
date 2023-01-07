const { exec, spawn } = require('child_process');

$(".input1").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        launch(document.getElementById("input1").value)
        var ul = document.getElementById("terminaltext");
        var li = document.createElement("p");
        li.classList.add('notification');
        li.appendChild(document.createTextNode("User1@KasiusNext: " + document.getElementById("input1").value));
        ul.appendChild(li);
        document.getElementById("input1").value = "";
    }
    });
    function returntoterminal(output) {
        var ul = document.getElementById("terminaltext");
        var li = document.createElement("p");
        li.classList.add('notification');
        li.innerText = output;
        ul.appendChild(li);
    }
    function returnerrortoterminal(output) {
        var ul = document.getElementById("terminaltext");
        var li = document.createElement("p");
        li.classList.add('notification');
        li.style.color = "red";
        li.style.background = "#ff3d3d3d";
        li.innerText = output;
        ul.appendChild(li);
    }

function launch(executablePath) {
    exec(executablePath, function(err, data) {
        if(err){
           console.error(err);
           returnerrortoterminal(err);
           return;
        }
     
        returntoterminal(data.toString());
    });
}
function redirect(redirectlink) {
    window.location.replace(redirectlink)
}