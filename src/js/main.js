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

var leftValue;

function showPreviousStorySection(e) {
	var viewportWidth = document.documentElement.clientWidth;
	var storyToMove = this.parentElement.children[0];
	var position = $(storyToMove).position();
	leftValue = position.left;
	var newLeftValue = leftValue + viewportWidth;
	storyToMove.style.left = newLeftValue;
	leftValue = newLeftValue;

	var storyWidth = $(storyToMove).width();
	
	var nextButton = this.parentElement.children[2]
	console.log(nextButton);

	// if (leftValue == ) {
	// 	this.classList.remove('visible');
	// } else if (leftValue  0 ) {
	// 	nextButton.classList
	// }

	// toggle whether visible based on whether the box is all the way to the right or left

}

function showNextStorySection(e) {
	console.log(leftValue);
	var viewportWidth = document.documentElement.clientWidth;
	var storyToMove = this.parentElement.children[0];
	var position = $(storyToMove).position();
	leftValue = position.left;
	console.log(leftValue);
	var newLeftValue = leftValue - viewportWidth;
	storyToMove.style.left = newLeftValue;
	leftValue = newLeftValue;
	console.log(leftValue);

	var storyWidth = $(storyToMove).width();
	console.dir(storyWidth);

	var previousButton = this.parentElement.children[1];
	console.log(previousButton);
	previousButton.classList.add('visble');

	// if (newLeftValue < 0) {
	// 	previousButton.classList.add('visible');
	// }
}