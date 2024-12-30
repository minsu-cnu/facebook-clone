const moreBtn = document.querySelector('.moreBtn');
const info_title = document.querySelector('.info_title');
const subscribe = document.querySelector('.subscribe');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    info_title.classList.toggle('active');
});

subscribe.addEventListener('click', () => {
   subscribe.classList.toggle('active'); 
});