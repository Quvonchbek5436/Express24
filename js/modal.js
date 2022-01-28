const show = document.querySelector('#show')
const hide = document.querySelector('#hideModal')
const modal = document.querySelector('#modal')
const soni = document.querySelector('.btnSoni')
const hisobi = document.querySelector('#soniQoshish')
const narx = document.querySelector('#soniAyirish')
show.addEventListener('click',()=>{
    modal.classList.remove('d-none');

})
hide.addEventListener('click',()=>{
    modal.classList.add('d-none');
})




