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
			allButtons[i].addEventListener('click', showPreviousSlide);
		} else if (allButtons[i].classList.contains('next-button')) {
			allButtons[i].addEventListener('click', showNextSlide);
		}
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

	var nextButton = this.parentElement.childNodes[3];


	if (currentSlide == 0) {
		this.style.display = 'none';		
	} 

	if (currentSlide < 0) {
		nextButton.style.display = 'initial';
	}
	
	changeSlide(storyToMove);
}

function showNextSlide(e) {
	
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
	
	changeSlide(storyToMove);
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
		console.log(allSlideshows[i].dataset.currentSlide);
		changeSlide(allSlideshows[i]);
	}
}

$(window).ready(function() {
	createSlideshowAttributes();
});

function createSlideshowAttributes() {
	var allSlideshows = document.getElementsByClassName('story-container');

	for (var i = 0; i < allSlideshows.length; i++) {
		
		var numberOfSlides = allSlideshows[i].children.length;
		console.log(numberOfSlides);
		allSlideshows[i].setAttribute("data-number-of-slides", numberOfSlides);
		allSlideshows[i].setAttribute("data-current-slide", 0)
	}

	console.dir(allSlideshows);
	//target all slideshows
	//find number of children for each slideshow
	//apply attributes to children of each slideshow
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNldCBhbiBldmVudCBsaXN0ZW5lciBmb3IgQUxMIGhvcml6b250YWwgc2Nyb2xsc1xuXG4vLyB1c2UgYW4gaWYgc3RhdGVtZW50IHNvIHRoYXQgaWYgdGhlIGhvcml6b250YWwgc2Nyb2xsIGhhcHBlbnMgb3ZlciB0aGUgZG9tIGVsZW1lbnQsIGl0IHRyaWdnZXJzIHRoZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoYXQgZWxlbWVudFxuXG4vLyBhZGRpdGlvbmFsIGlmIHN0YXRlbWVudCBzbyB0aGF0IGlmIHRoZSB1c2VyIHNjcm9sbHMgb3Igc3dpcGVzIHJpZ2h0LCBpdCBtb3ZlcyByaWdodCBhbmQgbGVmdCBpZiBsZWZ0c1xuXG5cblxuXG5cbi8vIHVzZXIgaW50ZXJhY3Rpb25zOiBzaW5nbGUgcGFnZVxuLy8gY2xpY2sgb25lIG9mIHRoZSB0b3Agb3B0aW9ucyBhbmQgaXQgbW92ZXMgdGhlIHN0b3J5IHRvIHRoZSB0b3AgYW5kIGNoYW5nZXMgdGhlIHNsaWRlclxuXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1BQ1RVQUwgUExBTi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gb24gcGFnZWxvYWQgc2V0IGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIGJ1dHRvblxuLy8gd3JpdGUgdGhlIGZ1bmN0aW9uIHRvIG1vdmUgdGhlIG9iamVjdCBvbiBjbGlja1xuLy8gaWYvZWxzZSBzdGF0ZW1lbnRzIHRvIHRhcmdldCB0aGUgbW92ZW1lbnQgdG8gdGhlaXIgb3duIHNlY3Rpb25cblxuZnVuY3Rpb24gcGFnZUxvYWRMaXN0ZW5lcnMoKSB7XG5cdHZhciBhbGxCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcnktYnV0dG9uJyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdGFsbEJ1dHRvbnNbaV1cblx0XHRpZiAoYWxsQnV0dG9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXZpb3VzLWJ1dHRvbicpKSB7XG5cdFx0XHRhbGxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ByZXZpb3VzU2xpZGUpO1xuXHRcdH0gZWxzZSBpZiAoYWxsQnV0dG9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ25leHQtYnV0dG9uJykpIHtcblx0XHRcdGFsbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV4dFNsaWRlKTtcblx0XHR9XG5cdH1cbn1cblxucGFnZUxvYWRMaXN0ZW5lcnMoKTtcblxuZnVuY3Rpb24gc2hvd1ByZXZpb3VzU2xpZGUoZSkge1xuXHR2YXIgc3RvcnlUb01vdmUgPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF07XG5cdHZhciBjdXJyZW50U2xpZGUgPSBzdG9yeVRvTW92ZS5kYXRhc2V0LmN1cnJlbnRTbGlkZTtcblx0XHRjdXJyZW50U2xpZGUgPSBjdXJyZW50U2xpZGUgLSAwO1xuXHRcdGN1cnJlbnRTbGlkZS0tO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XG5cblx0dmFyIHNsaWRlc2hvd0xlbmd0aCA9IHN0b3J5VG9Nb3ZlLmRhdGFzZXQubnVtYmVyT2ZTbGlkZXM7XG5cdFx0c2xpZGVzaG93TGVuZ3RoID0gc2xpZGVzaG93TGVuZ3RoIC0gMDtcblx0XHRcblx0c3RvcnlUb01vdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50LXNsaWRlXCIsIGN1cnJlbnRTbGlkZSk7XG5cblx0dmFyIG5leHRCdXR0b24gPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1szXTtcblxuXG5cdGlmIChjdXJyZW50U2xpZGUgPT0gMCkge1xuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFx0XG5cdH0gXG5cblx0aWYgKGN1cnJlbnRTbGlkZSA8IDApIHtcblx0XHRuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG5cdH1cblx0XG5cdGNoYW5nZVNsaWRlKHN0b3J5VG9Nb3ZlKTtcbn1cblxuZnVuY3Rpb24gc2hvd05leHRTbGlkZShlKSB7XG5cdFxuXHR2YXIgc3RvcnlUb01vdmUgPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF07XG5cdHZhciBjdXJyZW50U2xpZGUgPSBzdG9yeVRvTW92ZS5kYXRhc2V0LmN1cnJlbnRTbGlkZTtcblx0XHRjdXJyZW50U2xpZGUgPSBjdXJyZW50U2xpZGUgLSAwO1xuXHRcdGN1cnJlbnRTbGlkZSsrO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XG5cblx0dmFyIHNsaWRlc2hvd0xlbmd0aCA9IHN0b3J5VG9Nb3ZlLmRhdGFzZXQubnVtYmVyT2ZTbGlkZXM7XG5cdFx0c2xpZGVzaG93TGVuZ3RoID0gc2xpZGVzaG93TGVuZ3RoIC0gMDtcblx0XHRcblx0c3RvcnlUb01vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtc2xpZGUnLCBjdXJyZW50U2xpZGUpO1xuXG5cdHZhciBwcmV2aW91c0J1dHRvbiA9IHN0b3J5VG9Nb3ZlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1szXTtcblxuXHRpZiAoY3VycmVudFNsaWRlID09IChzbGlkZXNob3dMZW5ndGggLSAxKSkge1xuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFx0XG5cdH0gXG5cblx0aWYgKGN1cnJlbnRTbGlkZSA+IDApIHtcblx0XHRwcmV2aW91c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuXHR9XG5cdFxuXHRjaGFuZ2VTbGlkZShzdG9yeVRvTW92ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNsaWRlKGUpIHtcblx0dmFyIHZpZXdwb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdHZhciBudW1iZXJPZlNsaWRlcyA9IGUuZGF0YXNldC5udW1iZXJPZlNsaWRlcztcblx0dmFyIGN1cnJlbnRTbGlkZSA9IGUuZGF0YXNldC5jdXJyZW50U2xpZGU7XG5cdHZhciBuZXdMZWZ0VmFsdWUgPSAtMSAqICh2aWV3cG9ydFdpZHRoICogY3VycmVudFNsaWRlKTtcblx0ZS5zdHlsZS5sZWZ0ID0gbmV3TGVmdFZhbHVlO1xufVxuXG4vLy0tLS0tLS0tLS0tLS1yZXBvc2l0aW9uIG9uIHBhZ2UgcmVzaXplLS0tLS0tLS0tLS0tLVxuLy8gJCh3aW5kb3cpLnJlc2l6ZShyZXNpemVQbGFjZWhvbGRlcik7XG5cbmZ1bmN0aW9uIHJlcG9zaXRpb25TbGlkZXNob3dzKCkge1xuXHR2YXIgYWxsU2xpZGVzaG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3J5LWNvbnRhaW5lcicpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsU2xpZGVzaG93cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnNvbGUubG9nKGFsbFNsaWRlc2hvd3NbaV0uZGF0YXNldC5jdXJyZW50U2xpZGUpO1xuXHRcdGNoYW5nZVNsaWRlKGFsbFNsaWRlc2hvd3NbaV0pO1xuXHR9XG59XG5cbiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpIHtcblx0Y3JlYXRlU2xpZGVzaG93QXR0cmlidXRlcygpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlc2hvd0F0dHJpYnV0ZXMoKSB7XG5cdHZhciBhbGxTbGlkZXNob3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcnktY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxTbGlkZXNob3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0dmFyIG51bWJlck9mU2xpZGVzID0gYWxsU2xpZGVzaG93c1tpXS5jaGlsZHJlbi5sZW5ndGg7XG5cdFx0Y29uc29sZS5sb2cobnVtYmVyT2ZTbGlkZXMpO1xuXHRcdGFsbFNsaWRlc2hvd3NbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXItb2Ytc2xpZGVzXCIsIG51bWJlck9mU2xpZGVzKTtcblx0XHRhbGxTbGlkZXNob3dzW2ldLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudC1zbGlkZVwiLCAwKVxuXHR9XG5cblx0Y29uc29sZS5kaXIoYWxsU2xpZGVzaG93cyk7XG5cdC8vdGFyZ2V0IGFsbCBzbGlkZXNob3dzXG5cdC8vZmluZCBudW1iZXIgb2YgY2hpbGRyZW4gZm9yIGVhY2ggc2xpZGVzaG93XG5cdC8vYXBwbHkgYXR0cmlidXRlcyB0byBjaGlsZHJlbiBvZiBlYWNoIHNsaWRlc2hvd1xufVxuIl19
