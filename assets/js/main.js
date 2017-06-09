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
		if (allButtons[i].classList.contains('previous-button')) {
			allButtons[i].addEventListener('click', showPreviousSlide);
		} else if (allButtons[i].classList.contains('next-button')) {
			allButtons[i].addEventListener('click', showNextSlide);
		}
	}
}

function createSlideshowAttributes() {
	var allSlideshows = document.getElementsByClassName('story-container');

	for (var i = 0; i < allSlideshows.length; i++) {
		
		var numberOfSlides = allSlideshows[i].children.length;
		console.log(numberOfSlides);
		allSlideshows[i].setAttribute("data-number-of-slides", numberOfSlides);
		allSlideshows[i].setAttribute("data-current-slide", 0);
	}
}

pageLoadListeners();

function showPreviousSlide(e) {
	var storyToMove = this.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;
		currentSlide--;
		console.log(currentSlide);

	var slideshowLength = storyToMove.dataset.numberOfSlides;
		slideshowLength = slideshowLength - 0;
		
	storyToMove.setAttribute("data-current-slide", currentSlide);

	var nextButton = this.parentElement.children[2];


	if (currentSlide === 0) {
		this.style.display = 'none';		
	} 

	if (currentSlide < slideshowLength) {
		nextButton.style.display = 'inline';
	}
}

function showNextSlide(e) {
	
	var storyToMove = this.parentElement.children[0];
	var currentSlide = storyToMove.dataset.currentSlide;
		currentSlide = currentSlide - 0;
		currentSlide++;

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
}

function changeSlide(e) {
	var viewportWidth = document.documentElement.clientWidth;
	var numberOfSlides = e.dataset.numberOfSlides;
	var currentSlide = e.dataset.currentSlide;
	var newLeftValue = -1 * (viewportWidth * currentSlide);
	e.style.left = newLeftValue;
}

//-------------reposition on page resize-------------
// $(window).resize(resizePlaceholder);

function repositionSlideshows() {
	var allSlideshows = document.getElementsByClassName('story-container');

	for (var i = 0; i < allSlideshows.length; i++) {
		changeSlide(allSlideshows[i]);
	}
}

