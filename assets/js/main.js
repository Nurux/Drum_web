const btn_dark = document.querySelector('#dark_button')
const avatar = document.querySelector('.avatar')
const icons = document.querySelectorAll('li')
const key = document.querySelectorAll('.key')


function playsong(id){
    const aud = document.querySelector(`audio[id='${id}']`)
    if(!aud) return
    
    aud.play()
}  


function activated(item) {
    key.forEach((key) => {
        if (item == key.getAttribute('id')){
            key.classList.toggle('playing')
            playsong(item)
            setTimeout( () =>{
                key.classList.toggle('playing')
            }, 150)
        }
    })
}


window.addEventListener('keydown', (e) => {
    let list = ['65', '83', '68', '70', '71', '72', '74', '75', '76']

    list.forEach((item) => {
        if(e.keyCode == item){
            activated(item)
        }
    })
})

btn_dark.addEventListener('click', () => {
    let dark = 'darkmode'

    btn_dark.classList.toggle(dark)
    avatar.classList.toggle(dark)

    for(i = 0; i < key.length; i++){
        key[i].classList.toggle(dark)
    }

    for(i = 0; i < icons.length; i++){
        icons[i].classList.toggle(dark)
    }
})

key.forEach((key) =>{
    key.addEventListener('click', () => {
        key.classList.toggle('playing')
        playsong(key.getAttribute('id'))
        setTimeout( () =>{
            key.classList.toggle('playing')
        }, 150)
    })
})



