AOS.init();
/* Hobbies Cards */

const hobbiescards = document.querySelector(".hobbiescards");

// Array of object for hobbies
const hobbies = [
  {
    title: "Gaming",
    cardImage: "assets/images/hobbies-page/game.png",
  },
  {
    title: "Motorcycling",
    cardImage: "assets/images/hobbies-page/motor.jpg",
  },
  {
    title: "Travel",
    cardImage: "assets/images/hobbies-page/rd.jpg",
  },
  {
    title: "Eating",
    cardImage: "assets/images/hobbies-page/eat.jpg",
  },
  {
    title: "Watching",
    cardImage: "assets/images/hobbies-page/watch.jpg",
  },
  {
    title: "Cooking",
    cardImage: "assets/images/hobbies-page/cook.jpg",
  },
  {
    title: "Workout",
    cardImage: "assets/images/hobbies-page/work.jpg",
  },
  {
    title: "Web-Design",
    cardImage: "assets/images/hobbies-page/web.jpg",
  },
  {
    title: "Billiards",
    cardImage: "assets/images/hobbies-page/bill.jpg",
  },
  {
    title: "Reading",
    cardImage: "assets/images/hobbies-page/read.jpg",
  },
  {
    title: "Singing",
    cardImage: "assets/images/hobbies-page/singing.png",
  },
  {
    title: "Dancing",
    cardImage: "assets/images/hobbies-page/dancing.jpg",
  },
];

// function for rendering hobbies cards data
const showCards = () => {
  let output = "";
  hobbies.forEach(({ title, cardImage, }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  hobbiescards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
