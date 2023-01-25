const tablet = document.querySelectorAll('.tablet');
const bar = document.querySelector('.bar');

function noneBlock() {
	for (let i of tablet) {
		i.classList.toggle('tablet-none')
		bar.append(i);
	}
	bar.classList.toggle('bar-block')
}
