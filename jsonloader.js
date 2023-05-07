window.$ = window.jQuery = require('jquery');
const electron = require('electron');
const remote = require('@electron/remote');
const app = remote.app;
let fs = require('fs');
const configDir = app.getPath('userData');
console.log(configDir);

if (fs.existsSync(configDir + '/KaOS 15 Subsystem For Kasius-Next Packages List.json')) {
    console.log('Package List Found!')
} else {
    console.log('Package List Is Not Found! Creating Package List...')
    let jsontemplate = {
        "packages": [
            {
                "name": "Package Manager",
                "URL": "Apps/store.html",
                "icon": "Icons/Store.png",
                "height": 450,
                "width": 800
            }
        ]
    };
    let data = JSON.stringify(jsontemplate, null, "\t");
    fs.writeFileSync(configDir + '/KaOS 15 Subsystem For Kasius-Next Packages List.json', data);
}

// if (fs.existsSync(configDir + '/desktopconfig.json')) {
//     console.log('Package List Found!')
// } else {
//     console.log('Package List Is Not Found! Creating Package List...')
//     let jsontemplate = {
//         "backgroundImage": "bg.jpg",
//         "theme": "style.css",
//         "iconStyle": "center",
//         "footerIcon": "https://zeankundev.github.io/KaOS-13/logo.svg",
//     };
//     let data = JSON.stringify(jsontemplate, null, "\t");
//     fs.writeFileSync(configDir + '/desktopconfig.json', data);
// }

let jsonData = require(configDir + '/KaOS 15 Subsystem For Kasius-Next Packages List.json');
// let desktopConfig = require(configDir + '/desktopconfig.json');

// function add(name, URL, icon, height, width) {
//     var obj = (jsonData);
//     obj['packages'].push({ "name": name, "URL": URL, "icon": icon, "height": height, "width": width });
//     jsonStr = JSON.stringify(obj, null, "\t");
//     console.log(jsonStr);
//     fs.writeFile(configDir + '/kasiuspkg.json', jsonStr, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// };