addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');

	ctx.fillRect(0,0,100%,100%)
});

addEventListener('resize', () => {
	// Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth
});

