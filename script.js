window.onload = () => {
	const element = document.querySelector('.landing-text');
	element.style.display = 'none';
	setTimeout(() => {
		element.style.display = 'flex';

		element.classList += ' fade-in';
	}, 100);
};
