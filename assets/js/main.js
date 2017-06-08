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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2V0IGFuIGV2ZW50IGxpc3RlbmVyIGZvciBBTEwgaG9yaXpvbnRhbCBzY3JvbGxzXG5cbi8vIHVzZSBhbiBpZiBzdGF0ZW1lbnQgc28gdGhhdCBpZiB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgaGFwcGVucyBvdmVyIHRoZSBkb20gZWxlbWVudCwgaXQgdHJpZ2dlcnMgdGhlIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhhdCBlbGVtZW50XG5cbi8vIGFkZGl0aW9uYWwgaWYgc3RhdGVtZW50IHNvIHRoYXQgaWYgdGhlIHVzZXIgc2Nyb2xscyBvciBzd2lwZXMgcmlnaHQsIGl0IG1vdmVzIHJpZ2h0IGFuZCBsZWZ0IGlmIGxlZnRzXG5cblxuXG5cblxuLy8gdXNlciBpbnRlcmFjdGlvbnM6IHNpbmdsZSBwYWdlXG4vLyBjbGljayBvbmUgb2YgdGhlIHRvcCBvcHRpb25zIGFuZCBpdCBtb3ZlcyB0aGUgc3RvcnkgdG8gdGhlIHRvcCBhbmQgY2hhbmdlcyB0aGUgc2xpZGVyXG5cblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLUFDVFVBTCBQTEFOLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBvbiBwYWdlbG9hZCBzZXQgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uXG4vLyB3cml0ZSB0aGUgZnVuY3Rpb24gdG8gbW92ZSB0aGUgb2JqZWN0IG9uIGNsaWNrXG4vLyBpZi9lbHNlIHN0YXRlbWVudHMgdG8gdGFyZ2V0IHRoZSBtb3ZlbWVudCB0byB0aGVpciBvd24gc2VjdGlvblxuXG5mdW5jdGlvbiBwYWdlTG9hZExpc3RlbmVycygpIHtcblx0dmFyIGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9yeS1idXR0b24nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0YWxsQnV0dG9uc1tpXVxuXHRcdGlmIChhbGxCdXR0b25zW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJldmlvdXMtYnV0dG9uJykpIHtcblx0XHRcdGFsbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJldmlvdXNTdG9yeVNlY3Rpb24pO1xuXHRcdH0gZWxzZSBpZiAoYWxsQnV0dG9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ25leHQtYnV0dG9uJykpIHtcblx0XHRcdGFsbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV4dFN0b3J5U2VjdGlvbik7XG5cdFx0fVxuXHR9XG59XG5cbnBhZ2VMb2FkTGlzdGVuZXJzKCk7XG5cbnZhciBsZWZ0VmFsdWU7XG5cbmZ1bmN0aW9uIHNob3dQcmV2aW91c1N0b3J5U2VjdGlvbihlKSB7XG5cdHZhciB2aWV3cG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHR2YXIgc3RvcnlUb01vdmUgPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF07XG5cdHZhciBwb3NpdGlvbiA9ICQoc3RvcnlUb01vdmUpLnBvc2l0aW9uKCk7XG5cdGxlZnRWYWx1ZSA9IHBvc2l0aW9uLmxlZnQ7XG5cdHZhciBuZXdMZWZ0VmFsdWUgPSBsZWZ0VmFsdWUgKyB2aWV3cG9ydFdpZHRoO1xuXHRzdG9yeVRvTW92ZS5zdHlsZS5sZWZ0ID0gbmV3TGVmdFZhbHVlO1xuXHRsZWZ0VmFsdWUgPSBuZXdMZWZ0VmFsdWU7XG5cblx0dmFyIHN0b3J5V2lkdGggPSAkKHN0b3J5VG9Nb3ZlKS53aWR0aCgpO1xuXHRcblx0dmFyIG5leHRCdXR0b24gPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl1cblx0Y29uc29sZS5sb2cobmV4dEJ1dHRvbik7XG5cblx0Ly8gaWYgKGxlZnRWYWx1ZSA9PSApIHtcblx0Ly8gXHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblx0Ly8gfSBlbHNlIGlmIChsZWZ0VmFsdWUgIDAgKSB7XG5cdC8vIFx0bmV4dEJ1dHRvbi5jbGFzc0xpc3Rcblx0Ly8gfVxuXG5cdC8vIHRvZ2dsZSB3aGV0aGVyIHZpc2libGUgYmFzZWQgb24gd2hldGhlciB0aGUgYm94IGlzIGFsbCB0aGUgd2F5IHRvIHRoZSByaWdodCBvciBsZWZ0XG5cbn1cblxuZnVuY3Rpb24gc2hvd05leHRTdG9yeVNlY3Rpb24oZSkge1xuXHRjb25zb2xlLmxvZyhsZWZ0VmFsdWUpO1xuXHR2YXIgdmlld3BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0dmFyIHN0b3J5VG9Nb3ZlID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xuXHR2YXIgcG9zaXRpb24gPSAkKHN0b3J5VG9Nb3ZlKS5wb3NpdGlvbigpO1xuXHRsZWZ0VmFsdWUgPSBwb3NpdGlvbi5sZWZ0O1xuXHRjb25zb2xlLmxvZyhsZWZ0VmFsdWUpO1xuXHR2YXIgbmV3TGVmdFZhbHVlID0gbGVmdFZhbHVlIC0gdmlld3BvcnRXaWR0aDtcblx0c3RvcnlUb01vdmUuc3R5bGUubGVmdCA9IG5ld0xlZnRWYWx1ZTtcblx0bGVmdFZhbHVlID0gbmV3TGVmdFZhbHVlO1xuXHRjb25zb2xlLmxvZyhsZWZ0VmFsdWUpO1xuXG5cdHZhciBzdG9yeVdpZHRoID0gJChzdG9yeVRvTW92ZSkud2lkdGgoKTtcblx0Y29uc29sZS5kaXIoc3RvcnlXaWR0aCk7XG5cblx0dmFyIHByZXZpb3VzQnV0dG9uID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xuXHRjb25zb2xlLmxvZyhwcmV2aW91c0J1dHRvbik7XG5cdHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2JsZScpO1xuXG5cdC8vIGlmIChuZXdMZWZ0VmFsdWUgPCAwKSB7XG5cdC8vIFx0cHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXHQvLyB9XG59Il19
