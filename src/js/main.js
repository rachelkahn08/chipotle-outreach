function pageLoadListeners() {
	var allButtons = document.getElementsByClassName('story-button');
	for (var i = 0; i < allButtons.length; i++) {
		if (allButtons[i].classList.contains('previous-button') && !allButtons[i].classList.contains('skip-backward')) {
			allButtons[i].addEventListener('click', showPreviousSlide);
		} else if (allButtons[i].classList.contains('next-button') && !allButtons[i].classList.contains('skip-forward')) {
			allButtons[i].addEventListener('click', showNextSlide);
		} else if (allButtons[i].classList.contains('skip-forward')) {
			allButtons[i].addEventListener('click', skipToLastSlide);
		} else if (allButtons[i].classList.contains('skip-backward')) {
			allButtons[i].addEventListener('click', skipToFirstSlide);
		}
	}
	var hamburgerButton = document.getElementById('hamburgerButton');
		hamburgerButton.addEventListener('click', toggleMobileMenu);

	window.addEventListener('resize', checkForResize);
}

function toggleMobileMenu(e) {
	var mobileMenu = document.getElementById('navBarMobile');

	if (!mobileMenu.classList.contains('hidden')) {
		mobileMenu.classList.add('hidden');
		setTimeout(function() {
			$(mobileMenu).toggle();
		}, 200);
	} else {
		$(mobileMenu).toggle();
		setTimeout(function() {
			mobileMenu.classList.remove('hidden');
		}, 200);
	}
}

function createSlideshowAttributes() {
	var allSlideshows = document.getElementsByClassName('story-container');

	for (var i = 0; i < allSlideshows.length; i++) {
		var numberOfSlides = allSlideshows[i].children.length;
		allSlideshows[i].setAttribute("data-number-of-slides", numberOfSlides);
		allSlideshows[i].setAttribute("data-current-slide", 0);
	}
}

pageLoadListeners();

function showPreviousSlide(e) {
	var storyToMove = this.parentElement.parentElement.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;

	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 0;
	
	if (currentSlide > 0) {
		currentSlide--;
		
		storyToMove.setAttribute("data-current-slide", currentSlide);
		
		var nextButtons = this.parentElement.parentElement.children[1];

		if (currentSlide === 0) {
			this.parentElement.classList.remove('visible');
		} 

		if (currentSlide < slideshowLength - 1) {
			nextButtons.classList.add('visible');
		}

		changeSlide(storyToMove);
	}
}

function showNextSlide(e) {
	var storyToMove = this.parentElement.parentElement.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;

	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 1;
		
	if (currentSlide < slideshowLength) {
		currentSlide++;

		storyToMove.setAttribute('data-current-slide', currentSlide);
		
		var previousButtons = this.parentElement.parentElement.children[0];

		if (currentSlide == (slideshowLength)) {
			this.parentElement.classList.remove('visible');
		} 

		if (currentSlide > 0) {
			previousButtons.classList.add('visible');
		}

		changeSlide(storyToMove);
	}
}

function skipToLastSlide(e) {
	var storyToMove = this.parentElement.parentElement.parentElement.children[0];
	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 1;

	storyToMove.setAttribute('data-current-slide', slideshowLength);

	this.parentElement.classList.remove('visible');
	
	var previousButtons = this.parentElement.parentElement.children[0];
	if (!previousButtons.classList.contains('visible')) {
		previousButtons.classList.add('visible');
	}

	changeSlide(storyToMove);
}

function skipToFirstSlide(e) {
	var storyToMove = this.parentElement.parentElement.parentElement.children[0];
	storyToMove.setAttribute('data-current-slide', '0');

	this.parentElement.classList.remove('visible');

	var nextButtons = this.parentElement.parentElement.children[1];
	if (!nextButtons.classList.contains('visible')) {
		nextButtons.classList.add('visible');
	}

	changeSlide(storyToMove);
}

function changeSlide(e) {
	var viewportWidth = document.documentElement.clientWidth;
	var currentSlide = e.dataset.currentSlide;
	var newLeftValue = -1 * (viewportWidth * currentSlide);
	e.style.left = newLeftValue;
}

$(window).ready(function() {
	createSlideshowAttributes();
});

var triggerResize;
var resizeCounter = 0;
var repositionCounter = 0;

function checkForResize() {
	clearTimeout(triggerResize);
	triggerResize = setTimeout(repositionSlideshows, 10);
}

function repositionSlideshows() {
	var allSlideshows = document.getElementsByClassName('story-container');
	for (var i = 0; i < allSlideshows.length; i++) {
		changeSlide(allSlideshows[i]);
	}
}













