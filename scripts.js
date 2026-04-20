/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)

// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < titles.length; i++) {
//     let title = titles[i];

//     // This part of the code doesn't scale very well! After you add your
//     // own data, you'll need to do something totally different here.
//     let imageURL = "";
//     if (i == 0) {
//       imageURL = FRESH_PRINCE_URL;
//     } else if (i == 1) {
//       imageURL = CURB_POSTER_URL;
//     } else if (i == 2) {
//       imageURL = EAST_LOS_HIGH_POSTER_URL;
//     }

//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     editCardContent(nextCard, title, imageURL); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }

// function editCardContent(card, newTitle, newImageURL) {
//   card.style.display = "block";

//   const cardHeader = card.querySelector("h2");
//   cardHeader.textContent = newTitle;

//   const cardImage = card.querySelector("img");
//   cardImage.src = newImageURL;
//   cardImage.alt = newTitle + " Poster";

//   // You can use console.log to help you debug!
//   // View the output by right clicking on your website,
//   // select "Inspect", then click on the "Console" tab
//   console.log("new card:", newTitle, "- html: ", card);
// }

// This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
//   );
// }

// function removeLastCard() {
//   titles.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }

const players = document.querySelector(".card-container");
const buttons = document.querySelectorAll(".role");

// playersData variable is accessed globally via playersData.js <script src="playersData.js"></script>
// for (let i = 0; i < playersData.length; i++) {}

function renderCards(filter) {
  players.innerHTML = "";

  let filtered = [];

  if (filter === "All") {
    filtered = playersData;
  } else {
    filtered = playersData.filter((player) => player.position === filter);
  }

  for (let i = 0; i < filtered.length; i++) {
    let card = `<div class="player-card">
        <div class="avatar-info">
            <span class="avatar">${filtered[i].initials}</span>
            <div>
                <span>${filtered[i].name}</span>
                <span>${filtered[i].team} • ${filtered[i].position}</span>
            </div>
        </div>
        <div class="player-stats">
            <div>
                <span class="stat">
                    <span>${filtered[i].stats.pts}</span>
                    <span>PTS</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.reb}</span>
                    <span>REB</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.ast}</span>
                    <span>AST</span>
                </span>
            </div>
            <div>
                <span class="stat">
                    <span>${filtered[i].stats.stl}</span>
                    <span>STL</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.blk}</span>
                    <span>BLK</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.to}</span>
                    <span>TO</span>
                </span>
            </div>
        </div>
    </div>`;
    players.innerHTML += card;
  }
}

const AllButton = document.querySelector("#All");
const GButton = document.querySelector("#G");
const FButton = document.querySelector("#F");
const CButton = document.querySelector("#C");

AllButton.addEventListener("click", activeAllButton);
GButton.addEventListener("click", activeGButton);
FButton.addEventListener("click", activeFButton);
CButton.addEventListener("click", activeCButton);

function activeAllButton() {
  GButton.classList.remove("active");
  FButton.classList.remove("active");
  CButton.classList.remove("active");
  AllButton.classList.add("active");
  renderCards(AllButton.innerHTML);
}

function activeGButton() {
  FButton.classList.remove("active");
  CButton.classList.remove("active");
  AllButton.classList.remove("active");
  GButton.classList.add("active");
  console.log(GButton.innerHTML);
  renderCards(GButton.innerHTML);
}

function activeFButton() {
  CButton.classList.remove("active");
  AllButton.classList.remove("active");
  GButton.classList.remove("active");
  FButton.classList.add("active");
  renderCards(FButton.innerHTML);
}

function activeCButton() {
  AllButton.classList.remove("active");
  GButton.classList.remove("active");
  FButton.classList.remove("active");
  CButton.classList.add("active");
  renderCards(CButton.innerHTML);
}
