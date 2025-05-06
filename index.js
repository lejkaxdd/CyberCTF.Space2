let ports = ['4000', '5000', '10000', '9000'];
let target = String(window.location)   

console.log(target)

document.getElementById('1').addEventListener('click', event =>{
    window.location.href = target.substring(0, target.length - 1) + ":" + String(ports[0]);
})

document.getElementById('2').addEventListener('click', event =>{
    window.location.href = target.substring(0, target.length - 1) + ":" + String(ports[1]);
})

document.getElementById('3').addEventListener('click', event =>{
    window.location.href = target.substring(0, target.length - 1) + ":" + String(ports[2]);
})

document.getElementById('4').addEventListener('click', event =>{
    window.location.href = target.substring(0, target.length - 1) + ":" + String(ports[3]);
})
