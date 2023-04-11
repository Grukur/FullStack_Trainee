/* Rebound S11 */

let btn = document.getElementById('boton');
console.log(btn)

btn.addEventListener('click', function(event){
    console.log('2')
    event.preventDefault();
    let msg = document.getElementById('msg')
    console.log(msg)


    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        let info = data['joke']
        console.log(data + ' ' + info)
        let msgBox = document.getElementById('msg');
        msgBox.innerText = info
    })
})
