// set an event listener for ALL horizontal scrolls

// use an if statement so that if the horizontal scroll happens over the dom element, it triggers the function to change the position of that element

// additional if statement so that if the user scrolls or swipes right, it moves right and left if lefts





// user interactions: single page
// click one of the top options and it moves the story to the top and changes the slider



//---------------------ACTUAL PLAN---------------------
// on pageload set event listeners to each button
// write the function to move the object on click
// if/else statements to target the movement to their own section

function pageLoadListeners() {
	var allButtons = document.getElementsByClassName('story-button');
	for (var i = 0; i < allButtons.length; i++) {
		allButtons[i]
		if (allButtons[i].classList.contains('previous-button')) {
			allButtons[i].addEventListener('click', showPreviousStorySection);
		} else if (allButtons[i].classList.contains('next-button')) {
			allButtons[i].addEventListener('click', showNextStorySection);
		}
	}
}

pageLoadListeners();

function showPreviousStorySection(e) {
	var storyToMove = this.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;
		currentSlide--;
		console.log(currentSlide);

	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 0;
		
	storyToMove.setAttribute("data-current-slide", currentSlide);

	var nextButton = this.parentElement.childNodes[3];


	if (currentSlide == 0) {
		this.style.display = 'none';		
	} 

	if (currentSlide < 0) {
		nextButton.style.display = 'initial';
	}
	
	repositionSlideshow(storyToMove);
}

function showNextStorySection(e) {
	
	var storyToMove = this.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;
		currentSlide++;
		console.log(currentSlide);

	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 0;
		
	storyToMove.setAttribute('data-current-slide', currentSlide);

	var previousButton = storyToMove.parentElement.childNodes[3];

	if (currentSlide == (slideshowLength - 1)) {
		this.style.display = 'none';		
	} 

	if (currentSlide > 0) {
		previousButton.style.display = 'initial';
	}
	
	repositionSlideshow(storyToMove);
}

function repositionSlideshow(e) {
	var viewportWidth = document.documentElement.clientWidth;
	var numberOfSlides = e.dataset.numberOfSlides;
	var currentSlide = e.dataset.currentSlide;
	var newLeftValue = -1 * (viewportWidth * currentSlide);
	e.style.left = newLeftValue;
}

//-------------reposition on page resize-------------
$(window).resize(resizePlaceholder);

function resizePlaceholder() {

}

$(window).ready(function() {
	createSlideshowAttributes();
});

function createSlideshowAttributes() {
	var allSlideshows = document.getElementsByClassName('story-container');

	for (var i = 0; i < allSlideshows.length; i++) {
		
		var numberOfSlides = allSlideshows[i].children.length;
		allSlideshows[i].setAttribute("data-number-of-slides", numberOfSlides);
		allSlideshows[i].setAttribute("data-current-slide", 0)
	}

	console.dir(allSlideshows);
	//target all slideshows
	//find number of children for each slideshow
	//apply attributes to children of each slideshow
}
