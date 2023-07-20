
/* For Each for IE */

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile__nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile__fade');
const logo = document.querySelector('.logo');
const menuLinks = document.querySelectorAll('.mobile__li');

navBtn.onclick = function () {
	nav.classList.toggle('mobile__nav_active');
	fade.classList.toggle('mobile__fade_open');
	menuIcon.classList.toggle('nav-icon--active');
	logo.classList.toggle('opacity');
	document.body.classList.toggle('no__scroll');
};

	fade.onclick = function () {
	nav.classList.toggle('mobile__nav_active');
	fade.classList.toggle('mobile__fade_open');
	menuIcon.classList.toggle('nav-icon--active');
	logo.classList.toggle('opacity');
	document.body.classList.toggle('no__scroll');
};

menuLinks.forEach( function(menuLink) {
	menuLink.onclick = function () {
		nav.classList.toggle('mobile__nav_active');
		fade.classList.toggle('mobile__fade_open');
		menuIcon.classList.toggle('nav-icon--active');
		logo.classList.toggle('opacity');
		document.body.classList.toggle('no__scroll');
	}
});

const btnSubmit = document.querySelector('#submit');
const formFields = document.querySelector('.form__fields');
const successMessage = document.querySelector('.success__message');

btnSubmit.onclick = function() {
	formFields.classList.add('none');
	successMessage.classList.add('success__message_active');
};



//Active Links Menu

// Get the container element
var btnContainer = document.getElementById("menu__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu__list_link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu__list_link_active");
    current[0].className = current[0].className.replace(" menu__list_link_active", "");
    this.className += " menu__list_link_active";
  });
}

/* //Active Links Mobile

// Get the container element
var btnContainermob = document.getElementById("mobile__list");

// Get all buttons with class="btn" inside the container
var btnsmob = btnContainermob.getElementsByClassName("menu__list_link_mob");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnsmob.length; i++) {
  btnsmob[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu__list_link_active_mob");
    current[0].className = current[0].className.replace(" menu__list_link_active_mob", "");
    this.className += " menu__list_link_active_mob";
  });
} */

//Preloader

window.onload = function () {
    document.body.classList.add('loaded__hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded__hiding');
    }, 500);
  }

	




