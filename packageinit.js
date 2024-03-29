function stringGen() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 12; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function spawnwindow(name, URL, icon, height, width) {
    //configure elements
    var section = document.getElementById("body");
    var footer = document.getElementById("footer1");
    var window = document.createElement("div");
    var header = document.createElement("div");
    var content = document.createElement("div");
    var webview = document.createElement("webview");
    var minimized = document.createElement("button");
    var close = document.createElement("button");
    var minimize = document.createElement("button");
    var appID = stringGen()

    //create window
    window.classList.add('window');
    window.id = name + appID;
    window.style.display = "block";

    //create header
    header.classList.add('header');
    header.style.width = width;
    header.innerHTML = "<button class='headertext'>" + name + " (Kasius-Next Application)</button>";

    //create close button
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.classList.add('closebutton');
    close.onclick = function () {
        window.remove();
        minimized.remove();
    }

    // //create minimize button
    // minimize.innerHTML = '<i class="fa-solid fa-window-minimize"></i>';
    // minimize.classList.add('minimize');
    // minimize.onclick = function () {
    //     window.style.display = "none"
    //     minimized.className = "menubuttonminimized"
    // }

    //create content div
    content.classList.add('content');

    //create webview
    webview.style.height = height;
    webview.style.width = width;
    webview.src = URL;
    webview.setAttribute("webpreferences", "contextIsolation=false");
    webview.setAttribute("nodeintegration", "");
    // webview.addEventListener('did-finish-load', function () {
    //     webview.openDevTools()
    // });

    //create minimized icon
    minimized.innerHTML = "<img style='height: 22.5px; width: 22.5px;' src='" + icon + "'></img>";
    minimized.className = "menubuttonminimized menubuttonminimizing"
    minimized.onclick = function () {
        window.style.display = "block"
        minimized.className = "menubuttonminimized menubuttonminimizing"
    }

    //append the elements
    section.prepend(window);
    window.appendChild(header);
    header.appendChild(close);
    // header.appendChild(minimize)
    window.appendChild(content);
    content.appendChild(webview);
    // footer.appendChild(minimized);

    //make the window draggable
    $(".window").draggable({
        handle: ".header"
    });
}

function loadApps(searchQuery) {
    fetch(configDir + '/KaOS 15 Subsystem For Kasius-Next Packages List.json')
    .then((res) => { return res.json(); })
    .then((data) => {
        data.packages.forEach(items => {
            let applist = document.getElementById("applist");
            let btn = document.createElement("button");
            btn.className = "menubutton2"
            btn.innerHTML = "<img style='height: 50px; width: 50px;' src='" + items.icon + "'></img><br>" + items.name;
            btn.onclick = function () {
                spawnwindow(items.name, items.URL, items.icon, items.height, items.width)
                // menu()
            }
            let nameOfApp = items.name.toLowerCase()
            if (nameOfApp.includes(searchQuery)) {
                applist.appendChild(btn);
            }
        })
    });
}

window.onload = function () {
    loadApps('')
}