// for date formatting
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const commentSection = document.getElementsByClassName("comments")[0];

const form = document.getElementsByTagName("form")[0];

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("comment");

const profilePicURL = "https://dinoeeeeeee.files.wordpress.com/2010/04/awesome-face.jpg";

form.addEventListener("submit", e => {
    e.preventDefault();

    // get comment
    const commentText = commentInput.value.trim();

    // abort post if comment is empty (or just whitespace)
    if (!commentText) {
        return;
    }

    // get post timestamp
    const today = new Date();

    // format date of post
    today.weekday = weekdays[today.getDay()];
    today.month = months[today.getMonth()];
    today.monthday = today.getDate();

    // (evil laughter)
    today.monthday = 
        `${today.monthday}${
        Math.floor(today.monthday / 10) === 1 ? "th":
        today.monthday % 10 === 1 ? "st":
        today.monthday % 10 === 2 ? "nd":
        today.monthday % 10 === 3 ? "rd":
        "th"
        }`;

    // dateString format: "Tuesday February 16th, 2021"
    const dateString = `${today.weekday} ${today.month} ${today.monthday}, ${today.getFullYear()}`;

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = 
    `<div class="img-container">
        <img src=${profilePicURL} alt="profile picture" />
    </div>
    <div class="text">
        <p class="posted">${dateString} by ${nameInput.value}</p>
        <p>${commentText}</p>
    </div>`;

    commentSection.appendChild(comment);

    form.reset();
});