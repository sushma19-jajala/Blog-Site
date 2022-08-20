///login and signup

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});





//navbar


let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function () {
  collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
  itemSelector: '.grid-item',
  gutter: 20
});


// Sticky Navigation
window.onscroll = function () { myFunction() };

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


//2-step authentication
var Model = {
  existsclue: ko.observable((CLUE != null)),
  clue: ko.observable(CLUE),
  token: ko.observable('XXXXXXX'),
  notp: new Notp(),
  UpdateTokenCallback: function (code) {
    this.token(code);
  },
  UpdateToken: function () {
    var args = {
      K: CLUE
    };
    this.notp.getTOTP(args,
      function (err) { alert(err); },
      Model.UpdateTokenCallback.bind(Model)
    );
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let stars = document.querySelectorAll('.star');
  stars.forEach(function (star) {
    star.addEventListener('click', setRating);
  });

  let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev) {
  let span = ev.currentTarget;
  let stars = document.querySelectorAll('.star');
  let match = false;
  let num = 0;
  stars.forEach(function (star, index) {
    if (match) {
      star.classList.remove('rated');
    } else {
      star.classList.add('rated');
    }
    //are we currently looking at the span that was clicked
    if (star === span) {
      match = true;
      num = index + 1;
    }
  });
}