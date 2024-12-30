const clampBtn = document.querySelector('.clampBtn');
const title = document.querySelector('.title');
const subscribe = document.querySelector('.subscribe');

clampBtn.addEventListener('click', () => {
    clampBtn.classList.toggle('clicked');
    title.classList.toggle('active');
});

subscribe.addEventListener('click', () => {
   subscribe.classList.toggle('active'); 
});