$(window).ready(function() {
	createSlideshowAttributes();
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIEFMTCBob3Jpem9udGFsIHNjcm9sbHNcblxuLy8gdXNlIGFuIGlmIHN0YXRlbWVudCBzbyB0aGF0IGlmIHRoZSBob3Jpem9udGFsIHNjcm9sbCBoYXBwZW5zIG92ZXIgdGhlIGRvbSBlbGVtZW50LCBpdCB0cmlnZ2VycyB0aGUgZnVuY3Rpb24gdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGF0IGVsZW1lbnRcblxuLy8gYWRkaXRpb25hbCBpZiBzdGF0ZW1lbnQgc28gdGhhdCBpZiB0aGUgdXNlciBzY3JvbGxzIG9yIHN3aXBlcyByaWdodCwgaXQgbW92ZXMgcmlnaHQgYW5kIGxlZnQgaWYgbGVmdHNcblxuXG5cblxuXG4vLyB1c2VyIGludGVyYWN0aW9uczogc2luZ2xlIHBhZ2Vcbi8vIGNsaWNrIG9uZSBvZiB0aGUgdG9wIG9wdGlvbnMgYW5kIGl0IG1vdmVzIHRoZSBzdG9yeSB0byB0aGUgdG9wIGFuZCBjaGFuZ2VzIHRoZSBzbGlkZXJcblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tQUNUVUFMIFBMQU4tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG9uIHBhZ2Vsb2FkIHNldCBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBidXR0b25cbi8vIHdyaXRlIHRoZSBmdW5jdGlvbiB0byBtb3ZlIHRoZSBvYmplY3Qgb24gY2xpY2tcbi8vIGlmL2Vsc2Ugc3RhdGVtZW50cyB0byB0YXJnZXQgdGhlIG1vdmVtZW50IHRvIHRoZWlyIG93biBzZWN0aW9uXG5cbmZ1bmN0aW9uIHBhZ2VMb2FkTGlzdGVuZXJzKCkge1xuXHR2YXIgYWxsQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3J5LWJ1dHRvbicpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoYWxsQnV0dG9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXZpb3VzLWJ1dHRvbicpKSB7XG5cdFx0XHRhbGxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ByZXZpb3VzU2xpZGUpO1xuXHRcdH0gZWxzZSBpZiAoYWxsQnV0dG9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ25leHQtYnV0dG9uJykpIHtcblx0XHRcdGFsbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV4dFNsaWRlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVzaG93QXR0cmlidXRlcygpIHtcblx0dmFyIGFsbFNsaWRlc2hvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9yeS1jb250YWluZXInKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbFNsaWRlc2hvd3MubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHR2YXIgbnVtYmVyT2ZTbGlkZXMgPSBhbGxTbGlkZXNob3dzW2ldLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zb2xlLmxvZyhudW1iZXJPZlNsaWRlcyk7XG5cdFx0YWxsU2xpZGVzaG93c1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlci1vZi1zbGlkZXNcIiwgbnVtYmVyT2ZTbGlkZXMpO1xuXHRcdGFsbFNsaWRlc2hvd3NbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50LXNsaWRlXCIsIDApO1xuXHR9XG59XG5cbnBhZ2VMb2FkTGlzdGVuZXJzKCk7XG5cbmZ1bmN0aW9uIHNob3dQcmV2aW91c1NsaWRlKGUpIHtcblx0dmFyIHN0b3J5VG9Nb3ZlID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xuXHR2YXIgY3VycmVudFNsaWRlID0gc3RvcnlUb01vdmUuZGF0YXNldC5jdXJyZW50U2xpZGU7XG5cdFx0Y3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlIC0gMDtcblx0XHRjdXJyZW50U2xpZGUtLTtcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpO1xuXG5cdHZhciBzbGlkZXNob3dMZW5ndGggPSBzdG9yeVRvTW92ZS5kYXRhc2V0Lm51bWJlck9mU2xpZGVzO1xuXHRcdHNsaWRlc2hvd0xlbmd0aCA9IHNsaWRlc2hvd0xlbmd0aCAtIDA7XG5cdFx0XG5cdHN0b3J5VG9Nb3ZlLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudC1zbGlkZVwiLCBjdXJyZW50U2xpZGUpO1xuXG5cdHZhciBuZXh0QnV0dG9uID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdO1xuXG5cblx0aWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFx0XG5cdH0gXG5cblx0aWYgKGN1cnJlbnRTbGlkZSA8IHNsaWRlc2hvd0xlbmd0aCkge1xuXHRcdG5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNob3dOZXh0U2xpZGUoZSkge1xuXHRcblx0dmFyIHN0b3J5VG9Nb3ZlID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xuXHR2YXIgY3VycmVudFNsaWRlID0gc3RvcnlUb01vdmUuZGF0YXNldC5jdXJyZW50U2xpZGU7XG5cdFx0Y3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlIC0gMDtcblx0XHRjdXJyZW50U2xpZGUrKztcblxuXHR2YXIgc2xpZGVzaG93TGVuZ3RoID0gc3RvcnlUb01vdmUuZGF0YXNldC5udW1iZXJPZlNsaWRlcztcblx0XHRzbGlkZXNob3dMZW5ndGggPSBzbGlkZXNob3dMZW5ndGggLSAwO1xuXHRcdFxuXHRzdG9yeVRvTW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC1zbGlkZScsIGN1cnJlbnRTbGlkZSk7XG5cblx0dmFyIHByZXZpb3VzQnV0dG9uID0gc3RvcnlUb01vdmUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzNdO1xuXG5cdGlmIChjdXJyZW50U2xpZGUgPT0gKHNsaWRlc2hvd0xlbmd0aCAtIDEpKSB7XG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1x0XHRcblx0fSBcblxuXHRpZiAoY3VycmVudFNsaWRlID4gMCkge1xuXHRcdHByZXZpb3VzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2xpZGUoZSkge1xuXHR2YXIgdmlld3BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0dmFyIG51bWJlck9mU2xpZGVzID0gZS5kYXRhc2V0Lm51bWJlck9mU2xpZGVzO1xuXHR2YXIgY3VycmVudFNsaWRlID0gZS5kYXRhc2V0LmN1cnJlbnRTbGlkZTtcblx0dmFyIG5ld0xlZnRWYWx1ZSA9IC0xICogKHZpZXdwb3J0V2lkdGggKiBjdXJyZW50U2xpZGUpO1xuXHRlLnN0eWxlLmxlZnQgPSBuZXdMZWZ0VmFsdWU7XG59XG5cbi8vLS0tLS0tLS0tLS0tLXJlcG9zaXRpb24gb24gcGFnZSByZXNpemUtLS0tLS0tLS0tLS0tXG4vLyAkKHdpbmRvdykucmVzaXplKHJlc2l6ZVBsYWNlaG9sZGVyKTtcblxuZnVuY3Rpb24gcmVwb3NpdGlvblNsaWRlc2hvd3MoKSB7XG5cdHZhciBhbGxTbGlkZXNob3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcnktY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxTbGlkZXNob3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hhbmdlU2xpZGUoYWxsU2xpZGVzaG93c1tpXSk7XG5cdH1cbn1cblxuJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRjcmVhdGVTbGlkZXNob3dBdHRyaWJ1dGVzKCk7XG59KTtcblxuXG4iXX0=
