const more = document.querySelector('.more_sy')
const ul_ = document.querySelector('.ul_div_')
const close_ = document.querySelector('.close_')


more.addEventListener('click', (e)=>{
    ul_.classList.remove('-translate-x-96')
})

close_.addEventListener('click',(e)=>{
    ul_.classList.add('-translate-x-96')
})
