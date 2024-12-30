const more = document.querySelector('.info_title_more');
const title = document.querySelector('.info_title');

more.addEventListener('click', () => {
	more.classList.toggle('clicked')
	title.classList.toggle('active');
});