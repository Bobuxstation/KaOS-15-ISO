var ul = document.getElementById("list");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Welcome To KaOS 13. \nAlpha system v2.0.1"));
ul.appendChild(li);

function notifications(msg) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var br = document.createElement("br");
    li.appendChild(document.createTextNode(msg));
    li.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(li);
}